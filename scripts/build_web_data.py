import geopandas as gpd, json, pyogrio, numpy as np
from rasterstats import zonal_stats
from scipy.stats import spearmanr
U="/mnt/user-data/uploads/NASA Hakathon"; F=f"{U}/for_shahzod"; R="/home/claude/rapidquake"
def gj(gdf, cols, prec=5):
    g=gdf[cols+['geometry']].to_crs(4326).copy()
    g['geometry']=g.geometry.set_precision(10**-prec) if hasattr(g.geometry,'set_precision') else g.geometry
    return json.loads(g.to_json(drop_id=True))
def rnd(o,n=5):
    if isinstance(o,float): return round(o,n)
    if isinstance(o,list): return [rnd(x,n) for x in o]
    if isinstance(o,dict): return {k:rnd(v,n) for k,v in o.items()}
    return o
# --- Pereira comunas
c=gpd.read_file(f"{R}/output/pereira.gpkg", layer="comunas")
zs=zonal_stats(c.to_crs(4326), f"{U}/geo/pereira/shakemap/mmi_mean.flt", stats=["mean"], all_touched=True)
c["mmi"]=[round(z["mean"],2) if z["mean"] is not None else None for z in zs]
c["shake_exposure"]=(c["pop"]*(c["mmi"]-5).clip(lower=0)).round()
c["rank_shake"]=c.shake_exposure.rank(ascending=False,method="min").astype(int)
c["name"]=c.nombre.str.replace("Comuna ","",regex=False)
cc=["name","codcom","area_km2","pop","pop_density","ems_cover","n_destroyed","n_damaged","n_possible","score_ems","rank_ems","built_px","damage_frac","people_affected","rank_radar","radar_conf","mmi","shake_exposure","rank_shake"]
print(c[["name","mmi","rank_shake","rank_radar","rank_ems"]].sort_values("rank_shake").head(6).to_string(index=False))
s=c.dropna(subset=["rank_ems"])
rho=spearmanr(s.people_affected,s.score_ems)
val=[{"name":r["name"],"radar":int(r.rank_radar),"ems":int(r.rank_ems),"radar_sub":int(r2),"ems_sub":int(e2)} for (_,r),r2,e2 in zip(s.iterrows(), s.people_affected.rank(ascending=False), s.score_ems.rank(ascending=False))]
# --- cells
cl=gpd.read_file(f"{F}/cells_500m.gpkg")
cl["radar_conf"]=np.where(cl.built_px<50,"low","ok")
pts=cl.copy(); pts["geometry"]=cl.to_crs(32618).centroid.to_crs(4326)
j1=gpd.sjoin(pts[["cell","geometry"]], c.to_crs(4326)[["name","geometry"]], predicate="within", how="left").drop_duplicates("cell")
adm=gpd.read_file(f"{U}/geo/pereira/osm_admin.gpkg"); mun=adm[adm.admin_level.astype(str)=="6"][["name","geometry"]].rename(columns={"name":"mun"}).to_crs(4326)
j2=gpd.sjoin(pts[["cell","geometry"]], mun, predicate="within", how="left").drop_duplicates("cell")
cl=cl.merge(j1[["cell","name"]],on="cell",how="left").merge(j2[["cell","mun"]],on="cell",how="left")
cl["area"]=np.where(cl["name"].notna(), cl["name"], cl["mun"].fillna("Outside city"))
print(cl.sort_values("rank_radar")[["cell","rank_radar","area"]].head(12).to_string(index=False))
cells=gj(cl,["cell","area","pop","built_px","damage_frac_raw","people_affected","rank_radar","rank_shake","n_ems","mmi","radar_conf"])
# --- EMS
e=gpd.read_file(f"{U}/geo/pereira/emsr916/EMSR916_AOI02_GRA_PRODUCT_v1/EMSR916_AOI02_GRA_PRODUCT_v1.gpkg", layer=[l[0] for l in pyogrio.list_layers(f"{U}/geo/pereira/emsr916/EMSR916_AOI02_GRA_PRODUCT_v1/EMSR916_AOI02_GRA_PRODUCT_v1.gpkg") if 'builtUp' in l[0]][0])
aoi=gpd.read_file(f"{U}/geo/pereira/emsr916/EMSR916_AOI02_GRA_PRODUCT_v1/EMSR916_AOI02_GRA_PRODUCT_v1.gpkg", layer=[l[0] for l in pyogrio.list_layers(f"{U}/geo/pereira/emsr916/EMSR916_AOI02_GRA_PRODUCT_v1/EMSR916_AOI02_GRA_PRODUCT_v1.gpkg") if 'areaOfInterest' in l[0]][0])
e["dmg"]=e.damage_gra.map({"Destroyed":"destroyed","Damaged":"damaged","Possibly damaged":"possible"})
# --- regional ShakeMap (MMI contours, dissolved to whole MMI units, simplified)
from shapely.geometry import box
sh=gpd.read_file(f"{U}/geo/pereira/shakemap/mi.shp")
sh["mmi"]=np.floor(sh.PARAMVALUE+1e-6).astype(int)
sh=sh[sh.mmi>=5].dissolve("mmi").reset_index()
sh=gpd.clip(sh, box(-78.0,3.2,-74.6,6.6))
sh["geometry"]=sh.geometry.simplify(0.012, preserve_topology=True)
shake=gj(sh,["mmi"],3)
places=[{"name":"Pereira","lat":4.8133,"lon":-75.6961,"main":True},{"name":"Manizales","lat":5.0689,"lon":-75.5174},
        {"name":"Armenia","lat":4.5339,"lon":-75.6811},{"name":"Cali","lat":3.4516,"lon":-76.5320},{"name":"Quibdó","lat":5.6947,"lon":-76.6611}]
# --- Tashkent
t=gpd.read_file(f"{R}/output/tashkent.gpkg", layer="districts")
from shapely.geometry import box as _box
_b=j_tk_bounds=None
tc=["name_en","pop","area_km2","pop_density","bld_n","bld_density","built_share","exposure","rank_exposure"]
# teammate metrics
s2=open('/tmp/web/data.js').read(); j=json.loads(s2[s2.index('{'):s2.rstrip().rstrip(';').rindex('}')+1])
tb=j["tk_watch"]["bounds"]; cov=_box(tb[0][1],tb[0][0],tb[1][1],tb[1][0])
nod=gpd.GeoDataFrame(geometry=[t.to_crs(4326).union_all().difference(cov)],crs=4326)
nod["geometry"]=nod.geometry.simplify(0.0003)
D_tk_nodata=json.loads(nod.to_json(drop_id=True))
D={"tk_nodata":D_tk_nodata,"shake":shake,"places":places,"epicentre":{"lat":4.99,"lon":-76.29,"depth_km":103},"comunas":gj(c,cc),"cells":cells,"ems":gj(e,["dmg"],6),"ems_aoi":gj(aoi,[]),"tashkent":gj(t,tc),
   "metrics":{"rho_comuna":round(float(rho.statistic),2),"p_comuna":round(float(rho.pvalue),3),"n_comuna":int(len(s)),
              "top10_ems":j["metrics"]["top10_ems"],"top10_built":j["metrics"]["top10_built"],"rho_cells":j["metrics"]["spearman"],
              "pix_hit":j["metrics"]["pixel"]["ems_hit"],"pix_rand":j["metrics"]["pixel"]["random"],
              "n_ems":int(len(e)),"n_destroyed":int((e.dmg=="destroyed").sum()),"n_damaged":int((e.dmg=="damaged").sum()),"n_possible":int((e.dmg=="possible").sum()),
              "pop_pereira":int(c["pop"].sum()),"pop_tashkent":int(t["pop"].sum()),"tk_watch_pct":round(j["tk_sum"]["watch_pct"],1)},
   "validation":val,
   "images":{k:{"img":j[k]["img"],"bounds":j[k]["bounds"]} for k in ["base_p","base_t","before","across","tk_watch"]}}
D=rnd(D)
open(f"{R}/web/data.js","w").write("window.RQ="+json.dumps(D,separators=(",",":"),ensure_ascii=False)+";\n")
print("metrics",D["metrics"]); print("validation",val)
