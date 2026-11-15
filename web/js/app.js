(()=>{var v1=0,ph=1,M1=2;var Yu=1,S1=2,Nn=3,ri=0,It=1,Ut=2;var ni=0,cs=1,tr=2,mh=3,gh=4,b1=5,Si=100,E1=101,T1=102,xh=103,_h=104,w1=200,A1=201,R1=202,C1=203,El=204,Tl=205,P1=206,I1=207,L1=208,D1=209,N1=210,U1=211,O1=212,F1=213,B1=214,k1=0,z1=1,V1=2,So=3,H1=4,G1=5,W1=6,X1=7,cc=0,q1=1,$1=2,ii=0,Y1=1,Z1=2,K1=3,J1=4,j1=5,Q1=6;var Zu=300,fs=301,ds=302,wl=303,Al=304,Jo=306,Rl=1e3,cn=1001,Cl=1002,Nt=1003,yh=1004;var Xa=1005;var en=1006,ep=1007;var nr=1008;var si=1009,tp=1010,np=1011,hc=1012,Ku=1013,ei=1014,ti=1015,ir=1016,Ju=1017,ju=1018,Ti=1020,ip=1021,hn=1023,sp=1024,rp=1025,wi=1026,ps=1027,op=1028,Qu=1029,ap=1030,ef=1031,tf=1033,qa=33776,$a=33777,Ya=33778,Za=33779,vh=35840,Mh=35841,Sh=35842,bh=35843,nf=36196,Eh=37492,Th=37496,wh=37808,Ah=37809,Rh=37810,Ch=37811,Ph=37812,Ih=37813,Lh=37814,Dh=37815,Nh=37816,Uh=37817,Oh=37818,Fh=37819,Bh=37820,kh=37821,Ka=36492,zh=36494,Vh=36495,lp=36283,Hh=36284,Gh=36285,Wh=36286;var bo=2300,Eo=2301,Ja=2302,Xh=2400,qh=2401,$h=2402;var sf=3e3,Ai=3001,cp=3200,hp=3201,rf=0,up=1,tn="",Tt="srgb",Fn="srgb-linear",uc="display-p3",jo="display-p3-linear",To="linear",ot="srgb",wo="rec709",Ao="p3";var Wi=7680;var Yh=519,fp=512,dp=513,pp=514,of=515,mp=516,gp=517,xp=518,_p=519,Zh=35044,af=35048;var Kh="300 es",Pl=1035,On=2e3,Ro=2001,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mo=Math.PI/180,Il=180/Math.PI;function hr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function yp(n,e){return(n%e+e)%e}function ja(n,e,t){return(1-t)*n+t*e}function Jh(n){return(n&n-1)===0&&n!==0}function Ll(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var et=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],x=s[0],p=s[3],d=s[6],M=s[1],_=s[4],C=s[7],I=s[2],R=s[5],E=s[8];return r[0]=a*x+o*M+l*I,r[3]=a*p+o*_+l*R,r[6]=a*d+o*C+l*E,r[1]=c*x+h*M+u*I,r[4]=c*p+h*_+u*R,r[7]=c*d+h*C+u*E,r[2]=f*x+m*M+g*I,r[5]=f*p+m*_+g*R,r[8]=f*d+m*C+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=t*u+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new Je;function lf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vp(){let n=Co("canvas");return n.style.display="block",n}var jh={};function Qs(n){n in jh||(jh[n]=!0,console.warn(n))}var Qh=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eu=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[Fn]:{transfer:To,primaries:wo,toReference:n=>n,fromReference:n=>n},[Tt]:{transfer:ot,primaries:wo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[jo]:{transfer:To,primaries:Ao,toReference:n=>n.applyMatrix3(eu),fromReference:n=>n.applyMatrix3(Qh)},[uc]:{transfer:ot,primaries:Ao,toReference:n=>n.convertSRGBToLinear().applyMatrix3(eu),fromReference:n=>n.applyMatrix3(Qh).convertLinearToSRGB()}},Mp=new Set([Fn,jo]),it={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Wr[e].toReference,s=Wr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Wr[n].primaries},getTransfer:function(n){return n===tn?To:Wr[n].transfer}};function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function el(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xi,Po=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=Co("canvas")),Xi.width=e.width,Xi.height=e.height;let i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Co("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sp=0,Io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function tl(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Po.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bp=0,un=class n extends oi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=cn,s=cn,r=en,a=nr,o=hn,l=si,c=n.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=hr(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ai?Tt:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rl:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rl:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?Ai:sf}set encoding(e){Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?Tt:tn}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Zu;un.DEFAULT_ANISOTROPY=1;var vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,C=(m+1)/2,I=(d+1)/2,R=(h+f)/4,E=(u+x)/4,P=(g+p)/4;return _>C&&_>I?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=E/i):C>I?C<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),i=R/s,r=P/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=E/r,s=P/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends oi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ai?Tt:tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new un(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Dl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Lo=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nl=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==m||h!==g){let p=1-o,d=l*f+c*m+h*g+u*x,M=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let I=Math.sqrt(_),R=Math.atan2(I,d*M);p=Math.sin(p*R)/I,o=Math.sin(o*R)/I}let C=o*M;if(l=l*p+f*C,c=c*p+m*C,h=h*p+g*C,u=u*p+x*C,p===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-o*m,e[t+2]=c*g+h*m+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new F,tu=new yn,kn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),qr.subVectors(this.max,$s),qi.subVectors(e.a,$s),$i.subVectors(e.b,$s),Yi.subVectors(e.c,$s),Zn.subVectors($i,qi),Kn.subVectors(Yi,$i),xi.subVectors(qi,Yi);let t=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-xi.y,xi.x,0];return!il(t,qi,$i,Yi,qr)||(t=[1,0,0,0,1,0,0,0,1],!il(t,qi,$i,Yi,qr))?!1:($r.crossVectors(Zn,Kn),t=[$r.x,$r.y,$r.z],il(t,qi,$i,Yi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Cn=[new F,new F,new F,new F,new F,new F,new F,new F],on=new F,Xr=new kn,qi=new F,$i=new F,Yi=new F,Zn=new F,Kn=new F,xi=new F,$s=new F,qr=new F,$r=new F,_i=new F;function il(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){_i.fromArray(n,r);let o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),h=i.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ep=new kn,Ys=new F,sl=new F,zn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ep.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(sl)),this.expandByPoint(Ys.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new F,rl=new F,Yr=new F,Jn=new F,ol=new F,Zr=new F,al=new F,ms=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){rl.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(rl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Jn.dot(this.direction),l=-Jn.dot(Yr),c=Jn.lengthSq(),h=Math.abs(1-a*a),u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rl).addScaledVector(Yr,f),m}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let i=Pn.dot(this.direction),s=Pn.dot(Pn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,s,r){ol.subVectors(t,e),Zr.subVectors(i,e),al.crossVectors(ol,Zr);let a=this.direction.dot(al),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);let l=o*this.direction.dot(Zr.crossVectors(Jn,Zr));if(l<0)return null;let c=o*this.direction.dot(ol.cross(Jn));if(c<0||l+c>a)return null;let h=-o*Jn.dot(al);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,f,m,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,m,g,x,p)}set(e,t,i,s,r,a,o,l,c,h,u,f,m,g,x,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,m=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,wp)}lookAt(e,t,i){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),jn.crossVectors(i,$t),jn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),jn.crossVectors(i,$t)),jn.normalize(),Kr.crossVectors($t,jn),s[0]=jn.x,s[4]=Kr.x,s[8]=$t.x,s[1]=jn.y,s[5]=Kr.y,s[9]=$t.y,s[2]=jn.z,s[6]=Kr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],d=i[14],M=i[3],_=i[7],C=i[11],I=i[15],R=s[0],E=s[4],P=s[8],v=s[12],b=s[1],G=s[5],k=s[9],te=s[13],L=s[2],V=s[6],K=s[10],Q=s[14],ie=s[3],W=s[7],O=s[11],U=s[15];return r[0]=a*R+o*b+l*L+c*ie,r[4]=a*E+o*G+l*V+c*W,r[8]=a*P+o*k+l*K+c*O,r[12]=a*v+o*te+l*Q+c*U,r[1]=h*R+u*b+f*L+m*ie,r[5]=h*E+u*G+f*V+m*W,r[9]=h*P+u*k+f*K+m*O,r[13]=h*v+u*te+f*Q+m*U,r[2]=g*R+x*b+p*L+d*ie,r[6]=g*E+x*G+p*V+d*W,r[10]=g*P+x*k+p*K+d*O,r[14]=g*v+x*te+p*Q+d*U,r[3]=M*R+_*b+C*L+I*ie,r[7]=M*E+_*G+C*V+I*W,r[11]=M*P+_*k+C*K+I*O,r[15]=M*v+_*te+C*Q+I*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*m-i*l*m)+x*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+i*a*m+r*o*h-i*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],d=e[15],M=u*p*c-x*f*c+x*l*m-o*p*m-u*l*d+o*f*d,_=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,C=h*x*c-g*u*c+g*o*m-a*x*m-h*o*d+a*u*d,I=g*u*l-h*x*l-g*o*f+a*x*f+h*o*p-a*u*p,R=t*M+i*_+s*C+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/R;return e[0]=M*E,e[1]=(x*f*r-u*p*r-x*s*m+i*p*m+u*s*d-i*f*d)*E,e[2]=(o*p*r-x*l*r+x*s*c-i*p*c-o*s*d+i*l*d)*E,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*m-i*l*m)*E,e[4]=_*E,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*E,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*d-t*l*d)*E,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*m+t*l*m)*E,e[8]=C*E,e[9]=(g*u*r-h*x*r-g*i*m+t*x*m+h*i*d-t*u*d)*E,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*d+t*o*d)*E,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*m-t*o*m)*E,e[12]=I*E,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*p+t*u*p)*E,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*p-t*o*p)*E,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*E,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,x=a*h,p=a*u,d=o*u,M=l*c,_=l*h,C=l*u,I=i.x,R=i.y,E=i.z;return s[0]=(1-(x+d))*I,s[1]=(m+C)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(m-C)*R,s[5]=(1-(f+d))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(g+_)*E,s[9]=(p-M)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),a=Zi.set(s[4],s[5],s[6]).length(),o=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);let c=1/r,h=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=On){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),m,g;if(o===On)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ro)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=On){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,m=(i+s)*h,g,x;if(o===On)g=(a+r)*u,x=-2*u;else if(o===Ro)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zi=new F,an=new ht,Tp=new F(0,0,0),wp=new F(1,1,1),jn=new F,Kr=new F,$t=new F,nu=new ht,iu=new yn,Do=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Do.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ap=0,su=new F,Ki=new yn,In=new ht,Jr=new F,Zs=new F,Rp=new F,Cp=new yn,ru=new F(1,0,0),ou=new F(0,1,0),au=new F(0,0,1),Pp={type:"added"},Ip={type:"removed"},Mt=class n extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new Do,i=new yn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Zs,Jr,this.up):In.lookAt(Jr,Zs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(In),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ip)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new F(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new F,Ln=new F,ll=new F,Dn=new F,Ji=new F,ji=new F,lu=new F,cl=new F,hl=new F,ul=new F,jr=!1,Ei=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ln.subVectors(s,t),Ln.subVectors(i,t),ll.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(Ln),l=ln.dot(ll),c=Ln.dot(Ln),h=Ln.dot(ll),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,s,r,a,o,l){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static isFrontFacing(e,t,i,s){return ln.subVectors(i,t),Ln.subVectors(e,t),ln.cross(Ln).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ji.subVectors(s,i),ji.subVectors(r,i),cl.subVectors(e,i);let l=Ji.dot(cl),c=ji.dot(cl);if(l<=0&&c<=0)return t.copy(i);hl.subVectors(e,s);let h=Ji.dot(hl),u=ji.dot(hl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ji,a);ul.subVectors(e,r);let m=Ji.dot(ul),g=ji.dot(ul);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ji,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return lu.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(lu,o);let d=1/(p+x+f);return a=x*d,o=f*d,t.copy(i).addScaledVector(Ji,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=yp(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=fl(a,r,e+1/3),this.g=fl(a,r,e),this.b=fl(a,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=el(e.r),this.g=el(e.g),this.b=el(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return it.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ht(Pt.r*255,0,255))*65536+Math.round(Ht(Pt.g*255,0,255))*256+Math.round(Ht(Pt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Pt.copy(this),t);let i=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Tt){it.fromWorkingColorSpace(Pt.copy(this),e);let t=Pt.r,i=Pt.g,s=Pt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Qr);let i=ja(Qn.h,Qr.h,t),s=ja(Qn.s,Qr.s,t),r=ja(Qn.l,Qr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new We;We.NAMES=cf;var Lp=0,Vn=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=cs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=Tl,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==El&&(i.blendSrc=this.blendSrc),this.blendDst!==Tl&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kt=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mt=new F,eo=new et,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zh&&(e.usage=this.usage),e}};var No=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Uo=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Dp=0,Qt=new ht,dl=new Mt,Qi=new F,Yt=new kn,Ks=new kn,yt=new F,ft=class n extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?Uo:No)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Yt.min,Ks.min),Yt.expandByPoint(yt),yt.addVectors(Yt.max,Ks.max),Yt.expandByPoint(yt)):(Yt.expandByPoint(Ks.min),Yt.expandByPoint(Ks.max))}Yt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),yt.add(Qi)),s=Math.max(s,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new F,h[b]=new F;let u=new F,f=new F,m=new F,g=new et,x=new et,p=new et,d=new F,M=new F;function _(b,G,k){u.fromArray(s,b*3),f.fromArray(s,G*3),m.fromArray(s,k*3),g.fromArray(a,b*2),x.fromArray(a,G*2),p.fromArray(a,k*2),f.sub(u),m.sub(u),x.sub(g),p.sub(g);let te=1/(x.x*p.y-p.x*x.y);isFinite(te)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(te),M.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(te),c[b].add(d),c[G].add(d),c[k].add(d),h[b].add(M),h[G].add(M),h[k].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let b=0,G=C.length;b<G;++b){let k=C[b],te=k.start,L=k.count;for(let V=te,K=te+L;V<K;V+=3)_(i[V+0],i[V+1],i[V+2])}let I=new F,R=new F,E=new F,P=new F;function v(b){E.fromArray(r,b*3),P.copy(E);let G=c[b];I.copy(G),I.sub(E.multiplyScalar(E.dot(G))).normalize(),R.crossVectors(P,G);let te=R.dot(h[b])<0?-1:1;l[b*4]=I.x,l[b*4+1]=I.y,l[b*4+2]=I.z,l[b*4+3]=te}for(let b=0,G=C.length;b<G;++b){let k=C[b],te=k.start,L=k.count;for(let V=te,K=te+L;V<K;V+=3)v(i[V+0]),v(i[V+1]),v(i[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new At(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cu=new ht,yi=new ms,to=new zn,hu=new F,es=new F,ts=new F,ns=new F,pl=new F,no=new F,io=new et,so=new et,ro=new et,uu=new F,fu=new F,du=new F,oo=new F,ao=new F,lt=class extends Mt{constructor(e=new ft,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(pl.fromBufferAttribute(u,e),a?no.addScaledVector(pl,h):no.addScaledVector(pl.sub(t),h))}t.add(no)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(to.containsPoint(yi.origin)===!1&&(yi.intersectSphere(to,hu)===null||yi.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(cu.copy(r).invert(),yi.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=a[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let C=M,I=_;C<I;C+=3){let R=o.getX(C),E=o.getX(C+1),P=o.getX(C+2);s=lo(this,d,e,i,c,h,u,R,E,P),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let M=o.getX(p),_=o.getX(p+1),C=o.getX(p+2);s=lo(this,a,e,i,c,h,u,M,_,C),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=a[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let C=M,I=_;C<I;C+=3){let R=C,E=C+1,P=C+2;s=lo(this,d,e,i,c,h,u,R,E,P),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let M=p,_=p+1,C=p+2;s=lo(this,a,e,i,c,h,u,M,_,C),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Np(n,e,t,i,s,r,a,o){let l;if(e.side===It?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ri,o),l===null)return null;ao.copy(o),ao.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:n}}function lo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,es),n.getVertexPosition(l,ts),n.getVertexPosition(c,ns);let h=Np(n,e,t,i,es,ts,ns,oo);if(h){s&&(io.fromBufferAttribute(s,o),so.fromBufferAttribute(s,l),ro.fromBufferAttribute(s,c),h.uv=Ei.getInterpolation(oo,es,ts,ns,io,so,ro,new et)),r&&(io.fromBufferAttribute(r,o),so.fromBufferAttribute(r,l),ro.fromBufferAttribute(r,c),h.uv1=Ei.getInterpolation(oo,es,ts,ns,io,so,ro,new et),h.uv2=h.uv1),a&&(uu.fromBufferAttribute(a,o),fu.fromBufferAttribute(a,l),du.fromBufferAttribute(a,c),h.normal=Ei.getInterpolation(oo,es,ts,ns,uu,fu,du,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Ei.getNormal(es,ts,ns,u.normal),h.face=u}return h}var vn=class n extends ft{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(x,p,d,M,_,C,I,R,E,P,v){let b=C/E,G=I/P,k=C/2,te=I/2,L=R/2,V=E+1,K=P+1,Q=0,ie=0,W=new F;for(let O=0;O<K;O++){let U=O*G-te;for(let q=0;q<V;q++){let D=q*b-k;W[x]=D*M,W[p]=U*_,W[d]=L,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[d]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(q/E),u.push(1-O/P),Q+=1}}for(let O=0;O<P;O++)for(let U=0;U<E;U++){let q=f+U+V*O,D=f+U+V*(O+1),z=f+(U+1)+V*(O+1),se=f+(U+1)+V*O;l.push(q,D,se),l.push(D,z,se),ie+=6}o.addGroup(m,ie,v),m+=ie,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dt(n){let e={};for(let t=0;t<n.length;t++){let i=gs(n[t]);for(let s in i)e[s]=i[s]}return e}function Up(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hf(n){return n.getRenderTarget()===null?n.outputColorSpace:it.workingColorSpace}var Op={clone:gs,merge:Dt},Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Oo=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wt=class extends Oo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},is=-90,ss=1,Ul=class extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wt(is,ss,e,t);s.layers=this.layers,this.add(s);let r=new wt(is,ss,e,t);r.layers=this.layers,this.add(r);let a=new wt(is,ss,e,t);a.layers=this.layers,this.add(a);let o=new wt(is,ss,e,t);o.layers=this.layers,this.add(o);let l=new wt(is,ss,e,t);l.layers=this.layers,this.add(l);let c=new wt(is,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Fo=class extends un{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fs,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ol=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?Tt:tn),this.texture=new Fo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vn(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:ni});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===nr&&(t.minFilter=en),new Ul(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},ml=new F,kp=new F,zp=new Je,Un=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ml.subVectors(i,t).cross(kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||zp.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new zn,co=new F,rr=class{constructor(e=new Un,t=new Un,i=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],d=s[12],M=s[13],_=s[14],C=s[15];if(i[0].setComponents(l-r,f-c,p-m,C-d).normalize(),i[1].setComponents(l+r,f+c,p+m,C+d).normalize(),i[2].setComponents(l+a,f+h,p+g,C+M).normalize(),i[3].setComponents(l-a,f-h,p-g,C-M).normalize(),i[4].setComponents(l-o,f-u,p-x,C-_).normalize(),t===On)i[5].setComponents(l+o,f+u,p+x,C+_).normalize();else if(t===Ro)i[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(co.x=s.normal.x>0?e.max.x:e.min.x,co.y=s.normal.y>0?e.max.y:e.min.y,co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vp(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,p=g.length;x<p;x++){let d=g[x];t?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Fl=class n extends ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,m=[],g=[],x=[],p=[];for(let d=0;d<h;d++){let M=d*f-a;for(let _=0;_<c;_++){let C=_*u-r;g.push(C,-M,0),x.push(0,0,1),p.push(_/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){let _=M+c*d,C=M+c*(d+1),I=M+1+c*(d+1),R=M+1+c*d;m.push(_,C,R),m.push(C,I,R)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,u0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,im=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Hp,alphahash_pars_fragment:Gp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:$p,aomap_fragment:Yp,aomap_pars_fragment:Zp,batching_pars_vertex:Kp,batching_vertex:Jp,begin_vertex:jp,beginnormal_vertex:Qp,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:d0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:x0,colorspace_fragment:_0,colorspace_pars_fragment:y0,envmap_fragment:v0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:U0,envmap_vertex:E0,fog_vertex:T0,fog_pars_vertex:w0,fog_fragment:A0,fog_pars_fragment:R0,gradientmap_pars_fragment:C0,lightmap_fragment:P0,lightmap_pars_fragment:I0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:N0,lights_toon_fragment:O0,lights_toon_pars_fragment:F0,lights_phong_fragment:B0,lights_phong_pars_fragment:k0,lights_physical_fragment:z0,lights_physical_pars_fragment:V0,lights_fragment_begin:H0,lights_fragment_maps:G0,lights_fragment_end:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:Y0,map_fragment:Z0,map_pars_fragment:K0,map_particle_fragment:J0,map_particle_pars_fragment:j0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:xm,project_vertex:_m,dithering_fragment:ym,dithering_pars_fragment:vm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Em,shadowmap_vertex:Tm,shadowmask_pars_fragment:wm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Im,specularmap_pars_fragment:Lm,tonemapping_fragment:Dm,tonemapping_pars_fragment:Nm,transmission_fragment:Um,transmission_pars_fragment:Om,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:km,worldpos_vertex:zm,background_vert:Vm,background_frag:Hm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:$m,depth_frag:Ym,distanceRGBA_vert:Zm,distanceRGBA_frag:Km,equirect_vert:Jm,equirect_frag:jm,linedashed_vert:Qm,linedashed_frag:e2,meshbasic_vert:t2,meshbasic_frag:n2,meshlambert_vert:i2,meshlambert_frag:s2,meshmatcap_vert:r2,meshmatcap_frag:o2,meshnormal_vert:a2,meshnormal_frag:l2,meshphong_vert:c2,meshphong_frag:h2,meshphysical_vert:u2,meshphysical_frag:f2,meshtoon_vert:d2,meshtoon_frag:p2,points_vert:m2,points_frag:g2,shadow_vert:x2,shadow_frag:_2,sprite_vert:y2,sprite_frag:v2},Se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},_n={basic:{uniforms:Dt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Dt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Dt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Dt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Dt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Dt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Dt([Se.points,Se.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Dt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Dt([Se.common,Se.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Dt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Dt([Se.sprite,Se.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Dt([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Dt([Se.lights,Se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};_n.physical={uniforms:Dt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var ho={r:0,b:0,g:0};function M2(n,e,t,i,s,r,a){let o=new We(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let M=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),M=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Jo)?(h===void 0&&(h=new lt(new vn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:gs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=it.getTransfer(_.colorSpace)!==ot,(u!==_||f!==_.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new lt(new Fl(2,2),new Gt({name:"BackgroundMaterial",uniforms:gs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=it.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,d){p.getRGB(ho,hf(n)),i.buffers.color.setClear(ho.r,ho.g,ho.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:g}}function S2(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(L,V,K,Q,ie){let W=!1;if(a){let O=x(Q,K,V);c!==O&&(c=O,m(c.object)),W=d(L,Q,K,ie),W&&M(L,Q,K,ie)}else{let O=V.wireframe===!0;(c.geometry!==Q.id||c.program!==K.id||c.wireframe!==O)&&(c.geometry=Q.id,c.program=K.id,c.wireframe=O,W=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,P(L,V,K,Q),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,V,K){let Q=K.wireframe===!0,ie=o[L.id];ie===void 0&&(ie={},o[L.id]=ie);let W=ie[V.id];W===void 0&&(W={},ie[V.id]=W);let O=W[Q];return O===void 0&&(O=p(f()),W[Q]=O),O}function p(L){let V=[],K=[],Q=[];for(let ie=0;ie<s;ie++)V[ie]=0,K[ie]=0,Q[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:Q,object:L,attributes:{},index:null}}function d(L,V,K,Q){let ie=c.attributes,W=V.attributes,O=0,U=K.getAttributes();for(let q in U)if(U[q].location>=0){let z=ie[q],se=W[q];if(se===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),z===void 0||z.attribute!==se||se&&z.data!==se.data)return!0;O++}return c.attributesNum!==O||c.index!==Q}function M(L,V,K,Q){let ie={},W=V.attributes,O=0,U=K.getAttributes();for(let q in U)if(U[q].location>=0){let z=W[q];z===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(z=L.instanceColor));let se={};se.attribute=z,z&&z.data&&(se.data=z.data),ie[q]=se,O++}c.attributes=ie,c.attributesNum=O,c.index=Q}function _(){let L=c.newAttributes;for(let V=0,K=L.length;V<K;V++)L[V]=0}function C(L){I(L,0)}function I(L,V){let K=c.newAttributes,Q=c.enabledAttributes,ie=c.attributeDivisors;K[L]=1,Q[L]===0&&(n.enableVertexAttribArray(L),Q[L]=1),ie[L]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),ie[L]=V)}function R(){let L=c.newAttributes,V=c.enabledAttributes;for(let K=0,Q=V.length;K<Q;K++)V[K]!==L[K]&&(n.disableVertexAttribArray(K),V[K]=0)}function E(L,V,K,Q,ie,W,O){O===!0?n.vertexAttribIPointer(L,V,K,ie,W):n.vertexAttribPointer(L,V,K,Q,ie,W)}function P(L,V,K,Q){if(i.isWebGL2===!1&&(L.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let ie=Q.attributes,W=K.getAttributes(),O=V.defaultAttributeValues;for(let U in W){let q=W[U];if(q.location>=0){let D=ie[U];if(D===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(D=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(D=L.instanceColor)),D!==void 0){let z=D.normalized,se=D.itemSize,re=t.get(D);if(re===void 0)continue;let fe=re.buffer,de=re.type,me=re.bytesPerElement,xe=i.isWebGL2===!0&&(de===n.INT||de===n.UNSIGNED_INT||D.gpuType===Ku);if(D.isInterleavedBufferAttribute){let Te=D.data,T=Te.stride,le=D.offset;if(Te.isInstancedInterleavedBuffer){for(let ce=0;ce<q.locationSize;ce++)I(q.location+ce,Te.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ce=0;ce<q.locationSize;ce++)C(q.location+ce);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ce=0;ce<q.locationSize;ce++)E(q.location+ce,se/q.locationSize,de,z,T*me,(le+se/q.locationSize*ce)*me,xe)}else{if(D.isInstancedBufferAttribute){for(let Te=0;Te<q.locationSize;Te++)I(q.location+Te,D.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Te=0;Te<q.locationSize;Te++)C(q.location+Te);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Te=0;Te<q.locationSize;Te++)E(q.location+Te,se/q.locationSize,de,z,se*me,se/q.locationSize*Te*me,xe)}}else if(O!==void 0){let z=O[U];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(q.location,z);break;case 3:n.vertexAttrib3fv(q.location,z);break;case 4:n.vertexAttrib4fv(q.location,z);break;default:n.vertexAttrib1fv(q.location,z)}}}}R()}function v(){k();for(let L in o){let V=o[L];for(let K in V){let Q=V[K];for(let ie in Q)g(Q[ie].object),delete Q[ie];delete V[K]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;let V=o[L.id];for(let K in V){let Q=V[K];for(let ie in Q)g(Q[ie].object),delete Q[ie];delete V[K]}delete o[L.id]}function G(L){for(let V in o){let K=o[V];if(K[L.id]===void 0)continue;let Q=K[L.id];for(let ie in Q)g(Q[ie].object),delete Q[ie];delete K[L.id]}}function k(){te(),h=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:te,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:_,enableAttribute:C,disableUnusedAttributes:R}}function b2(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function E2(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,C=a||e.has("OES_texture_float"),I=_&&C,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:C,floatVertexTextures:I,maxSamples:R}}function T2(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Un,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:i,_=M*4,C=d.clippingState||null;l.value=C,C=h(g,f,_,m);for(let I=0;I!==_;++I)C[I]=t[I];d.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let d=m+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,C=m;_!==x;++_,C+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(p,C),p[C+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function w2(n){let e=new WeakMap;function t(a,o){return o===wl?a.mapping=fs:o===Al&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===wl||o===Al)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ol(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Bo=class extends Oo{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},as=4,pu=[.125,.215,.35,.446,.526,.582],bi=20,gl=new Bo,mu=new We,xl=null,_l=0,yl=0,Mi=(1+Math.sqrt(5))/2,rs=1/Mi,gu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Mi,rs),new F(0,Mi,-rs),new F(rs,0,Mi),new F(-rs,0,Mi),new F(Mi,rs,0),new F(-Mi,rs,0)],ko=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){xl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,_l,yl),e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:ir,format:hn,colorSpace:Fn,depthBuffer:!1},s=xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A2(r)),this._blurMaterial=R2(r,e,t)}return s}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,i,s){let o=new wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(mu),h.toneMapping=ii,h.autoClear=!1;let m=new Kt({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new lt(new vn,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(mu),x=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let _=this._cubeSize;uo(s,M*_,d>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===fs||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,gl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gu[(s-1)%gu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new lt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*bi-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):bi;p>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);let d=[],M=0;for(let E=0;E<bi;++E){let P=E/x,v=Math.exp(-P*P/2);d.push(v),E===0?M+=v:E<p&&(M+=2*v)}for(let E=0;E<d.length;E++)d[E]=d[E]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;let C=this._sizeLods[s],I=3*C*(s>_-as?s-_+as:0),R=4*(this._cubeSize-C);uo(t,I,R,3*C,2*C),l.setRenderTarget(t),l.render(u,gl)}};function A2(n){let e=[],t=[],i=[],s=n,r=n-as+1+pu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-as?l=pu[a-n+as-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,d=1,M=new Float32Array(x*g*m),_=new Float32Array(p*g*m),C=new Float32Array(d*g*m);for(let R=0;R<m;R++){let E=R%3*2/3-1,P=R>2?0:-1,v=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];M.set(v,x*g*R),_.set(f,p*g*R);let b=[R,R,R,R,R,R];C.set(b,d*g*R)}let I=new ft;I.setAttribute("position",new At(M,x)),I.setAttribute("uv",new At(_,p)),I.setAttribute("faceIndex",new At(C,d)),e.push(I),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xu(n,e,t){let i=new Bn(n,e,t);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function R2(n,e,t){let i=new Float32Array(bi),s=new F(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function _u(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function yu(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C2(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===wl||l===Al,h=l===fs||l===ds;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new ko(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ko(n));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function P2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function I2(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,d=x.length;p<d;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let M=m.array;x=m.version;for(let _=0,C=M.length;_<C;_+=3){let I=M[_+0],R=M[_+1],E=M[_+2];f.push(I,R,R,E,E,I)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,C=M.length/3-1;_<C;_+=3){let I=_+0,R=_+1,E=_+2;f.push(I,R,R,E,E,I)}}else return;let p=new(lf(f)?Uo:No)(f,1);p.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function L2(n,e,t,i){let s=i.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,o,m*l),t.update(g,r,1)}function u(m,g,x){if(x===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,o,m*l,x),t.update(g,r,x)}function f(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<x;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let d=0;for(let M=0;M<x;M++)d+=g[M];t.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function D2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function N2(n,e){return n[0]-e[0]}function U2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function O2(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],P=0;M===!0&&(P=1),_===!0&&(P=2),C===!0&&(P=3);let v=h.attributes.position.count*P,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let G=new Float32Array(v*b*4*g),k=new Lo(G,v,b,g);k.type=ti,k.needsUpdate=!0;let te=P*4;for(let V=0;V<g;V++){let K=I[V],Q=R[V],ie=E[V],W=v*b*4*V;for(let O=0;O<K.count;O++){let U=O*te;M===!0&&(a.fromBufferAttribute(K,O),G[W+U+0]=a.x,G[W+U+1]=a.y,G[W+U+2]=a.z,G[W+U+3]=0),_===!0&&(a.fromBufferAttribute(Q,O),G[W+U+4]=a.x,G[W+U+5]=a.y,G[W+U+6]=a.z,G[W+U+7]=0),C===!0&&(a.fromBufferAttribute(ie,O),G[W+U+8]=a.x,G[W+U+9]=a.y,G[W+U+10]=a.z,G[W+U+11]=ie.itemSize===4?a.w:1)}}x={count:g,texture:k,size:new et(v,b)},r.set(h,x),h.addEventListener("dispose",L)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<m;_++){let C=g[_];C[0]=_,C[1]=f[_]}g.sort(U2);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(N2);let x=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let C=o[_],I=C[0],R=C[1];I!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+_)!==x[I]&&h.setAttribute("morphTarget"+_,x[I]),p&&h.getAttribute("morphNormal"+_)!==p[I]&&h.setAttribute("morphNormal"+_,p[I]),s[_]=R,d+=R):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function F2(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var zo=class extends un{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:wi,h!==wi&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===wi&&(i=ei),i===void 0&&h===ps&&(i=Ti),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ff=new un,df=new zo(1,1);df.compareFunction=of;var pf=new Lo,mf=new Nl,gf=new Fo,vu=[],Mu=[],Su=new Float32Array(16),bu=new Float32Array(9),Eu=new Float32Array(4);function Ss(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=vu[s];if(r===void 0&&(r=new Float32Array(s),vu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function B2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function k2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function z2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function V2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function H2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),xt(t,i)}}function G2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,i))return;bu.set(i),n.uniformMatrix3fv(this.addr,!1,bu),xt(t,i)}}function W2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),xt(t,i)}}function X2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function q2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function $2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function Y2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function Z2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function K2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function J2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function j2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Q2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?df:ff;t.setTexture2D(e||r,s)}function e3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||mf,s)}function t3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||gf,s)}function n3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pf,s)}function i3(n){switch(n){case 5126:return B2;case 35664:return k2;case 35665:return z2;case 35666:return V2;case 35674:return H2;case 35675:return G2;case 35676:return W2;case 5124:case 35670:return X2;case 35667:case 35671:return q2;case 35668:case 35672:return $2;case 35669:case 35673:return Y2;case 5125:return Z2;case 36294:return K2;case 36295:return J2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return Q2;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return n3}}function s3(n,e){n.uniform1fv(this.addr,e)}function r3(n,e){let t=Ss(e,this.size,2);n.uniform2fv(this.addr,t)}function o3(n,e){let t=Ss(e,this.size,3);n.uniform3fv(this.addr,t)}function a3(n,e){let t=Ss(e,this.size,4);n.uniform4fv(this.addr,t)}function l3(n,e){let t=Ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c3(n,e){let t=Ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function h3(n,e){let t=Ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u3(n,e){n.uniform1iv(this.addr,e)}function f3(n,e){n.uniform2iv(this.addr,e)}function d3(n,e){n.uniform3iv(this.addr,e)}function p3(n,e){n.uniform4iv(this.addr,e)}function m3(n,e){n.uniform1uiv(this.addr,e)}function g3(n,e){n.uniform2uiv(this.addr,e)}function x3(n,e){n.uniform3uiv(this.addr,e)}function _3(n,e){n.uniform4uiv(this.addr,e)}function y3(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ff,r[a])}function v3(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||mf,r[a])}function M3(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||gf,r[a])}function S3(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pf,r[a])}function b3(n){switch(n){case 5126:return s3;case 35664:return r3;case 35665:return o3;case 35666:return a3;case 35674:return l3;case 35675:return c3;case 35676:return h3;case 5124:case 35670:return u3;case 35667:case 35671:return f3;case 35668:case 35672:return d3;case 35669:case 35673:return p3;case 5125:return m3;case 36294:return g3;case 36295:return x3;case 36296:return _3;case 35678:case 36198:case 36298:case 36306:case 35682:return y3;case 35679:case 36299:case 36307:return v3;case 35680:case 36300:case 36308:case 36293:return M3;case 36289:case 36303:case 36311:case 36292:return S3}}var Bl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i3(t.type)}},kl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b3(t.type)}},zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},vl=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function E3(n,e,t){let i=n.name,s=i.length;for(vl.lastIndex=0;;){let r=vl.exec(i),a=vl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tu(t,c===void 0?new Bl(o,n,e):new kl(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new zl(o),Tu(t,u)),t=u}}}var us=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);E3(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function wu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var T3=37297,w3=0;function A3(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function R3(n){let e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n),i;switch(e===t?i="":e===Ao&&t===wo?i="LinearDisplayP3ToLinearSRGB":e===wo&&t===Ao&&(i="LinearSRGBToLinearDisplayP3"),n){case Fn:case jo:return[i,"LinearTransferOETF"];case Tt:case uc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Au(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+A3(n.getShaderSource(e),a)}else return s}function C3(n,e){let t=R3(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function P3(n,e){let t;switch(e){case Y1:t="Linear";break;case Z1:t="Reinhard";break;case K1:t="OptimizedCineon";break;case J1:t="ACESFilmic";break;case Q1:t="AgX";break;case j1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I3(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function L3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ls).join(`
`)}function D3(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N3(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ls(n){return n!==""}function Ru(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(n){return n.replace(U3,F3)}var O3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F3(n,e){let t=Ye[e];if(t===void 0){let i=O3.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vl(t)}var B3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(n){return n.replace(B3,k3)}function k3(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===S1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function V3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H3(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ds&&(e="ENVMAP_MODE_REFRACTION"),e}function G3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case q1:e="ENVMAP_BLENDING_MIX";break;case $1:e="ENVMAP_BLENDING_ADD";break}return e}function W3(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function X3(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=z3(t),c=V3(t),h=H3(t),u=G3(t),f=W3(t),m=t.isWebGL2?"":I3(t),g=L3(t),x=D3(r),p=s.createProgram(),d,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ls).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ls).join(`
`),M.length>0&&(M+=`
`)):(d=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),M=[m,Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ii?P3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,C3("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=Vl(a),a=Ru(a,t),a=Cu(a,t),o=Vl(o),o=Ru(o,t),o=Cu(o,t),a=Pu(a),o=Pu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let C=_+d+a,I=_+M+o,R=wu(s,s.VERTEX_SHADER,C),E=wu(s,s.FRAGMENT_SHADER,I);s.attachShader(p,R),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function P(k){if(n.debug.checkShaderErrors){let te=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(E).trim(),K=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,R,E);else{let ie=Au(s,R,"vertex"),W=Au(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+ie+`
`+W)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||V==="")&&(Q=!1);Q&&(k.diagnostics={runnable:K,programLog:te,vertexShader:{log:L,prefix:d},fragmentShader:{log:V,prefix:M}})}s.deleteShader(R),s.deleteShader(E),v=new us(s,p),b=N3(s,p)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(p,T3)),G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w3++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=E,this}var q3=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gl(e),t.set(e,i)),i}},Gl=class{constructor(e){this.id=q3++,this.code=e,this.usedTimes=0}};function $3(n,e,t,i,s,r,a){let o=new sr,l=new Hl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function p(v,b,G,k,te){let L=k.fog,V=te.geometry,K=v.isMeshStandardMaterial?k.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),ie=Q&&Q.mapping===Jo?Q.image.height:null,W=g[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let O=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,U=O!==void 0?O.length:0,q=0;V.morphAttributes.position!==void 0&&(q=1),V.morphAttributes.normal!==void 0&&(q=2),V.morphAttributes.color!==void 0&&(q=3);let D,z,se,re;if(W){let Y=_n[W];D=Y.vertexShader,z=Y.fragmentShader}else D=v.vertexShader,z=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),re=l.getFragmentShaderID(v);let fe=n.getRenderTarget(),de=te.isInstancedMesh===!0,me=te.isBatchedMesh===!0,xe=!!v.map,Te=!!v.matcap,T=!!Q,le=!!v.aoMap,ce=!!v.lightMap,be=!!v.bumpMap,ae=!!v.normalMap,Ne=!!v.displacementMap,Ee=!!v.emissiveMap,w=!!v.metalnessMap,y=!!v.roughnessMap,X=v.anisotropy>0,he=v.clearcoat>0,oe=v.iridescence>0,pe=v.sheen>0,Ae=v.transmission>0,$=X&&!!v.anisotropyMap,ne=he&&!!v.clearcoatMap,ve=he&&!!v.clearcoatNormalMap,we=he&&!!v.clearcoatRoughnessMap,ee=oe&&!!v.iridescenceMap,Ue=oe&&!!v.iridescenceThicknessMap,Fe=pe&&!!v.sheenColorMap,De=pe&&!!v.sheenRoughnessMap,Le=!!v.specularMap,Re=!!v.specularColorMap,ze=!!v.specularIntensityMap,je=Ae&&!!v.transmissionMap,nt=Ae&&!!v.thicknessMap,He=!!v.gradientMap,_e=!!v.alphaMap,N=v.alphaTest>0,Me=!!v.alphaHash,ge=!!v.extensions,ke=!!V.attributes.uv1,Be=!!V.attributes.uv2,tt=!!V.attributes.uv3,A=ii;return v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(A=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:D,fragmentShader:z,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:me,instancing:de,instancingColor:de&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Fn,map:xe,matcap:Te,envMap:T,envMapMode:T&&Q.mapping,envMapCubeUVHeight:ie,aoMap:le,lightMap:ce,bumpMap:be,normalMap:ae,displacementMap:f&&Ne,emissiveMap:Ee,normalMapObjectSpace:ae&&v.normalMapType===up,normalMapTangentSpace:ae&&v.normalMapType===rf,metalnessMap:w,roughnessMap:y,anisotropy:X,anisotropyMap:$,clearcoat:he,clearcoatMap:ne,clearcoatNormalMap:ve,clearcoatRoughnessMap:we,iridescence:oe,iridescenceMap:ee,iridescenceThicknessMap:Ue,sheen:pe,sheenColorMap:Fe,sheenRoughnessMap:De,specularMap:Le,specularColorMap:Re,specularIntensityMap:ze,transmission:Ae,transmissionMap:je,thicknessMap:nt,gradientMap:He,opaque:v.transparent===!1&&v.blending===cs,alphaMap:_e,alphaTest:N,alphaHash:Me,combine:v.combine,mapUv:xe&&x(v.map.channel),aoMapUv:le&&x(v.aoMap.channel),lightMapUv:ce&&x(v.lightMap.channel),bumpMapUv:be&&x(v.bumpMap.channel),normalMapUv:ae&&x(v.normalMap.channel),displacementMapUv:Ne&&x(v.displacementMap.channel),emissiveMapUv:Ee&&x(v.emissiveMap.channel),metalnessMapUv:w&&x(v.metalnessMap.channel),roughnessMapUv:y&&x(v.roughnessMap.channel),anisotropyMapUv:$&&x(v.anisotropyMap.channel),clearcoatMapUv:ne&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(v.sheenRoughnessMap.channel),specularMapUv:Le&&x(v.specularMap.channel),specularColorMapUv:Re&&x(v.specularColorMap.channel),specularIntensityMapUv:ze&&x(v.specularIntensityMap.channel),transmissionMapUv:je&&x(v.transmissionMap.channel),thicknessMapUv:nt&&x(v.thicknessMap.channel),alphaMapUv:_e&&x(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ae||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Be,vertexUv3s:tt,pointsUvs:te.isPoints===!0&&!!V.attributes.uv&&(xe||_e),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:te.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:A,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===ot,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ut,flipSided:v.side===It,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ge&&v.extensions.derivatives===!0,extensionFragDepth:ge&&v.extensions.fragDepth===!0,extensionDrawBuffers:ge&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let G in v.defines)b.push(G),b.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(M(b,v),_(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function _(v,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function C(v){let b=g[v.type],G;if(b){let k=_n[b];G=Op.clone(k.uniforms)}else G=v.uniforms;return G}function I(v,b){let G;for(let k=0,te=c.length;k<te;k++){let L=c[k];if(L.cacheKey===b){G=L,++G.usedTimes;break}}return G===void 0&&(G=new X3(n,b,v,r),c.push(G)),G}function R(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:C,acquireProgram:I,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:P}}function Y3(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Z3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Du(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,m,g,x,p){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=p),e++,d}function o(u,f,m,g,x,p){let d=a(u,f,m,g,x,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,x,p){let d=a(u,f,m,g,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Z3),i.length>1&&i.sort(f||Lu),s.length>1&&s.sort(f||Lu)}function h(){for(let u=e,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function K3(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Du,n.set(i,[a])):s>=r.length?(a=new Du,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function J3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new We};break;case"SpotLight":t={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function j3(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Q3=0;function e4(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function t4(n,e){let t=new J3,i=j3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,a=new ht,o=new ht;function l(h,u){let f=0,m=0,g=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let x=0,p=0,d=0,M=0,_=0,C=0,I=0,R=0,E=0,P=0,v=0;h.sort(e4);let b=u===!0?Math.PI:1;for(let k=0,te=h.length;k<te;k++){let L=h[k],V=L.color,K=L.intensity,Q=L.distance,ie=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=V.r*K*b,m+=V.g*K*b,g+=V.b*K*b;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],K);v++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let O=L.shadow,U=i.get(L);U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,s.directionalShadow[x]=U,s.directionalShadowMap[x]=ie,s.directionalShadowMatrix[x]=L.shadow.matrix,C++}s.directional[x]=W,x++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(V).multiplyScalar(K*b),W.distance=Q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[d]=W;let O=L.shadow;if(L.map&&(s.spotLightMap[E]=L.map,E++,O.updateMatrices(L),L.castShadow&&P++),s.spotLightMatrix[d]=O.matrix,L.castShadow){let U=i.get(L);U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,s.spotShadow[d]=U,s.spotShadowMap[d]=ie,R++}d++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(V).multiplyScalar(K),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[M]=W,M++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),W.distance=L.distance,W.decay=L.decay,L.castShadow){let O=L.shadow,U=i.get(L);U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,s.pointShadow[p]=U,s.pointShadowMap[p]=ie,s.pointShadowMatrix[p]=L.shadow.matrix,I++}s.point[p]=W,p++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(K*b),W.groundColor.copy(L.groundColor).multiplyScalar(K*b),s.hemi[_]=W,_++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let G=s.hash;(G.directionalLength!==x||G.pointLength!==p||G.spotLength!==d||G.rectAreaLength!==M||G.hemiLength!==_||G.numDirectionalShadows!==C||G.numPointShadows!==I||G.numSpotShadows!==R||G.numSpotMaps!==E||G.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=M,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+E-P,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=v,G.directionalLength=x,G.pointLength=p,G.spotLength=d,G.rectAreaLength=M,G.hemiLength=_,G.numDirectionalShadows=C,G.numPointShadows=I,G.numSpotShadows=R,G.numSpotMaps=E,G.numLightProbes=v,s.version=Q3++)}function c(h,u){let f=0,m=0,g=0,x=0,p=0,d=u.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let C=h[M];if(C.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),f++}else if(C.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),g++}else if(C.isRectAreaLight){let I=s.rectArea[x];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),o.identity(),a.copy(C.matrixWorld),a.premultiply(d),o.extractRotation(a),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(C.isPointLight){let I=s.point[m];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),m++}else if(C.isHemisphereLight){let I=s.hemi[p];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function Nu(n,e){let t=new t4(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n4(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Nu(n,e),t.set(r,[l])):a>=o.length?(l=new Nu(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Wl=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xl=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},i4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r4(n,e,t){let i=new rr,s=new et,r=new et,a=new vt,o=new Wl({depthPacking:hp}),l=new Xl,c={},h=t.maxTextureSize,u={[ri]:It,[It]:ri,[Ut]:Ut},f=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:i4,fragmentShader:s4}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let d=this.type;this.render=function(R,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ni),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let te=d!==Nn&&this.type===Nn,L=d===Nn&&this.type!==Nn;for(let V=0,K=R.length;V<K;V++){let Q=R[V],ie=Q.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let W=ie.getFrameExtents();if(s.multiply(W),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,ie.mapSize.y=r.y)),ie.map===null||te===!0||L===!0){let U=this.type!==Nn?{minFilter:Nt,magFilter:Nt}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Bn(s.x,s.y,U),ie.map.texture.name=Q.name+".shadowMap",ie.camera.updateProjectionMatrix()}n.setRenderTarget(ie.map),n.clear();let O=ie.getViewportCount();for(let U=0;U<O;U++){let q=ie.getViewport(U);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),k.viewport(a),ie.updateMatrices(Q,U),i=ie.getFrustum(),C(E,P,ie.camera,Q,this.type)}ie.isPointLightShadow!==!0&&this.type===Nn&&M(ie,P),ie.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(v,b,G)};function M(R,E){let P=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Bn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(E,null,P,m,x,null)}function _(R,E,P,v){let b=null,G=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)b=G;else if(b=P.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=b.uuid,te=E.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let V=L[te];V===void 0&&(V=b.clone(),L[te]=V,E.addEventListener("dispose",I)),b=V}if(b.visible=E.visible,b.wireframe=E.wireframe,v===Nn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=n.properties.get(b);k.light=P}return b}function C(R,E,P,v,b){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Nn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);let te=e.update(R),L=R.material;if(Array.isArray(L)){let V=te.groups;for(let K=0,Q=V.length;K<Q;K++){let ie=V[K],W=L[ie.materialIndex];if(W&&W.visible){let O=_(R,W,v,b);R.onBeforeShadow(n,R,E,P,te,O,ie),n.renderBufferDirect(P,null,te,O,R,ie),R.onAfterShadow(n,R,E,P,te,O,ie)}}}else if(L.visible){let V=_(R,L,v,b);R.onBeforeShadow(n,R,E,P,te,V,null),n.renderBufferDirect(P,null,te,V,R,null),R.onAfterShadow(n,R,E,P,te,V,null)}}let k=R.children;for(let te=0,L=k.length;te<L;te++)C(k[te],E,P,v,b)}function I(R){R.target.removeEventListener("dispose",I);for(let P in c){let v=c[P],b=R.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function o4(n,e,t){let i=t.isWebGL2;function s(){let N=!1,Me=new vt,ge=null,ke=new vt(0,0,0,0);return{setMask:function(Be){ge!==Be&&!N&&(n.colorMask(Be,Be,Be,Be),ge=Be)},setLocked:function(Be){N=Be},setClear:function(Be,tt,A,B,Y){Y===!0&&(Be*=B,tt*=B,A*=B),Me.set(Be,tt,A,B),ke.equals(Me)===!1&&(n.clearColor(Be,tt,A,B),ke.copy(Me))},reset:function(){N=!1,ge=null,ke.set(-1,0,0,0)}}}function r(){let N=!1,Me=null,ge=null,ke=null;return{setTest:function(Be){Be?me(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Be){Me!==Be&&!N&&(n.depthMask(Be),Me=Be)},setFunc:function(Be){if(ge!==Be){switch(Be){case k1:n.depthFunc(n.NEVER);break;case z1:n.depthFunc(n.ALWAYS);break;case V1:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case H1:n.depthFunc(n.EQUAL);break;case G1:n.depthFunc(n.GEQUAL);break;case W1:n.depthFunc(n.GREATER);break;case X1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Be}},setLocked:function(Be){N=Be},setClear:function(Be){ke!==Be&&(n.clearDepth(Be),ke=Be)},reset:function(){N=!1,Me=null,ge=null,ke=null}}}function a(){let N=!1,Me=null,ge=null,ke=null,Be=null,tt=null,A=null,B=null,Y=null;return{setTest:function(ue){N||(ue?me(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(ue){Me!==ue&&!N&&(n.stencilMask(ue),Me=ue)},setFunc:function(ue,$e,Qe){(ge!==ue||ke!==$e||Be!==Qe)&&(n.stencilFunc(ue,$e,Qe),ge=ue,ke=$e,Be=Qe)},setOp:function(ue,$e,Qe){(tt!==ue||A!==$e||B!==Qe)&&(n.stencilOp(ue,$e,Qe),tt=ue,A=$e,B=Qe)},setLocked:function(ue){N=ue},setClear:function(ue){Y!==ue&&(n.clearStencil(ue),Y=ue)},reset:function(){N=!1,Me=null,ge=null,ke=null,Be=null,tt=null,A=null,B=null,Y=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,x=[],p=null,d=!1,M=null,_=null,C=null,I=null,R=null,E=null,P=null,v=new We(0,0,0),b=0,G=!1,k=null,te=null,L=null,V=null,K=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,W=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),ie=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ie=W>=2);let U=null,q={},D=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),se=new vt().fromArray(D),re=new vt().fromArray(z);function fe(N,Me,ge,ke){let Be=new Uint8Array(4),tt=n.createTexture();n.bindTexture(N,tt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let A=0;A<ge;A++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Me+A,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return tt}let de={};de[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(de[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(n.DEPTH_TEST),l.setFunc(So),Ee(!1),w(ph),me(n.CULL_FACE),ae(ni);function me(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function xe(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function Te(N,Me){return m[N]!==Me?(n.bindFramebuffer(N,Me),m[N]=Me,i&&(N===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),N===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function T(N,Me){let ge=x,ke=!1;if(N)if(ge=g.get(Me),ge===void 0&&(ge=[],g.set(Me,ge)),N.isWebGLMultipleRenderTargets){let Be=N.texture;if(ge.length!==Be.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,A=Be.length;tt<A;tt++)ge[tt]=n.COLOR_ATTACHMENT0+tt;ge.length=Be.length,ke=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,ke=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,ke=!0);ke&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function le(N){return p!==N?(n.useProgram(N),p=N,!0):!1}let ce={[Si]:n.FUNC_ADD,[E1]:n.FUNC_SUBTRACT,[T1]:n.FUNC_REVERSE_SUBTRACT};if(i)ce[xh]=n.MIN,ce[_h]=n.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(ce[xh]=N.MIN_EXT,ce[_h]=N.MAX_EXT)}let be={[w1]:n.ZERO,[A1]:n.ONE,[R1]:n.SRC_COLOR,[El]:n.SRC_ALPHA,[N1]:n.SRC_ALPHA_SATURATE,[L1]:n.DST_COLOR,[P1]:n.DST_ALPHA,[C1]:n.ONE_MINUS_SRC_COLOR,[Tl]:n.ONE_MINUS_SRC_ALPHA,[D1]:n.ONE_MINUS_DST_COLOR,[I1]:n.ONE_MINUS_DST_ALPHA,[U1]:n.CONSTANT_COLOR,[O1]:n.ONE_MINUS_CONSTANT_COLOR,[F1]:n.CONSTANT_ALPHA,[B1]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(N,Me,ge,ke,Be,tt,A,B,Y,ue){if(N===ni){d===!0&&(xe(n.BLEND),d=!1);return}if(d===!1&&(me(n.BLEND),d=!0),N!==b1){if(N!==M||ue!==G){if((_!==Si||R!==Si)&&(n.blendEquation(n.FUNC_ADD),_=Si,R=Si),ue)switch(N){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tr:n.blendFunc(n.ONE,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}C=null,I=null,E=null,P=null,v.set(0,0,0),b=0,M=N,G=ue}return}Be=Be||Me,tt=tt||ge,A=A||ke,(Me!==_||Be!==R)&&(n.blendEquationSeparate(ce[Me],ce[Be]),_=Me,R=Be),(ge!==C||ke!==I||tt!==E||A!==P)&&(n.blendFuncSeparate(be[ge],be[ke],be[tt],be[A]),C=ge,I=ke,E=tt,P=A),(B.equals(v)===!1||Y!==b)&&(n.blendColor(B.r,B.g,B.b,Y),v.copy(B),b=Y),M=N,G=!1}function Ne(N,Me){N.side===Ut?xe(n.CULL_FACE):me(n.CULL_FACE);let ge=N.side===It;Me&&(ge=!ge),Ee(ge),N.blending===cs&&N.transparent===!1?ae(ni):ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);let ke=N.stencilWrite;c.setTest(ke),ke&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),X(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(N){k!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),k=N)}function w(N){N!==v1?(me(n.CULL_FACE),N!==te&&(N===ph?n.cullFace(n.BACK):N===M1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),te=N}function y(N){N!==L&&(ie&&n.lineWidth(N),L=N)}function X(N,Me,ge){N?(me(n.POLYGON_OFFSET_FILL),(V!==Me||K!==ge)&&(n.polygonOffset(Me,ge),V=Me,K=ge)):xe(n.POLYGON_OFFSET_FILL)}function he(N){N?me(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function oe(N){N===void 0&&(N=n.TEXTURE0+Q-1),U!==N&&(n.activeTexture(N),U=N)}function pe(N,Me,ge){ge===void 0&&(U===null?ge=n.TEXTURE0+Q-1:ge=U);let ke=q[ge];ke===void 0&&(ke={type:void 0,texture:void 0},q[ge]=ke),(ke.type!==N||ke.texture!==Me)&&(U!==ge&&(n.activeTexture(ge),U=ge),n.bindTexture(N,Me||de[N]),ke.type=N,ke.texture=Me)}function Ae(){let N=q[U];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(N){se.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function je(N){re.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function nt(N,Me){let ge=u.get(Me);ge===void 0&&(ge=new WeakMap,u.set(Me,ge));let ke=ge.get(N);ke===void 0&&(ke=n.getUniformBlockIndex(Me,N.name),ge.set(N,ke))}function He(N,Me){let ke=u.get(Me).get(N);h.get(Me)!==ke&&(n.uniformBlockBinding(Me,ke,N.__bindingPointIndex),h.set(Me,ke))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},U=null,q={},m={},g=new WeakMap,x=[],p=null,d=!1,M=null,_=null,C=null,I=null,R=null,E=null,P=null,v=new We(0,0,0),b=0,G=!1,k=null,te=null,L=null,V=null,K=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:me,disable:xe,bindFramebuffer:Te,drawBuffers:T,useProgram:le,setBlending:ae,setMaterial:Ne,setFlipSided:Ee,setCullFace:w,setLineWidth:y,setPolygonOffset:X,setScissorTest:he,activeTexture:oe,bindTexture:pe,unbindTexture:Ae,compressedTexImage2D:$,compressedTexImage3D:ne,texImage2D:Le,texImage3D:Re,updateUBOMapping:nt,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:De,texSubImage2D:ve,texSubImage3D:we,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ue,scissor:ze,viewport:je,reset:_e}}function a4(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return m?new OffscreenCanvas(w,y):Co("canvas")}function x(w,y,X,he){let oe=1;if((w.width>he||w.height>he)&&(oe=he/Math.max(w.width,w.height)),oe<1||y===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){let pe=y?Ll:Math.floor,Ae=pe(oe*w.width),$=pe(oe*w.height);u===void 0&&(u=g(Ae,$));let ne=X?g(Ae,$):u;return ne.width=Ae,ne.height=$,ne.getContext("2d").drawImage(w,0,0,Ae,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ae+"x"+$+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return Jh(w.width)&&Jh(w.height)}function d(w){return o?!1:w.wrapS!==cn||w.wrapT!==cn||w.minFilter!==Nt&&w.minFilter!==en}function M(w,y){return w.generateMipmaps&&y&&w.minFilter!==Nt&&w.minFilter!==en}function _(w){n.generateMipmap(w)}function C(w,y,X,he,oe=!1){if(o===!1)return y;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pe=y;if(y===n.RED&&(X===n.FLOAT&&(pe=n.R32F),X===n.HALF_FLOAT&&(pe=n.R16F),X===n.UNSIGNED_BYTE&&(pe=n.R8)),y===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(pe=n.R8UI),X===n.UNSIGNED_SHORT&&(pe=n.R16UI),X===n.UNSIGNED_INT&&(pe=n.R32UI),X===n.BYTE&&(pe=n.R8I),X===n.SHORT&&(pe=n.R16I),X===n.INT&&(pe=n.R32I)),y===n.RG&&(X===n.FLOAT&&(pe=n.RG32F),X===n.HALF_FLOAT&&(pe=n.RG16F),X===n.UNSIGNED_BYTE&&(pe=n.RG8)),y===n.RGBA){let Ae=oe?To:it.getTransfer(he);X===n.FLOAT&&(pe=n.RGBA32F),X===n.HALF_FLOAT&&(pe=n.RGBA16F),X===n.UNSIGNED_BYTE&&(pe=Ae===ot?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function I(w,y,X){return M(w,X)===!0||w.isFramebufferTexture&&w.minFilter!==Nt&&w.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function R(w){return w===Nt||w===yh||w===Xa?n.NEAREST:n.LINEAR}function E(w){let y=w.target;y.removeEventListener("dispose",E),v(y),y.isVideoTexture&&h.delete(y)}function P(w){let y=w.target;y.removeEventListener("dispose",P),G(y)}function v(w){let y=i.get(w);if(y.__webglInit===void 0)return;let X=w.source,he=f.get(X);if(he){let oe=he[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(w),Object.keys(he).length===0&&f.delete(X)}i.remove(w)}function b(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let X=w.source,he=f.get(X);delete he[y.__cacheKey],a.memory.textures--}function G(w){let y=w.texture,X=i.get(w),he=i.get(y);if(he.__webglTexture!==void 0&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(X.__webglFramebuffer[oe]))for(let pe=0;pe<X.__webglFramebuffer[oe].length;pe++)n.deleteFramebuffer(X.__webglFramebuffer[oe][pe]);else n.deleteFramebuffer(X.__webglFramebuffer[oe]);X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[oe])}else{if(Array.isArray(X.__webglFramebuffer))for(let oe=0;oe<X.__webglFramebuffer.length;oe++)n.deleteFramebuffer(X.__webglFramebuffer[oe]);else n.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let oe=0;oe<X.__webglColorRenderbuffer.length;oe++)X.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[oe]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let oe=0,pe=y.length;oe<pe;oe++){let Ae=i.get(y[oe]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),a.memory.textures--),i.remove(y[oe])}i.remove(y),i.remove(w)}let k=0;function te(){k=0}function L(){let w=k;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),k+=1,w}function V(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function K(w,y){let X=i.get(w);if(w.isVideoTexture&&Ne(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){let he=w.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(X,w,y);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+y)}function Q(w,y){let X=i.get(w);if(w.version>0&&X.__version!==w.version){se(X,w,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+y)}function ie(w,y){let X=i.get(w);if(w.version>0&&X.__version!==w.version){se(X,w,y);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+y)}function W(w,y){let X=i.get(w);if(w.version>0&&X.__version!==w.version){re(X,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+y)}let O={[Rl]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[Cl]:n.MIRRORED_REPEAT},U={[Nt]:n.NEAREST,[yh]:n.NEAREST_MIPMAP_NEAREST,[Xa]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[ep]:n.LINEAR_MIPMAP_NEAREST,[nr]:n.LINEAR_MIPMAP_LINEAR},q={[fp]:n.NEVER,[_p]:n.ALWAYS,[dp]:n.LESS,[of]:n.LEQUAL,[pp]:n.EQUAL,[xp]:n.GEQUAL,[mp]:n.GREATER,[gp]:n.NOTEQUAL};function D(w,y,X){if(X?(n.texParameteri(w,n.TEXTURE_WRAP_S,O[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,O[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,O[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,U[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,U[y.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==cn||y.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,R(y.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Nt&&y.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,q[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let he=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Nt||y.minFilter!==Xa&&y.minFilter!==nr||y.type===ti&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===ir&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(w,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function z(w,y){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",E));let he=y.source,oe=f.get(he);oe===void 0&&(oe={},f.set(he,oe));let pe=V(y);if(pe!==w.__cacheKey){oe[pe]===void 0&&(oe[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),oe[pe].usedTimes++;let Ae=oe[w.__cacheKey];Ae!==void 0&&(oe[w.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(y)),w.__cacheKey=pe,w.__webglTexture=oe[pe].texture}return X}function se(w,y,X){let he=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(he=n.TEXTURE_3D);let oe=z(w,y),pe=y.source;t.bindTexture(he,w.__webglTexture,n.TEXTURE0+X);let Ae=i.get(pe);if(pe.version!==Ae.__version||oe===!0){t.activeTexture(n.TEXTURE0+X);let $=it.getPrimaries(it.workingColorSpace),ne=y.colorSpace===tn?null:it.getPrimaries(y.colorSpace),ve=y.colorSpace===tn||$===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let we=d(y)&&p(y.image)===!1,ee=x(y.image,we,!1,s.maxTextureSize);ee=Ee(y,ee);let Ue=p(ee)||o,Fe=r.convert(y.format,y.colorSpace),De=r.convert(y.type),Le=C(y.internalFormat,Fe,De,y.colorSpace,y.isVideoTexture);D(he,y,Ue);let Re,ze=y.mipmaps,je=o&&y.isVideoTexture!==!0&&Le!==nf,nt=Ae.__version===void 0||oe===!0,He=I(y,ee,Ue);if(y.isDepthTexture)Le=n.DEPTH_COMPONENT,o?y.type===ti?Le=n.DEPTH_COMPONENT32F:y.type===ei?Le=n.DEPTH_COMPONENT24:y.type===Ti?Le=n.DEPTH24_STENCIL8:Le=n.DEPTH_COMPONENT16:y.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===wi&&Le===n.DEPTH_COMPONENT&&y.type!==hc&&y.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ei,De=r.convert(y.type)),y.format===ps&&Le===n.DEPTH_COMPONENT&&(Le=n.DEPTH_STENCIL,y.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ti,De=r.convert(y.type))),nt&&(je?t.texStorage2D(n.TEXTURE_2D,1,Le,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Le,ee.width,ee.height,0,Fe,De,null));else if(y.isDataTexture)if(ze.length>0&&Ue){je&&nt&&t.texStorage2D(n.TEXTURE_2D,He,Le,ze[0].width,ze[0].height);for(let _e=0,N=ze.length;_e<N;_e++)Re=ze[_e],je?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,Fe,De,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,Fe,De,Re.data);y.generateMipmaps=!1}else je?(nt&&t.texStorage2D(n.TEXTURE_2D,He,Le,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Fe,De,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ee.width,ee.height,0,Fe,De,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){je&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Le,ze[0].width,ze[0].height,ee.depth);for(let _e=0,N=ze.length;_e<N;_e++)Re=ze[_e],y.format!==hn?Fe!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,ee.depth,Fe,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Le,Re.width,Re.height,ee.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,ee.depth,Fe,De,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Le,Re.width,Re.height,ee.depth,0,Fe,De,Re.data)}else{je&&nt&&t.texStorage2D(n.TEXTURE_2D,He,Le,ze[0].width,ze[0].height);for(let _e=0,N=ze.length;_e<N;_e++)Re=ze[_e],y.format!==hn?Fe!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,Fe,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,Fe,De,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Le,Re.width,Re.height,0,Fe,De,Re.data)}else if(y.isDataArrayTexture)je?(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Le,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Fe,De,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ee.width,ee.height,ee.depth,0,Fe,De,ee.data);else if(y.isData3DTexture)je?(nt&&t.texStorage3D(n.TEXTURE_3D,He,Le,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Fe,De,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ee.width,ee.height,ee.depth,0,Fe,De,ee.data);else if(y.isFramebufferTexture){if(nt)if(je)t.texStorage2D(n.TEXTURE_2D,He,Le,ee.width,ee.height);else{let _e=ee.width,N=ee.height;for(let Me=0;Me<He;Me++)t.texImage2D(n.TEXTURE_2D,Me,Le,_e,N,0,Fe,De,null),_e>>=1,N>>=1}}else if(ze.length>0&&Ue){je&&nt&&t.texStorage2D(n.TEXTURE_2D,He,Le,ze[0].width,ze[0].height);for(let _e=0,N=ze.length;_e<N;_e++)Re=ze[_e],je?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Fe,De,Re):t.texImage2D(n.TEXTURE_2D,_e,Le,Fe,De,Re);y.generateMipmaps=!1}else je?(nt&&t.texStorage2D(n.TEXTURE_2D,He,Le,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe,De,ee)):t.texImage2D(n.TEXTURE_2D,0,Le,Fe,De,ee);M(y,Ue)&&_(he),Ae.__version=pe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function re(w,y,X){if(y.image.length!==6)return;let he=z(w,y),oe=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+X);let pe=i.get(oe);if(oe.version!==pe.__version||he===!0){t.activeTexture(n.TEXTURE0+X);let Ae=it.getPrimaries(it.workingColorSpace),$=y.colorSpace===tn?null:it.getPrimaries(y.colorSpace),ne=y.colorSpace===tn||Ae===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ve=y.isCompressedTexture||y.image[0].isCompressedTexture,we=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let _e=0;_e<6;_e++)!ve&&!we?ee[_e]=x(y.image[_e],!1,!0,s.maxCubemapSize):ee[_e]=we?y.image[_e].image:y.image[_e],ee[_e]=Ee(y,ee[_e]);let Ue=ee[0],Fe=p(Ue)||o,De=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),Re=C(y.internalFormat,De,Le,y.colorSpace),ze=o&&y.isVideoTexture!==!0,je=pe.__version===void 0||he===!0,nt=I(y,Ue,Fe);D(n.TEXTURE_CUBE_MAP,y,Fe);let He;if(ve){ze&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,nt,Re,Ue.width,Ue.height);for(let _e=0;_e<6;_e++){He=ee[_e].mipmaps;for(let N=0;N<He.length;N++){let Me=He[N];y.format!==hn?De!==null?ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N,0,0,Me.width,Me.height,De,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N,Re,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N,0,0,Me.width,Me.height,De,Le,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N,Re,Me.width,Me.height,0,De,Le,Me.data)}}}else{He=y.mipmaps,ze&&je&&(He.length>0&&nt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,nt,Re,ee[0].width,ee[0].height));for(let _e=0;_e<6;_e++)if(we){ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ee[_e].width,ee[_e].height,De,Le,ee[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Re,ee[_e].width,ee[_e].height,0,De,Le,ee[_e].data);for(let N=0;N<He.length;N++){let ge=He[N].image[_e].image;ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N+1,0,0,ge.width,ge.height,De,Le,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N+1,Re,ge.width,ge.height,0,De,Le,ge.data)}}else{ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,De,Le,ee[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Re,De,Le,ee[_e]);for(let N=0;N<He.length;N++){let Me=He[N];ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N+1,0,0,De,Le,Me.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,N+1,Re,De,Le,Me.image[_e])}}}M(y,Fe)&&_(n.TEXTURE_CUBE_MAP),pe.__version=oe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function fe(w,y,X,he,oe,pe){let Ae=r.convert(X.format,X.colorSpace),$=r.convert(X.type),ne=C(X.internalFormat,Ae,$,X.colorSpace);if(!i.get(y).__hasExternalTextures){let we=Math.max(1,y.width>>pe),ee=Math.max(1,y.height>>pe);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,pe,ne,we,ee,y.depth,0,Ae,$,null):t.texImage2D(oe,pe,ne,we,ee,0,Ae,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ae(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,oe,i.get(X).__webglTexture,0,be(y)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,oe,i.get(X).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(w,y,X){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let he=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||ae(y)){let oe=y.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ti?he=n.DEPTH_COMPONENT32F:oe.type===ei&&(he=n.DEPTH_COMPONENT24));let pe=be(y);ae(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,he,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,he,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){let he=be(y);X&&ae(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,n.DEPTH24_STENCIL8,y.width,y.height):ae(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let he=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let oe=0;oe<he.length;oe++){let pe=he[oe],Ae=r.convert(pe.format,pe.colorSpace),$=r.convert(pe.type),ne=C(pe.internalFormat,Ae,$,pe.colorSpace),ve=be(y);X&&ae(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ne,y.width,y.height):ae(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ne,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ne,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let he=i.get(y.depthTexture).__webglTexture,oe=be(y);if(y.depthTexture.format===wi)ae(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(y.depthTexture.format===ps)ae(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function xe(w){let y=i.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");me(y.__webglFramebuffer,w)}else if(X){y.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[he]),y.__webglDepthbuffer[he]=n.createRenderbuffer(),de(y.__webglDepthbuffer[he],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),de(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(w,y,X){let he=i.get(w);y!==void 0&&fe(he.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&xe(w)}function T(w){let y=w.texture,X=i.get(w),he=i.get(y);w.addEventListener("dispose",P),w.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=y.version,a.memory.textures++);let oe=w.isWebGLCubeRenderTarget===!0,pe=w.isWebGLMultipleRenderTargets===!0,Ae=p(w)||o;if(oe){X.__webglFramebuffer=[];for(let $=0;$<6;$++)if(o&&y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[$]=[];for(let ne=0;ne<y.mipmaps.length;ne++)X.__webglFramebuffer[$][ne]=n.createFramebuffer()}else X.__webglFramebuffer[$]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)X.__webglFramebuffer[$]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){let $=w.texture;for(let ne=0,ve=$.length;ne<ve;ne++){let we=i.get($[ne]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ae(w)===!1){let $=pe?y:[y];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){let ve=$[ne];X.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ne]);let we=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),Ue=C(ve.internalFormat,we,ee,ve.colorSpace,w.isXRRenderTarget===!0),Fe=be(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ue,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,X.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),de(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),D(n.TEXTURE_CUBE_MAP,y,Ae);for(let $=0;$<6;$++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)fe(X.__webglFramebuffer[$][ne],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne);else fe(X.__webglFramebuffer[$],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);M(y,Ae)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let $=w.texture;for(let ne=0,ve=$.length;ne<ve;ne++){let we=$[ne],ee=i.get(we);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),D(n.TEXTURE_2D,we,Ae),fe(X.__webglFramebuffer,w,we,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),M(we,Ae)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?$=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,he.__webglTexture),D($,y,Ae),o&&y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)fe(X.__webglFramebuffer[ne],w,y,n.COLOR_ATTACHMENT0,$,ne);else fe(X.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,$,0);M(y,Ae)&&_($),t.unbindTexture()}w.depthBuffer&&xe(w)}function le(w){let y=p(w)||o,X=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let he=0,oe=X.length;he<oe;he++){let pe=X[he];if(M(pe,y)){let Ae=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,$=i.get(pe).__webglTexture;t.bindTexture(Ae,$),_(Ae),t.unbindTexture()}}}function ce(w){if(o&&w.samples>0&&ae(w)===!1){let y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],X=w.width,he=w.height,oe=n.COLOR_BUFFER_BIT,pe=[],Ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=i.get(w),ne=w.isWebGLMultipleRenderTargets===!0;if(ne)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){pe.push(n.COLOR_ATTACHMENT0+ve),w.depthBuffer&&pe.push(Ae);let we=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(we===!1&&(w.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$.__webglColorRenderbuffer[ve]),we===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),ne){let ee=i.get(y[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,X,he,0,0,X,he,oe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,$.__webglColorRenderbuffer[ve]);let we=i.get(y[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}}function be(w){return Math.min(s.maxSamples,w.samples)}function ae(w){let y=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ne(w){let y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Ee(w,y){let X=w.colorSpace,he=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Pl||X!==Fn&&X!==tn&&(it.getTransfer(X)===ot?o===!1?e.has("EXT_sRGB")===!0&&he===hn?(w.format=Pl,w.minFilter=en,w.generateMipmaps=!1):y=Po.sRGBToLinear(y):(he!==hn||oe!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Te,this.setupRenderTarget=T,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ae}function l4(n,e,t){let i=t.isWebGL2;function s(r,a=tn){let o,l=it.getTransfer(a);if(r===si)return n.UNSIGNED_BYTE;if(r===Ju)return n.UNSIGNED_SHORT_4_4_4_4;if(r===ju)return n.UNSIGNED_SHORT_5_5_5_1;if(r===tp)return n.BYTE;if(r===np)return n.SHORT;if(r===hc)return n.UNSIGNED_SHORT;if(r===Ku)return n.INT;if(r===ei)return n.UNSIGNED_INT;if(r===ti)return n.FLOAT;if(r===ir)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ip)return n.ALPHA;if(r===hn)return n.RGBA;if(r===sp)return n.LUMINANCE;if(r===rp)return n.LUMINANCE_ALPHA;if(r===wi)return n.DEPTH_COMPONENT;if(r===ps)return n.DEPTH_STENCIL;if(r===Pl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===op)return n.RED;if(r===Qu)return n.RED_INTEGER;if(r===ap)return n.RG;if(r===ef)return n.RG_INTEGER;if(r===tf)return n.RGBA_INTEGER;if(r===qa||r===$a||r===Ya||r===Za)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===qa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===qa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$a)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ya)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Za)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vh||r===Mh||r===Sh||r===bh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===vh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Eh||r===Th)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Eh)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Th)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wh||r===Ah||r===Rh||r===Ch||r===Ph||r===Ih||r===Lh||r===Dh||r===Nh||r===Uh||r===Oh||r===Fh||r===Bh||r===kh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===wh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ch)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ph)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ih)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ka||r===zh||r===Vh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ka)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lp||r===Hh||r===Gh||r===Wh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ka)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Hh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ti?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ql=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Zt=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},c4={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c4)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$l=class extends oi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,x=t.getContextAttributes(),p=null,d=null,M=[],_=[],C=new et,I=null,R=new wt;R.layers.enable(1),R.viewport=new vt;let E=new wt;E.layers.enable(2),E.viewport=new vt;let P=[R,E],v=new ql;v.layers.enable(1),v.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let z=M[D];return z===void 0&&(z=new er,M[D]=z),z.getTargetRaySpace()},this.getControllerGrip=function(D){let z=M[D];return z===void 0&&(z=new er,M[D]=z),z.getGripSpace()},this.getHand=function(D){let z=M[D];return z===void 0&&(z=new er,M[D]=z),z.getHandSpace()};function k(D){let z=_.indexOf(D.inputSource);if(z===-1)return;let se=M[z];se!==void 0&&(se.update(D.inputSource,D.frame,c||a),se.dispatchEvent({type:D.type,data:D.inputSource}))}function te(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",L);for(let D=0;D<M.length;D++){let z=_[D];z!==null&&(_[D]=null,M[D].disconnect(z))}b=null,G=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,q.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",te),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let z={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,z),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Bn(m.framebufferWidth,m.framebufferHeight,{format:hn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let z=null,se=null,re=null;x.depth&&(re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=x.stencil?ps:wi,se=x.stencil?Ti:ei);let fe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Bn(f.textureWidth,f.textureHeight,{format:hn,type:si,depthTexture:new zo(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let de=e.properties.get(d);de.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),q.setContext(s),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(D){for(let z=0;z<D.removed.length;z++){let se=D.removed[z],re=_.indexOf(se);re>=0&&(_[re]=null,M[re].disconnect(se))}for(let z=0;z<D.added.length;z++){let se=D.added[z],re=_.indexOf(se);if(re===-1){for(let de=0;de<M.length;de++)if(de>=_.length){_.push(se),re=de;break}else if(_[de]===null){_[de]=se,re=de;break}if(re===-1)break}let fe=M[re];fe&&fe.connect(se)}}let V=new F,K=new F;function Q(D,z,se){V.setFromMatrixPosition(z.matrixWorld),K.setFromMatrixPosition(se.matrixWorld);let re=V.distanceTo(K),fe=z.projectionMatrix.elements,de=se.projectionMatrix.elements,me=fe[14]/(fe[10]-1),xe=fe[14]/(fe[10]+1),Te=(fe[9]+1)/fe[5],T=(fe[9]-1)/fe[5],le=(fe[8]-1)/fe[0],ce=(de[8]+1)/de[0],be=me*le,ae=me*ce,Ne=re/(-le+ce),Ee=Ne*-le;z.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ee),D.translateZ(Ne),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();let w=me+Ne,y=xe+Ne,X=be-Ee,he=ae+(re-Ee),oe=Te*xe/y*w,pe=T*xe/y*w;D.projectionMatrix.makePerspective(X,he,oe,pe,w,y),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function ie(D,z){z===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(z.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;v.near=E.near=R.near=D.near,v.far=E.far=R.far=D.far,(b!==v.near||G!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,G=v.far);let z=D.parent,se=v.cameras;ie(v,z);for(let re=0;re<se.length;re++)ie(se[re],z);se.length===2?Q(v,R,E):v.projectionMatrix.copy(R.projectionMatrix),W(D,v,z)};function W(D,z,se){se===null?D.matrix.copy(z.matrixWorld):(D.matrix.copy(se.matrixWorld),D.matrix.invert(),D.matrix.multiply(z.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(z.projectionMatrix),D.projectionMatrixInverse.copy(z.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Il*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)};let O=null;function U(D,z){if(h=z.getViewerPose(c||a),g=z,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let re=!1;se.length!==v.cameras.length&&(v.cameras.length=0,re=!0);for(let fe=0;fe<se.length;fe++){let de=se[fe],me=null;if(m!==null)me=m.getViewport(de);else{let Te=u.getViewSubImage(f,de);me=Te.viewport,fe===0&&(e.setRenderTargetTextures(d,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(d))}let xe=P[fe];xe===void 0&&(xe=new wt,xe.layers.enable(fe),xe.viewport=new vt,P[fe]=xe),xe.matrix.fromArray(de.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(de.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(me.x,me.y,me.width,me.height),fe===0&&(v.matrix.copy(xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),re===!0&&v.cameras.push(xe)}}for(let se=0;se<M.length;se++){let re=_[se],fe=M[se];re!==null&&fe!==void 0&&fe.update(re,z,c||a)}O&&O(D,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),g=null}let q=new uf;q.setAnimationLoop(U),this.setAnimationLoop=function(D){O=D},this.dispose=function(){}}};function h4(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,hf(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,_,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,C)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,M,_):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===It&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===It&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=_*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function u4(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let C=_.program;i.uniformBlockBinding(M,C)}function c(M,_){let C=s[M.id];C===void 0&&(g(M),C=h(M),s[M.id]=C,M.addEventListener("dispose",p));let I=_.program;i.updateUBOMapping(M,I);let R=e.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function h(M){let _=u();M.__bindingPointIndex=_;let C=n.createBuffer(),I=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,C),C}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=s[M.id],C=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,E=C.length;R<E;R++){let P=Array.isArray(C[R])?C[R]:[C[R]];for(let v=0,b=P.length;v<b;v++){let G=P[v];if(m(G,R,v,I)===!0){let k=G.__offset,te=Array.isArray(G.value)?G.value:[G.value],L=0;for(let V=0;V<te.length;V++){let K=te[V],Q=x(K);typeof K=="number"||typeof K=="boolean"?(G.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,k+L,G.__data)):K.isMatrix3?(G.__data[0]=K.elements[0],G.__data[1]=K.elements[1],G.__data[2]=K.elements[2],G.__data[3]=0,G.__data[4]=K.elements[3],G.__data[5]=K.elements[4],G.__data[6]=K.elements[5],G.__data[7]=0,G.__data[8]=K.elements[6],G.__data[9]=K.elements[7],G.__data[10]=K.elements[8],G.__data[11]=0):(K.toArray(G.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,_,C,I){let R=M.value,E=_+"_"+C;if(I[E]===void 0)return typeof R=="number"||typeof R=="boolean"?I[E]=R:I[E]=R.clone(),!0;{let P=I[E];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return I[E]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(M){let _=M.uniforms,C=0,I=16;for(let E=0,P=_.length;E<P;E++){let v=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,G=v.length;b<G;b++){let k=v[b],te=Array.isArray(k.value)?k.value:[k.value];for(let L=0,V=te.length;L<V;L++){let K=te[L],Q=x(K),ie=C%I;ie!==0&&I-ie<Q.boundary&&(C+=I-ie),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=C,C+=Q.storage}}}let R=C%I;return R>0&&(C+=I-R),M.__size=C,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){let _=M.target;_.removeEventListener("dispose",p);let C=a.indexOf(_.__bindingPointIndex);a.splice(C,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Ri=class{constructor(e={}){let{canvas:t=vp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;let _=this,C=!1,I=0,R=0,E=null,P=-1,v=null,b=new vt,G=new vt,k=null,te=new We(0),L=0,V=t.width,K=t.height,Q=1,ie=null,W=null,O=new vt(0,0,V,K),U=new vt(0,0,V,K),q=!1,D=new rr,z=!1,se=!1,re=null,fe=new ht,de=new et,me=new F,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return E===null?Q:1}let T=i;function le(S,H){for(let J=0;J<S.length;J++){let j=S[J],Z=t.getContext(j,H);if(Z!==null)return Z}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",Me,!1),T===null){let H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),T=le(H,S),T===null)throw le(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&T instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),T.getShaderPrecisionFormat===void 0&&(T.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ce,be,ae,Ne,Ee,w,y,X,he,oe,pe,Ae,$,ne,ve,we,ee,Ue,Fe,De,Le,Re,ze,je;function nt(){ce=new P2(T),be=new E2(T,ce,e),ce.init(be),Re=new l4(T,ce,be),ae=new o4(T,ce,be),Ne=new D2(T),Ee=new Y3,w=new a4(T,ce,ae,Ee,be,Re,Ne),y=new w2(_),X=new C2(_),he=new Vp(T,be),ze=new S2(T,ce,he,be),oe=new I2(T,he,Ne,ze),pe=new F2(T,oe,he,Ne),Fe=new O2(T,be,w),we=new T2(Ee),Ae=new $3(_,y,X,ce,be,ze,we),$=new h4(_,Ee),ne=new K3,ve=new n4(ce,be),Ue=new M2(_,y,X,ae,pe,f,l),ee=new r4(_,pe,be),je=new u4(T,Ne,be,ae),De=new b2(T,ce,Ne,be),Le=new L2(T,ce,Ne,be),Ne.programs=Ae.programs,_.capabilities=be,_.extensions=ce,_.properties=Ee,_.renderLists=ne,_.shadowMap=ee,_.state=ae,_.info=Ne}nt();let He=new $l(_,T);this.xr=He,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(V,K,!1))},this.getSize=function(S){return S.set(V,K)},this.setSize=function(S,H,J=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,K=H,t.width=Math.floor(S*Q),t.height=Math.floor(H*Q),J===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(V*Q,K*Q).floor()},this.setDrawingBufferSize=function(S,H,J){V=S,K=H,Q=J,t.width=Math.floor(S*J),t.height=Math.floor(H*J),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(O)},this.setViewport=function(S,H,J,j){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,H,J,j),ae.viewport(b.copy(O).multiplyScalar(Q).floor())},this.getScissor=function(S){return S.copy(U)},this.setScissor=function(S,H,J,j){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,H,J,j),ae.scissor(G.copy(U).multiplyScalar(Q).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(S){ae.setScissorTest(q=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(S=!0,H=!0,J=!0){let j=0;if(S){let Z=!1;if(E!==null){let Pe=E.texture.format;Z=Pe===tf||Pe===ef||Pe===Qu}if(Z){let Pe=E.texture.type,Oe=Pe===si||Pe===ei||Pe===hc||Pe===Ti||Pe===Ju||Pe===ju,Ve=Ue.getClearColor(),Ge=Ue.getClearAlpha(),Ze=Ve.r,Xe=Ve.g,qe=Ve.b;Oe?(m[0]=Ze,m[1]=Xe,m[2]=qe,m[3]=Ge,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=Ze,g[1]=Xe,g[2]=qe,g[3]=Ge,T.clearBufferiv(T.COLOR,0,g))}else j|=T.COLOR_BUFFER_BIT}H&&(j|=T.DEPTH_BUFFER_BIT),J&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ne.dispose(),ve.dispose(),Ee.dispose(),y.dispose(),X.dispose(),pe.dispose(),ze.dispose(),je.dispose(),Ae.dispose(),He.dispose(),He.removeEventListener("sessionstart",Y),He.removeEventListener("sessionend",ue),re&&(re.dispose(),re=null),$e.stop()};function _e(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=Ne.autoReset,H=ee.enabled,J=ee.autoUpdate,j=ee.needsUpdate,Z=ee.type;nt(),Ne.autoReset=S,ee.enabled=H,ee.autoUpdate=J,ee.needsUpdate=j,ee.type=Z}function Me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ge(S){let H=S.target;H.removeEventListener("dispose",ge),ke(H)}function ke(S){Be(S),Ee.remove(S)}function Be(S){let H=Ee.get(S).programs;H!==void 0&&(H.forEach(function(J){Ae.releaseProgram(J)}),S.isShaderMaterial&&Ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,J,j,Z,Pe){H===null&&(H=xe);let Oe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ve=g1(S,H,J,j,Z);ae.setMaterial(j,Oe);let Ge=J.index,Ze=1;if(j.wireframe===!0){if(Ge=oe.getWireframeAttribute(J),Ge===void 0)return;Ze=2}let Xe=J.drawRange,qe=J.attributes.position,pt=Xe.start*Ze,qt=(Xe.start+Xe.count)*Ze;Pe!==null&&(pt=Math.max(pt,Pe.start*Ze),qt=Math.min(qt,(Pe.start+Pe.count)*Ze)),Ge!==null?(pt=Math.max(pt,0),qt=Math.min(qt,Ge.count)):qe!=null&&(pt=Math.max(pt,0),qt=Math.min(qt,qe.count));let _t=qt-pt;if(_t<0||_t===1/0)return;ze.setup(Z,j,Ve,J,Ge);let Rn,ct=De;if(Ge!==null&&(Rn=he.get(Ge),ct=Le,ct.setIndex(Rn)),Z.isMesh)j.wireframe===!0?(ae.setLineWidth(j.wireframeLinewidth*Te()),ct.setMode(T.LINES)):ct.setMode(T.TRIANGLES);else if(Z.isLine){let Ke=j.linewidth;Ke===void 0&&(Ke=1),ae.setLineWidth(Ke*Te()),Z.isLineSegments?ct.setMode(T.LINES):Z.isLineLoop?ct.setMode(T.LINE_LOOP):ct.setMode(T.LINE_STRIP)}else Z.isPoints?ct.setMode(T.POINTS):Z.isSprite&&ct.setMode(T.TRIANGLES);if(Z.isBatchedMesh)ct.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)ct.renderInstances(pt,_t,Z.count);else if(J.isInstancedBufferGeometry){let Ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Va=Math.min(J.instanceCount,Ke);ct.renderInstances(pt,_t,Va)}else ct.render(pt,_t)};function tt(S,H,J){S.transparent===!0&&S.side===Ut&&S.forceSinglePass===!1?(S.side=It,S.needsUpdate=!0,pi(S,H,J),S.side=ri,S.needsUpdate=!0,pi(S,H,J),S.side=Ut):pi(S,H,J)}this.compile=function(S,H,J=null){J===null&&(J=S),p=ve.get(J),p.init(),M.push(p),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),S!==J&&S.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights(_._useLegacyLights);let j=new Set;return S.traverse(function(Z){let Pe=Z.material;if(Pe)if(Array.isArray(Pe))for(let Oe=0;Oe<Pe.length;Oe++){let Ve=Pe[Oe];tt(Ve,J,Z),j.add(Ve)}else tt(Pe,J,Z),j.add(Pe)}),M.pop(),p=null,j},this.compileAsync=function(S,H,J=null){let j=this.compile(S,H,J);return new Promise(Z=>{function Pe(){if(j.forEach(function(Oe){Ee.get(Oe).currentProgram.isReady()&&j.delete(Oe)}),j.size===0){Z(S);return}setTimeout(Pe,10)}ce.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let A=null;function B(S){A&&A(S)}function Y(){$e.stop()}function ue(){$e.start()}let $e=new uf;$e.setAnimationLoop(B),typeof self!="undefined"&&$e.setContext(self),this.setAnimationLoop=function(S){A=S,He.setAnimationLoop(S),S===null?$e.stop():$e.start()},He.addEventListener("sessionstart",Y),He.addEventListener("sessionend",ue),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(H),H=He.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,H,E),p=ve.get(S,M.length),p.init(),M.push(p),fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),D.setFromProjectionMatrix(fe),se=this.localClippingEnabled,z=we.init(this.clippingPlanes,se),x=ne.get(S,d.length),x.init(),d.push(x),Qe(S,H,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(ie,W),this.info.render.frame++,z===!0&&we.beginShadows();let J=p.state.shadowsArray;if(ee.render(J,S,H),z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ue.render(x,S),p.setupLights(_._useLegacyLights),H.isArrayCamera){let j=H.cameras;for(let Z=0,Pe=j.length;Z<Pe;Z++){let Oe=j[Z];rn(x,S,Oe,Oe.viewport)}}else rn(x,S,H);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(_,S,H),ze.resetDefaultState(),P=-1,v=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Qe(S,H,J,j){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||D.intersectsSprite(S)){j&&me.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);let Oe=pe.update(S),Ve=S.material;Ve.visible&&x.push(S,Oe,Ve,J,me.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||D.intersectsObject(S))){let Oe=pe.update(S),Ve=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),me.copy(S.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),me.copy(Oe.boundingSphere.center)),me.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(Ve)){let Ge=Oe.groups;for(let Ze=0,Xe=Ge.length;Ze<Xe;Ze++){let qe=Ge[Ze],pt=Ve[qe.materialIndex];pt&&pt.visible&&x.push(S,Oe,pt,J,me.z,qe)}}else Ve.visible&&x.push(S,Oe,Ve,J,me.z,null)}}let Pe=S.children;for(let Oe=0,Ve=Pe.length;Oe<Ve;Oe++)Qe(Pe[Oe],H,J,j)}function rn(S,H,J,j){let Z=S.opaque,Pe=S.transmissive,Oe=S.transparent;p.setupLightsView(J),z===!0&&we.setGlobalState(_.clippingPlanes,J),Pe.length>0&&Gi(Z,Pe,H,J),j&&ae.viewport(b.copy(j)),Z.length>0&&xn(Z,H,J),Pe.length>0&&xn(Pe,H,J),Oe.length>0&&xn(Oe,H,J),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Gi(S,H,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Pe=be.isWebGL2;re===null&&(re=new Bn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?ir:si,minFilter:nr,samples:Pe?4:0})),_.getDrawingBufferSize(de),Pe?re.setSize(de.x,de.y):re.setSize(Ll(de.x),Ll(de.y));let Oe=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(te),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Ve=_.toneMapping;_.toneMapping=ii,xn(S,J,j),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re);let Ge=!1;for(let Ze=0,Xe=H.length;Ze<Xe;Ze++){let qe=H[Ze],pt=qe.object,qt=qe.geometry,_t=qe.material,Rn=qe.group;if(_t.side===Ut&&pt.layers.test(j.layers)){let ct=_t.side;_t.side=It,_t.needsUpdate=!0,Hr(pt,J,j,qt,_t,Rn),_t.side=ct,_t.needsUpdate=!0,Ge=!0}}Ge===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re)),_.setRenderTarget(Oe),_.setClearColor(te,L),_.toneMapping=Ve}function xn(S,H,J){let j=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Pe=S.length;Z<Pe;Z++){let Oe=S[Z],Ve=Oe.object,Ge=Oe.geometry,Ze=j===null?Oe.material:j,Xe=Oe.group;Ve.layers.test(J.layers)&&Hr(Ve,H,J,Ge,Ze,Xe)}}function Hr(S,H,J,j,Z,Pe){S.onBeforeRender(_,H,J,j,Z,Pe),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(_,H,J,j,S,Pe),Z.transparent===!0&&Z.side===Ut&&Z.forceSinglePass===!1?(Z.side=It,Z.needsUpdate=!0,_.renderBufferDirect(J,H,j,Z,S,Pe),Z.side=ri,Z.needsUpdate=!0,_.renderBufferDirect(J,H,j,Z,S,Pe),Z.side=Ut):_.renderBufferDirect(J,H,j,Z,S,Pe),S.onAfterRender(_,H,J,j,Z,Pe)}function pi(S,H,J){H.isScene!==!0&&(H=xe);let j=Ee.get(S),Z=p.state.lights,Pe=p.state.shadowsArray,Oe=Z.state.version,Ve=Ae.getParameters(S,Z.state,Pe,H,J),Ge=Ae.getProgramCacheKey(Ve),Ze=j.programs;j.environment=S.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(S.isMeshStandardMaterial?X:y).get(S.envMap||j.environment),Ze===void 0&&(S.addEventListener("dispose",ge),Ze=new Map,j.programs=Ze);let Xe=Ze.get(Ge);if(Xe!==void 0){if(j.currentProgram===Xe&&j.lightsStateVersion===Oe)return uh(S,Ve),Xe}else Ve.uniforms=Ae.getUniforms(S),S.onBuild(J,Ve,_),S.onBeforeCompile(Ve,_),Xe=Ae.acquireProgram(Ve,Ge),Ze.set(Ge,Xe),j.uniforms=Ve.uniforms;let qe=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(qe.clippingPlanes=we.uniform),uh(S,Ve),j.needsLights=_1(S),j.lightsStateVersion=Oe,j.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.currentProgram=Xe,j.uniformsList=null,Xe}function Gr(S){if(S.uniformsList===null){let H=S.currentProgram.getUniforms();S.uniformsList=us.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function uh(S,H){let J=Ee.get(S);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function g1(S,H,J,j,Z){H.isScene!==!0&&(H=xe),w.resetTextureUnits();let Pe=H.fog,Oe=j.isMeshStandardMaterial?H.environment:null,Ve=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Fn,Ge=(j.isMeshStandardMaterial?X:y).get(j.envMap||Oe),Ze=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),qe=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,qt=!!J.morphAttributes.color,_t=ii;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_t=_.toneMapping);let Rn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ct=Rn!==void 0?Rn.length:0,Ke=Ee.get(j),Va=p.state.lights;if(z===!0&&(se===!0||S!==v)){let jt=S===v&&j.id===P;we.setState(j,S,jt)}let ut=!1;j.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Va.state.version||Ke.outputColorSpace!==Ve||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Ke.envMap!==Ge||j.fog===!0&&Ke.fog!==Pe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==Ze||Ke.vertexTangents!==Xe||Ke.morphTargets!==qe||Ke.morphNormals!==pt||Ke.morphColors!==qt||Ke.toneMapping!==_t||be.isWebGL2===!0&&Ke.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Ke.__version=j.version);let mi=Ke.currentProgram;ut===!0&&(mi=pi(j,H,Z));let fh=!1,Xs=!1,Ha=!1,Rt=mi.getUniforms(),gi=Ke.uniforms;if(ae.useProgram(mi.program)&&(fh=!0,Xs=!0,Ha=!0),j.id!==P&&(P=j.id,Xs=!0),fh||v!==S){Rt.setValue(T,"projectionMatrix",S.projectionMatrix),Rt.setValue(T,"viewMatrix",S.matrixWorldInverse);let jt=Rt.map.cameraPosition;jt!==void 0&&jt.setValue(T,me.setFromMatrixPosition(S.matrixWorld)),be.logarithmicDepthBuffer&&Rt.setValue(T,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Rt.setValue(T,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Xs=!0,Ha=!0)}if(Z.isSkinnedMesh){Rt.setOptional(T,Z,"bindMatrix"),Rt.setOptional(T,Z,"bindMatrixInverse");let jt=Z.skeleton;jt&&(be.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Rt.setValue(T,"boneTexture",jt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Rt.setOptional(T,Z,"batchingTexture"),Rt.setValue(T,"batchingTexture",Z._matricesTexture,w));let Ga=J.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0&&be.isWebGL2===!0)&&Fe.update(Z,J,mi),(Xs||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Rt.setValue(T,"receiveShadow",Z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gi.envMap.value=Ge,gi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Xs&&(Rt.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&x1(gi,Ha),Pe&&j.fog===!0&&$.refreshFogUniforms(gi,Pe),$.refreshMaterialUniforms(gi,j,Q,K,re),us.upload(T,Gr(Ke),gi,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(us.upload(T,Gr(Ke),gi,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Rt.setValue(T,"center",Z.center),Rt.setValue(T,"modelViewMatrix",Z.modelViewMatrix),Rt.setValue(T,"normalMatrix",Z.normalMatrix),Rt.setValue(T,"modelMatrix",Z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let jt=j.uniformsGroups;for(let Wa=0,y1=jt.length;Wa<y1;Wa++)if(be.isWebGL2){let dh=jt[Wa];je.update(dh,mi),je.bind(dh,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function x1(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function _1(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,H,J){Ee.get(S.texture).__webglTexture=H,Ee.get(S.depthTexture).__webglTexture=J;let j=Ee.get(S);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,H){let J=Ee.get(S);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,J=0){E=S,I=H,R=J;let j=!0,Z=null,Pe=!1,Oe=!1;if(S){let Ge=Ee.get(S);Ge.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(T.FRAMEBUFFER,null),j=!1):Ge.__webglFramebuffer===void 0?w.setupRenderTarget(S):Ge.__hasExternalTextures&&w.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture);let Ze=S.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Oe=!0);let Xe=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?Z=Xe[H][J]:Z=Xe[H],Pe=!0):be.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?Z=Ee.get(S).__webglMultisampledFramebuffer:Array.isArray(Xe)?Z=Xe[J]:Z=Xe,b.copy(S.viewport),G.copy(S.scissor),k=S.scissorTest}else b.copy(O).multiplyScalar(Q).floor(),G.copy(U).multiplyScalar(Q).floor(),k=q;if(ae.bindFramebuffer(T.FRAMEBUFFER,Z)&&be.drawBuffers&&j&&ae.drawBuffers(S,Z),ae.viewport(b),ae.scissor(G),ae.setScissorTest(k),Pe){let Ge=Ee.get(S.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ge.__webglTexture,J)}else if(Oe){let Ge=Ee.get(S.texture),Ze=H||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ge.__webglTexture,J||0,Ze)}P=-1},this.readRenderTargetPixels=function(S,H,J,j,Z,Pe,Oe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){ae.bindFramebuffer(T.FRAMEBUFFER,Ve);try{let Ge=S.texture,Ze=Ge.format,Xe=Ge.type;if(Ze!==hn&&Re.convert(Ze)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let qe=Xe===ir&&(ce.has("EXT_color_buffer_half_float")||be.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Xe!==si&&Re.convert(Xe)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===ti&&(be.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-j&&J>=0&&J<=S.height-Z&&T.readPixels(H,J,j,Z,Re.convert(Ze),Re.convert(Xe),Pe)}finally{let Ge=E!==null?Ee.get(E).__webglFramebuffer:null;ae.bindFramebuffer(T.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(S,H,J=0){let j=Math.pow(2,-J),Z=Math.floor(H.image.width*j),Pe=Math.floor(H.image.height*j);w.setTexture2D(H,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,S.x,S.y,Z,Pe),ae.unbindTexture()},this.copyTextureToTexture=function(S,H,J,j=0){let Z=H.image.width,Pe=H.image.height,Oe=Re.convert(J.format),Ve=Re.convert(J.type);w.setTexture2D(J,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,J.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,J.unpackAlignment),H.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,j,S.x,S.y,Z,Pe,Oe,Ve,H.image.data):H.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,j,S.x,S.y,H.mipmaps[0].width,H.mipmaps[0].height,Oe,H.mipmaps[0].data):T.texSubImage2D(T.TEXTURE_2D,j,S.x,S.y,Oe,Ve,H.image),j===0&&J.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(S,H,J,j,Z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Pe=S.max.x-S.min.x+1,Oe=S.max.y-S.min.y+1,Ve=S.max.z-S.min.z+1,Ge=Re.convert(j.format),Ze=Re.convert(j.type),Xe;if(j.isData3DTexture)w.setTexture3D(j,0),Xe=T.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)w.setTexture2DArray(j,0),Xe=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,j.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,j.unpackAlignment);let qe=T.getParameter(T.UNPACK_ROW_LENGTH),pt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),qt=T.getParameter(T.UNPACK_SKIP_PIXELS),_t=T.getParameter(T.UNPACK_SKIP_ROWS),Rn=T.getParameter(T.UNPACK_SKIP_IMAGES),ct=J.isCompressedTexture?J.mipmaps[Z]:J.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,ct.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ct.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,S.min.x),T.pixelStorei(T.UNPACK_SKIP_ROWS,S.min.y),T.pixelStorei(T.UNPACK_SKIP_IMAGES,S.min.z),J.isDataTexture||J.isData3DTexture?T.texSubImage3D(Xe,Z,H.x,H.y,H.z,Pe,Oe,Ve,Ge,Ze,ct.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),T.compressedTexSubImage3D(Xe,Z,H.x,H.y,H.z,Pe,Oe,Ve,Ge,ct.data)):T.texSubImage3D(Xe,Z,H.x,H.y,H.z,Pe,Oe,Ve,Ge,Ze,ct),T.pixelStorei(T.UNPACK_ROW_LENGTH,qe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,qt),T.pixelStorei(T.UNPACK_SKIP_ROWS,_t),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Rn),Z===0&&j.generateMipmaps&&T.generateMipmap(Xe),ae.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),ae.unbindTexture()},this.resetState=function(){I=0,R=0,E=null,ae.reset(),ze.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===uc?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===jo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?Ai:sf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?Tt:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yl=class extends Ri{};Yl.prototype.isWebGL1Renderer=!0;var xs=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Vo=class extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},os=new ht,Uu=new ht,fo=[],Ou=new kn,f4=new ht,Js=new lt,js=new zn,Ho=class extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vo(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,f4)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),Ou.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Ou)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,os),js.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(i),e.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Uu.multiplyMatrices(i,os),Js.matrixWorld=Uu,Js.raycast(e,fo);for(let a=0,o=fo.length;a<o;a++){let l=fo[a];l.instanceId=r,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Mn=class extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fu=new F,Bu=new F,ku=new ht,Ml=new ms,po=new zn,Ci=class extends Mt{constructor(e=new ft,t=new Mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Fu.fromBufferAttribute(t,s-1),Bu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Fu.distanceTo(Bu);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;ku.copy(s).invert(),Ml.copy(e.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,h=new F,u=new F,f=new F,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let d=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=d,C=M-1;_<C;_+=m){let I=g.getX(_),R=g.getX(_+1);if(c.fromBufferAttribute(p,I),h.fromBufferAttribute(p,R),Ml.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let _=d,C=M-1;_<C;_+=m){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),Ml.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},zu=new F,Vu=new F,_s=class extends Ci{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)zu.fromBufferAttribute(t,s),Vu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+zu.distanceTo(Vu);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var or=class extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hu=new ht,Zl=new ms,mo=new zn,go=new F,ar=class extends Mt{constructor(e=new ft,t=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Hu.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(Hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,x=m;g<x;g++){let p=c.getX(g);go.fromBufferAttribute(u,p),Gu(go,p,l,s,e,t,this)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,x=m;g<x;g++)go.fromBufferAttribute(u,g),Gu(go,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gu(n,e,t,i,s,r,a){let o=Zl.distanceSqToPoint(n);if(o<t){let l=new F;Zl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Go=class n extends ft{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let m=i+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wo=class n extends ft{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],m=[],g=0,x=[],p=i/2,d=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(m,2));function M(){let C=new F,I=new F,R=0,E=(t-e)/i;for(let P=0;P<=r;P++){let v=[],b=P/r,G=b*(t-e)+e;for(let k=0;k<=s;k++){let te=k/s,L=te*l+o,V=Math.sin(L),K=Math.cos(L);I.x=G*V,I.y=-b*i+p,I.z=G*K,u.push(I.x,I.y,I.z),C.set(V,E,K).normalize(),f.push(C.x,C.y,C.z),m.push(te,1-b),v.push(g++)}x.push(v)}for(let P=0;P<s;P++)for(let v=0;v<r;v++){let b=x[v][P],G=x[v+1][P],k=x[v+1][P+1],te=x[v][P+1];h.push(b,G,te),h.push(G,k,te),R+=6}c.addGroup(d,R,0),d+=R}function _(C){let I=g,R=new et,E=new F,P=0,v=C===!0?e:t,b=C===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;let G=g;for(let k=0;k<=s;k++){let L=k/s*l+o,V=Math.cos(L),K=Math.sin(L);E.x=v*K,E.y=p*b,E.z=v*V,u.push(E.x,E.y,E.z),f.push(0,b,0),R.x=V*.5+.5,R.y=K*.5*b+.5,m.push(R.x,R.y),g++}for(let k=0;k<s;k++){let te=I+k,L=G+k;C===!0?h.push(L,L+1,te):h.push(L+1,L,te),P+=3}c.addGroup(d,P,C===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xo=new F,_o=new F,Sl=new F,yo=new Ei,Xo=class extends ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Mo*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:p,c:d}=yo;if(x.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),yo.getNormal(Sl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let _=(M+1)%3,C=u[M],I=u[_],R=yo[h[M]],E=yo[h[_]],P=`${C}_${I}`,v=`${I}_${C}`;v in f&&f[v]?(Sl.dot(f[v].normal)<=r&&(m.push(R.x,R.y,R.z),m.push(E.x,E.y,E.z)),f[v]=null):P in f||(f[P]={index0:c[M],index1:c[_],normal:Sl.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:p}=f[g];xo.fromBufferAttribute(o,x),_o.fromBufferAttribute(o,p),m.push(xo.x,xo.y,xo.z),m.push(_o.x,_o.y,_o.z)}this.setAttribute("position",new rt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ys=class n extends ft{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,m=new F,g=new et;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){let d=r+p/i*a;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let p=x*(i+1);for(let d=0;d<i;d++){let M=d+p,_=M,C=M+i+1,I=M+i+2,R=M+1;o.push(_,C,R),o.push(C,I,R)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Pi=class n extends ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new F,f=new F,m=[],g=[],x=[],p=[];for(let d=0;d<=i;d++){let M=[],_=d/i,C=0;d===0&&a===0?C=.5/t:d===i&&l===Math.PI&&(C=-.5/t);for(let I=0;I<=t;I++){let R=I/t;u.x=-e*Math.cos(s+R*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+R*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(R+C,1-_),M.push(c++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let _=h[d][M+1],C=h[d][M],I=h[d+1][M],R=h[d+1][M+1];(d!==0||a>0)&&m.push(_,C,R),(d!==i-1||l<Math.PI)&&m.push(C,I,R)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qo=class extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function vo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function d4(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var vs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kl=class extends vs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:r=e,o=2*t-i;break;case $h:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qh:a=e,l=2*i-t;break;case $h:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,d=-f*p+2*f*x-f*g,M=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-m)*p+(1.5+m)*x+.5*g,C=m*p-m*x;for(let I=0;I!==o;++I)r[I]=d*a[h+I]+M*a[c+I]+_*a[l+I]+C*a[u+I];return r}},Jl=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},jl=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case Ja:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&d4(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ja,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Eo;var Ii=class extends fn{};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=bo;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends fn{};Ql.prototype.ValueTypeName="color";var ec=class extends fn{};ec.prototype.ValueTypeName="number";var tc=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},lr=class extends fn{InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.DefaultInterpolation=Eo;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends fn{};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=bo;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends fn{};nc.prototype.ValueTypeName="vector";var ic=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},p4=new ic,sc=class{constructor(e){this.manager=e!==void 0?e:p4,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var $o=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var bl=new ht,Wu=new F,Xu=new F,rc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var oc=class extends rc{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new oc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yo=class extends $o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ms=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=qu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function qu(){return(typeof performance=="undefined"?Date:performance).now()}var dc="\\[\\]\\.:\\/",m4=new RegExp("["+dc+"]","g"),pc="[^"+dc+"]",g4="[^"+dc.replace("\\.","")+"]",x4=/((?:WC+[\/:])*)/.source.replace("WC",pc),_4=/(WCOD+)?/.source.replace("WCOD",g4),y4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),v4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),M4=new RegExp("^"+x4+_4+y4+v4+"$"),S4=["material","materials","bones","map"],ac=class{constructor(e,t,i){let s=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},at=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m4,"")}static parseTrackName(e){let t=M4.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);S4.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=ac;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p5=new Float32Array(1);var Zo=class{constructor(e,t,i=0,s=1/0){this.ray=new ms(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return lc(e,this,i,t),i.sort($u),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)lc(e[s],this,i,t);return i.sort($u),i}};function $u(n,e){return n.distance-e.distance}function lc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)lc(s[r],e,t,!0)}}var Ko=class extends _s{constructor(e=10,t=10,i=4473924,s=8947848){i=new We(i),s=new We(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,m=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let x=f===r?i:s;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}let h=new ft;h.setAttribute("position",new rt(l,3)),h.setAttribute("color",new rt(c,3));let u=new Mn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ea=[8357,-3427,8298,-7913,8289,-2661,8249,-3901,8235,-7147,8212,-5141,8199,-8387,8190,-3134,8156,-4374,8143,-7620,8135,-2368,8123,-5614,8110,-8860,8103,-3608,8091,-6854,8083,-1602,8072,-4848,8060,-8094,8053,-2842,8046,2411,8041,-6088,8030,-9334,8023,-4082,8021,9669,8012,-7328,8005,-2075,7994,-5321,7983,-8568,7977,-3315,7949,-4555,7939,-7801,7933,-2549,7922,-5795,7912,-9041,7906,-3789,7904,9962,7900,1464,7886,-10281,7880,-5029,7871,-8275,7865,-3023,7855,-6269,7840,-4262,7825,-2256,7815,-5502,7801,-3496,7795,1756,7791,-6742,7777,-4736,7768,-7982,7763,-2730,7759,-11228,7754,-5976,7740,-3970,7726,-1964,7717,-5210,7708,-8456,7703,-3203,7702,10547,7700,-11702,7695,-6450,7686,-9696,7681,-4443,7668,-2437,7665,-10936,7660,-5683,7652,-8929,7647,-3677,7643,-12175,7639,-6923,7637,6828,7630,-10169,7626,-4917,7613,-2911,7611,10840,7610,-11409,7592,-4151,7591,9600,7583,6354,7580,-2144,7577,-10643,7572,-5391,7560,-3384,7558,10366,7544,-9877,7540,-4624,7538,9127,7534,14379,7531,5880,7528,-2618,7526,11133,7525,-11116,7513,-9110,7508,-3858,7507,9893,7489,-5098,7483,13905,7482,-8344,7477,-3092,7476,10659,7459,-4332,7457,9419,7447,-2325,7440,-5571,7429,-3565,7427,10186,7426,-12064,7411,-4805,7409,8946,7402,5700,7399,-2799,7398,10952,7386,-9291,7381,-4039,7380,9712,7364,-5279,7362,8472,7353,-3273,7352,10478,7350,-11771,7341,12484,7340,-9765,7336,-4512,7334,9238,7329,-7759,7325,-2506,7324,11245,7308,-3746,7306,10005,7305,-12245,7296,12011,7291,-4986,7289,8765,7284,-8232,7283,5519,7280,-2980,7279,10771,7278,-11478,7273,7525,7269,12777,7268,-9472,7264,-4220,7262,9531,7252,11537,7251,-10712,7247,-5460,7246,8291,7241,-8706,7237,-3453,7236,10297,7229,7051,7226,12304,7224,-9946,7221,-4693,7219,9057,7216,14310,7214,-7939,7211,-2687,7209,11064,7208,-11186,7203,7818,7195,-3927,7193,9824,7192,-12425,7184,11830,7179,-5167,7177,8584,7173,-8413,7171,5338,7169,-3161,7168,10590,7166,-11659,7158,12596,7153,-4401,7152,9350,7148,14602,7147,-7647,7144,-2394,7142,11356,7141,-10893,7136,8110,7133,13363,7132,-8887,7128,-3634,7127,10116,7126,-12133,7121,6870,7117,12123,7113,-4874,7111,8877,7108,14129,7107,-8120,7106,5630,7103,-2868,7102,10883,7101,-11366,7096,7637,7093,12889,7091,-9360,7088,-4108,7087,9643,7083,14895,7082,-7354,7080,-15852,7078,11649,7076,-10600,7073,-5348,7072,8403,7068,13655,7067,-8594,7064,-3342,7062,10409,7059,15661,7057,7163,7053,12415,7049,-4582,7048,9169,7044,14422,7043,-7828,7038,11175,7037,-11074,7036,2677,7033,7929,7029,13182,7025,-3815,7024,9936,7020,15188,7019,-7061,7017,-15560,7015,11942,7014,-10307,7010,-5055,7009,8696,7006,13948,7005,-8301,7001,-3049,7e3,10702,6999,-11547,6998,2203,6997,15954,6995,7456,6993,-14793,6991,12708,6990,-9541,6987,-4289,6986,9462,6985,-12787,6982,14714,6981,-7535,6979,-16033,6977,11468,6976,-10781,6975,2970,6971,8222,6968,13474,6964,-3523,6962,10228,6959,15481,6958,-6769,6957,6982,6956,-15267,6954,12234,6950,17487,6949,-4762,6948,8988,6947,-13261,6945,14241,6941,-2756,6940,10995,6938,-11255,6937,2496,6936,16247,6934,7748,6933,-14501,6931,13001,6930,-9248,6927,-3996,6926,9755,6924,-12495,6922,15007,6921,-7242,6919,-15741,6917,11761,6916,-10488,6915,3262,6912,8515,6908,13767,6907,-8482,6904,-3230,6903,10521,6901,2023,6900,15773,6897,-14974,6894,12527,6891,17780,6890,-4470,6889,9281,6888,-12968,6886,14533,6883,-16214,6881,11287,6880,-10962,6879,2789,6878,16540,6875,8041,6874,-14208,6872,13293,6871,-8956,6868,-3703,6867,10047,6866,-12202,6864,15300,6863,-6950,6861,-15448,6859,12054,6857,3555,6855,17306,6854,-4943,6853,8807,6852,-13442,6850,14060,6849,-8189,6846,-2937,6845,10814,6844,-11436,6843,2315,6842,16066,6840,7568,6839,-14682,6837,12820,6836,-9429,6834,-17928,6833,-4177,6832,9574,6831,-12675,6828,14826,6826,6328,6825,-15922,6823,11580,6822,-10669,6821,3082,6820,16832,6818,8334,6817,-13915,6815,13586,6813,5088,6811,-3411,6810,10340,6809,-11909,6808,1842,6807,15592,6806,-6657,6805,7094,6804,-15155,6802,12346,6800,3848,6799,17599,6798,-4651,6797,9100,6796,-13149,6794,14352,6792,5854,6791,-16395,6789,11106,6787,2608,6786,16359,6783,7860,6782,-14389,6780,13113,6779,-9137,6778,4614,6776,-3884,6775,9866,6774,-12383,6772,15119,6771,-7130,6770,6620,6769,-15629,6767,11873,6766,-10377,6765,3374,6764,17125,6763,-5124,6762,8627,6761,-13623,6759,13879,6758,-8370,6757,5380,6754,10633,6753,-11616,6752,2134,6751,15885,6748,-14863,6746,12639,6743,17891,6742,-4358,6741,9393,6740,-12856,6738,14645,6737,-7604,6736,6147,6735,-16102,6733,11399,6732,-10850,6731,2901,6730,16651,6728,8153,6727,-14096,6725,13405,6724,-8844,6724,4907,6722,-3592,6721,10159,6720,-12090,6719,1661,6718,15411,6717,-6838,6716,6913,6715,-15336,6713,12165,6712,-10084,6711,3667,6710,17418,6709,-4832,6708,8919,6707,-13330,6705,14172,6703,5673,6700,10925,6699,-11324,6698,2427,6697,16178,6695,7679,6694,-14570,6692,12932,6691,-9318,6689,-17816,6688,-4065,6687,9686,6686,-12564,6684,14938,6683,-7311,6682,6439,6681,-15810,6679,11692,6679,-10557,6678,3193,6677,16944,6676,-5305,6675,8446,6674,-13804,6672,13698,6671,-8551,6670,5200,6667,10452,6666,-11797,6665,1953,6664,15704,6663,-6545,6661,-15043,6659,12458,6658,-9791,6657,3960,6656,17710,6655,-4539,6654,9212,6653,-13037,6652,14464,6650,5966,6647,11218,6646,-11031,6645,2720,6644,16471,6642,7972,6641,-14277,6639,13224,6638,-9025,6637,4726,6636,-17523,6635,-3773,6634,9978,6633,-12271,6632,1480,6631,15231,6631,-7019,6630,6732,6629,-15517,6627,11984,6626,-10265,6624,17237,6623,-5012,6622,8738,6621,-13511,6619,13991,6617,5492,6614,10745,6613,-11505,6613,2246,6612,15997,6611,-6252,6610,7498,6609,-14751,6607,12751,6606,-9498,6605,4252,6604,-17997,6603,-4246,6602,9505,6601,-12745,6599,14757,6597,6259,6597,-15991,6596,-2240,6595,11511,6594,-10738,6593,3012,6592,16763,6590,8265,6589,-13984,6587,13517,6586,-8732,6585,5019,6584,-17231,6583,10271,6582,-11978,6581,1773,6580,15523,6578,7025,6577,-15224,6576,-1474,6575,12277,6574,-9972,6572,17530,6571,-4720,6570,9031,6569,-13218,6568,14283,6566,5785,6565,-16464,6563,11037,6562,-11212,6561,2539,6560,16290,6558,7791,6557,-14458,6556,13043,6555,-9206,6554,4545,6553,-17704,6552,-3953,6551,9797,6550,-12452,6549,1299,6548,15050,6547,-7200,6546,6551,6545,-15698,6545,-1947,6544,11804,6543,-10446,6542,3305,6541,17056,6540,-5193,6539,8557,6538,-13692,6536,13810,6534,5311,6532,10564,6531,-11686,6530,2065,6529,15816,6528,-6433,6527,7318,6526,-14932,6524,12570,6523,-9679,6523,4071,6522,17822,6521,-4427,6520,9324,6519,-12925,6517,14576,6516,-7673,6515,6078,6514,-16172,6513,11330,6512,-10919,6511,2832,6510,16582,6508,8084,6507,-14165,6505,13336,6504,-8913,6504,4838,6503,-17411,6501,10090,6500,-12159,6499,1592,6498,15342,6497,-6907,6496,6844,6495,-15405,6494,-1654,6494,12096,6493,-10153,6491,17349,6490,-4901,6489,8850,6488,-13399,6486,14102,6485,5604,6484,-16645,6482,10856,6481,-11393,6479,16109,6477,7610,6476,-14639,6475,12863,6474,-9387,6473,4364,6471,-4134,6470,9616,6469,-12633,6468,1118,6468,14869,6467,-7380,6466,6370,6465,-15879,6464,-2128,6463,11623,6462,-10627,6461,3124,6460,16875,6459,8377,6458,-13873,6456,13629,6455,-8620,6454,5130,6452,10383,6451,-11866,6450,1884,6449,15635,6448,-6614,6447,7137,6446,-15113,6444,12389,6444,-9860,6443,3891,6442,17641,6441,-4608,6440,9143,6439,-13106,6437,14395,6436,5897,6433,11149,6432,-11100,6431,2651,6430,16401,6429,7903,6428,-14346,6426,13155,6425,-9094,6424,4657,6422,9909,6421,-12340,6420,1411,6419,15162,6418,-7088,6417,6663,6416,-15586,6415,-1835,6414,11915,6414,-10334,6413,3417,6412,17168,6411,-5082,6410,8669,6409,-13580,6407,13922,6407,-8328,6406,5423,6403,10675,6402,-11574,6401,15928,6399,7429,6398,-14820,6396,12682,6395,-9568,6394,4183,6393,-4315,6392,9436,6391,-12814,6389,14688,6387,6189,6387,-16060,6385,11442,6384,-10807,6383,2943,6382,16694,6381,8196,6380,-14054,6378,13448,6376,4950,6374,10202,6373,-12047,6372,1703,6371,15454,6370,-6795,6369,6956,6368,-15293,6367,12208,6366,-10041,6365,3710,6364,17460,6363,-4789,6362,8962,6362,-13287,6360,14214,6358,5716,6356,10968,6355,-11281,6354,2470,6353,16221,6351,7722,6350,-14527,6349,12974,6348,-9275,6347,4476,6344,9728,6344,-12521,6343,1230,6342,14981,6340,6482,6339,-15767,6338,11734,6337,-10515,6336,3236,6335,16987,6333,8488,6332,-13761,6331,13741,6330,-8509,6329,5242,6328,-17007,6327,10495,6326,-11755,6324,15747,6323,-6502,6322,7248,6321,-15001,6320,12501,6319,-9748,6318,4002,6317,17753,6316,-4496,6316,9255,6315,-12995,6314,756,6313,14507,6311,6009,6310,-16241,6309,11261,6308,-10988,6307,2762,6306,16513,6305,8015,6304,-14234,6302,13267,6300,4769,6298,10021,6297,-12228,6296,1523,6295,15273,6294,-6976,6294,6775,6293,-15474,6291,12027,6290,-10222,6289,3529,6289,17280,6288,-4970,6287,8781,6286,-13468,6284,14033,6284,-8216,6283,5535,6280,10787,6279,-11462,6279,2289,6278,16040,6276,7541,6275,-14708,6274,12793,6273,-9456,6272,4295,6269,9547,6269,-12702,6268,1049,6267,14800,6265,6301,6264,-15948,6263,11554,6262,-10696,6261,3055,6260,16806,6259,8307,6258,-13942,6256,13560,6254,5061,6252,10314,6251,-11936,6249,15566,6249,-6683,6248,7068,6247,-15182,6245,12320,6244,-9929,6244,3821,6243,17572,6242,-4677,6241,9074,6240,-13175,6240,575,6239,14326,6237,5828,6236,-16422,6235,11080,6234,-11169,6233,2582,6230,7834,6230,-14415,6228,13086,6226,4588,6224,9840,6223,-12409,6222,1342,6221,15092,6220,6594,6219,-15655,6217,11846,6217,-10403,6216,3348,6215,17099,6213,8600,6212,-13649,6211,13852,6209,5354,6207,10606,6206,-11643,6204,15859,6203,7360,6202,-14889,6200,12613,6199,-9637,6199,4114,6197,-4384,6196,9366,6195,-12883,6195,868,6194,14619,6193,-7630,6192,6120,6191,-16129,6190,11373,6189,-10877,6188,2874,6187,16625,6186,8127,6185,-14123,6183,13379,6182,4880,6179,10133,6178,-12116,6178,1634,6177,15385,6175,6887,6174,-15363,6173,12139,6172,-10110,6171,3641,6170,17391,6169,-4858,6169,8893,6168,-13356,6166,14145,6165,5647,6164,-16602,6162,10899,6161,-11350,6161,2401,6160,16151,6158,7653,6157,-14596,6156,12905,6154,4407,6152,9659,6151,-12590,6150,1161,6149,14912,6149,-7338,6148,6413,6147,-15836,6145,11665,6145,-10584,6144,3167,6143,16918,6141,8419,6141,-13830,6139,13672,6137,5173,6135,10425,6134,-11824,6131,7179,6130,-15070,6129,12432,6128,-9818,6127,3933,6125,-4565,6125,9186,6124,-13064,6123,687,6122,14438,6121,5939,6120,-16310,6118,11192,6118,-11057,6117,2693,6116,16444,6114,7946,6114,-14304,6112,13198,6110,4700,6108,9952,6107,-12297,6106,1453,6106,15204,6105,-7045,6104,6706,6103,-15543,6102,11958,6101,-10291,6100,3460,6099,17210,6098,8712,6097,-13537,6095,13964,6094,5466,6092,10718,6091,-11531,6090,2220,6088,7472,6087,-14777,6085,12724,6084,-9525,6084,4226,6081,9478,6081,-12771,6080,980,6079,14731,6078,-7519,6077,6232,6077,-16017,6075,11484,6074,-10765,6073,2986,6073,16737,6071,8238,6070,-14011,6069,13491,6067,4992,6065,10245,6064,-12005,6063,1746,6063,15497,6061,6998,6060,-15251,6059,12251,6058,-9998,6057,3752,6055,9005,6054,-13245,6052,14257,6051,5759,6050,-16491,6049,11011,6048,-11238,6047,2512,6046,16263,6045,7765,6044,-14484,6042,13017,6041,4519,6039,9771,6038,-12478,6037,1273,6036,15023,6035,-7226,6035,6525,6034,-15724,6032,11777,6032,-10472,6031,3279,6030,17030,6028,8531,6028,-13718,6026,13783,6025,5285,6022,10537,6022,-11712,6019,-6460,6018,7291,6018,-14958,6016,12543,6015,-9706,6015,4045,6013,-4453,6012,9297,6012,-12952,6011,799,6010,14550,6009,-7700,6009,6051,6008,-16198,6006,11304,6005,-10946,6004,16556,6002,8057,6002,-14192,6e3,13310,5999,4811,5996,10064,5996,-12186,5995,1565,5994,15316,5992,6818,5992,-15432,5990,12070,5989,-10179,5989,3571,5986,8824,5986,-13425,5984,14076,5983,5578,5980,10830,5980,-11419,5976,7584,5974,12836,5973,4338,5970,9590,5970,-12659,5969,1092,5968,14842,5967,-7407,5967,6344,5966,-15905,5964,11596,5964,-10653,5963,3098,5961,8350,5960,-13899,5958,13602,5957,5104,5955,10356,5954,-11893,5951,7110,5950,-15139,5949,12363,5948,-9887,5947,3864,5945,9116,5944,-13133,5943,618,5943,14369,5941,5870,5939,11123,5938,-11127,5937,2624,5935,7877,5933,13129,5931,4630,5929,9883,5928,-12366,5928,1384,5927,15135,5926,-7114,5925,6637,5925,-15613,5923,11889,5922,-10360,5922,3391,5919,8643,5919,-13606,5917,13895,5916,5397,5913,10649,5913,-11600,5910,-6348,5910,7403,5907,12655,5907,-9594,5906,4157,5904,9409,5903,-12840,5902,911,5901,-7588,5900,6163,5899,-16086,5898,11415,5897,-10834,5896,2917,5894,8169,5892,13422,5890,4923,5888,10175,5887,-12074,5887,1677,5884,6929,5882,12182,5882,-10068,5881,3683,5879,8936,5878,-13314,5875,5689,5873,10942,5872,-11307,5871,2443,5870,16194,5869,7696,5867,12948,5865,4450,5863,9702,5862,-12547,5862,1203,5860,-7295,5859,6456,5857,11708,5857,-10541,5856,3210,5854,8462,5851,13714,5850,5216,5848,10468,5847,-11781,5845,-6529,5844,7222,5842,12474,5841,-9775,5840,3976,5838,9228,5838,-13021,5837,730,5835,-7769,5835,5982,5832,11234,5832,-11015,5831,2736,5829,7988,5827,-510,5827,13241,5825,4742,5823,9995,5822,-12255,5822,1496,5820,-7002,5819,6748,5819,-15501,5817,12001,5816,-10248,5816,3502,5814,8755,5811,14007,5810,5509,5808,10761,5807,-11488,5806,16013,5804,7515,5802,12767,5801,-9482,5801,4269,5798,9521,5798,-12728,5796,-7476,5795,6275,5793,11527,5792,-10722,5791,3029,5789,8281,5787,13533,5785,5035,5783,10287,5783,-11962,5780,-6710,5780,7041,5778,12293,5777,-9956,5776,3795,5774,9047,5773,-13202,5770,5801,5768,11054,5768,-11196,5767,2555,5765,7807,5763,13060,5761,4561,5759,9814,5758,-12436,5758,1315,5756,-7183,5755,6568,5755,-15682,5753,11820,5753,-10429,5752,3321,5750,8574,5748,13826,5746,5328,5744,10580,5743,-11669,5742,15832,5741,-6417,5741,7334,5738,12586,5738,-9663,5737,4088,5735,9340,5734,-12909,5732,-7657,5731,6094,5729,11346,5728,-10903,5728,2848,5726,8100,5724,-398,5724,13353,5722,4854,5720,10106,5719,-12143,5719,1608,5717,-6891,5716,6860,5716,-15389,5714,12113,5714,-10137,5713,3614,5711,8866,5707,5620,5705,10873,5705,-11377,5703,16125,5702,7627,5700,12879,5699,-9370,5698,4380,5696,9633,5695,-12616,5693,-7364,5693,6387,5692,-15863,5691,11639,5690,-10610,5689,3141,5687,8393,5685,13645,5684,5147,5681,10399,5681,-11850,5679,15651,5679,-6598,5678,7153,5676,12405,5675,-9844,5674,3907,5672,9159,5672,-13090,5669,5913,5667,11165,5666,-11084,5665,2667,5663,7919,5662,-579,5661,13172,5661,-9078,5660,4673,5658,9925,5657,-12324,5656,1427,5655,-7071,5654,6679,5652,11932,5652,-10318,5651,3433,5649,8686,5645,5439,5643,10692,5643,-11557,5642,2193,5641,15944,5640,-6305,5640,7446,5638,12698,5637,-9551,5636,4200,5634,9452,5634,-12797,5633,953,5632,-7545,5631,6206,5629,11458,5628,-10791,5627,2960,5625,8212,5624,-286,5623,13464,5623,-8785,5622,4966,5620,10218,5619,-12031,5617,-6779,5616,6972,5614,12224,5614,-10025,5613,3726,5611,8978,5607,5732,5605,10984,5605,-11265,5604,2486,5602,7738,5600,12991,5599,-9259,5599,4492,5597,9745,5596,-12505,5595,1246,5594,-7252,5593,6498,5591,11751,5590,-10498,5590,3252,5588,8505,5584,5259,5582,10511,5582,-11738,5580,15763,5580,-6486,5579,7265,5577,12517,5576,-9732,5575,4019,5573,9271,5573,-12978,5571,-7726,5570,6025,5568,11277,5567,-10972,5567,2779,5565,8031,5563,-467,5563,13283,5562,-8966,5561,4785,5559,10037,5559,-12212,5556,-6960,5556,6791,5554,12043,5553,-10206,5552,3545,5550,8797,5547,5551,5545,10804,5544,-11446,5544,2305,5543,16056,5542,-6193,5542,7557,5540,12810,5539,-9439,5538,4311,5536,9564,5536,-12686,5534,-7433,5533,6318,5531,11570,5530,-10679,5530,3071,5528,8324,5526,-175,5526,13576,5525,-8673,5524,5078,5522,10330,5522,-11919,5520,15582,5520,-6667,5519,7084,5517,12336,5516,-9913,5515,3838,5513,9090,5510,5844,5508,11096,5507,-11153,5507,2598,5505,-5901,5505,7850,5503,13103,5502,-9147,5501,4604,5499,9856,5499,-12393,5497,-7141,5496,6610,5494,11863,5493,-10387,5493,3364,5491,8616,5488,-8380,5488,5370,5486,10623,5485,-11627,5484,2124,5484,15875,5483,-6374,5482,7377,5480,12629,5480,-9620,5479,4130,5477,9383,5476,-12866,5476,884,5474,-7614,5474,6137,5472,11389,5471,-10860,5470,2891,5468,8143,5467,-356,5466,13395,5466,-8854,5465,4897,5463,10149,5462,-12100,5460,-6848,5460,6903,5458,12155,5457,-10094,5456,3657,5454,8909,5451,5663,5449,10915,5449,-11334,5448,2417,5447,-6082,5446,7669,5445,-829,5444,12922,5443,-9328,5443,4423,5441,9675,5440,-12574,5438,-7321,5437,6429,5435,11682,5435,-10568,5434,3183,5432,8436,5431,-63,5430,13688,5430,-8561,5429,5189,5427,10442,5426,-11807,5426,1943,5425,15694,5424,-6555,5424,7196,5422,12448,5421,-9801,5420,3950,5418,9202,5416,-7795,5415,5956,5413,11208,5413,-11041,5412,2710,5411,-5789,5410,7962,5408,13214,5407,-9035,5407,4716,5405,9968,5404,-12281,5402,-7029,5401,6722,5400,11974,5399,-10275,5398,3476,5396,8728,5394,13981,5394,-8269,5393,5482,5391,10734,5390,-11515,5390,2236,5389,15987,5388,-6262,5388,7488,5386,12741,5385,-9509,5385,4242,5383,9495,5382,-12755,5381,996,5380,-7502,5379,6248,5377,11501,5377,-10748,5376,3002,5374,8255,5373,-244,5372,13507,5372,-8742,5371,5009,5369,10261,5368,-11988,5368,1762,5367,-6736,5366,7015,5364,12267,5363,-9982,5363,3769,5361,9021,5360,-13228,5359,14273,5357,5775,5356,11027,5355,-11222,5354,2529,5353,-5970,5352,7781,5351,-717,5350,13033,5350,-9216,5349,4535,5347,9787,5347,-12462,5346,1289,5345,-7210,5344,6541,5342,11794,5341,-10456,5341,3295,5339,8547,5337,13800,5336,-8450,5336,5301,5334,10554,5333,-11696,5332,2055,5332,15806,5331,-6443,5331,7307,5329,12560,5328,-9689,5327,4061,5325,9314,5324,815,5323,-7683,5322,6068,5320,11320,5320,-10929,5319,2821,5318,-5677,5317,8074,5316,-425,5315,13326,5315,-8923,5314,4828,5312,10080,5311,-12169,5311,1582,5310,-6917,5309,6834,5307,12086,5306,-10163,5306,3588,5304,8840,5302,14092,5301,5594,5299,10846,5298,-11403,5297,2348,5296,-6151,5296,7600,5294,-898,5294,12853,5293,-9397,5292,4354,5290,9606,5290,-12643,5289,1108,5288,-7391,5287,6360,5285,11613,5285,-10637,5284,3114,5282,8366,5281,-132,5280,13619,5280,-8630,5279,5120,5277,10373,5277,-11877,5276,1874,5275,15625,5275,-6624,5274,7127,5272,12379,5272,-9870,5271,3880,5269,9133,5268,634,5266,5887,5264,11139,5263,-11110,5263,2641,5261,-5858,5261,7893,5259,13145,5258,-9104,5258,4647,5256,9899,5255,-12350,5255,1401,5253,-7098,5253,6653,5251,11905,5250,-10344,5249,3407,5248,8659,5246,161,5246,13912,5245,-8338,5244,5413,5243,10665,5242,-11584,5241,2167,5240,-6331,5239,7419,5238,12672,5237,-9578,5236,4173,5234,9425,5233,927,5232,-7571,5231,6179,5229,11432,5229,-10818,5228,2933,5226,8186,5225,-313,5224,13438,5224,-8811,5223,4939,5221,10192,5221,-12057,5220,1693,5219,-6805,5218,6946,5216,12198,5216,-10051,5215,3700,5213,8952,5212,453,5211,14204,5210,5706,5208,10958,5208,-11291,5207,2460,5206,-6039,5205,7712,5204,-786,5203,12964,5203,-9285,5202,4466,5200,9718,5200,-12531,5199,1220,5198,-7279,5197,6472,5195,11724,5195,-10525,5194,3226,5192,8478,5191,-20,5190,13731,5190,-8519,5189,5232,5187,10484,5187,-11765,5186,1986,5185,15737,5185,-6512,5184,7238,5182,12491,5182,-9759,5181,3992,5179,9245,5178,746,5177,-7752,5176,5998,5174,11251,5174,-10998,5173,2752,5172,-5746,5171,8005,5170,-494,5169,13257,5169,-8992,5168,4759,5166,10011,5166,-12238,5165,1512,5164,-6986,5163,6765,5161,12017,5161,-10232,5160,3519,5158,8771,5156,14023,5156,-8226,5155,5525,5153,10777,5153,-11472,5152,2279,5151,-6220,5150,7531,5148,12783,5148,-9466,5147,4285,5145,9537,5145,-12712,5144,1039,5143,-7460,5142,6291,5140,11544,5140,-10706,5139,3045,5137,8297,5136,-201,5136,13550,5135,-8700,5134,5051,5132,10304,5132,-11946,5131,1805,5130,-6693,5129,7057,5128,12310,5127,-9939,5126,3811,5125,9064,5123,565,5123,14316,5122,-7933,5121,5818,5120,11070,5119,-11179,5118,2571,5117,-5927,5117,7824,5115,13076,5114,-9173,5114,4578,5112,9830,5111,-12419,5111,1332,5109,-7167,5109,6584,5107,11836,5106,-10413,5106,3338,5104,8590,5103,92,5102,13842,5101,-8407,5101,5344,5099,10596,5098,-11653,5098,2098,5097,-6401,5096,7350,5094,12603,5094,-9647,5093,4104,5091,9356,5090,858,5089,-7641,5088,6110,5086,11363,5086,-10887,5085,2864,5084,-5634,5083,8116,5082,-382,5081,13369,5081,-8880,5080,4870,5078,10123,5078,-12127,5077,1624,5076,-6874,5075,6877,5074,12129,5073,-10120,5072,3630,5071,8883,5069,384,5068,-8114,5068,5637,5066,10889,5065,-11360,5065,2391,5063,-6108,5063,7643,5061,12895,5060,-9354,5060,4397,5058,9649,5057,-12600,5057,1151,5055,-7348,5055,6403,5053,11655,5052,-10594,5052,3157,5050,8409,5048,13662,5048,-8588,5047,5163,5045,10415,5045,-11834,5044,1917,5043,-6581,5042,7169,5040,12422,5040,-9828,5039,3923,5037,9175,5036,677,5035,-7821,5034,5929,5033,11182,5032,-11068,5031,2683,5030,7936,5028,13188,5027,-9061,5027,4689,5025,9942,5024,-12307,5024,1443,5023,-7055,5022,6696,5020,11948,5020,-10301,5019,3450,5017,8702,5016,203,5015,13954,5015,-8295,5014,5456,5012,10708,5012,-11541,5011,2210,5009,7462,5008,12714,5007,-9535,5006,4216,5005,9468,5004,-12781,5003,970,5002,-7529,5002,6222,5e3,11474,4999,-10775,4999,2976,4997,8228,4995,13481,4995,-8769,4994,4982,4992,10234,4992,-12015,4991,1736,4990,-6762,4989,6988,4987,12241,4987,-10009,4986,3742,4984,8995,4983,496,4983,14247,4982,-8002,4982,5748,4980,11001,4979,-11248,4979,2502,4977,7755,4975,13007,4974,-9242,4974,4509,4972,9761,4971,1262,4970,-7236,4969,6515,4967,11767,4967,-10482,4966,3269,4964,8521,4963,23,4963,13773,4962,-8476,4961,5275,4960,10527,4959,-11722,4958,2029,4957,7281,4955,12533,4954,-9716,4954,4035,4952,9287,4951,789,4950,-7710,4949,6041,4947,11294,4947,-10956,4946,2795,4945,-5703,4944,8047,4943,13300,4942,-8950,4941,4801,4940,10054,4939,-12196,4938,1555,4937,-6943,4937,6807,4935,12060,4934,-10189,4934,3561,4932,8814,4931,315,4930,-8183,4929,5568,4927,10820,4927,-11429,4926,2321,4924,7574,4923,12826,4922,-9423,4922,4328,4920,9580,4919,1082,4917,-7417,4917,6334,4915,11586,4914,-10663,4914,3088,4913,-5411,4912,8340,4911,-158,4910,13592,4910,-8657,4909,5094,4907,10346,4907,-11903,4906,1848,4905,-6651,4905,7100,4903,12353,4902,-9897,4902,3854,4900,9106,4899,608,4898,-7891,4897,5860,4895,11113,4895,-11137,4894,2614,4892,7866,4891,13119,4890,-9130,4889,4620,4888,9873,4887,1374,4885,-7124,4885,6627,4883,11879,4882,-10370,4882,3380,4880,8633,4879,134,4878,13885,4878,-8364,4877,5387,4876,10639,4875,-11610,4874,2141,4873,7393,4871,12645,4870,-9604,4870,4147,4868,9399,4867,901,4866,-7598,4865,6153,4863,11405,4863,-10844,4862,2907,4861,-5592,4860,8159,4859,-339,4859,13412,4858,-8838,4858,4913,4856,10165,4855,-12084,4855,1667,4853,6919,4851,12172,4851,-10078,4850,3673,4848,8925,4847,427,4846,-8071,4845,5679,4844,10932,4843,-11318,4843,2433,4841,7686,4839,12938,4839,-9311,4838,4439,4836,9692,4835,1193,4834,-7305,4833,6446,4832,11698,4831,-10551,4831,3200,4829,8452,4828,-47,4827,13704,4827,-8545,4826,5206,4824,10458,4824,-11791,4823,1960,4822,-6539,4821,7212,4820,12464,4819,-9785,4818,3966,4817,9218,4816,720,4814,-7779,4814,5972,4812,11224,4812,-11025,4811,2726,4810,-5772,4809,7978,4808,13231,4807,-9019,4806,4732,4805,9985,4804,1486,4802,-7012,4802,6738,4800,11991,4800,-10259,4799,3492,4797,8745,4796,246,4795,-8252,4794,5498,4793,10751,4792,-11498,4792,2252,4790,7505,4788,12757,4788,-9492,4787,4259,4785,9511,4784,1012,4783,-7486,4783,6265,4781,11517,4780,-10732,4780,3019,4779,-5480,4778,8271,4777,-227,4776,13523,4776,-8726,4775,5025,4773,10277,4773,-11972,4772,1779,4771,-6720,4771,7031,4769,12283,4768,-9966,4768,3785,4766,9037,4765,539,4764,-7960,4763,5791,4762,11044,4761,-11206,4760,2545,4759,7797,4757,13050,4756,-9200,4756,4551,4754,9804,4753,1305,4752,-7193,4751,6557,4750,11810,4749,-10439,4748,3311,4747,8564,4746,65,4745,13816,4745,-8433,4744,5318,4742,10570,4742,-11679,4741,2071,4739,7324,4738,12576,4737,-9673,4737,4078,4735,9330,4734,832,4733,-7667,4732,6084,4730,11336,4730,-10913,4729,2838,4728,8090,4726,13342,4725,-8907,4725,4844,4723,10096,4723,-12153,4722,1598,4721,-6901,4720,6850,4719,12103,4718,-10147,4718,3604,4716,8856,4715,358,4714,-8140,4713,5610,4711,10863,4711,-11387,4710,2364,4709,7616,4707,12869,4706,-9380,4706,4370,4704,9623,4703,1124,4702,-7374,4701,6377,4700,11629,4699,-10620,4698,3130,4697,-5368,4697,8383,4696,-116,4695,13635,4695,-8614,4692,10389,4692,-11860,4691,1891,4690,-6608,4689,7143,4688,12395,4687,-9854,4687,3897,4685,9149,4684,651,4683,-7848,4682,5903,4681,11155,4680,-11094,4679,2657,4678,7909,4676,13162,4676,-9088,4675,4663,4673,9915,4673,-12334,4672,1417,4671,-7081,4671,6669,4669,11922,4668,-10328,4668,3423,4666,8675,4665,177,4664,-8321,4663,5429,4662,10682,4661,-11568,4660,2183,4659,7436,4657,12688,4657,-9561,4656,4189,4654,9442,4653,943,4652,-7555,4652,6196,4650,11448,4649,-10801,4649,2950,4647,8202,4645,13454,4645,-8795,4643,10208,4642,-12041,4642,1710,4641,-6789,4640,6962,4638,12214,4638,-10035,4636,8968,4634,470,4634,14221,4633,-8029,4633,5722,4631,10974,4631,-11275,4630,2476,4628,7728,4627,12981,4626,-9269,4626,4482,4624,9735,4623,1236,4622,-7262,4621,6488,4620,11741,4619,-10509,4617,8495,4616,-4,4615,13747,4615,-8502,4612,10501,4612,-11748,4611,2002,4610,-6496,4610,7255,4608,12507,4607,-9742,4607,4009,4605,9261,4604,762,4603,-7736,4602,6015,4601,11267,4600,-10982,4600,2769,4598,8021,4596,13273,4596,-8976,4595,4775,4594,10027,4593,-12222,4593,1529,4591,-6970,4591,6781,4589,12033,4589,-10216,4586,8787,4585,289,4584,-8210,4584,5541,4582,10794,4582,-11456,4581,2295,4580,-6203,4579,7547,4578,12800,4577,-9450,4577,4301,4575,9554,4574,1055,4573,-7443,4572,6307,4571,11560,4570,-10689,4568,8314,4566,13566,4566,-8683,4564,10320,4563,-11929,4562,1821,4561,-6677,4561,7074,4559,12326,4559,-9923,4558,3828,4556,9080,4555,582,4554,-7917,4554,5834,4552,11086,4551,-11163,4551,2588,4549,7840,4548,13092,4547,-9157,4547,4594,4545,9846,4543,-7151,4542,6600,4541,11853,4540,-10397,4540,3354,4538,8606,4537,108,4536,-8390,4535,5360,4534,10613,4533,-11637,4532,2114,4531,-6384,4531,7366,4529,12619,4529,-9630,4528,4120,4526,9373,4525,874,4524,-7624,4524,6127,4522,11379,4522,-10870,4521,2880,4519,8133,4518,13385,4517,-8864,4515,10139,4515,-12110,4514,1641,4513,-6858,4512,6893,4511,12145,4510,-10104,4508,8899,4507,401,4506,-8098,4505,5653,4504,10905,4503,-11344,4503,2407,4501,7659,4499,12912,4499,-9338,4498,4413,4497,9665,4496,1167,4495,-7331,4494,6419,4492,11672,4492,-10578,4490,8425,4489,-73,4488,-8571,4487,5179,4485,10432,4485,-11818,4484,1933,4483,7186,4481,12438,4481,-9811,4480,3939,4478,9192,4477,693,4476,-7805,4476,5946,4474,11198,4474,-11051,4473,2700,4471,7952,4470,13204,4469,-9045,4467,9958,4467,-12291,4465,-7039,4464,6712,4463,11964,4462,-10285,4460,8718,4459,220,4458,-8279,4457,5472,4456,10724,4455,-11525,4455,2226,4453,7478,4452,12731,4451,-9519,4450,4232,4449,9485,4448,986,4447,-7512,4446,6238,4445,11491,4444,-10759,4442,8245,4440,13497,4440,-8752,4438,10251,4437,-11998,4437,1752,4435,7005,4433,12257,4433,-9992,4431,9011,4430,512,4429,14263,4429,-7986,4428,5765,4426,11017,4426,-11232,4425,2519,4424,7771,4422,13023,4422,-9226,4421,4525,4419,9777,4417,-7220,4417,6531,4415,11783,4415,-10466,4413,8537,4411,39,4410,-8460,4410,5291,4408,10544,4408,-11706,4407,2045,4406,7297,4404,12550,4404,-9699,4403,4051,4401,9304,4400,805,4399,-7693,4399,6057,4397,11310,4397,-10939,4396,2811,4394,8064,4393,13316,4392,-8933,4390,10070,4390,-12179,4389,1571,4388,6824,4386,12076,4385,-10173,4383,8830,4382,332,4381,-8167,4381,5584,4379,10836,4379,-11413,4378,2338,4376,7590,4375,12842,4374,-9407,4374,4344,4372,9596,4371,1098,4370,-7401,4370,6350,4368,11603,4367,-10647,4365,8356,4364,-142,4363,-8640,4363,5110,4361,10363,4361,-11887,4360,1864,4359,7116,4357,12369,4356,-9880,4354,9123,4353,624,4353,14375,4352,-7874,4352,5877,4350,11129,4350,-11120,4349,2630,4347,7883,4346,-616,4346,13135,4345,-9114,4345,4637,4343,9889,4343,-12360,4341,-7108,4341,6643,4339,11895,4339,-10354,4336,8649,4335,151,4334,-8348,4334,5403,4332,10655,4332,-11594,4331,2157,4330,7409,4328,12662,4327,-9588,4327,4163,4325,9415,4323,-7581,4323,6169,4321,11422,4321,-10828,4319,8176,4318,-323,4317,13428,4316,-8821,4314,10182,4314,-12068,4312,6936,4310,12188,4310,-10061,4308,8942,4306,14194,4305,-8055,4305,5696,4303,10948,4303,-11301,4302,2450,4301,7702,4300,-797,4299,12954,4299,-9295,4298,4456,4297,9708,4296,1210,4295,-7289,4294,6462,4292,11714,4292,-10535,4290,8468,4289,-30,4288,-8529,4286,10474,4285,-11775,4285,1976,4283,7228,4281,12481,4281,-9769,4279,9235,4277,-7762,4276,5988,4275,11241,4274,-11009,4274,2742,4272,7995,4271,-504,4270,-9002,4270,4748,4268,10001,4267,-12248,4265,6755,4264,12007,4263,-10242,4261,8761,4260,262,4260,14013,4259,-8236,4259,5515,4257,10767,4257,-11482,4256,2269,4254,7521,4253,12773,4252,-9476,4252,4275,4250,9527,4248,-7470,4248,6281,4246,11533,4246,-10716,4244,8287,4243,-211,4242,-8710,4239,10294,4239,-11956,4237,7047,4235,12300,4235,-9949,4233,9054,4231,14306,4231,-7943,4230,5807,4229,11060,4228,-11189,4228,2561,4226,7814,4225,-685,4224,13066,4224,-9183,4223,4568,4222,9820,4221,-12429,4221,1321,4220,-7177,4219,6574,4218,11826,4217,-10423,4215,8580,4214,82,4213,-8417,4213,5334,4211,10586,4211,-11663,4210,2088,4209,7340,4207,12592,4206,-9657,4204,9346,4202,-7651,4202,6100,4200,11353,4200,-10897,4198,8106,4197,-392,4196,-8890,4194,10113,4193,-12137,4191,6866,4189,12119,4189,-10130,4187,8873,4185,-8124,4184,5627,4183,10879,4182,-11370,4182,2380,4180,7633,4179,-866,4179,12885,4178,-9364,4178,4387,4176,9639,4174,-7358,4174,6393,4172,11645,4172,-10604,4170,8399,4168,-99,4167,-8598,4165,10405,4165,-11844,4163,7159,4161,12412,4161,-9838,4159,9165,4157,-7831,4156,5919,4155,11172,4154,-11078,4154,2673,4152,7926,4151,-573,4150,-9071,4150,4679,4148,9932,4148,-12318,4147,1433,4146,6686,4144,11938,4143,-10311,4143,3439,4141,8692,4140,193,4139,-8305,4139,5446,4137,10698,4137,-11551,4136,2200,4135,7452,4133,12704,4133,-9545,4132,4206,4131,9458,4129,-7539,4128,6212,4127,11464,4126,-10785,4124,8218,4123,-280,4122,-8779,4120,10224,4120,-12025,4118,6978,4116,12231,4116,-10019,4115,3732,4113,8985,4111,-8012,4111,5738,4109,10991,4109,-11259,4108,2492,4107,7745,4106,-754,4105,-9252,4104,4498,4103,9751,4101,-7246,4100,6505,4099,11757,4098,-10492,4098,3259,4096,8511,4095,12,4094,-8486,4092,10517,4092,-11732,4091,2019,4090,7271,4088,12523,4088,-9726,4087,4025,4086,9277,4084,-7720,4083,6031,4082,11283,4081,-10966,4079,8037,4078,-461,4077,-8960,4077,4791,4075,10044,4075,-12206,4074,1545,4073,6797,4071,12050,4071,-10199,4070,3551,4069,8804,4067,14056,4066,-8193,4066,5557,4064,10810,4064,-11439,4063,2311,4062,7564,4060,12816,4060,-9433,4059,4318,4058,9570,4056,-7427,4055,6324,4054,11576,4053,-10673,4053,3078,4051,8330,4050,-168,4049,-8667,4047,10336,4047,-11913,4045,7090,4043,12342,4043,-9907,4042,3844,4041,9096,4039,-7901,4038,5850,4037,11103,4036,-11147,4034,7856,4033,-642,4032,-9140,4032,4610,4030,9863,4030,-12387,4028,6616,4026,11869,4026,-10380,4025,3370,4024,8623,4022,-8374,4021,5377,4020,10629,4019,-11620,4019,2130,4017,7383,4016,12635,4015,-9614,4015,4137,4013,9389,4012,891,4011,-7608,4011,6143,4009,11395,4009,-10854,4008,2897,4007,8149,4006,-349,4005,-8848,4004,4903,4003,10155,4002,-12094,4002,1657,4e3,6909,3998,-10088,3998,3663,3996,8915,3995,14168,3994,-8081,3994,5669,3992,10922,3992,-11328,3990,7676,3989,-823,3988,-9321,3987,4429,3986,9682,3983,6436,3982,11688,3981,-10561,3981,3189,3979,8442,3978,-57,3977,-8555,3975,10448,3975,-11801,3973,7202,3971,-9795,3970,3956,3969,9208,3967,-7789,3967,5962,3965,11214,3965,-11035,3964,2716,3963,7968,3962,-530,3961,-9029,3960,4722,3959,9974,3958,-12275,3956,6728,3954,-10269,3954,3482,3952,8735,3950,-8262,3950,5488,3948,10741,3948,-11508,3947,2242,3946,7495,3944,12747,3944,-9502,3943,4248,3942,9501,3940,-7496,3939,6255,3938,11507,3937,-10742,3937,3009,3935,8261,3934,-238,3933,-8736,3931,10267,3931,-11982,3929,7021,3927,-9976,3926,3775,3925,9027,3923,-7970,3922,5781,3921,11033,3921,-11216,3919,7787,3918,-711,3917,-9210,3916,4541,3915,9794,3912,6547,3910,-10449,3910,3301,3908,8554,3906,-8443,3904,10560,3904,-11689,3903,2061,3902,7314,3900,12566,3900,-9683,3899,4068,3898,9320,3896,-7677,3895,6074,3894,11326,3893,-10923,3893,2828,3891,8080,3891,-418,3890,-8917,3889,4834,3888,10086,3887,-12163,3885,6840,3883,-10157,3883,3594,3881,8846,3880,14099,3879,-8151,3879,5600,3877,10853,3877,-11397,3875,7606,3874,-892,3873,-9390,3872,4360,3871,9613,3868,6367,3867,11619,3867,-10630,3866,3120,3865,8373,3864,-126,3863,-8624,3861,10379,3860,-11870,3858,7133,3856,-9864,3856,3887,3854,9139,3852,-7858,3852,5893,3850,11145,3850,-11104,3848,7899,3847,-599,3846,-9098,3846,4653,3844,9905,3842,6659,3840,-10338,3839,3413,3838,8665,3836,-8331,3835,5419,3834,10672,3833,-11578,3833,2173,3831,7426,3830,12678,3829,-9571,3829,4179,3827,9432,3826,-7565,3825,6186,3824,11438,3823,-10811,3823,2939,3821,8192,3820,-307,3819,-8805,3817,10198,3817,-12051,3815,6952,3813,-10045,3812,3706,3811,8958,3809,-8039,3809,5712,3807,10964,3807,-11285,3805,7718,3804,-780,3803,-9279,3802,4472,3801,9724,3798,6478,3797,11731,3796,-10519,3796,3232,3794,8485,3793,-8512,3791,10491,3790,-11758,3788,7245,3786,-9752,3786,3998,3784,9251,3782,-7746,3782,6005,3780,11257,3780,-10992,3779,2759,3778,8011,3777,-488,3776,-8986,3776,4765,3774,10017,3774,-12232,3773,1519,3772,6771,3770,-10226,3769,3525,3768,8777,3766,14030,3766,-8220,3765,5531,3764,10783,3764,-11466,3763,2285,3762,7537,3760,12790,3760,-9460,3759,4291,3758,9544,3755,6297,3754,11550,3753,-10699,3753,3051,3751,8304,3751,-195,3750,-8693,3748,10310,3747,-11939,3745,7064,3743,-9933,3743,3818,3741,9070,3739,-7927,3739,5824,3738,11076,3737,-11173,3735,7830,3734,-668,3733,-9167,3733,4584,3731,9836,3730,1338,3729,6590,3727,11842,3727,-10407,3726,3344,3725,8596,3724,13849,3723,-8401,3721,10603,3721,-11647,3719,7356,3717,-9640,3716,4110,3715,9363,3713,-7634,3713,6117,3711,11369,3711,-10880,3710,2870,3709,8123,3708,-376,3707,-8874,3706,4877,3705,10129,3704,-12120,3703,6883,3701,12135,3701,-10114,3700,3637,3699,8889,3697,-8108,3696,5643,3695,10895,3694,-11354,3692,7649,3691,12901,3691,-9348,3690,4403,3689,9655,3686,6409,3685,11662,3684,-10588,3684,3163,3682,8415,3681,13668,3681,-8581,3679,10422,3678,-11828,3676,7176,3674,-9821,3674,3929,3672,9182,3671,683,3671,-7815,3670,5936,3669,11188,3668,-11061,3666,7942,3665,-557,3664,-9055,3664,4696,3662,9948,3660,6702,3659,11954,3658,-10295,3656,8708,3655,210,3655,13960,3654,-8289,3654,5462,3652,10714,3652,-11535,3650,7468,3649,12721,3648,-9529,3648,4222,3646,9474,3645,976,3644,6228,3642,11481,3642,-10769,3642,2982,3640,8235,3638,-8762,3638,4988,3636,10241,3636,-12008,3634,6995,3632,-10002,3632,3748,3630,9001,3629,502,3628,-7996,3628,5755,3626,11007,3626,-11242,3624,7761,3622,-9236,3622,4515,3620,9767,3618,6521,3616,11773,3616,-10476,3615,3275,3614,8527,3613,29,3613,13780,3612,-8470,3612,5281,3610,10533,3610,-11716,3608,7287,3606,-9710,3606,4041,3604,9294,3603,795,3602,-7703,3602,6047,3600,11300,3600,-10949,3598,8054,3596,-8943,3596,4807,3594,10060,3592,6814,3590,-10183,3588,8820,3587,321,3587,14072,3586,-8177,3586,5574,3584,10826,3584,-11423,3582,7580,3581,12832,3580,-9417,3580,4334,3578,9586,3576,6340,3574,11592,3574,-10657,3572,8346,3571,13599,3570,-8651,3570,5100,3568,10353,3568,-11897,3566,7106,3564,-9890,3564,3860,3562,9113,3561,614,3560,-7884,3560,5867,3558,11119,3558,-11130,3556,7873,3554,-9124,3554,4627,3552,9879,3550,6633,3549,11885,3548,-10364,3546,8639,3545,141,3545,13891,3544,-8358,3544,5393,3542,10645,3542,-11604,3540,7399,3539,12651,3538,-9598,3538,4153,3536,9405,3535,907,3535,-7592,3534,6159,3533,11412,3532,-10838,3530,8165,3529,-333,3529,13418,3528,-8831,3528,4919,3527,10172,3526,-12078,3524,6926,3522,-10071,3522,3679,3520,8932,3520,433,3519,-8065,3518,5686,3517,10938,3516,-11311,3516,2439,3514,7692,3513,-9305,3512,4446,3511,9698,3508,6452,3507,11704,3506,-10545,3505,8458,3504,-40,3503,13710,3503,-8539,3502,5212,3501,10464,3500,-11785,3499,7218,3497,-9779,3496,3972,3495,9224,3494,726,3493,-7772,3492,5978,3491,11231,3491,-11019,3489,7985,3488,-514,3487,13237,3487,-9012,3486,4738,3485,9991,3483,6745,3481,-10252,3479,8751,3478,252,3477,-8246,3477,5505,3475,10757,3475,-11492,3473,7511,3472,12763,3471,-9486,3471,4265,3469,9517,3468,1019,3467,6271,3465,11523,3465,-10726,3463,8277,3462,-221,3462,13530,3461,-8720,3461,5031,3459,10283,3459,-11966,3457,7037,3455,-9960,3455,3791,3453,9044,3453,545,3452,-7953,3451,5797,3450,11050,3449,-11199,3447,7804,3446,-9193,3445,4558,3444,9810,3441,6564,3440,11816,3440,-10433,3438,8570,3437,71,3436,-8427,3435,5324,3434,10576,3434,-11673,3432,7330,3430,-9667,3429,4084,3428,9336,3427,838,3426,6090,3424,11342,3424,-10907,3422,8096,3421,-402,3420,-8901,3420,4850,3418,10103,3416,6856,3414,-10140,3414,3610,3412,8863,3411,364,3410,-8134,3410,5617,3409,10869,3408,-11380,3406,7623,3404,-9374,3404,4377,3403,9629,3400,6383,3399,11635,3398,-10614,3397,8389,3396,-109,3395,-8608,3394,5143,3393,10395,3391,7149,3389,-9848,3388,3903,3387,9155,3386,657,3385,5909,3383,11162,3383,-11088,3381,7915,3380,-583,3379,-9081,3379,4669,3377,9922,3375,6676,3374,11928,3373,-10321,3371,8682,3370,183,3369,-8315,3369,5436,3368,10688,3367,-11561,3365,7442,3363,-9555,3363,4196,3362,9448,3361,950,3359,6202,3358,11454,3358,-10795,3356,8208,3355,-290,3354,-8789,3353,4962,3352,10214,3350,6968,3348,-10029,3347,3722,3346,8974,3345,476,3344,-8022,3344,5728,3342,10981,3342,-11269,3340,7735,3339,-764,3339,12987,3338,-9262,3338,4488,3336,9741,3334,6495,3333,11747,3332,-10502,3331,8501,3330,2,3329,-8496,3328,5255,3327,10507,3326,-11742,3325,7261,3323,-9736,3322,4015,3321,9267,3320,769,3319,6021,3317,11273,3317,-10976,3315,8027,3314,-471,3314,13280,3313,-8970,3313,4781,3311,10033,3309,6787,3308,12040,3307,-10210,3307,3541,3305,8794,3305,295,3304,-8203,3303,5547,3302,10800,3301,-11449,3300,7554,3298,-9443,3297,4308,3296,9560,3295,1061,3294,6314,3292,11566,3292,-10683,3290,8320,3289,-179,3288,-8677,3288,5074,3286,10326,3284,7080,3282,-9917,3282,3834,3280,9086,3279,588,3278,5840,3277,11092,3276,-11157,3274,7846,3274,-652,3273,13099,3273,-9151,3272,4600,3271,9853,3270,1354,3269,6606,3267,11859,3267,-10390,3265,8613,3264,114,3263,-8384,3263,5367,3261,10619,3261,-11630,3260,2120,3259,7373,3257,-9624,3257,4127,3255,9379,3255,880,3253,6133,3252,11385,3251,-10864,3250,8139,3249,-359,3248,-8858,3247,4893,3246,10145,3244,6899,3242,-10098,3241,3653,3240,8905,3239,407,3238,-8092,3238,5659,3236,10912,3236,-11338,3234,7665,3233,-833,3232,-9331,3232,4419,3231,9672,3230,1173,3228,6426,3227,11678,3226,-10571,3225,8432,3224,-67,3223,-8565,3222,5186,3221,10438,3219,7192,3217,-9805,3217,3946,3215,9198,3214,700,3213,5952,3212,11204,3211,-11045,3209,7958,3208,-540,3208,-9039,3207,4712,3206,9964,3205,1466,3203,6718,3202,11971,3202,-10279,3201,3472,3200,8724,3199,226,3198,-8272,3198,5478,3196,10731,3196,-11519,3195,2232,3194,7485,3192,-9512,3192,4238,3190,9491,3190,992,3188,6245,3187,11497,3186,-10752,3185,8251,3184,-248,3183,-8746,3182,5005,3181,10257,3179,7011,3177,-9986,3176,3765,3175,9017,3174,519,3173,5771,3172,11023,3171,-11226,3169,7777,3168,-721,3168,13030,3167,-9220,3167,4531,3166,9783,3165,1285,3163,6537,3162,11790,3162,-10460,3160,8544,3159,45,3158,-8453,3158,5297,3156,10550,3155,2051,3154,7304,3152,-9693,3152,4058,3150,9310,3150,811,3148,6064,3147,11316,3146,-10933,3145,8070,3144,-429,3143,-8927,3142,4824,3141,10076,3139,6830,3137,12082,3137,-10167,3137,3584,3135,8836,3134,338,3133,-8161,3133,5590,3132,10842,3131,2344,3129,7596,3129,-902,3128,-9401,3127,4350,3126,9603,3125,1104,3124,6356,3122,11609,3122,-10640,3121,3110,3120,8363,3119,-136,3118,-8634,3118,5117,3116,10369,3114,7123,3112,-9874,3112,3877,3111,9129,3110,630,3108,5883,3107,11135,3107,-11114,3106,2637,3105,7889,3104,-609,3103,-9108,3103,4643,3101,9895,3100,1397,3099,6649,3098,11901,3097,-10348,3097,3403,3096,8655,3095,157,3094,-8342,3093,5409,3092,10662,3092,-11588,3091,2163,3090,7415,3088,-9581,3087,4169,3086,9422,3085,923,3084,6176,3083,11428,3082,-10821,3082,2929,3080,8182,3079,-317,3079,-8815,3078,4936,3077,10188,3076,1689,3075,6942,3073,-10055,3072,3696,3071,8948,3070,450,3069,5702,3067,10954,3067,-11295,3067,2456,3065,7708,3064,-790,3063,-9289,3063,4462,3062,9714,3061,1216,3060,6468,3058,11721,3058,-10529,3057,3222,3056,8474,3055,-24,3054,-8522,3054,5228,3052,10481,3052,1982,3050,7235,3048,-9762,3048,3988,3047,9241,3046,742,3044,5995,3043,11247,3043,-11002,3042,2749,3041,8001,3040,-498,3039,-8996,3039,4755,3037,10007,3036,1509,3035,6761,3034,12013,3033,-10236,3033,3515,3032,8767,3031,269,3030,-8230,3029,5521,3028,10773,3028,-11476,3027,2275,3026,7527,3024,-9470,3024,4281,3022,9533,3021,1035,3020,6287,3019,11540,3018,-10710,3018,3041,3017,8294,3016,-205,3014,5047,3013,10300,3012,1801,3011,7054,3009,-9943,3009,3808,3007,9060,3006,561,3005,5814,3004,11066,3003,-11183,3003,2568,3002,7820,3001,-679,3e3,-9177,2999,4574,2998,9826,2997,1328,2996,6580,2994,11832,2994,-10417,2994,3334,2992,8586,2991,88,2990,5340,2989,10592,2988,2094,2987,7346,2985,-9651,2984,4100,2983,9353,2982,854,2981,6106,2980,11359,2979,-10890,2979,2860,2977,8113,2976,-386,2974,10119,2973,1620,2972,6873,2970,12125,2970,-10124,2969,3627,2968,8879,2967,380,2966,-8118,2966,5633,2965,10885,2964,2387,2962,7639,2961,-859,2960,4393,2959,9645,2958,1147,2957,6399,2955,11651,2955,-10598,2954,3153,2953,8405,2952,-93,2951,5159,2950,10412,2949,1913,2947,7165,2946,-9831,2945,3919,2944,9172,2943,673,2942,5926,2940,11178,2940,-11071,2940,2679,2938,7932,2937,-567,2936,-9065,2936,4686,2935,9938,2934,1439,2933,6692,2931,11944,2931,-10305,2930,3446,2929,8698,2928,200,2927,-8299,2927,5452,2926,10704,2925,2206,2923,7458,2922,-9539,2921,4212,2920,9464,2919,966,2918,6218,2916,11471,2916,-10779,2915,2972,2914,8224,2913,-274,2911,10231,2910,1732,2908,6985,2907,-10012,2906,3738,2905,8991,2904,492,2903,5745,2901,10997,2901,2499,2899,7751,2898,-748,2897,4505,2896,9757,2895,1259,2894,6511,2892,11763,2892,-10486,2891,3265,2890,8517,2889,19,2888,5271,2887,10523,2886,2025,2884,7277,2883,-9720,2882,4031,2881,9283,2880,785,2879,6037,2877,11290,2877,-10960,2877,2791,2875,8044,2874,-455,2873,4797,2872,10050,2871,1551,2870,6804,2868,12056,2868,-10193,2867,3558,2866,8810,2865,311,2864,-8187,2864,5564,2863,10816,2862,2318,2860,7570,2860,-929,2858,4324,2857,9576,2856,1078,2855,6330,2854,11582,2853,-10667,2853,3084,2851,8336,2850,-162,2848,10342,2847,1844,2846,7096,2844,-9901,2844,3850,2842,9103,2841,604,2840,5856,2839,11109,2838,-11140,2838,2610,2837,7863,2836,-636,2834,4617,2833,9869,2832,1370,2831,6623,2830,11875,2829,-10374,2829,3377,2827,8629,2827,130,2825,5383,2824,10635,2823,2137,2822,7389,2821,-1109,2820,4143,2818,9395,2818,897,2816,6149,2815,11401,2814,-10848,2814,2903,2813,8155,2812,-343,2809,10162,2808,1663,2807,6915,2805,-10081,2805,3669,2804,8922,2803,423,2802,-8075,2801,5676,2800,10928,2800,-11321,2799,2429,2798,7682,2797,-817,2796,4436,2795,9688,2794,1190,2792,6442,2791,11694,2791,-10555,2790,3196,2789,8448,2788,-50,2787,5202,2785,10454,2785,1956,2783,7208,2782,-9789,2781,3962,2780,9214,2779,716,2778,5968,2776,11221,2776,-11029,2776,2722,2774,7974,2773,-524,2772,4728,2771,9981,2770,1482,2769,6735,2767,11987,2767,-10262,2765,8741,2764,242,2763,-8256,2763,5495,2762,10747,2761,2249,2760,7501,2759,-998,2757,4255,2756,9507,2755,1009,2754,6261,2753,11513,2752,-10736,2752,3015,2751,8267,2750,-231,2747,10273,2746,1775,2745,7027,2743,-9970,2743,3781,2742,9033,2741,535,2739,5787,2738,11040,2737,2541,2736,7794,2735,-705,2734,4547,2732,9800,2732,1301,2730,6554,2729,11806,2729,-10443,2728,3308,2727,8560,2726,61,2725,5314,2723,10566,2723,2068,2721,7320,2720,-1179,2719,4074,2718,9326,2717,828,2716,6080,2714,11332,2714,-10917,2714,2834,2712,8086,2711,-412,2710,4840,2709,10092,2708,1594,2707,6846,2705,-10151,2705,3600,2703,8853,2702,354,2702,-8144,2700,10859,2699,-11390,2699,2360,2698,7613,2697,-886,2696,4367,2694,9619,2693,1120,2692,6373,2691,11625,2690,-10624,2690,3127,2689,8379,2688,-120,2685,10385,2684,1887,2683,7139,2682,-1359,2681,-9858,2681,3893,2680,9145,2679,647,2678,-7852,2678,5899,2676,11151,2675,2653,2674,7905,2673,-593,2672,4659,2671,9912,2670,1413,2669,6665,2667,11918,2667,-10331,2665,8672,2664,173,2663,5426,2662,10678,2661,2179,2660,7432,2659,-1067,2657,4186,2656,9438,2655,940,2654,6192,2653,11444,2652,-10805,2652,2946,2651,8198,2650,-300,2649,4952,2647,10204,2646,1706,2645,6958,2643,-10039,2643,3712,2642,8964,2641,466,2640,-8033,2640,5718,2638,10971,2638,-11279,2637,2472,2636,7724,2635,-774,2634,4478,2633,9731,2632,1232,2631,6485,2629,11737,2629,-10512,2628,3238,2627,8491,2626,-8,2624,10497,2623,1999,2622,7251,2621,-1248,2620,-9746,2620,4005,2618,9257,2617,759,2616,6011,2615,11263,2614,2765,2613,8017,2612,-481,2611,4771,2609,10023,2608,1525,2607,6777,2605,-10220,2604,8783,2603,285,2600,10790,2600,2291,2598,7544,2597,-955,2596,4297,2595,9550,2594,1051,2593,6304,2591,11556,2591,-10693,2591,3058,2589,8310,2589,-189,2586,10316,2585,1818,2584,7070,2583,-1429,2582,-9927,2582,3824,2580,9076,2580,578,2578,5830,2577,11082,2577,-11167,2576,2584,2575,7836,2574,-662,2573,4590,2572,9842,2571,1344,2569,6596,2568,11849,2568,-10401,2567,3350,2566,8603,2565,104,2563,10609,2562,2110,2561,7363,2560,-1136,2558,4117,2557,9369,2556,870,2555,6123,2554,11375,2553,-10874,2553,2877,2552,8129,2551,-370,2550,4883,2548,10135,2547,1637,2546,6889,2544,-10108,2543,8895,2542,397,2541,-8102,2539,10901,2539,2403,2537,7655,2536,-843,2535,4409,2534,9662,2533,1163,2532,6415,2530,11668,2530,-10581,2530,3169,2528,8422,2528,-77,2525,10428,2524,1929,2523,7182,2522,-1317,2521,-9815,2521,3936,2519,9188,2519,690,2518,-7809,2516,11194,2515,2696,2514,7948,2513,-550,2512,4702,2511,9954,2510,1456,2509,6708,2507,-10289,2506,3462,2505,8714,2504,216,2502,10721,2501,2222,2500,7474,2499,-1024,2498,4228,2496,9481,2495,982,2493,11487,2493,-10762,2492,2988,2491,8241,2490,-258,2489,4995,2487,10247,2487,1749,2485,7001,2484,-9996,2483,3755,2482,9007,2481,509,2479,11013,2478,2515,2477,7767,2476,-731,2474,4521,2473,9773,2472,1275,2470,11780,2469,-10470,2469,3281,2468,8533,2467,35,2464,10540,2463,2041,2462,7294,2461,-1205,2460,4047,2459,9300,2458,801,2456,11306,2455,2808,2453,8060,2453,-439,2451,4814,2450,10066,2449,1568,2448,6820,2447,12072,2446,-10177,2445,8826,2444,328,2442,5580,2441,10832,2440,2334,2439,7586,2438,-912,2437,4340,2436,9592,2435,1094,2432,11599,2432,-10651,2432,3100,2430,8353,2429,-146,2428,5106,2427,10359,2426,1860,2425,7113,2424,-1386,2423,-9884,2423,3867,2422,9119,2421,620,2418,11125,2417,2627,2416,7879,2415,-619,2414,4633,2413,9885,2412,1387,2409,-10358,2409,3393,2407,8645,2406,147,2405,5399,2404,10651,2403,2153,2402,7405,2401,-1093,2400,4159,2399,9412,2398,913,2395,11418,2394,2919,2393,8172,2392,-327,2391,4926,2390,10178,2389,1679,2388,6932,2387,-1567,2386,-10065,2384,8938,2383,440,2382,5692,2381,10944,2380,2446,2379,7698,2378,-800,2377,4452,2376,9704,2375,1206,2372,11710,2372,-10539,2371,3212,2370,8464,2369,-34,2368,5218,2367,10471,2366,1972,2365,7224,2364,-1274,2363,3978,2361,9231,2361,732,2358,11237,2358,-11012,2357,2738,2356,7991,2355,-508,2354,4745,2353,9997,2352,1499,2349,-10246,2348,3505,2347,8757,2346,259,2345,5511,2344,10763,2343,2265,2342,7517,2341,-981,2340,4271,2338,9523,2338,1025,2335,11530,2334,3031,2333,8283,2332,-215,2331,5037,2330,10290,2329,1791,2328,7044,2327,-1455,2326,-9953,2324,9050,2323,551,2322,5804,2321,11056,2320,2558,2319,7810,2318,-689,2317,4564,2316,9816,2315,1318,2312,-10427,2311,3324,2310,8576,2309,78,2308,5330,2307,10582,2306,2084,2305,7336,2304,-1162,2303,4090,2301,9342,2301,844,2298,11349,2297,2850,2296,8103,2295,-396,2294,4856,2293,10109,2292,1610,2289,12115,2289,-10134,2287,8869,2287,370,2286,-8128,2285,5623,2284,10875,2283,2377,2282,7629,2281,-869,2280,4383,2279,9635,2278,1137,2275,3143,2273,8395,2272,-103,2271,5149,2270,10401,2269,1903,2268,7155,2267,-1343,2266,-9842,2266,3909,2265,9162,2264,663,2263,5915,2261,11168,2260,2669,2259,7922,2258,-577,2257,4676,2256,9928,2255,1429,2252,-10315,2252,3436,2251,8688,2250,190,2249,-8309,2248,5442,2247,10694,2246,2196,2245,7448,2244,-1050,2243,4202,2242,9454,2241,956,2238,2962,2236,8214,2236,-284,2234,4968,2233,10221,2232,1722,2231,6974,2230,-1524,2229,-10022,2228,8981,2227,482,2226,-8016,2226,5735,2224,10987,2224,2488,2222,7741,2222,-758,2220,4495,2219,9747,2218,1249,2215,-10496,2215,3255,2214,8507,2213,9,2212,5261,2210,10513,2210,2015,2208,7267,2208,-1231,2206,4021,2205,9273,2204,775,2202,11280,2201,2781,2200,8033,2199,-465,2198,4787,2196,10040,2196,1541,2193,-10203,2192,3547,2191,8800,2190,301,2189,5554,2188,10806,2187,2308,2186,7560,2185,-939,2184,4314,2182,9566,2182,1068,2178,3074,2177,8326,2176,-172,2175,5080,2174,10332,2173,1834,2172,7086,2171,-1412,2170,-9911,2168,594,2167,-7904,2166,5846,2165,11099,2164,2600,2163,7853,2162,-646,2161,4606,2160,9859,2159,1360,2156,-10384,2156,3367,2155,8619,2154,120,2152,5373,2151,10625,2150,2127,2149,7379,2148,-1119,2147,4133,2146,9385,2145,887,2142,2893,2141,8145,2140,-353,2139,-8852,2139,4899,2137,10151,2136,1653,2134,-1593,2134,-10092,2133,3659,2131,413,2130,5665,2128,2419,2127,7672,2126,-827,2125,4426,2123,9678,2123,1179,2119,3186,2118,8438,2117,-60,2116,5192,2115,10444,2114,1946,2113,7198,2112,-1300,2111,-9799,2111,3952,2109,706,2108,-7793,2105,2712,2104,7964,2103,-534,2102,4718,2101,9971,2100,1472,2097,-10272,2097,3478,2095,232,2093,5485,2091,2238,2090,7491,2089,-1008,2088,4245,2087,9497,2086,999,2083,3005,2082,8257,2081,-241,2080,-8740,2080,5011,2078,10263,2078,1765,2075,-1481,2075,-9980,2072,525,2071,5777,2070,11030,2069,2531,2068,7783,2067,-715,2066,4537,2064,9790,2064,1291,2061,-10453,2060,3297,2059,8550,2058,51,2057,5304,2056,10556,2055,2058,2054,7310,2053,-1189,2052,4064,2051,9316,2050,818,2049,-7681,2046,2824,2045,8076,2044,-422,2044,-8921,2043,4830,2042,10082,2041,1584,2038,-10161,2038,3590,2036,344,2035,5596,2033,2350,2031,7603,2031,-896,2029,4356,2028,9609,2027,1110,2024,3117,2023,8369,2022,-130,2021,5123,2020,10375,2019,1877,2017,-1369,2016,-9868,2014,637,2010,2643,2009,7895,2008,-603,2007,4649,2006,9901,2005,1403,2002,-10342,2002,3409,2e3,163,1998,5415,1996,2169,1995,7422,1994,-1077,1993,4176,1992,9428,1991,929,1990,-7569,1988,2936,1987,8188,1986,-310,1985,-8809,1985,4942,1983,10194,1983,1696,1981,-1550,1980,-10049,1979,3702,1977,456,1976,5708,1975,10960,1974,2462,1973,7714,1972,-784,1971,4468,1970,9721,1969,1222,1968,-7276,1966,-10522,1966,3228,1964,8481,1964,-18,1962,5235,1961,10487,1960,1988,1958,-1258,1957,-9756,1955,749,1952,2755,1951,8007,1950,-491,1949,-8990,1949,4761,1947,10013,1947,1515,1944,-10230,1943,3521,1941,275,1940,5527,1938,2281,1937,7533,1936,-965,1935,4287,1934,9540,1933,1041,1930,3047,1928,8300,1927,-199,1926,5054,1925,10306,1924,1808,1922,-1439,1921,-9937,1919,568,1916,2574,1915,7826,1914,-672,1913,4580,1911,9832,1910,1334,1910,-7165,1908,-10411,1907,3340,1905,94,1904,5346,1902,2100,1901,7353,1900,-1146,1899,-9644,1897,860,1894,2867,1892,8119,1892,-380,1891,-8878,1890,4873,1889,10125,1888,1627,1887,-6872,1886,-1619,1885,-10118,1885,3633,1883,387,1882,5639,1881,10891,1880,2393,1879,7645,1878,-853,1877,4399,1875,9651,1875,1153,1871,3159,1870,8412,1869,-87,1868,5165,1867,10418,1866,1919,1864,-1327,1863,-9825,1861,679,1858,2686,1856,7938,1856,-560,1855,-9059,1854,4692,1853,9944,1852,1446,1852,-7053,1850,-10299,1849,3452,1847,206,1846,5458,1844,2212,1843,7464,1842,-1034,1841,-9533,1841,4218,1840,9471,1839,972,1835,2978,1834,8231,1833,-268,1832,4985,1831,10237,1830,1738,1828,-1508,1827,-10006,1827,3745,1825,499,1822,2505,1821,7757,1820,-741,1819,-9240,1819,4511,1817,9763,1817,1265,1813,3271,1811,25,1810,5277,1809,10530,1808,2031,1806,-1215,1805,-9713,1803,791,1802,-7707,1800,2797,1798,8050,1798,-449,1797,-8947,1796,4804,1795,10056,1794,1558,1792,12062,1792,-10187,1791,3564,1789,318,1786,2324,1785,7576,1784,-922,1783,-9421,1783,4330,1782,9582,1781,1084,1778,3090,1776,-156,1774,5096,1773,10349,1772,1850,1770,-1396,1770,-9894,1769,3856,1767,610,1764,2617,1763,7869,1762,-630,1761,-9128,1761,4623,1760,9875,1759,1377,1756,3383,1754,137,1752,5389,1751,10641,1750,2143,1749,7395,1748,-1103,1748,-9602,1745,903,1742,2909,1741,8162,1740,-337,1739,-8835,1739,4915,1738,10168,1737,1669,1735,-1577,1734,12174,1734,-10075,1734,3676,1732,429,1728,2436,1727,7688,1726,-810,1726,-9309,1725,4442,1724,9694,1723,1196,1720,3202,1718,-44,1717,5208,1716,10460,1715,1962,1713,-1284,1712,-9783,1710,722,1706,2728,1705,7981,1704,-518,1704,-9016,1703,4735,1702,9987,1701,1488,1698,3495,1696,249,1693,2255,1692,7507,1691,-991,1690,-9490,1690,4261,1688,9513,1688,1015,1684,3021,1682,-225,1681,5027,1680,10280,1679,1781,1677,-1465,1676,-9963,1676,3787,1674,541,1671,2547,1670,7800,1669,-699,1668,-9197,1668,4554,1666,9806,1666,1308,1662,3314,1660,68,1658,10572,1657,2074,1655,-1172,1654,-9671,1652,834,1649,2840,1648,8092,1647,-406,1646,-8904,1646,4846,1645,10099,1644,1600,1642,-1646,1641,12105,1641,3606,1639,360,1635,2367,1634,7619,1633,-880,1633,-9378,1632,4373,1631,9625,1630,1127,1627,3133,1625,-113,1624,5139,1623,10391,1622,1893,1620,-1353,1619,3899,1617,653,1613,2659,1612,7912,1612,-587,1611,-9085,1610,4665,1609,9918,1608,1419,1605,3426,1603,179,1601,10684,1600,2186,1599,7438,1598,-1060,1597,-9559,1596,9444,1595,946,1592,2952,1590,-294,1588,4958,1587,10210,1586,1712,1584,-1534,1583,3718,1581,472,1578,2478,1577,7731,1576,-768,1575,-9266,1575,4485,1573,1238,1570,3245,1568,-1,1567,-8500,1565,10503,1565,2005,1563,-1241,1559,765,1556,2771,1554,-475,1554,-8974,1553,4777,1552,10030,1551,1531,1549,12036,1548,3537,1546,291,1544,10796,1543,2297,1542,7550,1541,-949,1540,4304,1538,1058,1535,3064,1533,-182,1532,-8681,1531,5070,1530,10322,1529,1824,1527,-1422,1526,3830,1524,584,1521,2590,1520,7842,1519,-656,1518,-9154,1518,4596,1517,9849,1516,1350,1513,3356,1511,110,1510,-8388,1508,10615,1508,2117,1506,-1130,1502,877,1499,2883,1497,-363,1497,-8862,1496,4889,1495,10141,1494,1643,1492,-1603,1492,12148,1491,3649,1489,403,1486,2409,1485,7662,1484,-837,1483,4415,1481,1169,1478,3176,1476,-71,1475,-8569,1473,10434,1472,1936,1470,-1310,1469,3942,1467,696,1464,2702,1463,7954,1462,-544,1461,-9043,1461,4708,1460,9960,1459,1462,1456,3468,1454,222,1451,10727,1451,2228,1450,7481,1449,-1018,1446,988,1442,2995,1440,-251,1440,-8750,1438,10253,1437,1755,1435,-1491,1434,3761,1432,515,1429,2521,1428,7773,1427,-725,1426,4527,1424,1281,1421,3287,1419,41,1418,-8457,1416,10546,1416,2047,1414,-1199,1412,4054,1411,808,1407,2814,1405,-432,1405,-8931,1404,4820,1403,10072,1402,1574,1400,-1672,1400,12079,1399,3580,1397,334,1395,10839,1394,2340,1393,7592,1392,-906,1391,4346,1389,1100,1386,3106,1384,-140,1383,-8638,1381,10365,1381,1867,1379,-1380,1378,12371,1377,3873,1375,627,1372,2633,1371,7885,1370,-613,1369,4639,1368,9891,1367,1393,1364,3399,1362,153,1360,10658,1359,2159,1357,-1087,1356,4165,1354,919,1351,2926,1349,-321,1348,-8819,1346,10184,1346,1686,1344,-1560,1342,3692,1341,446,1337,2452,1336,7704,1335,-794,1334,4458,1332,1212,1329,3218,1327,-28,1326,-8526,1325,10477,1324,1978,1322,-1268,1321,3985,1319,738,1316,2745,1315,7997,1314,-501,1311,10003,1311,1505,1308,3511,1306,265,1303,10769,1302,2271,1301,7523,1300,-975,1297,1031,1294,3037,1292,-209,1291,-8707,1290,10296,1289,1797,1287,-1449,1286,3804,1284,558,1281,2564,1280,7816,1279,-682,1276,1324,1273,3330,1271,84,1270,-8415,1268,10589,1268,2090,1266,-1156,1264,4096,1262,850,1259,2856,1257,-390,1254,1617,1252,-1630,1252,12121,1251,3623,1249,377,1247,10881,1246,2383,1245,7635,1244,-863,1241,1143,1238,3149,1236,-97,1235,-8595,1234,10408,1233,1909,1231,-1337,1230,3915,1228,669,1225,2676,1223,7928,1223,-571,1220,9934,1219,1436,1216,3442,1214,196,1212,10700,1211,2202,1209,-1044,1208,4208,1206,962,1203,2968,1201,-278,1198,1728,1196,-1518,1195,3735,1193,488,1190,2495,1189,7747,1188,-751,1185,1255,1184,-7244,1182,3261,1180,15,1179,-8484,1177,10519,1177,2021,1175,-1225,1174,12526,1173,4027,1171,781,1168,2787,1166,-459,1163,1547,1160,3554,1158,308,1156,10812,1155,2314,1154,7566,1153,-932,1150,1074,1147,3080,1145,-166,1144,5086,1143,10339,1142,1840,1140,-1406,1139,3846,1137,600,1134,2606,1132,7859,1132,-640,1129,1367,1125,3373,1123,127,1121,10631,1120,2133,1118,-1113,1117,4139,1115,893,1112,2899,1110,-347,1109,4905,1107,1659,1104,3665,1102,419,1099,2426,1098,7678,1097,-821,1094,1186,1093,-7313,1091,3192,1089,-54,1088,-8553,1087,10450,1086,1952,1084,-1294,1083,3958,1081,712,1078,2718,1076,7971,1076,-528,1074,4724,1073,1478,1072,-7020,1069,3485,1067,238,1065,10743,1064,2245,1064,-6254,1062,-1001,1061,4251,1059,1005,1059,-7494,1056,3011,1054,-235,1053,5017,1051,1771,1050,-6727,1048,3777,1046,531,1043,2537,1042,7790,1041,-709,1040,4544,1038,1297,1037,-7201,1035,3304,1033,58,1032,-8441,1031,10562,1030,2064,1029,-6435,1028,-1182,1027,4070,1025,824,1022,2830,1020,-416,1019,4836,1017,1590,1016,-6908,1013,3596,1012,350,1008,2356,1008,-6142,1007,-890,1005,4363,1003,1117,1003,-7382,1e3,3123,998,-123,995,1883,994,-6616,993,-1363,992,3889,990,643,987,2649,986,7901,985,-597,984,4655,983,9908,982,1409,981,-7089,979,3415,977,169,976,-8329,974,2176,973,-6323,972,-1071,971,4182,969,936,968,-7563,966,2942,964,-304,963,4948,961,1702,960,-6796,958,3708,956,462,953,2468,951,7721,951,-778,950,4474,948,1228,947,-7270,944,3235,943,-12,940,10493,939,1995,939,-6504,938,-1251,936,4001,934,755,931,2761,930,8013,929,-485,928,4767,926,1521,926,-6977,923,3527,921,281,918,2287,917,-6211,916,-959,915,4294,913,1047,912,-7451,910,3054,908,-192,905,1814,904,-6685,902,3820,900,574,899,-7925,897,2580,896,7832,895,-666,894,4586,893,9839,892,1340,891,-7158,889,3346,887,100,884,2106,883,-6392,882,-1140,881,12611,881,4113,879,867,878,-7632,876,2873,874,-373,873,4879,871,1633,870,-6866,868,3639,866,393,865,-8105,862,2399,862,-6099,861,-847,859,4405,857,1159,857,-7339,854,3165,852,-81,849,1926,849,-6573,846,3932,844,686,844,-7813,841,2692,839,-554,838,4698,837,9950,836,1452,835,-7046,833,3458,831,212,830,-8286,828,2218,827,-6280,826,-1028,825,4224,823,978,822,-7520,820,2985,818,-262,817,4991,815,1745,814,-6754,812,3751,810,505,807,2511,806,-5987,806,7763,805,-735,804,4517,802,1271,801,-7227,799,3277,797,31,794,2037,793,-6461,792,-1209,791,12542,791,4044,789,797,788,-7701,786,2804,785,8056,784,-442,783,4810,781,1564,780,-6935,778,3570,776,324,773,2330,772,-6168,771,-916,770,4336,768,1090,767,-7408,764,3096,763,-150,759,1856,759,-6642,756,3863,754,617,751,2623,751,-5876,749,-623,748,4629,746,1383,746,-7116,743,3389,741,143,738,2149,738,-6349,736,-1097,735,4155,733,909,733,-7589,730,2915,729,8168,728,-331,727,4922,725,1676,724,-6823,722,3682,720,436,717,2442,716,-6057,715,-804,714,4448,712,1202,711,-7296,709,3208,707,-38,704,1968,703,-6530,702,12473,701,3974,699,728,696,2735,695,7987,694,-512,693,4741,692,9993,691,1495,690,-7004,688,3501,686,255,683,2261,682,-6237,681,-985,680,4267,678,1021,677,-7477,675,3027,673,-219,670,1787,669,-6711,667,3794,665,547,662,2554,661,-5945,660,-692,659,4560,657,1314,656,-7185,654,3320,652,74,649,2080,648,-6418,646,4086,644,840,643,-7658,641,2846,639,8099,639,-400,637,4853,636,10105,636,1606,635,-6892,632,3613,631,367,627,2373,627,-6126,626,-873,624,4379,623,1133,622,-7366,620,11638,619,3139,618,-107,614,1899,614,-6599,611,3905,609,659,606,2665,606,-5833,604,-581,603,4672,601,1426,601,-7073,598,3432,593,2192,593,-6307,590,4198,588,952,588,-7546,585,2958,584,-5540,583,-288,581,10217,580,1718,579,-6780,577,3724,572,2485,571,-6014,570,-762,569,4491,567,1245,566,-7254,565,11749,564,3251,562,5,559,2011,558,-6487,556,4017,554,771,553,-7727,551,2777,550,-5721,549,-469,548,4783,547,10036,546,1537,545,-6961,543,3544,538,2304,537,-6195,536,-942,535,4310,534,9562,533,1064,532,-7435,531,11568,530,3070,529,-5428,528,-176,525,1830,524,-6668,522,3836,520,590,517,2596,516,-5902,515,-650,514,4603,512,1356,511,-7142,510,11861,509,3363,504,2123,503,-6376,501,4129,499,883,498,-7616,496,2889,495,-5609,492,10148,491,1649,490,-6849,488,3655,483,2415,482,-6083,481,-831,480,4422,479,9674,478,1176,477,-7323,476,11680,475,3182,474,-5317,470,1942,469,-6557,467,3948,465,702,462,2708,461,-5790,459,4714,457,1468,456,-7030,454,3474,449,2235,448,-6264,446,4241,444,995,443,-7504,441,11499,441,3001,440,-5498,436,10259,436,1761,435,-6737,433,3767,428,2527,427,-5971,425,4533,423,9786,423,1287,422,-7211,420,11792,420,3294,419,-5205,415,2054,414,-6445,412,4060,409,-7685,407,2820,406,-5678,402,10079,402,1580,401,-6918,399,3586,394,2346,393,-6152,390,4353,389,1106,388,-7392,386,11611,386,3113,385,-5386,381,1873,380,-6626,377,3879,372,2639,372,-5859,369,4645,368,9898,368,1399,367,-7099,364,3405,359,2165,359,-6333,356,4172,354,-7573,352,11430,351,2932,351,-5567,347,10190,346,1692,346,-6807,343,3698,338,2458,338,-6040,335,4464,334,9717,333,1218,333,-7280,331,11723,330,3224,330,-5274,325,1985,325,-6514,322,3991,320,-7754,317,2751,317,-5748,312,1511,312,-6987,309,3517,304,2277,304,-6221,301,4283,299,1037,299,-7461,297,11542,296,3044,296,-5455,292,10302,291,1804,291,-6695,288,3810,283,2570,283,-5928,280,4576,279,9829,278,1330,278,-7168,275,3336,275,-5162,270,2096,270,-6402,267,4103,265,-7642,263,11361,262,2863,262,-5636,257,1623,257,-6876,254,3629,249,2389,249,-6109,246,4395,244,1149,244,-7349,242,11654,241,3155,241,-5343,236,1915,236,-6583,233,3922,231,-7823,229,11180,228,2682,228,-5817,224,9940,223,1442,223,-7057,220,3448,215,2208,215,-6290,212,4214,210,968,210,-7530,208,11473,207,2974,207,-5524,202,1735,202,-6764,199,3741,194,2501,194,-5998,191,4507,189,1261,189,-7237,187,11766,186,3267,185,-5231,181,2027,181,-6471,178,4033,176,-7711,174,11292,173,2794,172,-5705,169,10052,168,1554,168,-6945,165,3560,160,2320,159,-6178,158,12825,157,4326,155,1080,155,-7418,153,11585,152,3086,151,-5412,148,10345,147,1846,147,-6652,144,3853,140,11111,139,2613,138,-5886,134,1373,134,-7126,131,3379,130,-5119,126,2139,125,-6359,123,4145,121,-7599,119,11404,118,2905,117,-5593,114,10164,113,1665,112,-6833,110,3672,106,10930,105,2432,104,-6067,100,1192,100,-7307,98,11697,97,3198,96,-5300,92,1958,91,-6540,90,12463,89,3964,87,-7780,85,11223,84,2724,83,-5774,80,9983,79,1485,78,-7014,76,3491,71,2251,70,-6248,69,12756,68,4257,66,1011,66,-7487,64,11516,63,3017,62,-5481,59,10276,58,1777,57,-6721,56,12282,55,3783,53,-7961,51,11042,50,2544,49,-5955,45,1304,45,-7195,42,3310,41,-5189,37,2070,36,-6428,34,4076,32,-7668,30,11335,29,2836,28,-5662,25,10095,24,1596,23,-6902,21,3603,16,2363,15,-6136,11,1123,11,-7376,9,11627,8,3129,7,-5369,3,1889,2,-6609,0,3895,-2,-7849,-4,11154,-5,2655,-6,-5843,-10,1415,-11,-7083,-13,3422,-14,-5077,-18,2182,-19,-6317,-21,4188,-23,942,-23,-7557,-25,11447,-26,2948,-27,-5550,-30,10207,-31,1708,-32,-6790,-34,3714,-36,-8030,-38,10973,-39,2474,-40,-6024,-44,1235,-45,-7264,-46,11739,-47,3241,-48,-5258,-52,2001,-53,-6498,-55,4007,-57,-7737,-59,11266,-60,2767,-61,-5731,-62,13272,-64,10026,-65,1527,-66,-6971,-68,3533,-69,-4965,-73,2294,-74,-6205,-78,1054,-78,-7445,-80,11558,-81,3060,-82,-5439,-85,10318,-86,1820,-87,-6678,-88,12325,-89,3826,-91,-7918,-93,11085,-94,2586,-95,-5912,-96,13091,-99,1346,-100,-7152,-102,3353,-103,-5146,-107,2113,-108,-6386,-110,4119,-112,-7626,-114,11377,-115,2879,-116,-5619,-117,13384,-119,10138,-120,1639,-121,-6859,-122,12144,-123,3645,-124,-4853,-128,2405,-129,-6093,-133,1165,-134,-7333,-135,11670,-136,3172,-137,-5327,-140,10430,-141,1932,-142,-6567,-144,3938,-145,-4560,-147,-7807,-148,11197,-149,2698,-150,-5800,-151,13203,-154,1458,-155,-7040,-156,11963,-157,3464,-158,-5034,-162,2224,-163,-6274,-167,985,-168,-7514,-169,11489,-170,2991,-171,-5508,-174,10249,-175,1751,-176,-6748,-178,3757,-179,-4741,-181,-7987,-182,11016,-183,2517,-184,-5981,-188,1277,-189,-7221,-191,3284,-192,-5215,-193,13788,-196,2044,-197,-6455,-199,4050,-202,-7695,-203,11308,-204,2810,-205,-5689,-206,13315,-209,1570,-210,-6928,-211,12075,-212,3576,-213,-4922,-217,2336,-218,-6162,-222,1096,-223,-7402,-224,11601,-225,3103,-226,-5396,-229,10361,-230,1863,-231,-6636,-233,3869,-234,-4630,-236,-7876,-237,11127,-238,2629,-239,-5869,-243,1389,-244,-7109,-246,3395,-247,-5103,-248,13900,-251,2155,-252,-6343,-255,-4337,-257,-7583,-258,11420,-259,2922,-260,-5577,-261,13426,-263,10180,-264,1682,-265,-6817,-266,12186,-267,3688,-268,-4810,-272,2448,-273,-6050,-277,1208,-278,-7290,-280,3214,-281,-5284,-282,13719,-284,10473,-285,1974,-286,-6524,-288,3981,-289,-4518,-291,-7764,-292,11239,-293,2741,-294,-5758,-295,13245,-298,1501,-299,-6998,-300,12006,-301,3507,-302,-4991,-303,14012,-306,2267,-307,-6231,-310,-4225,-311,1027,-312,-7471,-313,11532,-314,3034,-315,-5465,-318,10292,-319,1794,-320,-6705,-322,3800,-323,-4699,-325,-7945,-327,2560,-328,-5939,-331,-3932,-332,1320,-333,-7178,-335,3326,-336,-5172,-337,13831,-339,10585,-340,2086,-341,-6412,-344,-4406,-346,-7652,-348,2853,-349,-5646,-350,13357,-353,1613,-354,-6886,-355,12117,-356,3619,-357,-4880,-358,14124,-361,2379,-362,-6119,-365,-4113,-366,1139,-367,-7359,-369,3145,-370,-5353,-371,13650,-373,10404,-374,1905,-375,-6593,-377,3912,-378,-4587,-379,14416,-380,-7833,-382,2672,-383,-5827,-387,1432,-388,-7067,-390,3438,-391,-5060,-392,13943,-395,2198,-396,-6300,-399,-4294,-401,-7540,-403,2964,-404,-5534,-405,13469,-408,1724,-409,-6774,-410,12229,-411,3731,-412,-4768,-413,14235,-414,-8014,-416,2491,-417,-6008,-420,-4001,-421,1251,-422,-7248,-424,3257,-425,-5241,-426,13762,-428,10516,-429,2017,-430,-6481,-433,-4475,-435,-7721,-437,2784,-438,-5715,-442,1544,-443,15294,-443,-6955,-445,3550,-446,-4949,-448,14054,-450,2310,-451,-6189,-454,-4182,-456,-7428,-458,3076,-459,-5422,-462,10335,-463,1836,-464,-6662,-466,3843,-467,-4656,-469,14347,-469,-7902,-471,2603,-472,-5896,-475,-3890,-476,1363,-477,-7136,-479,3369,-480,-5130,-482,13874,-484,2129,-485,-6369,-488,-4363,-490,-7609,-492,2895,-493,-5603,-497,1655,-498,-6843,-500,3662,-501,-4837,-503,14166,-503,-8083,-505,2422,-506,-6077,-509,-4071,-511,-7317,-513,3188,-514,-5310,-518,10447,-518,1948,-519,-6550,-522,-4544,-524,14459,-524,-7790,-527,2714,-527,-5784,-530,-3778,-532,1475,-532,-7024,-534,11979,-535,3481,-535,-5018,-537,13985,-540,2241,-540,-6258,-543,-4251,-545,-7498,-548,3007,-548,-5491,-553,1767,-553,-6731,-555,12272,-556,3773,-556,-4725,-558,14278,-558,-7971,-561,2534,-561,-5965,-565,-3959,-566,1294,-566,15044,-566,-7205,-569,3300,-570,-5199,-573,10558,-574,2060,-574,-6439,-578,-4432,-579,14571,-579,-7678,-582,2826,-583,-5672,-586,-3666,-587,1586,-588,-6912,-590,3593,-591,-4906,-592,14097,-595,2353,-596,-6146,-599,-4140,-601,-7386,-603,3119,-604,-5380,-608,1879,-609,-6619,-612,-4613,-613,14390,-614,-7859,-616,2645,-617,-5853,-620,-3847,-621,1405,-622,-7093,-624,3412,-625,-5087,-626,13916,-628,10670,-629,2172,-630,-6327,-633,-4321,-634,14683,-635,-7567,-637,2938,-638,-5560,-639,13443,-641,-3554,-642,1698,-643,-6800,-645,3704,-646,-4794,-647,14209,-648,-8040,-650,2464,-651,-6034,-654,-4028,-656,-7274,-658,3231,-659,-5268,-663,1991,-664,-6508,-667,-4501,-669,14502,-669,-7748,-671,2757,-672,-5741,-675,-3735,-676,1517,-677,-6981,-679,3523,-680,-4975,-682,14028,-684,10782,-684,2284,-685,-6215,-688,-4209,-690,-7455,-692,3050,-693,-5449,-697,1810,-698,-6689,-701,3816,-701,-4682,-703,14321,-703,-7928,-705,11075,-706,2576,-706,-5922,-709,-3916,-711,1336,-711,-7162,-714,3343,-714,-5156,-719,2103,-719,-6396,-723,-4390,-724,14613,-724,-7636,-727,2869,-728,-5630,-731,-3623,-732,1629,-733,-6869,-735,3635,-736,-4863,-737,14140,-739,10894,-740,2395,-741,-6103,-744,-4097,-746,-7343,-748,3162,-749,-5337,-753,1922,-754,-6577,-757,-4571,-758,14433,-759,-7817,-760,11186,-761,2688,-762,-5810,-765,-3804,-766,1448,-767,-7050,-769,3454,-770,-5044,-771,13959,-774,2214,-775,-6284,-778,-4278,-780,14725,-780,-7524,-782,2981,-783,-5518,-786,-3512,-787,1741,-788,-6758,-790,3747,-791,-4751,-793,14252,-795,11006,-795,2507,-796,-5991,-799,-3985,-801,-7231,-803,3273,-804,-5225,-808,2034,-809,-6465,-812,-4459,-814,-7705,-816,11298,-817,2800,-817,-5699,-820,-3692,-822,1560,-822,-6939,-825,3566,-825,-4932,-827,14071,-830,2326,-830,-6172,-834,-4166,-835,-7412,-838,3093,-839,-5406,-843,1853,-844,-6646,-846,3859,-847,-4640,-849,-7886,-851,2619,-852,-5880,-855,-3873,-856,1379,-857,-7119,-858,11884,-859,3385,-860,-5113,-864,2145,-865,-6353,-866,12650,-868,-4347,-869,14656,-870,-7593,-872,2912,-873,-5587,-876,-3581,-877,1672,-878,-6827,-880,12176,-880,3678,-881,-4821,-883,14183,-885,2438,-886,-6060,-889,-4054,-891,-7300,-893,11703,-893,3204,-894,-5294,-898,1964,-899,-6534,-901,12469,-902,-4528,-904,-7774,-907,2731,-907,-5768,-910,-3762,-912,1491,-912,-7008,-915,3497,-915,-5001,-920,2257,-920,-6241,-924,-4235,-925,14768,-926,-7481,-928,3023,-929,-5475,-933,1784,-934,-6715,-936,3790,-937,-4709,-941,2550,-942,-5949,-945,-3942,-946,1310,-947,-7189,-949,3316,-950,-5182,-954,2076,-955,-6422,-958,-4416,-960,-7662,-962,2843,-963,-5656,-966,-3650,-967,1603,-968,-6896,-970,3609,-971,-4890,-975,2369,-976,-6130,-979,-4123,-981,14880,-981,-7369,-984,3135,-984,-5363,-989,1895,-989,-6603,-991,12400,-992,3902,-993,-4597,-997,2662,-998,-5837,-1001,-3831,-1002,1422,-1003,-7077,-1005,3428,-1006,-5071,-1010,2188,-1011,-6310,-1014,-4304,-1016,-7550,-1018,2954,-1019,-5544,-1023,1714,-1024,-6784,-1026,3721,-1027,-4778,-1031,2481,-1032,-6018,-1035,-4012,-1037,14992,-1037,-7258,-1040,3247,-1040,-5251,-1045,2007,-1045,-6491,-1048,4013,-1048,-4485,-1050,-7731,-1053,2773,-1053,-5725,-1057,-3719,-1058,1534,-1059,-6965,-1061,3540,-1062,-4959,-1066,2300,-1067,-6199,-1070,-4192,-1072,-7439,-1074,3066,-1075,-5432,-1079,1826,-1080,-6672,-1082,3832,-1083,-4666,-1087,2593,-1088,-5906,-1091,-3900,-1093,-7146,-1095,3359,-1096,-5140,-1101,2119,-1101,-6380,-1104,-4373,-1106,-7619,-1109,2885,-1109,-5613,-1114,1645,-1115,-6853,-1117,3652,-1118,-4847,-1122,2412,-1123,-6087,-1126,-4081,-1128,-7327,-1130,3178,-1131,-5321,-1135,1938,-1136,-6560,-1138,3944,-1139,-4554,-1143,2704,-1144,-5794,-1147,-3788,-1148,1464,-1149,-7034,-1152,3471,-1152,-5028,-1157,2231,-1157,-6268,-1161,-4262,-1162,-7508,-1165,2997,-1166,-5501,-1170,1757,-1171,-6741,-1173,3763,-1174,-4735,-1175,14268,-1178,2523,-1179,-5975,-1182,-3969,-1184,-7215,-1186,3290,-1187,-5209,-1191,2050,-1192,-6449,-1195,-4442,-1197,-7689,-1200,2816,-1200,-5682,-1202,13321,-1205,1576,-1205,-6922,-1208,3582,-1209,-4916,-1213,2343,-1214,-6156,-1217,-4150,-1219,-7396,-1221,3109,-1222,-5390,-1223,13613,-1226,1869,-1227,-6630,-1229,3875,-1230,-4623,-1234,2635,-1235,-5863,-1237,13140,-1238,-3857,-1239,1395,-1240,-7103,-1243,3402,-1243,-5097,-1248,2162,-1248,-6337,-1252,-4331,-1253,-7577,-1256,2928,-1257,-5571,-1258,13433,-1259,4934,-1261,1688,-1262,-6810,-1264,3694,-1265,-4804,-1266,14199,-1269,2454,-1270,-6044,-1273,-4038,-1275,-7284,-1277,3221,-1278,-5278,-1282,1981,-1283,-6518,-1286,3987,-1286,-4512,-1291,2747,-1291,-5751,-1293,13252,-1296,1507,-1297,-6991,-1299,3513,-1300,-4985,-1304,2273,-1305,-6225,-1308,-4219,-1310,-7465,-1312,3040,-1313,-5459,-1315,13544,-1317,1800,-1318,-6699,-1320,3806,-1321,-4692,-1323,14311,-1326,2566,-1326,-5932,-1328,13071,-1330,-3926,-1331,1326,-1331,-7172,-1334,3332,-1335,-5166,-1339,2093,-1340,-6406,-1343,-4400,-1347,2859,-1348,-5640,-1350,13363,-1350,4865,-1352,1619,-1353,-6880,-1355,3625,-1356,-4873,-1361,2385,-1361,-6113,-1364,-4107,-1366,-7353,-1369,3152,-1370,-5347,-1374,1912,-1375,-6587,-1377,3918,-1378,-4581,-1382,2678,-1383,-5821,-1385,13183,-1387,1438,-1388,-7060,-1390,3444,-1391,-5054,-1396,2204,-1396,-6294,-1398,12709,-1399,-4288,-1401,-7534,-1404,2971,-1405,-5528,-1406,13475,-1407,4977,-1409,1731,-1410,-6768,-1412,3737,-1413,-4762,-1414,14242,-1417,2497,-1418,-6001,-1420,13002,-1421,-3995,-1422,1257,-1423,-7241,-1425,3263,-1426,-5235,-1431,2023,-1431,-6475,-1434,4030,-1435,-4469,-1439,2790,-1440,-5709,-1441,13294,-1442,4796,-1444,1550,-1445,-6949,-1447,3556,-1448,-4942,-1452,2316,-1453,-6182,-1456,-4176,-1458,-7422,-1461,3082,-1461,-5416,-1466,1843,-1466,-6656,-1469,3849,-1470,-4650,-1471,14353,-1474,2609,-1475,-5890,-1476,13113,-1479,1369,-1480,-7130,-1482,3375,-1483,-5123,-1487,2135,-1488,-6363,-1490,12640,-1491,-4357,-1496,2902,-1497,-5597,-1498,13406,-1499,4908,-1501,1662,-1502,-6837,-1504,3668,-1505,-4831,-1506,14173,-1509,2428,-1510,-6071,-1512,12933,-1513,-4064,-1515,-7310,-1517,3194,-1518,-5304,-1523,1954,-1523,-6544,-1526,3961,-1527,-4538,-1528,14465,-1531,2721,-1532,-5778,-1533,13225,-1534,4727,-1536,1481,-1537,-7018,-1539,3487,-1540,-5012,-1544,2247,-1545,-6251,-1547,12752,-1548,-4245,-1553,3013,-1554,-5485,-1555,13518,-1556,5020,-1558,1773,-1559,-6725,-1561,3780,-1562,-4719,-1563,14284,-1566,2540,-1567,-5959,-1569,13044,-1570,-3952,-1571,1300,-1572,-7199,-1575,3306,-1575,-5192,-1580,2066,-1581,-6432,-1582,12571,-1584,-4426,-1588,2832,-1589,-5666,-1590,13337,-1591,4839,-1593,1593,-1594,-6906,-1596,3599,-1597,-4900,-1602,2359,-1602,-6140,-1604,12863,-1606,-4133,-1608,-7380,-1610,3125,-1611,-5373,-1612,13630,-1615,1885,-1616,-6613,-1617,12390,-1618,3891,-1619,-4607,-1621,14396,-1623,2652,-1624,-5847,-1626,13156,-1627,4658,-1629,1412,-1629,-7087,-1632,3418,-1633,-5081,-1637,2178,-1638,-6321,-1639,12683,-1641,17935,-1641,-4314,-1645,2944,-1646,-5554,-1648,13449,-1649,4950,-1651,1704,-1651,-6794,-1654,3711,-1654,-4788,-1656,14215,-1659,2471,-1660,-6028,-1661,12975,-1662,4477,-1663,-4022,-1664,1231,-1665,-7268,-1667,3237,-1668,-5262,-1670,13742,-1672,1997,-1673,-6501,-1675,12502,-1676,-4495,-1678,14508,-1681,2763,-1682,-5735,-1683,13268,-1684,4770,-1686,1523,-1687,-6975,-1689,3530,-1690,-4969,-1694,2290,-1695,-6209,-1697,12794,-1698,-4202,-1703,3056,-1704,-5442,-1705,13561,-1708,1816,-1709,-6682,-1710,12321,-1711,3822,-1712,-4676,-1714,14327,-1716,2582,-1717,-5916,-1719,13087,-1720,4589,-1722,1343,-1722,-7156,-1725,3349,-1726,-5150,-1727,13853,-1730,2109,-1731,-6390,-1732,12613,-1734,-4383,-1738,2875,-1739,-5623,-1741,13380,-1742,4881,-1744,1635,-1744,-6863,-1747,3641,-1748,-4857,-1749,14146,-1752,2402,-1753,-6097,-1754,12906,-1755,4408,-1756,-4091,-1760,3168,-1761,-5331,-1763,13673,-1766,1928,-1766,-6571,-1768,12433,-1770,-4564,-1771,14439,-1774,2694,-1775,-5804,-1776,13199,-1777,4700,-1779,1454,-1780,-7044,-1782,3461,-1783,-5038,-1785,13965,-1788,2221,-1788,-6278,-1790,12725,-1792,-4272,-1796,2987,-1797,-5511,-1798,13492,-1801,1747,-1802,-6751,-1804,12252,-1805,-4745,-1807,14258,-1810,2513,-1811,-5985,-1812,13018,-1813,4520,-1814,-3979,-1815,1273,-1818,3280,-1819,-5219,-1821,13784,-1823,2040,-1824,-6459,-1826,12544,-1827,17797,-1827,-4452,-1829,14551,-1832,2806,-1833,-5692,-1834,13311,-1835,4812,-1837,1566,-1838,-6932,-1840,3572,-1841,-4926,-1843,14077,-1846,2332,-1846,-6166,-1848,12837,-1850,-4160,-1854,3099,-1855,-5400,-1856,13603,-1859,1859,-1860,-6640,-1862,12364,-1863,-4633,-1865,14370,-1868,2625,-1869,-5873,-1870,13130,-1871,4631,-1873,1385,-1876,3391,-1877,-5107,-1879,13896,-1881,2152,-1882,-6347,-1884,12656,-1885,-4341,-1890,2918,-1891,-5581,-1892,13423,-1895,1678,-1896,-6821,-1898,12183,-1899,-4814,-1901,14189,-1904,2444,-1904,-6054,-1906,12949,-1907,4450,-1908,-4048,-1912,3211,-1913,-5288,-1915,13715,-1917,1971,-1918,-6528,-1920,12475,-1921,-4522,-1923,14482,-1926,2737,-1927,-5761,-1928,13242,-1929,4743,-1931,1497,-1932,-7001,-1934,3503,-1935,-4995,-1937,14008,-1940,2263,-1940,-6235,-1942,12768,-1944,-4229,-1948,3030,-1949,-5469,-1951,13534,-1953,1790,-1954,-6709,-1956,12294,-1957,-4702,-1959,14301,-1962,2556,-1963,-5942,-1964,13061,-1965,4562,-1967,1316,-1970,3322,-1971,-5176,-1973,13827,-1976,2082,-1977,-6416,-1978,12587,-1980,-4410,-1981,14593,-1984,2849,-1985,-5650,-1987,13353,-1987,4855,-1990,1609,-1990,-6890,-1992,12114,-1994,-4883,-1995,14120,-1998,2375,-1999,-6123,-2e3,12880,-2002,-4117,-2007,3141,-2007,-5357,-2009,13646,-2012,1902,-2013,-6597,-2014,12406,-2016,-4591,-2018,14412,-2020,2668,-2021,16419,-2021,-5831,-2023,13173,-2024,4674,-2026,1428,-2028,11933,-2029,3434,-2030,-5064,-2031,13939,-2034,2194,-2035,-6304,-2037,12699,-2038,-4298,-2040,14705,-2043,2961,-2044,-5538,-2045,13465,-2048,1721,-2049,-6778,-2051,12225,-2052,-4772,-2054,14232,-2057,2487,-2058,-6011,-2059,12992,-2060,4493,-2065,3253,-2066,-5245,-2068,13758,-2071,2013,-2071,-6485,-2073,12518,-2075,-4479,-2076,14524,-2079,2780,-2080,16530,-2080,-5719,-2082,13284,-2082,4786,-2084,1540,-2085,-6959,-2087,12044,-2089,-4952,-2090,14051,-2093,2306,-2094,-6192,-2095,12811,-2097,-4186,-2099,14817,-2102,3072,-2102,-5426,-2104,13577,-2107,1832,-2108,-6666,-2109,12337,-2111,-4660,-2113,14343,-2116,2599,-2116,-5900,-2118,13103,-2119,4605,-2121,1359,-2123,11864,-2124,3365,-2125,-5133,-2127,13870,-2129,2125,-2130,-6373,-2132,12630,-2134,-4367,-2135,14636,-2138,2891,-2139,-5607,-2141,13396,-2143,1652,-2144,-6847,-2146,12156,-2148,-4841,-2149,14162,-2152,2418,-2153,-6081,-2155,12923,-2155,4424,-2158,14929,-2160,11683,-2161,3184,-2161,-5314,-2163,13689,-2166,1944,-2167,-6554,-2168,12449,-2170,-4548,-2172,14455,-2175,2711,-2175,-5788,-2177,13215,-2178,4717,-2180,1471,-2182,11975,-2183,3477,-2184,-5022,-2186,13982,-2189,2237,-2189,-6261,-2191,12742,-2193,-4255,-2194,14748,-2196,11502,-2197,3003,-2198,-5495,-2200,13508,-2203,1763,-2203,-6735,-2205,12268,-2207,-4729,-2208,14274,-2211,2530,-2212,-5969,-2214,13034,-2215,4536,-2219,11794,-2220,3296,-2221,-5202,-2222,13801,-2225,2056,-2226,-6442,-2228,12561,-2229,-4436,-2231,14567,-2234,2822,-2235,-5676,-2236,13327,-2239,1582,-2240,-6916,-2242,12087,-2243,-4910,-2245,14093,-2248,2349,-2249,-6150,-2251,12853,-2251,4355,-2254,14860,-2256,11614,-2257,3115,-2258,-5383,-2259,13620,-2262,1875,-2263,-6623,-2265,12380,-2266,-4617,-2268,14386,-2271,2641,-2272,-5857,-2273,13146,-2274,4648,-2279,11906,-2279,3408,-2280,-5091,-2282,13912,-2285,2168,-2286,-6331,-2287,12673,-2289,-4324,-2291,14679,-2293,11433,-2294,2934,-2294,-5564,-2296,13439,-2299,1694,-2300,-6804,-2301,12199,-2303,-4798,-2305,14205,-2308,2461,-2309,-6038,-2310,12965,-2311,4467,-2314,14971,-2316,11725,-2316,3227,-2317,-5272,-2319,13732,-2322,1987,-2323,-6511,-2324,12492,-2326,-4505,-2328,14498,-2331,2753,-2331,-5745,-2333,13258,-2334,4759,-2336,1513,-2337,-6985,-2338,12018,-2339,3520,-2340,-4979,-2342,14024,-2345,2280,-2346,-6219,-2347,12784,-2351,14791,-2353,11544,-2353,3046,-2354,-5452,-2356,13551,-2359,1806,-2360,-6692,-2361,12311,-2363,-4686,-2365,14317,-2368,2572,-2368,-5926,-2370,13077,-2371,4579,-2373,15083,-2376,11837,-2376,3339,-2377,-5160,-2379,13843,-2382,2099,-2383,-6400,-2384,12603,-2388,14610,-2390,11364,-2391,2865,-2391,-5633,-2393,13370,-2396,1625,-2397,-6873,-2399,12130,-2400,-4867,-2402,14136,-2405,2391,-2406,-6107,-2407,12896,-2408,4398,-2411,14902,-2413,11656,-2414,3158,-2414,-5341,-2416,13662,-2419,1918,-2420,-6581,-2422,12423,-2425,14429,-2428,2684,-2429,-5814,-2430,13189,-2431,4690,-2436,11949,-2437,3450,-2437,-5048,-2439,13955,-2442,2211,-2443,-6288,-2445,12715,-2448,14721,-2450,11475,-2451,2977,-2452,-5522,-2453,13482,-2456,1737,-2457,-6761,-2459,12242,-2461,-4755,-2462,14248,-2465,2503,-2466,-5995,-2468,13008,-2469,4509,-2471,15014,-2473,11768,-2474,3270,-2475,-5229,-2477,13774,-2479,2030,-2480,-6469,-2482,12534,-2485,14541,-2488,2796,-2489,-5702,-2491,13301,-2494,1556,-2495,-6942,-2496,12061,-2498,-4936,-2500,14067,-2503,2322,-2503,-6176,-2505,12827,-2509,14833,-2511,11587,-2511,3089,-2512,-5410,-2514,13593,-2517,1849,-2518,-6650,-2519,12353,-2523,14360,-2526,2615,-2527,-5883,-2528,13120,-2532,15126,-2534,11880,-2536,-5117,-2537,13886,-2540,2141,-2541,-6357,-2543,12646,-2546,14652,-2548,11406,-2549,2908,-2550,-5591,-2552,13412,-2555,1668,-2555,-6831,-2557,12173,-2561,14179,-2563,2434,-2564,-6064,-2566,12939,-2569,14945,-2572,11699,-2572,3200,-2573,-5298,-2575,13705,-2578,1961,-2579,-6538,-2580,12465,-2584,14471,-2587,2727,-2588,-5772,-2589,13232,-2593,15238,-2593,-7011,-2595,11992,-2597,-5005,-2598,13998,-2601,2253,-2602,-6245,-2604,12758,-2607,14764,-2609,11518,-2610,3020,-2611,-5479,-2613,13524,-2616,1780,-2617,-6719,-2618,12284,-2622,14291,-2625,2546,-2625,-5952,-2627,13051,-2631,15057,-2633,11811,-2634,-5186,-2636,13817,-2639,2072,-2640,-6426,-2642,12577,-2645,14583,-2648,2839,-2649,-5660,-2651,13343,-2654,1599,-2654,-6900,-2656,12103,-2658,-4893,-2660,14110,-2663,2365,-2663,-6133,-2665,12870,-2669,14876,-2671,11630,-2672,3131,-2672,-5367,-2674,13636,-2677,1891,-2678,-6607,-2680,12396,-2683,14402,-2686,2658,-2687,-5841,-2689,13162,-2692,15169,-2693,-7081,-2694,11923,-2696,-5074,-2698,13929,-2701,2184,-2702,-6314,-2703,12689,-2707,14695,-2709,11449,-2710,2950,-2711,-5548,-2712,13455,-2715,1711,-2716,-6788,-2718,12215,-2721,14221,-2724,2477,-2725,-6022,-2727,12982,-2730,14988,-2732,11742,-2733,3243,-2734,-5255,-2736,13748,-2739,2003,-2740,-6495,-2742,12508,-2745,14514,-2748,2770,-2749,-5729,-2751,13274,-2754,15280,-2754,-6969,-2756,12034,-2758,-4963,-2760,14041,-2763,2296,-2763,-6202,-2765,12801,-2769,14807,-2771,11561,-2772,3062,-2773,-5436,-2774,13567,-2777,1822,-2778,-6676,-2780,12327,-2783,14333,-2786,2589,-2787,-5910,-2789,13093,-2792,15100,-2795,11853,-2796,-5143,-2798,13860,-2801,2115,-2802,-6383,-2804,12620,-2807,14626,-2810,2881,-2811,-5617,-2813,13386,-2816,1641,-2817,-6857,-2818,12146,-2822,14152,-2825,2408,-2826,-6091,-2827,12912,-2831,14919,-2833,11673,-2834,3174,-2835,-5324,-2837,13679,-2840,1934,-2840,-6564,-2842,12439,-2846,14445,-2849,2700,-2850,-5798,-2851,13205,-2855,15211,-2855,-7038,-2857,11965,-2859,-5032,-2860,13971,-2864,2227,-2864,-6272,-2866,12732,-2870,14738,-2872,11492,-2873,2993,-2874,-5505,-2875,13498,-2878,1753,-2879,-6745,-2881,12258,-2884,14264,-2887,2520,-2888,-5979,-2890,13024,-2894,15030,-2896,11784,-2898,-5213,-2899,13791,-2902,2046,-2903,-6452,-2905,12551,-2908,14557,-2912,2812,-2912,-5686,-2914,13317,-2918,15323,-2918,-6926,-2920,12077,-2923,14083,-2926,2339,-2927,-6160,-2929,12843,-2933,14850,-2935,11603,-2936,3105,-2936,-5393,-2938,13610,-2941,1865,-2942,-6633,-2944,12370,-2947,14376,-2951,2631,-2951,-5867,-2953,13136,-2957,15142,-2957,-7107,-2959,11896,-2961,-5101,-2962,13902,-2965,2158,-2966,-6341,-2968,12662,-2972,14669,-2975,2924,-2976,-5574,-2977,13429,-2981,-6814,-2983,12189,-2987,14195,-2990,2450,-2991,-6048,-2992,12955,-2996,14961,-2998,11715,-3e3,-5282,-3002,13721,-3005,1977,-3006,-6522,-3007,12482,-3011,14488,-3014,2743,-3015,-5755,-3017,13248,-3020,15254,-3021,-6995,-3022,12008,-3026,14014,-3029,2270,-3030,-6229,-3032,12774,-3035,14780,-3037,11534,-3038,3036,-3039,-5463,-3041,13541,-3044,1796,-3045,-6702,-3047,12301,-3050,14307,-3053,2562,-3054,-5936,-3056,13067,-3060,15073,-3062,11827,-3063,-5170,-3065,13833,-3068,2089,-3069,-6410,-3071,12593,-3075,14600,-3078,2855,-3079,-5643,-3080,13360,-3084,-6883,-3086,12120,-3090,14126,-3093,2381,-3094,-6117,-3096,12886,-3099,14892,-3101,11646,-3103,-5351,-3105,13652,-3108,1908,-3109,-6591,-3111,12412,-3114,14419,-3117,2674,-3118,-5824,-3120,13179,-3124,15185,-3124,-7064,-3126,11939,-3129,13945,-3133,2200,-3133,-6298,-3135,12705,-3139,14711,-3142,2967,-3143,-5532,-3145,13471,-3149,-6772,-3150,12232,-3154,14238,-3157,2493,-3158,-6005,-3163,15004,-3166,11758,-3167,-5239,-3169,13764,-3172,2020,-3173,-6479,-3175,12524,-3179,14530,-3182,2786,-3183,-5713,-3185,13291,-3189,-6952,-3190,12051,-3194,14057,-3197,2312,-3198,-6186,-3203,14823,-3208,-5420,-3209,13583,-3212,1839,-3213,-6660,-3215,12343,-3219,14350,-3222,2605,-3223,-5893,-3228,15116,-3229,-7133,-3231,11870,-3234,13876,-3237,2131,-3238,-6367,-3244,14642,-3248,-5601,-3250,13402,-3254,-6841,-3255,12162,-3259,14169,-3262,2424,-3263,-6074,-3269,14935,-3271,11689,-3273,-5308,-3274,13695,-3278,1950,-3279,-6548,-3280,12455,-3284,14461,-3287,2717,-3288,-5782,-3294,-7022,-3296,11982,-3300,13988,-3303,2243,-3304,-6255,-3309,14754,-3313,-5489,-3315,13514,-3319,-6729,-3321,12274,-3325,14280,-3328,2536,-3329,-5963,-3334,15047,-3336,11801,-3340,13807,-3343,2062,-3344,-6436,-3350,14573,-3354,-5670,-3360,-6910,-3362,12093,-3365,14100,-3369,2355,-3369,-6143,-3375,14866,-3377,11620,-3379,-5377,-3381,13626,-3384,1881,-3385,-6617,-3391,14392,-3395,-5851,-3401,-7091,-3403,11912,-3406,13919,-3409,2174,-3410,-6324,-3416,14685,-3420,-5558,-3426,-6798,-3432,14211,-3436,-6032,-3441,14978,-3444,11732,-3451,1993,-3452,-6505,-3457,14504,-3467,-6979,-3471,17277,-3473,14030,-3477,-6213,-3483,14797,-3493,-6686,-3499,14323,-3503,-5920,-3509,-7160,-3514,13850,-3519,-6393,-3524,14616,-3535,-6867,-3538,17388,-3540,14142,-3544,-6101,-3550,14909,-3560,-6574,-3566,14435,-3570,-5808,-3576,-7048,-3582,13961,-3586,-6282,-3592,14728,-3602,-6755,-3608,14254,-3612,-5989,-3618,-7229,-3628,-6463,-3634,14547,-3638,-5696,-3644,-6936,-3650,14073,-3654,-6170,-3660,14839,-3671,-6643,-3676,14366,-3681,-5877,-3687,-7117,-3697,-6351,-3703,14659,-3713,-6824,-3719,14185,-3723,-6058,-3729,14951,-3729,-7298,-3739,-6532,-3745,14478,-3750,-5765,-3756,-7005,-3766,-6239,-3772,14770,-3782,-6713,-3786,17543,-3788,14297,-3793,-5946,-3799,-7186,-3809,-6420,-3812,17836,-3815,14589,-3826,-6893,-3836,-6127,-3852,-6601,-3856,17655,-3869,-7074,-3879,-6308,-3896,-6782,-3899,17474,-3913,-7255,-3923,-6489,-3940,-6963,-3967,-6670,-3970,17586,-3984,-7143,-3994,-6377,-4011,-6851,-4028,-7324,-4039,-6558,-4056,-7032,-4066,-6265,-4084,-6739,-4087,17516,-4101,-7213,-4118,14563,-4129,-6920,-4132,17336,-4146,-7393,-4157,-6627,-4174,-7101,-4191,14675,-4202,-6808,-4220,-7282,-4231,-6515,-4248,-6989,-4252,17266,-4265,14787,-4277,-6696,-4295,-7170,-4298,17086,-4312,14606,-4323,-6877,-4352,-6584,-4370,-7058,-4374,17197,-4399,-6765,-4417,-7239,-4421,17016,-4447,-6946,-4465,-7420,-4469,16836,-4476,-6654,-4495,-7127,-4524,-6834,-4543,-7308,-4547,16947,-4573,-7015,-4595,16766,-4622,-7196,-4652,-6904,-4671,-7377,-4702,-7084,-4733,-6792,-4752,-7265,-4783,-6973,-4802,-7446,-4814,-6680,-4834,-7154,-4866,-6861,-4885,-7334,-4917,-7042,-4937,-7515,-4950,7002,-4970,-7223,-5002,-6930,-5023,-7404,-5055,-7111,-5109,-7292,-5143,-6999,-5164,-7473,-5190,-5940,-5198,-7180,-5253,-7361,-5345,-7249,-5380,-6956,-5438,-7137,-5474,-6845,-5511,-6552,-6485,-6312,-6612,5544,-6642,13569,-6647,10323,-6654,12329,-6667,11090,-6675,13096,-6695,13862,-6697,5364,-6700,10616,-6708,12622,-6721,11382,-6728,13388,-6730,4890,-6733,10142,-6741,12149,-6746,8902,-6749,14155,-6751,5656,-6754,10909,-6762,12915,-6767,9669,-6772,6423,-6775,11675,-6780,8429,-6783,13681,-6786,5183,-6789,10435,-6797,12441,-6802,9195,-6805,14447,-6807,5949,-6810,11201,-6818,13208,-6820,4709,-6823,9961,-6828,6715,-6832,11968,-6837,8721,-6840,13974,-6842,5475,-6845,10728,-6853,12734,-6855,4235,-6859,9488,-6862,14740,-6864,6242,-6867,11494,-6872,8248,-6875,13500,-6878,5002,-6881,10254,-6884,15506,-6885,-6743,-6889,12260,-6894,9014,-6898,14267,-6900,5768,-6903,11020,-6912,13027,-6914,4528,-6917,9780,-6920,15033,-6922,6534,-6926,11787,-6928,3288,-6931,8541,-6934,13793,-6936,5294,-6940,10547,-6944,-6450,-6948,12553,-6950,4055,-6954,9307,-6957,14559,-6959,6061,-6962,11313,-6968,8067,-6971,13319,-6973,4821,-6977,10073,-6980,15326,-6982,6827,-6986,12079,-6988,3581,-6991,8833,-6995,14086,-6997,5587,-7e3,10840,-7006,7593,-7009,12846,-7011,4347,-7015,9600,-7018,14852,-7020,6353,-7024,11606,-7026,3107,-7029,8360,-7033,13612,-7035,5114,-7038,10366,-7041,1867,-7042,15618,-7043,-6631,-7048,12372,-7050,3874,-7053,9126,-7056,628,-7057,14378,-7059,5880,-7062,11132,-7065,2634,-7068,7886,-7072,13138,-7074,4640,-7078,9892,-7080,1394,-7081,15145,-7082,-7105,-7083,6646,-7087,11899,-7089,3400,-7093,8652,-7096,13905,-7099,5406,-7102,10659,-7104,2160,-7106,15911,-7107,-6338,-7108,7412,-7111,12665,-7114,4166,-7117,9419,-7120,920,-7121,14671,-7123,6173,-7127,11425,-7129,2926,-7130,16677,-7133,8179,-7135,-320,-7136,13431,-7139,4933,-7142,10185,-7145,1687,-7146,15437,-7152,12191,-7154,3693,-7158,8945,-7160,447,-7162,14197,-7164,5699,-7168,10951,-7170,2453,-7171,16204,-7174,7705,-7176,-793,-7177,12958,-7180,4459,-7184,9711,-7186,1213,-7187,14964,-7188,-7285,-7190,6465,-7193,11718,-7196,3219,-7197,16970,-7200,8471,-7202,-27,-7203,13724,-7206,5225,-7209,10478,-7212,1979,-7213,15730,-7214,-6519,-7216,7232,-7219,12484,-7221,-9765,-7222,3985,-7226,9238,-7228,739,-7229,14490,-7232,5992,-7236,11244,-7238,2746,-7240,16496,-7242,7998,-7245,-501,-7246,13250,-7248,4752,-7252,10004,-7255,1506,-7256,15256,-7259,6758,-7262,12010,-7265,3512,-7269,8764,-7271,266,-7273,14017,-7275,5518,-7279,10770,-7282,2272,-7283,16023,-7284,-6226,-7286,7524,-7288,-974,-7289,12777,-7292,4278,-7296,9530,-7299,1032,-7300,14783,-7303,6284,-7306,11537,-7309,3038,-7310,16789,-7313,8291,-7316,-208,-7317,13543,-7318,-8706,-7320,5044,-7324,10297,-7326,1798,-7328,15549,-7329,-6700,-7330,7051,-7333,-1448,-7334,12303,-7336,-9946,-7337,3805,-7341,9057,-7344,558,-7345,14309,-7348,5811,-7352,11063,-7354,2565,-7356,16315,-7358,7817,-7361,-681,-7362,13069,-7364,-9180,-7365,4571,-7369,9823,-7372,1325,-7373,15076,-7375,-7174,-7376,6577,-7380,11829,-7383,3331,-7387,8583,-7390,85,-7391,13836,-7392,-8414,-7394,5337,-7398,10590,-7401,2091,-7402,15842,-7404,-6407,-7405,7343,-7408,-1155,-7409,12596,-7411,-9654,-7412,4097,-7416,9350,-7419,851,-7420,14602,-7422,-7647,-7423,6103,-7427,11356,-7430,2857,-7432,16608,-7434,8110,-7437,-389,-7439,13362,-7440,-8887,-7442,4864,-7446,10116,-7449,1617,-7450,15368,-7451,-6881,-7453,6870,-7457,12122,-7460,3624,-7464,8876,-7466,-13373,-7467,378,-7469,14128,-7470,-8121,-7472,5630,-7476,10882,-7477,-11367,-7479,2384,-7480,16135,-7483,7636,-7486,-862,-7488,12888,-7489,-9361,-7491,4390,-7495,9642,-7496,-12607,-7498,1144,-7499,14895,-7501,-7355,-7502,6396,-7507,11649,-7510,3150,-7514,8402,-7516,-13847,-7517,-96,-7519,13655,-7520,-8594,-7522,5156,-7526,10409,-7528,-11841,-7529,1910,-7531,15661,-7532,-6588,-7534,7162,-7537,-1336,-7538,12415,-7540,-9834,-7541,3916,-7546,9169,-7547,-13081,-7549,670,-7550,14421,-7552,-7828,-7553,5923,-7558,11175,-7560,-11074,-7561,2676,-7566,7929,-7567,-14320,-7569,-570,-7570,13181,-7572,-9068,-7574,4683,-7578,9935,-7580,-12314,-7581,1437,-7583,15187,-7584,-7062,-7586,6689,-7589,-1810,-7591,11941,-7592,-10308,-7594,3443,-7599,8695,-7600,-13554,-7602,197,-7603,13947,-7605,-8302,-7606,5449,-7611,10701,-7613,-11548,-7614,2203,-7616,15954,-7619,7455,-7622,-1043,-7624,12708,-7626,-9542,-7627,4209,-7632,9461,-7634,-12788,-7635,963,-7637,14714,-7639,-7535,-7640,6215,-7643,-2283,-7645,11468,-7647,-10782,-7648,2969,-7653,8221,-7655,-14028,-7656,-277,-7658,13474,-7660,-8775,-7661,4975,-7666,10228,-7668,-12022,-7670,1729,-7671,15480,-7675,6982,-7678,-1517,-7680,12234,-7681,-10015,-7683,3735,-7688,8988,-7690,-13261,-7691,489,-7693,14240,-7695,-8009,-7697,5742,-7700,-2757,-7702,10994,-7703,-11255,-7705,2496,-7707,16246,-7710,7748,-7712,-14501,-7714,-751,-7715,13e3,-7717,-9249,-7719,4502,-7724,9754,-7726,-12495,-7727,1256,-7729,15006,-7733,6508,-7734,-15741,-7736,-1990,-7738,11760,-7740,-10489,-7741,3262,-7747,8514,-7748,-13735,-7750,16,-7752,13767,-7754,-8483,-7755,5268,-7761,10520,-7763,-11729,-7764,2022,-7766,15773,-7770,7274,-7771,-14975,-7773,-1224,-7775,12527,-7777,-9723,-7779,4028,-7784,9281,-7786,-12969,-7788,782,-7790,14533,-7791,-7716,-7793,6034,-7797,-2464,-7799,11287,-7801,-10963,-7802,2788,-7808,8041,-7810,-14209,-7812,-458,-7813,13293,-7815,-8956,-7817,4794,-7823,10047,-7825,-12202,-7827,1548,-7828,15299,-7832,6801,-7834,-15449,-7836,-1698,-7838,12053,-7840,-10196,-7842,3555,-7847,8807,-7849,-13442,-7851,308,-7853,14059,-7855,-8190,-7857,5561,-7861,-2938,-7863,10813,-7865,-11436,-7867,2315,-7869,16065,-7872,7567,-7874,-14682,-7876,-931,-7878,12819,-7880,-9430,-7882,4321,-7888,9573,-7890,-12676,-7892,1075,-7894,14826,-7898,6327,-7902,-2171,-7904,11579,-7906,-10670,-7908,3081,-7914,8333,-7916,-13916,-7918,-165,-7920,13586,-7922,-8664,-7924,5087,-7929,-3411,-7931,10340,-7933,-11910,-7935,1841,-7937,15592,-7941,7093,-7945,-1405,-7947,12346,-7949,-9904,-7951,3847,-7956,-4651,-7958,9100,-7960,-13150,-7962,601,-7964,14352,-7966,-7897,-7968,5853,-7973,-2645,-7975,11106,-7977,-11143,-7979,2607,-7986,7860,-7988,-14390,-7990,-639,-7992,13112,-7994,-9137,-7996,4614,-8003,9866,-8005,-12383,-8007,1367,-8010,15118,-8014,6620,-8019,-1879,-8021,11872,-8023,-10377,-8025,3374,-8030,-5125,-8032,8626,-8034,-13623,-8037,128,-8039,13878,-8041,-8371,-8044,5380,-8050,10632,-8053,-11617,-8055,2134,-8057,15885,-8060,-6365,-8062,7386,-8067,-1112,-8069,12638,-8072,-9611,-8074,4140,-8081,9392,-8083,-12857,-8086,894,-8088,14645,-8091,-7605,-8093,6146,-8098,-2352,-8100,11399,-8103,-10851,-8105,2900,-8113,8152,-8115,-14097,-8118,-346,-8120,13405,-8123,-8844,-8125,4906,-8130,-3592,-8133,10159,-8135,-12091,-8138,1660,-8140,15411,-8143,-6838,-8146,6912,-8148,-15337,-8151,-1586,-8153,12165,-8156,-10084,-8158,3666,-8166,8919,-8169,-13331,-8172,420,-8174,14171,-8177,-8078,-8180,5673,-8185,-2826,-8188,10925,-8190,-11324,-8193,2426,-8196,16177,-8201,7679,-8204,-14570,-8207,-820,-8210,12931,-8212,-9318,-8215,4433,-8221,-4066,-8224,9685,-8226,-12564,-8229,1187,-8232,14937,-8235,-7312,-8238,6439,-8244,-2060,-8247,11691,-8249,-10558,-8252,3193,-8258,-5306,-8261,8445,-8264,-13804,-8267,-53,-8270,13697,-8273,-8552,-8276,5199,-8282,-3299,-8285,10451,-8289,-11798,-8292,1953,-8295,15704,-8298,-6546,-8301,7205,-8304,-15044,-8307,-1293,-8310,12458,-8314,-9792,-8317,3959,-8323,-4539,-8327,9211,-8330,-13038,-8333,713,-8336,14464,-8340,-7785,-8343,5965,-8350,-2533,-8353,11218,-8357,-11032,-8360,2719,-8363,16470,-8367,-5779,-8370,7971,-8374,-14278,-8377,-527,-8381,13224,-8384,-9025,-8388,4725,-8395,-3773,-8399,9978,-8402,-12272,-8406,1479,-8410,15230,-8414,-7019,-8417,6732,-8425,-1767,-8429,11984,-8433,-10265,-8436,3485,-8440,17236,-8444,-5013,-8448,8738,-8452,-13511,-8456,239,-8460,13990,-8464,-8259,-8468,5492,-8473,-16758,-8477,-3007,-8481,10744,-8485,-11505,-8490,2246,-8494,15996,-8498,-6253,-8503,7498,-8511,-1001,-8516,12750,-8520,-9499,-8525,4252,-8530,-17997,-8534,-4247,-8539,9504,-8544,-12745,-8549,1006,-8554,14756,-8559,-7493,-8564,6258,-8569,-15991,-8574,-2240,-8579,11510,-8584,-10739,-8589,3012,-8595,16763,-8600,-5487,-8606,8264,-8611,-13985,-8617,-234,-8623,13517,-8629,-8733,-8635,5018,-8641,-17231,-8647,-3480,-8653,10270,-8659,-11979,-8666,1772,-8672,15523,-8679,-6726,-8686,7024,-8693,-15225,-8700,-1474,-8708,12277,-8715,-9973,-8723,3778,-8731,17529,-8740,-4720,-8748,9031,-8757,-13219,-8766,532,-8776,14283,-8786,-7966,-8796,5784,-8807,-16465,-8819,-2714,-8831,11037,-8845,-11213,-8860,2538,-8876,16289,-8895,-5960,-8919,7791,-8953,-14459];var ai=[null,"#fbe6a2","#f9b84f","#f5823a","#ec4a4d","#d81b72"],ye=n=>document.getElementById(n),Ce=(n,e=0)=>n==null||isNaN(n)?"\u2014":Number(n).toLocaleString("en",{maximumFractionDigits:e,minimumFractionDigits:e}),ur=n=>n>=1e6?Ce(n/1e6,2)+"M":n>=1e4?Ce(n/1e3)+"k":Ce(n),Ot=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ft=matchMedia("(prefers-reduced-motion: reduce)").matches,bs=(n,e,t)=>Math.min(t,Math.max(e,n)),_f=n=>1-Math.pow(1-bs(n,0,1),3);var mc=1,Hn=Math.PI/180,nn=(n,e,t=mc)=>new F(t*Math.cos(n*Hn)*Math.sin(e*Hn),t*Math.sin(n*Hn),t*Math.cos(n*Hn)*Math.cos(e*Hn)),yf=new We("#375696"),ta=new We("#E94B83");function vf(n,e,t,i){let s;try{s=new Ri({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return e.classList.add("no-gl"),null}let r=Math.min(window.devicePixelRatio||1,2);s.setPixelRatio(r);let a=new xs,o=new wt(32,1,.1,200);o.position.set(0,0,5.2);let l=new Zt;a.add(l);let c=new Zt;c.rotation.order="XYZ",l.add(c);{let ne=new Float32Array(4200);for(let ee=0;ee<1400;ee++){let Ue=Math.random()*2-1,Fe=Math.random()*6.283,De=Math.sqrt(1-Ue*Ue),Le=40+Math.random()*40;ne[ee*3]=Le*De*Math.cos(Fe),ne[ee*3+1]=Le*Ue,ne[ee*3+2]=Le*De*Math.sin(Fe)}let ve=new ft;ve.setAttribute("position",new At(ne,3));let we=new ar(ve,new or({color:10335982,size:1.4*r,sizeAttenuation:!1,transparent:!0,opacity:.55,depthWrite:!1}));a.add(we),a.userData.stars=we}let h=new lt(new Pi(mc*.992,96,96),new Gt({uniforms:{uC:{value:yf}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 uC; varying vec3 vN; varying vec3 vV; void main(){ float f=pow(1.-max(dot(vN,vV),0.),2.6); vec3 c=mix(vec3(.028,.034,.052),uC*1.5,f*.85); gl_FragColor=vec4(c,1.); }"}));c.add(h),l.add(new lt(new Pi(mc*1.22,64,64),new Gt({uniforms:{uC:{value:yf}},side:It,transparent:!0,blending:tr,depthWrite:!1,vertexShader:"varying vec3 vN; void main(){ vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 uC; varying vec3 vN; void main(){ float f=pow(clamp(-vN.z*1.7,0.,1.),2.4)*.85; gl_FragColor=vec4(uC*1.7,1.)*f*.8; }"})));{let $=[];for(let ne=-60;ne<=60;ne+=30)for(let ve=-180;ve<180;ve+=4)$.push(nn(ne,ve,1.001),nn(ne,ve+4,1.001));for(let ne=-180;ne<180;ne+=30)for(let ve=-88;ve<88;ve+=4)$.push(nn(ve,ne,1.001),nn(ve+4,ne,1.001));c.add(new _s(new ft().setFromPoints($),new Mn({color:5996496,transparent:!0,opacity:.13})))}let u=ea.length/2,f=new Float32Array(u*3),m=new Float32Array(u);for(let $=0;$<u;$++){let ne=nn(ea[$*2]/100,ea[$*2+1]/100);f[$*3]=ne.x,f[$*3+1]=ne.y,f[$*3+2]=ne.z,m[$]=Math.random()}let g=new ft;g.setAttribute("position",new At(f,3)),g.setAttribute("aRnd",new At(m,1));let x={uT:{value:0},uWave:{value:-10},uIntro:{value:Ft?1:0},uEpi:{value:nn(t.epicentre.lat,t.epicentre.lon)},uSat:{value:new F(0,0,1)},uPx:{value:r},uScale:{value:1},uBlue:{value:new We("#6f93e6")},uPink:{value:ta}},p=new ar(g,new Gt({uniforms:x,transparent:!0,depthWrite:!1,vertexShader:`
      attribute float aRnd; uniform float uT,uWave,uIntro,uPx,uScale; uniform vec3 uEpi,uSat; varying float vW; varying float vB; varying float vA; varying float vF;
      void main(){
        vec3 nrm=normalize(position);
        float ang=acos(clamp(dot(nrm,uEpi),-1.,1.)); float w=0.;
        for(int k=0;k<3;k++){ float tt=uWave-float(k)*.55; float rad=tt*.42; float d=ang-rad; float fade=clamp(1.-rad/2.6,0.,1.)*step(0.,tt); w+=exp(-d*d*260.)*fade; }
        float beam=smoothstep(.2,.0,acos(clamp(dot(nrm,uSat),-1.,1.)));
        float tw=.75+.25*sin(uT*1.7+aRnd*40.);
        float it=clamp(uIntro*1.35-aRnd*.35,0.,1.); it=1.-pow(1.-it,3.);
        vec3 p=nrm*(1.+w*.085+beam*.012)+nrm*(1.-it)*(1.2+aRnd*2.4);
        vec4 mv=modelViewMatrix*vec4(p,1.);
        vF=smoothstep(-.15,.35,normalize(normalMatrix*nrm).z);
        gl_PointSize=(2.1+w*5.+beam*2.6)*uPx*uScale*tw*(5.2/-mv.z);
        vW=w; vB=beam; vA=it; gl_Position=projectionMatrix*mv; }`,fragmentShader:`
      uniform vec3 uBlue,uPink; varying float vW; varying float vB; varying float vA; varying float vF;
      void main(){ vec2 c=gl_PointCoord-.5; float d=length(c); if(d>.5) discard;
        vec3 col=mix(uBlue,uPink,clamp(vW*1.6,0.,1.)); col=mix(col,vec3(1.),clamp(vB*.9+vW*.35,0.,1.));
        gl_FragColor=vec4(col,smoothstep(.5,.25,d)*vA*(.35+.65*vF)); }`}));c.add(p);let d=($,ne,ve,we)=>{let ee=new lt(new Pi(we,16,16),new Kt({color:ve}));return ee.position.copy(nn($,ne,1.012)),c.add(ee),ee},M=[4.8133,-75.6961],_=[41.3111,69.2797];d(M[0],M[1],16777215,.014),d(_[0],_[1],16777215,.014);let C=()=>new Kt({color:ta,transparent:!0,opacity:0,side:Ut,depthWrite:!1}),I=[0,1,2].map(()=>{let $=new lt(new ys(.95,1,64),C()),ne=nn(t.epicentre.lat,t.epicentre.lon,1.006);return $.position.copy(ne),$.lookAt(ne.clone().multiplyScalar(2)),c.add($),$}),R=($,ne,ve)=>{let we=new lt(new ys(.03,.036,40),new Kt({color:ve,transparent:!0,opacity:.9,side:Ut,depthWrite:!1})),ee=nn($,ne,1.008);return we.position.copy(ee),we.lookAt(ee.clone().multiplyScalar(2)),c.add(we),we},E=R(M[0],M[1],ta),P=R(_[0],_[1],16777215),v=nn(M[0],M[1]).normalize(),b=nn(_[0],_[1]).normalize(),G=Math.acos(v.dot(b)),k=$=>{let ne=Math.sin((1-$)*G)/Math.sin(G),ve=Math.sin($*G)/Math.sin(G);return v.clone().multiplyScalar(ne).add(b.clone().multiplyScalar(ve)).multiplyScalar(1.01+.33*Math.sin(Math.PI*$))};{let $=[];for(let ne=0;ne<=120;ne++)$.push(k(ne/120));c.add(new Ci(new ft().setFromPoints($),new Mn({color:15289219,transparent:!0,opacity:.38})))}let te=[0,1,2].map(()=>{let $=new lt(new Pi(.011,10,10),new Kt({color:16752061}));return c.add($),$}),L=new Zt;l.add(L);{let $=new lt(new vn(.05,.05,.09),new Kt({color:15659771}));L.add($);let ne=new vn(.17,.004,.058);[-1,1].forEach(ee=>{let Ue=new lt(ne,new Kt({color:3626646}));Ue.position.x=ee*.115,L.add(Ue);let Fe=new _s(new Xo(ne),new Mn({color:10335982}));Fe.position.x=ee*.115,L.add(Fe);for(let De=-2;De<=2;De++){let Le=new Ci(new ft().setFromPoints([new F(ee*.115+De*.028,.003,-.029),new F(ee*.115+De*.028,.003,.029)]),new Mn({color:10335982,transparent:!0,opacity:.7}));L.add(Le)}});let ve=new Ci(new ft().setFromPoints([new F(0,.025,0),new F(0,.15,.05)]),new Mn({color:15659771}));L.add(ve);let we=new Zt;we.position.set(0,.16,.06),we.rotation.x=-.9,we.add(new lt(new Go(.085,40),new Kt({color:15320170,transparent:!0,opacity:.5,side:Ut,depthWrite:!1}))),we.add(new lt(new ys(.08,.088,40),new Kt({color:16773577,side:Ut}))),L.add(we),L.scale.setScalar(1.25)}let V={uT:{value:0},uC:{value:ta}},K=new lt(new Wo(.006,.2,1,40,1,!0),new Gt({uniforms:V,transparent:!0,side:Ut,depthWrite:!1,blending:tr,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform float uT; uniform vec3 uC; varying vec2 vUv; void main(){ float s=.5+.5*sin((vUv.y*9.+uT*5.)*6.283); float a=(.1+.22*pow(s,6.))*(.25+.75*vUv.y); gl_FragColor=vec4(uC*1.3,a); }"}));l.add(K);let Q=[{lat:M[0],lon:M[1]},{lat:_[0],lon:_[1]}],ie=0,W=0,O=(-Q[0].lon+70)*Hn,U=0,q=0,D=0,z=-99,se=1,re=0,fe=0,de=1;function me(){let $=e.clientWidth,ne=e.clientHeight;s.setSize($,ne,!1),o.aspect=$/ne,o.updateProjectionMatrix();let ve=$/ne>1.15&&$>900;se=ve?1:0;let we=Math.tan(o.fov/2*Hn)*o.position.z,ee=we*o.aspect;de=ve?Math.min(1.12,ee*.47,we*.86):Math.min(1.05,ee*.95),re=ve?ee-de*1.2:0,fe=ve?we*.03:-we*.42,l.position.set(re,fe,0),l.scale.setScalar(de),x.uScale.value=de*(ne/900)}me(),new ResizeObserver(me).observe(e);let xe=null;n.addEventListener("pointerdown",$=>{xe={x:$.clientX,y:$.clientY},n.setPointerCapture($.pointerId),n.classList.add("grab")}),n.addEventListener("pointermove",$=>{xe&&(q+=($.clientX-xe.x)*.006,D=bs(D+($.clientY-xe.y)*.004,-.9,.9),xe={x:$.clientX,y:$.clientY},z=ce.getElapsedTime())});let Te=()=>{xe=null,n.classList.remove("grab")};n.addEventListener("pointerup",Te),n.addEventListener("pointercancel",Te);let T=0,le=0;e.addEventListener("pointermove",$=>{T=$.clientX/e.clientWidth-.5,le=$.clientY/e.clientHeight-.5});let ce=new Ms,be=!0,ae=-1,Ne=0,Ee=!1,w=0,y=new F,X=new yn,he=new F(0,1,0);function oe($){ae=$,Ne=.5}function pe($,ne,ve){y.copy(nn(ne,ve,1.02)).applyMatrix4(c.matrixWorld);let we=y.clone().sub(l.position).normalize().z;y.project(o);let ee=(y.x*.5+.5)*e.clientWidth,Ue=(-y.y*.5+.5)*e.clientHeight;$.style.transform=`translate(${ee.toFixed(1)}px,${Ue.toFixed(1)}px)`,$.style.opacity=bs((we-.25)*4,0,1)*x.uIntro.value,$.classList.toggle("flip",ee>e.clientWidth-330)}function Ae(){if(!be)return;requestAnimationFrame(Ae);let $=Math.min(ce.getDelta(),.05),ne=ce.getElapsedTime();x.uT.value=ne,V.uT.value=ne,Ft||(x.uIntro.value=_f((ne-.15)/2.3)),!Ee&&ne>1.9&&(Ee=!0,oe(ne)),W+=$,!Ft&&ne-z>5&&W>(ie===0?10:7)&&(ie=1-ie,W=0,q=0,D=0,ie===0&&setTimeout(()=>oe(ce.getElapsedTime()),1500));let ve=Q[ie],we=(-ve.lon+(se?8:0))*Hn+q,ee=ve.lat*.82*Hn+D,Ue=we-O;Ue=Math.atan2(Math.sin(Ue),Math.cos(Ue)),O+=Ue*Math.min(1,$*1.6),U+=(ee-U)*Math.min(1,$*1.6),c.rotation.set(U+le*.05,O+T*.08,0),x.uWave.value=ae<0?-10:ne-ae,Ne*=Math.pow(.02,$);let Fe=Ne>.01?Ne:0;l.position.set(re+(Math.random()-.5)*.05*Fe,fe+(Math.random()-.5)*.05*Fe,0),I.forEach((nt,He)=>{let _e=ne-ae-He*.45,N=_e>0&&ae>0?_e%2.4/2.4:0;nt.scale.setScalar(.02+N*.2),nt.material.opacity=N>0&&ne-ae<9?(1-N)*.85:0});let De=1+.35*Math.sin(ne*3);E.scale.setScalar(De),P.scale.setScalar(1+.35*Math.sin(ne*3+1.5)),te.forEach((nt,He)=>nt.position.copy(k((ne*.16+He/3)%1)));let Le=ne*.42+1.2,Re=1.5;y.set(Math.sin(Le)*Re,Math.cos(Le)*Re*.55,Math.cos(Le)*Re*.82+.2).applyAxisAngle(new F(0,0,1),-.5),L.position.copy(y),L.lookAt(0,0,0),L.rotateZ(.7);let ze=y.clone().normalize(),je=y.length()-1;K.position.copy(ze.clone().multiplyScalar(1+je/2)),K.scale.set(1,je,1),X.setFromUnitVectors(he,ze),K.quaternion.copy(X),K.visible=ze.z>-.2,x.uSat.value.copy(ze).applyQuaternion(c.quaternion.clone().invert()),a.userData.stars.rotation.y=ne*.004,s.render(a,o),pe(i.p,M[0],M[1]),pe(i.t,_[0],_[1])}return new IntersectionObserver($=>{let ne=$[0].isIntersecting;ne&&!be?(be=!0,ce.getDelta(),Ae()):ne||(be=!1)},{threshold:.02}).observe(e),Ae(),{quake:()=>oe(ce.getElapsedTime())}}function Mf(n,e,t,i){let s;try{s=new Ri({canvas:n,antialias:!0,alpha:!0})}catch{return e.classList.add("no-gl"),null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let r=new xs,a=new wt(30,1,.1,500),o=new Zt;r.add(o),r.add(new Yo(16777215,1.15));let l=new cr(16777215,1.5);l.position.set(30,60,20),r.add(l);let c=new cr(7312358,.9);c.position.set(-40,20,-30),r.add(c);let h=t.cells.features,u=h.length,f=h.map(T=>{let le=T.geometry.coordinates[0],ce=0,be=0;for(let ae=0;ae<4;ae++)ce+=le[ae][0],be+=le[ae][1];return[ce/4,be/4]}),m=(Math.min(...f.map(T=>T[0]))+Math.max(...f.map(T=>T[0])))/2,g=(Math.min(...f.map(T=>T[1]))+Math.max(...f.map(T=>T[1])))/2,x=111.32*Math.cos(g*Math.PI/180)/.5,p=110.57/.5,d=h.map((T,le)=>({p:T.properties,x:(f[le][0]-m)*x,z:-(f[le][1]-g)*p}));{let T=0,le=0,ce=0;d.forEach(be=>{let ae=be.p.pop;T+=be.x*ae,le+=be.z*ae,ce+=ae}),d.forEach(be=>{be.x-=T/ce,be.z-=le/ce})}let M=T=>T<=10?5:T<=25?4:T<=50?3:T<=100?2:1,_={radar:{v:T=>T.people_affected,c:T=>M(T.rank_radar),rank:T=>T.rank_radar,tip:T=>`${Ce(T.people_affected)} people potentially affected (est.) \xB7 signal changed over ${Ce(T.damage_frac_raw*100)} % of buildings`,note:"After NISAR: height = people potentially affected (buildings with a changed radar signal \xD7 residents). A few squares stand out."},shake:{v:T=>T.pop*Math.max(T.mmi-5,0),c:T=>M(T.rank_shake),rank:T=>T.rank_shake,tip:T=>`${Ce(T.pop)} residents \xB7 MMI ${Ce(T.mmi,1)}`,note:"Minutes after: height = shaking \xD7 residents. Almost every dense square looks urgent."}},C=17,I=new We("#2b3552"),R=T=>{let le=_[T],ce=Math.max(...d.map(be=>le.v(be.p)));return d.map(be=>({h:.12+Math.pow(le.v(be.p)/ce,T==="radar"?1:1.6)*C,col:le.c(be.p)>1?new We(ai[le.c(be.p)]):I.clone()}))},E=new vn(.86,1,.86);E.translate(0,.5,0);let P=new Ho(E,new qo({color:16777215}),u);P.instanceMatrix.setUsage(af),o.add(P);let v=Math.max(...d.map(T=>Math.abs(T.x)),...d.map(T=>Math.abs(T.z)))+3,b=new Ko(v*2,Math.round(v*2),3626646,2304573);b.material.transparent=!0,b.material.opacity=.4,b.position.y=-.02,o.add(b);let G="radar",k=R("radar").map(T=>({h:.12,col:T.col.clone()})),te=R("radar"),L=0,V=new Mt;function K(){for(let T=0;T<u;T++)V.position.set(d[T].x,0,d[T].z),V.scale.set(1,k[T].h,1),V.updateMatrix(),P.setMatrixAt(T,V.matrix),P.setColorAt(T,k[T].col);P.instanceMatrix.needsUpdate=!0,P.instanceColor&&(P.instanceColor.needsUpdate=!0)}K();function Q(T){G=T,te=R(T),L=1,i.note.textContent=_[T].note,i.mode.querySelectorAll("button").forEach(le=>{le.classList.toggle("on",le.dataset.k===T),le.setAttribute("aria-pressed",le.dataset.k===T)})}i.mode.addEventListener("click",T=>{let le=T.target.closest("button");le&&Q(le.dataset.k)}),i.note.textContent=_.radar.note;let ie=-.55,W=.1,O=.5,U=null,q=-1,D=null;function z(){let T=e.clientWidth,le=e.clientHeight;!T||!le||(s.setSize(T,le,!1),a.aspect=T/le,a.updateProjectionMatrix())}z(),new ResizeObserver(z).observe(e),n.addEventListener("pointerdown",T=>{U={x:T.clientX,y:T.clientY},n.setPointerCapture(T.pointerId)}),n.addEventListener("pointermove",T=>{let le=n.getBoundingClientRect();D={x:(T.clientX-le.left)/le.width*2-1,y:-((T.clientY-le.top)/le.height*2-1),cx:T.clientX-le.left,cy:T.clientY-le.top},U&&(ie+=(T.clientX-U.x)*.008,O=bs(O+(T.clientY-U.y)*.004,.3,1.2),U={x:T.clientX,y:T.clientY},W=0)});let se=()=>{U=null};n.addEventListener("pointerup",se),n.addEventListener("pointercancel",se),n.addEventListener("pointerleave",()=>{D=null,i.tip.hidden=!0,q=-1});let re=new Zo,fe=new F,de=new Ms,me=!1,xe=!1;function Te(){if(!me)return;requestAnimationFrame(Te);let T=Math.min(de.getDelta(),.05);!U&&!Ft&&(W+=(.1-W)*T*.4,ie+=W*T),o.rotation.y=ie;let le=v*2.25;if(a.position.set(0,Math.sin(O)*le,Math.cos(O)*le),a.lookAt(0,3.4,0),L>0||!xe){xe=!0;let ae=Ft?1:Math.min(1,T*4.2),Ne=0;for(let Ee=0;Ee<u;Ee++){let w=te[Ee].h-k[Ee].h;k[Ee].h+=w*ae,k[Ee].col.lerp(te[Ee].col,ae),Ne=Math.max(Ne,Math.abs(w))}L=Ne>.01?1:0,K()}s.render(r,a);let ce=_[G];if(d.map((ae,Ne)=>[ce.rank(ae.p),Ne]).sort((ae,Ne)=>ae[0]-Ne[0]).slice(0,3).forEach(([ae,Ne],Ee)=>{let w=i.lbl[Ee];fe.set(d[Ne].x,k[Ne].h+.4,d[Ne].z).applyMatrix4(o.matrixWorld).project(a),w.style.transform=`translate(${((fe.x*.5+.5)*e.clientWidth).toFixed(1)}px,${((-fe.y*.5+.5)*e.clientHeight).toFixed(1)}px)`;let y=`#${Ee+1} \xB7 ${d[Ne].p.area}`;w.textContent!==y&&(w.textContent=y)}),D&&!U){re.setFromCamera(D,a);let ae=re.intersectObject(P)[0],Ne=ae?ae.instanceId:-1;if(Ne!==q)if(q=Ne,Ne<0)i.tip.hidden=!0;else{let Ee=d[Ne].p;i.tip.hidden=!1,i.tip.innerHTML=`<b>${Ot(Ee.area)} \xB7 square ${Ee.cell}</b><span>#${ce.rank(Ee)} of ${u} \xB7 ${ce.tip(Ee)}</span>`}Ne>=0&&(i.tip.style.transform=`translate(${D.cx+14}px,${D.cy+14}px)`)}}return new IntersectionObserver(T=>{let le=T[0].isIntersecting;le&&!me?(me=!0,de.getDelta(),xe||(te=R(G),L=1),Te()):le||(me=!1)},{threshold:.05}).observe(e),{setMode:Q}}function Sf(n){let e=window.L,t=n.metrics,i={destroyed:["#ffffff","Destroyed"],damaged:["#8fc1ff","Damaged"],possible:["#111318","Possibly damaged"]},s={city:"P",level:"comuna",src:"radar",cls:new Set([1,2,3,4,5]),ems:new Set(["destroyed","damaged","possible"]),aoi:!0,hideLow:!1,radar:!1,tk:"exposure",swipe:.5},r={base_p:"img/base_p.webp",base_t:"img/base_t.webp",before:"img/before.webp",across:"img/across.webp",tk_watch:"img/tk_watch.webp",tashkent:"img/tashkent.webp"},a=window.RQ_TK,o=a.sum,l=e.map("map",{zoomControl:!1,zoomSnap:.25,attributionControl:!0,scrollWheelZoom:!1});e.control.zoom({position:"topright"}).addTo(l),e.control.scale({imperial:!1,position:"bottomright"}).addTo(l),l.attributionControl.setPrefix("Leaflet"),l.createPane("base").style.zIndex=210,l.createPane("radar").style.zIndex=330,l.createPane("radar2").style.zIndex=331;let c=n.images;e.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",{maxNativeZoom:16,maxZoom:19,attribution:"Basemap \xA9 Esri, HERE, Garmin, \xA9 OpenStreetMap contributors"}).addTo(l);let h=e.imageOverlay(r.base_p,c.base_p.bounds,{pane:"base",attribution:""}),u=e.imageOverlay(r.base_t,a.bounds.base_t,{pane:"base",attribution:""}),f=e.imageOverlay(r.before,c.before.bounds,{pane:"radar",opacity:.92}),m=e.imageOverlay(r.across,c.across.bounds,{pane:"radar2",opacity:.92}),g=e.imageOverlay(r.tk_watch,a.bounds.tk_watch,{pane:"radar",opacity:.92}),x=e.imageOverlay(r.tashkent,a.bounds.tashkent,{pane:"radar",opacity:.95}),p=ye("map");p.addEventListener("click",()=>{l.scrollWheelZoom.enable(),ye("wheelHint").classList.add("off")}),p.addEventListener("mouseleave",()=>{l.scrollWheelZoom.disable(),ye("wheelHint").classList.remove("off")});function d(A){return A==null?0:A<=10?5:A<=25?4:A<=50?3:A<=100?2:1}let M={comuna:{radar:{cls:A=>{let B=A.people_affected;return B<=298?1:B<=539?2:B<=844?3:B<=1469?4:5},rank:A=>A.rank_radar,title:"Radar priority: people potentially affected (est.)",labels:["\u2264 300","300\u2013540","540\u2013840","840\u20131,470","> 1,470"],val:A=>[Ce(A.people_affected),"people (est.)"],barv:A=>A.people_affected,sub:A=>`change in ${Ce(A.damage_frac*100)} % of buildings`},shake:{cls:A=>{let B=A.rank_shake;return B<=2?5:B<=5?4:B<=9?3:B<=14?2:1},rank:A=>A.rank_shake,title:"First estimate: residents \xD7 shaking",labels:["ranks 15\u201319","10\u201314","6\u20139","3\u20135","1\u20132"],val:A=>[`MMI ${Ce(A.mmi,1)}`,`${ur(A.pop)} residents`],barv:A=>A.shake_exposure,sub:()=>"USGS ShakeMap \xD7 WorldPop, minutes after the quake"},ems:{cls:A=>{let B=A.score_ems;return B==null?0:B>=100?5:B>=50?4:B>=20?3:B>=10?2:1},rank:A=>A.rank_ems,title:"Official damage (Copernicus EMS score)",labels:["< 10","10\u201320","20\u201350","50\u2013100","\u2265 100"],val:A=>[Ce(A.n_destroyed+A.n_damaged+A.n_possible),"damaged bldgs"],barv:A=>A.score_ems,sub:A=>`${A.n_destroyed} destroyed \xB7 ${A.n_damaged} damaged \xB7 ${A.n_possible} possible`}},cell:{radar:{cls:A=>d(A.rank_radar),rank:A=>A.rank_radar,title:"Radar priority (500 m squares)",labels:["rank > 100","51\u2013100","26\u201350","11\u201325","top 10"],val:A=>[Ce(A.people_affected),"people (est.)"],barv:A=>A.people_affected,sub:A=>`change in ${Ce(A.damage_frac_raw*100)} % of buildings`},shake:{cls:A=>d(A.rank_shake),rank:A=>A.rank_shake,title:"First estimate (500 m squares)",labels:["rank > 100","51\u2013100","26\u201350","11\u201325","top 10"],val:A=>[`MMI ${Ce(A.mmi,1)}`,`${Ce(A.pop)} residents`],barv:A=>A.pop*Math.max(A.mmi-5,0),sub:()=>"shaking \xD7 residents"},ems:{cls:A=>{let B=A.n_ems;return B?B===1?2:B<=3?3:B<=7?4:5:0},rank:A=>A.n_ems?-A.n_ems:null,title:"Official damage per square (EMS)",labels:["\u2014","1 bldg","2\u20133","4\u20137","8 +"],val:A=>[Ce(A.n_ems),"damaged bldgs"],barv:A=>A.n_ems,sub:()=>"Copernicus EMS, destroyed + damaged"}}},_=()=>M[s.level][s.src],C=A=>s.src==="radar"&&A.radar_conf==="low",I=A=>{let B=_().cls(A);return B>0&&s.cls.has(B)&&!(s.hideLow&&C(A))},R="#0b0d12",E=new Map;function P(A){let B=A.properties,Y=_().cls(B),ue=I(B);return Y===0?{color:"#7c869c",weight:s.level==="comuna"?1:0,dashArray:"3 3",fillColor:"#2a2f3d",fillOpacity:s.level==="comuna"?.5:0}:{color:R,weight:s.level==="comuna"?1.3:.7,dashArray:C(B)?"4 3":null,fillColor:ai[Y],fillOpacity:(ue?C(B)?.45:.84:.06)*(s.radar?.3:1),opacity:ue?1:.3}}function v(A,B){let Y=B?[["Area",Ot(A.area)],["Residents",Ce(A.pop)],["Buildings with changed radar signal",Ce(A.damage_frac_raw*100)+" %"],["People potentially affected (est.)",Ce(A.people_affected)],["Radar rank",`#${A.rank_radar} of 295`],["Shaking","MMI "+Ce(A.mmi,1)],["EMS damaged buildings",Ce(A.n_ems)]]:[["Residents",Ce(A.pop)],["Buildings with changed radar signal",Ce(A.damage_frac*100,1)+" %"],["People potentially affected (est.)",Ce(A.people_affected)],["Radar rank",`#${A.rank_radar} of 19`],["Shaking","MMI "+Ce(A.mmi,1)],["Copernicus EMS",A.score_ems==null?"outside mapped area":`${A.n_destroyed} destroyed \xB7 ${A.n_damaged} damaged \xB7 ${A.n_possible} possible`],["Radar confidence",A.radar_conf==="low"?"low (few built pixels)":"good"]];return`<b>${B?`Square ${A.cell}`:`Comuna ${Ot(A.name)}`}</b><table class="pop">${Y.map($e=>`<tr><td>${$e[0]}</td><td>${$e[1]}</td></tr>`).join("")}</table>`}function b(A,B,Y){let ue=(Y?"c":"m")+(Y?A.properties.cell:A.properties.codcom);E.set(ue,B),B.bindPopup(()=>v(A.properties,Y)),B.on("mouseover",()=>W(ue,!0)).on("mouseout",()=>W(ue,!1)).on("click",()=>{let $e=document.querySelector(`[data-key="${ue}"]`);$e&&G($e)})}function G(A){let B=A.closest(".panel");if(!B)return;let Y=A.offsetTop-B.offsetTop;(Y<B.scrollTop||Y+A.offsetHeight>B.scrollTop+B.clientHeight)&&B.scrollTo({top:Math.max(0,Y-60),behavior:"smooth"})}let k=e.geoJSON(n.comunas,{style:P,onEachFeature:(A,B)=>b(A,B,!1)}),te=e.geoJSON(n.cells,{style:P,onEachFeature:(A,B)=>b(A,B,!0)}),L=e.geoJSON(n.comunas,{style:{color:"#c9d4e8",weight:.9,fill:!1,opacity:.55},interactive:!1}),V=e.geoJSON(n.ems_aoi,{style:{color:"#9db6ee",weight:2,dashArray:"7 5",fill:!1},interactive:!1}),K=e.geoJSON(n.ems,{filter:A=>s.ems.has(A.properties.dmg),pointToLayer:(A,B)=>{let Y=A.properties.dmg;return e.circleMarker(B,{radius:4.4,color:Y==="possible"?"#ffffff":R,weight:1.3,fillColor:i[Y][0],fillOpacity:1}).bindTooltip(i[Y][1]+" (Copernicus EMS)",{direction:"top"})}}),Q=e.layerGroup(),ie=e.layerGroup([h]);function W(A,B){let Y=E.get(A);if(!Y)return;B?(Y.setStyle({weight:3.2,color:"#ffffff"}),Y.bringToFront()):(s.level==="comuna"?k:te).resetStyle(Y);let ue=document.querySelector(`[data-key="${A}"]`);ue&&ue.classList.toggle("hl",B)}let O=A=>A.name.replace(/ tumani/i,"").replace("\u2018","\u2019"),U=new Map,q=()=>({color:"#ffffff",weight:1.3,fillColor:"#ffffff",fillOpacity:0}),D=e.geoJSON(a.tumans,{style:q,onEachFeature:(A,B)=>{let Y=A.properties,ue="r"+O(Y);U.set(ue,B),B.bindPopup(`<b>${Ot(O(Y))}</b><table class="pop">
      <tr><td>Buildings the radar watches reliably</td><td>${Ce(Y.watch_pct)} %</td></tr>
      <tr><td>Built-up area</td><td>${Ce(Y.built_km2,1)} km\xB2</td></tr>
      <tr><td>Inside the area we processed</td><td>${Ce(Y.coverage_pct)} %</td></tr></table>`),B.on("mouseover",()=>z(ue,!0)).on("mouseout",()=>z(ue,!1))}});function z(A,B){let Y=U.get(A);if(!Y)return;B?(Y.setStyle(Y._ex?{weight:3.2,color:"#ffffff"}:{weight:3,fillOpacity:.14}),Y.bringToFront()):(Y._ex?de:D).resetStyle(Y);let ue=document.querySelector(`[data-key="${CSS.escape(A)}"]`);ue&&ue.classList.toggle("hl",B)}let se=e.layerGroup([u]),re=A=>{let B=A.exposure;return B<.3104?1:B<.4828?2:B<.6552?3:B<.8276?4:5},fe=A=>({color:R,weight:1.3,fillColor:ai[re(A.properties)],fillOpacity:s.cls.has(re(A.properties))?.84:.06}),de=e.geoJSON(n.tashkent,{style:fe,onEachFeature:(A,B)=>{let Y=A.properties,ue="t"+Y.name_en;U.set(ue,B),B._ex=!0,B.bindPopup(`<b>${Ot(Y.name_en)}</b><table class="pop">
      <tr><td>Residents (2025)</td><td>${Ce(Y.pop)}</td></tr><tr><td>Density</td><td>${Ce(Y.pop_density)} /km\xB2</td></tr>
      <tr><td>Buildings (OSM)</td><td>${Ce(Y.bld_n)}</td></tr><tr><td>Built-up share</td><td>${Ce(Y.built_share*100,1)} %</td></tr>
      <tr><td>Exposure index</td><td>${Ce(Y.exposure,2)}</td></tr><tr><td>Rank</td><td>#${Y.rank_exposure} of 12</td></tr></table>
      ${Y.name_en==="Yangihayot"?'<p class="popnote">OSM building data incomplete: exposure likely underestimated.</p>':""}`),B.on("mouseover",()=>z(ue,!0)).on("mouseout",()=>z(ue,!1))}}),me=e.layerGroup();n.tashkent.features.forEach(A=>{let B=U.get("t"+A.properties.name_en);e.marker(B.getBounds().getCenter(),{icon:e.divIcon({className:"",html:`<div class="rnk">${A.properties.rank_exposure}</div>`,iconSize:[26,26]}),interactive:!1,keyboard:!1}).addTo(me)});function xe(){let A=s.city==="P"?[[Ce(t.n_ems),"buildings mapped as damaged in Pereira (Copernicus EMS)",""],[Ce(t.top10_ems*100)+" %",`of buildings mapped as damaged lie in the top-10 radar squares, which hold only ${Ce(t.top10_built*100)} % of all buildings`,"hot"],["\u03C1 = "+Ce(t.rho_comuna,2)+` <small>n = ${t.n_comuna}</small>`,`Spearman rank correlation, radar vs official damage ranking, on a sample of ${t.n_comuna} comunas (p = ${Ce(t.p_comuna,2)})`,""],[ur(t.pop_pereira),"residents in 19 comunas (WorldPop 2020)",""]]:[[ur(t.pop_tashkent),"residents in 12 city districts (Toshstat, Oct 2025)",""],["8\u20139","seismic intensity zone, MSK-64 (whole city)",""],[Ce(o.watch_pct)+" %","of buildings can be watched reliably by NISAR radar","hot"],["1966","M 5.1\u20135.3 shock under the city centre left about 100,000 people homeless",""]];ye("kpis").innerHTML=A.map(([B,Y,ue])=>`<div class="kpi ${ue}"><div class="v">${B}</div><div class="l">${Y}</div></div>`).join("")}function Te(A,B,Y,ue){return`<div class="seg ${ue?"row":""}" id="${A}">${B.map(([$e,Qe,rn])=>`<button type="button" data-k="${$e}" class="${$e===Y?"on":""}" aria-pressed="${$e===Y}"><span><b>${Qe}</b>${rn?`<small>${rn}</small>`:""}</span></button>`).join("")}</div>`}let T=(A,B,Y,ue="")=>`<label class="ck"><input type="checkbox" id="${A}" ${B?"checked":""}><i></i><span><b>${Y}</b>${ue?`<small>${ue}</small>`:""}</span></label>`;function le(){ye("left").innerHTML=`
    <section class="grp"><h3>What was known, and when</h3>
    <div class="tl" id="src">${[["shake","10 Aug","First estimate","Minutes after. USGS ShakeMap \xD7 residents."],["ems","12 Aug","Copernicus EMS damage map","Two days after. Optical satellite, city centre only (reference)."],["radar","13 & 16 Aug","RapidQuake radar priority","NISAR passes. Whole city, free data, through clouds."]].map(([A,B,Y,ue])=>`<button type="button" data-k="${A}" class="${A===s.src?"on":""}" aria-pressed="${A===s.src}"><time>${B}</time><span><b>${Y}</b><small>${ue}</small></span></button>`).join("")}</div>
    <p class="hint">Next NISAR passes every 12 days keep the map up to date.</p></section>
    <section class="grp"><h3>Detail</h3>
    ${Te("lvl",[["comuna","Comunas",""],["cell","500 m squares",""]],s.level,!0)}</section>
    <section class="grp"><h3>Layers</h3>
    ${T("radC",s.radar,"Radar before / after","NISAR coherence image with a swipe handle")}
    ${T("emsC",s.ems.size>0,"Damaged buildings","mapped later by Copernicus EMS")}
    <div class="emschips" id="emsChips" ${s.ems.size?"":"hidden"}>${Object.entries(i).map(([A,[B,Y]])=>`<button type="button" data-ems="${A}" class="${s.ems.has(A)?"":"off"}" aria-pressed="${s.ems.has(A)}"><span class="dot ${A}"></span>${Y} ${Ce(t["n_"+A])}</button>`).join("")}</div>
    ${T("aoiC",s.aoi,"Area mapped by Copernicus EMS")}
    ${T("lowC",s.hideLow,"Hide low radar confidence","areas with few built-up pixels")}</section>`,ye("src").onclick=A=>{let B=A.target.closest("button");B&&(s.src=B.dataset.k,s.cls=new Set([1,2,3,4,5]),ee())},ye("lvl").onclick=A=>{let B=A.target.closest("button");B&&(s.level=B.dataset.k,s.cls=new Set([1,2,3,4,5]),ee())},ye("emsChips").onclick=A=>{let B=A.target.closest("button");if(!B)return;let Y=B.dataset.ems;s.ems.has(Y)?s.ems.delete(Y):s.ems.add(Y),le(),we()},ye("emsC").onchange=A=>{s.ems=A.target.checked?new Set(["destroyed","damaged","possible"]):new Set,le(),we()},ye("aoiC").onchange=A=>{s.aoi=A.target.checked,we()},ye("lowC").onchange=A=>{s.hideLow=A.target.checked,we(),Ee()},ye("radC").onchange=A=>{s.radar=A.target.checked,we()}}function ce(){ye("left").innerHTML=`
    <section class="grp"><div class="status"><b>Tashkent is ready</b><span>No earthquake now. Nothing to do.</span></div></section>
    <section class="grp"><h3>Map layer</h3>
    ${Te("tkL",[["exposure","Earthquake exposure","60 % population density + 40 % built-up share, by district"],["watch","NISAR radar visibility","Green: buildings the radar watches reliably. Orange: trees or construction, weaker signal."],["before","NISAR \u201Cbefore\u201D image","The radar picture of the city today. A pass after an earthquake is compared with it."]],s.tk)}</section>
    <section class="grp"><h3>Why this map</h3>
    <p class="txt">Today's NISAR view of Tashkent is the \u201Cbefore\u201D image. After an earthquake, the first NISAR pass is compared with it, and radar change \xD7 this exposure gives the inspection priority as soon as post-event data arrives.</p></section>
    <section class="grp"><h3>The 1966 Tashkent earthquake</h3>
    <p class="txt">26 April 1966: a very shallow (3\u20138 km) shock under the city centre, intensity VIII\u2013IX (MSK-64). About 100,000 people were left homeless; reported deaths range from 10 to 200.</p></section>`,ye("tkL").onclick=A=>{let B=A.target.closest("button");B&&(s.tk=B.dataset.k,s.cls=new Set([1,2,3,4,5]),ee())}}function be(A){let B=A.target.closest("button[data-c]");if(!B)return;let Y=+B.dataset.c;s.cls.has(Y)&&s.cls.size>1?s.cls.delete(Y):s.cls.add(Y),ee()}function ae(){let A=_(),B=(s.level==="comuna"?n.comunas:n.cells).features.map(Y=>Y.properties).filter(Y=>A.rank(Y)!=null&&I(Y)).sort((Y,ue)=>A.rank(Y)-A.rank(ue));return s.level==="comuna"?B:B.slice(0,15)}let Ne=A=>A<=2?"#111318":"#fff";function Ee(){let A=_(),B=ae(),Y=Math.max(1,...B.map(A.barv)),ue=s.src==="ems"?"Where damage was mapped":"Send teams here first",$e=s.src==="ems"&&s.level==="comuna"?"Only 6 comunas have \u2265 50 % of their area mapped by Copernicus EMS. Ranked by severity: 3 \xD7 destroyed + 2 \xD7 damaged + possibly damaged.":s.src==="radar"?s.level==="cell"?"Top 15 squares of 500 \xD7 500 m, ranked by people potentially affected: share of buildings with a changed radar signal \xD7 residents.":"Ranked by people potentially affected: share of buildings with a changed radar signal \xD7 residents. Click a row to zoom.":s.level==="cell"?"Top 15 squares of 500 \xD7 500 m. Click a row to zoom.":"Click a row to zoom to the comuna.";ye("right").innerHTML=`<h3 class="big-h">${ue}</h3><p class="hint">${$e}</p>
    <ol class="list" id="list">${B.map((Qe,rn)=>{let Gi=s.level==="cell"?"c"+Qe.cell:"m"+Qe.codcom,[xn,Hr]=A.val(Qe),pi=ai[A.cls(Qe)]||"#ccc",Gr=s.level==="cell"?`${Ot(Qe.area)} <span class="tag">sq ${Qe.cell}</span>`:Ot(Qe.name)+(Qe.radar_conf==="low"&&s.src==="radar"?' <span class="tag">low conf.</span>':"");return`<li tabindex="0" data-key="${Gi}"><div class="n" style="background:${pi};color:${Ne(A.cls(Qe))}">${s.src==="ems"&&s.level==="cell"?rn+1:Math.abs(A.rank(Qe))}</div>
        <div class="where"><b>${Gr}</b><small>${A.sub(Qe)}</small><div class="bar"><i style="width:${(A.barv(Qe)/Y*100).toFixed(1)}%;background:${pi}"></i></div></div>
        <div class="val">${xn}<small>${Hr}</small></div></li>`}).join("")||'<li class="empty">No areas match the filters.</li>'}</ol>
    <p class="hint check"><b>${Ce(t.top10_ems*100)} %</b> of the buildings Copernicus mapped as damaged fall in the radar's top-10 squares. Spearman \u03C1 = ${Ce(t.rho_comuna,2)} on ${t.n_comuna} comunas. <a href="#proof" data-go="proof">See the check</a></p>`,document.querySelectorAll("#list li[data-key]").forEach(Qe=>{let rn=Qe.dataset.key;Qe.onmouseenter=()=>W(rn,!0),Qe.onmouseleave=()=>W(rn,!1),Qe.onclick=Qe.onkeydown=Gi=>{if(Gi.type==="keydown"&&Gi.key!=="Enter")return;let xn=E.get(rn);xn&&(Ue=!0,l.fitBounds(xn.getBounds(),{maxZoom:s.level==="cell"?16:15,padding:[40,40]}),xn.openPopup())}})}function w(){if(s.tk==="exposure"){let B=n.tashkent.features.map(Y=>Y.properties).filter(Y=>s.cls.has(re(Y))).sort((Y,ue)=>Y.rank_exposure-ue.rank_exposure);ye("right").innerHTML=`<h3 class="big-h">Most exposed districts</h3><p class="hint">Where an earthquake would put the most people and buildings at risk. Click a row to zoom.</p>
      <ol class="list" id="list">${B.map(Y=>{let ue=ai[re(Y)],$e="t"+Y.name_en;return`<li tabindex="0" data-key="${Ot($e)}"><div class="n" style="background:${ue};color:${Ne(re(Y))}">${Y.rank_exposure}</div>
        <div class="where"><b>${Ot(Y.name_en)}${Y.name_en==="Yangihayot"?' <span class="tag">OSM incomplete</span>':""}</b><small>${Ce(Y.bld_n)} buildings \xB7 ${Ce(Y.pop_density)} people/km\xB2</small><div class="bar"><i style="width:${(Y.exposure*100).toFixed(1)}%;background:${ue}"></i></div></div>
        <div class="val">${Ce(Y.exposure,2)}<small>${ur(Y.pop)} residents</small></div></li>`}).join("")}</ol>
      <p class="hint check"><b>How exposure is computed.</b> Population density (Toshstat 2025) and the share of land covered by buildings (OpenStreetMap), each scaled 0\u20131 across the 12 districts and weighted 60 / 40. It is a pre-event risk baseline, not a damage estimate.</p>`,document.querySelectorAll("#list li[data-key]").forEach(Y=>{let ue=Y.dataset.key;Y.onmouseenter=()=>z(ue,!0),Y.onmouseleave=()=>z(ue,!1),Y.onclick=Y.onkeydown=$e=>{if($e.type==="keydown"&&$e.key!=="Enter")return;let Qe=U.get(ue);Ue=!0,l.fitBounds(Qe.getBounds(),{padding:[40,40]}),Qe.openPopup()}});return}let A=a.tumans.features.map(B=>B.properties).sort((B,Y)=>Y.watch_pct-B.watch_pct);ye("right").innerHTML=`<h3 class="big-h">How well the radar sees Tashkent</h3>
    <div class="bignum"><b>${Ce(o.watch_pct)} %</b><span>of the buildings can be watched reliably by the radar.</span></div>
    <ol class="list plain" id="list">${A.map(B=>{let Y="r"+O(B);return`<li tabindex="0" data-key="${Ot(Y)}"><div class="where"><b>${Ot(O(B))}${B.coverage_pct<95?` <span class="tag">${Ce(B.coverage_pct)} % in area</span>`:""}</b><div class="bar"><i style="width:${B.watch_pct.toFixed(1)}%;background:#3c9a4a"></i></div></div>
      <div class="val">${Ce(B.watch_pct)} %</div></li>`}).join("")}</ol>
    <p class="hint">By district (tuman). Click a row to zoom.</p>`,document.querySelectorAll("#list li[data-key]").forEach(B=>{let Y=B.dataset.key;B.onmouseenter=()=>z(Y,!0),B.onmouseleave=()=>z(Y,!1),B.onclick=B.onkeydown=ue=>{if(ue.type==="keydown"&&ue.key!=="Enter")return;let $e=U.get(Y);Ue=!0,l.fitBounds($e.getBounds(),{padding:[40,40]}),$e.openPopup()}})}function y(){let A,B=(Y,ue)=>`<button type="button" data-c="${Y}" class="lg ${s.cls.has(Y)?"":"off"}" aria-pressed="${s.cls.has(Y)}"><i style="background:${ai[Y]}"></i>${ue}</button>`;if(s.city==="P"){let Y=_();A=`<b class="lt">${Y.title}</b><div class="lgs">${[5,4,3,2,1].filter(ue=>Y.labels[ue-1]!=="\u2014").map(ue=>B(ue,Y.labels[ue-1])).join("")}</div>`,s.src==="ems"&&s.level==="comuna"&&(A+='<div class="lrow"><i style="background:#2a2f3d;border:1px dashed #7c869c"></i>not mapped by EMS</div>'),s.src==="radar"&&(A+='<div class="lrow"><i class="hatch"></i>dashed outline = low radar confidence</div>'),s.radar&&(A+='<div class="lblock"><b>NISAR coherence</b><div class="grad"></div><div class="gradl"><span>low \xB7 changed</span><span>high \xB7 stable</span></div></div>'),s.ems.size&&(A+='<div class="lrow"><span class="dot destroyed"></span><span class="dot damaged"></span><span class="dot possible"></span>EMS: destroyed \xB7 damaged \xB7 possible</div>')}else s.tk==="exposure"?A=`<b class="lt">Earthquake exposure index</b><div class="lgs">${["Very high","High","Medium","Low","Very low"].map((Y,ue)=>B(5-ue,Y)).join("")}</div>
      <div class="lrow dim">No district falls in \u201CLow\u201D: a clear gap between the dense centre and the outer districts.</div>`:s.tk==="watch"?A='<b class="lt">NISAR radar visibility</b><div class="lrow"><i style="background:#3c9a4a"></i>reliably watched buildings</div><div class="lrow"><i style="background:#c8732e"></i>weaker signal (trees, construction)</div>':A='<b class="lt">NISAR radar image, before any earthquake</b><div class="lrow dim">This is the picture a post-quake pass gets compared with.</div>';ye("legend").innerHTML=A,ye("legend").onclick=be}let X={5:"#fecc5c",6:"#fd8d3c",7:"#f03b20",8:"#bd0026"},he=e.map("insetMap",{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1,touchZoom:!1}).setView([4.6,-76.2],7);e.geoJSON(n.shake,{style:A=>({fillColor:X[A.properties.mmi],fillOpacity:.88,color:R,weight:.4}),interactive:!1}).addTo(he);let oe=n.epicentre;e.marker([oe.lat,oe.lon],{icon:e.divIcon({className:"",html:'<div class="epi">\u2605</div>',iconSize:[22,22],iconAnchor:[11,11]}),interactive:!1}).bindTooltip("Epicentre",{permanent:!0,direction:"left",className:"insetlbl",offset:[-9,0]}).addTo(he),n.places.forEach(A=>e.circleMarker([A.lat,A.lon],{radius:A.main?5:3,color:R,weight:1.5,fillColor:A.main?"#ffffff":"#aab3c7",fillOpacity:1,interactive:!1}).bindTooltip(A.name,{permanent:!0,direction:"right",className:"insetlbl",offset:[5,0]}).addTo(he));let pe=()=>{he.invalidateSize(),he.fitBounds([[3.35,-77.45],[5.85,-75.2]])},Ae=!1;function $(){let A=s.city==="P"&&!s.radar;ye("inset").hidden=!(A&&Ae),ye("insetO").hidden=!(A&&!Ae),ye("inset").hidden||setTimeout(pe,0)}ye("insetX").onclick=()=>{Ae=!1,$()},ye("insetO").onclick=()=>{Ae=!0,$()};function ne(){let A=m.getElement();if(!A||!s.radar)return;let B=p.clientWidth*s.swipe,Y=l.containerPointToLayerPoint([B,0]),ue=e.DomUtil.getPosition(A);A.style.clipPath=`inset(0 0 0 ${Math.max(0,Y.x-ue.x)}px)`,ye("swLine").style.left=s.swipe*100+"%",ye("swLine").setAttribute("aria-valuenow",Math.round(s.swipe*100))}l.on("move zoom zoomend moveend viewreset resize",ne),(function(){let A=ye("swLine"),B=!1,Y=ue=>{let $e=p.getBoundingClientRect();s.swipe=Math.min(.97,Math.max(.03,(ue-$e.left)/$e.width)),ne()};A.addEventListener("pointerdown",ue=>{B=!0,A.setPointerCapture(ue.pointerId),ue.preventDefault(),ue.stopPropagation()}),A.addEventListener("pointermove",ue=>{B&&Y(ue.clientX)}),A.addEventListener("pointerup",()=>{B=!1}),A.addEventListener("pointercancel",()=>{B=!1}),A.addEventListener("keydown",ue=>{ue.key==="ArrowLeft"&&(s.swipe=Math.max(.03,s.swipe-.04),ne()),ue.key==="ArrowRight"&&(s.swipe=Math.min(.97,s.swipe+.04),ne())})})();function ve(){Q.clearLayers();let A=_();ae().slice(0,10).forEach((B,Y)=>{let ue=E.get(s.level==="cell"?"c"+B.cell:"m"+B.codcom);if(!ue)return;let $e=s.src==="ems"&&s.level==="cell"?Y+1:Math.abs(A.rank(B));e.marker(ue.getBounds().getCenter(),{icon:e.divIcon({className:"",html:`<div class="rnk">${$e}</div>`,iconSize:[26,26]}),interactive:!1,keyboard:!1}).addTo(Q)})}function we(){[k,te,L,V,K,Q,f,m].forEach(A=>l.removeLayer(A)),s.radar&&(f.addTo(l),m.addTo(l)),ye("swipe").hidden=!s.radar,s.level==="comuna"?(k.setStyle(P),k.addTo(l)):(te.setStyle(P),te.addTo(l),L.addTo(l)),s.aoi&&V.addTo(l),K.clearLayers(),K.addData(n.ems),s.ems.size&&K.addTo(l),ve(),s.radar||Q.addTo(l),y(),$(),s.radar&&(setTimeout(ne,0),setTimeout(ne,300))}function ee(){xe(),ye("cityP").classList.toggle("on",s.city==="P"),ye("cityT").classList.toggle("on",s.city==="T"),ye("mapTitle").innerHTML=s.city==="P"?"Pereira, Colombia <small>M 7.4 earthquake, 10 August 2026</small>":"Tashkent, Uzbekistan <small>ready before the next earthquake</small>",s.city==="P"?([se,D,de,me,g,x].forEach(A=>l.removeLayer(A)),ie.addTo(l),le(),Ee(),we()):([ie,k,te,L,V,K,Q,f,m].forEach(A=>l.removeLayer(A)),ye("swipe").hidden=!0,se.addTo(l),[g,x,D,de,me].forEach(A=>l.removeLayer(A)),s.tk==="exposure"?(de.setStyle(fe),de.addTo(l),me.addTo(l)):((s.tk==="watch"?g:x).addTo(l),D.addTo(l)),ce(),w(),y(),$())}let Ue=!1;["pointerdown","wheel","touchstart"].forEach(A=>p.addEventListener(A,()=>{Ue=!0},{passive:!0}));function Fe(){l.stop(),l.invalidateSize(),l.fitBounds((s.city==="P"?k:D).getBounds(),{padding:[24,24],animate:!1})}window.ResizeObserver&&new ResizeObserver(()=>{l.invalidateSize(),Ue||Fe(),ne()}).observe(p),window.addEventListener("load",()=>{Ue||Fe()}),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{Ue||Fe()});function De(A,B){Ue=!!B,ye("left").scrollTop=0,ye("right").scrollTop=0,s.city=A,s.cls=new Set([1,2,3,4,5]),ee(),B||Fe()}let Le=e.geoJSON(n.shake,{style:A=>({fillColor:X[A.properties.mmi],fillOpacity:.62,color:R,weight:.6}),interactive:!1}),Re=e.marker([oe.lat,oe.lon],{interactive:!1,keyboard:!1,icon:e.divIcon({className:"",iconSize:[0,0],html:'<div class="ring"></div><div class="ring"></div><div class="ring"></div><div class="epi" style="position:absolute;left:-11px;top:-11px">\u2605</div>'})}),ze=e.marker([4.8133,-75.6961],{interactive:!1,icon:e.divIcon({className:"",iconSize:[0,0],html:'<div class="rnk city-pill">Pereira</div>'})}),je=e.layerGroup();function nt(A){je.clearLayers(),ae().slice(0,A).forEach(B=>{let Y=E.get(s.level==="cell"?"c"+B.cell:"m"+B.codcom);Y&&e.marker(Y.getBounds().getCenter(),{interactive:!1,keyboard:!1,icon:e.divIcon({className:"",iconSize:[0,0],html:'<div class="pulse"></div>'})}).addTo(je)}),je.addTo(l)}let He={paddingTopLeft:[30,30],paddingBottomRight:[30,210]},_e=A=>Array.isArray(A)&&typeof A[0]=="number",N=(A,B)=>Ft?_e(A)?l.setView(A,B):l.fitBounds(A,He):_e(A)?l.flyTo(A,B,{duration:1.8}):l.flyToBounds(A,{duration:1.8,...He}),Me=[{when:"10 August 2026, 07:34 local time",title:"A magnitude 7.4 earthquake strikes western Colombia",text:"The rupture is 103 km deep under Choc\xF3. Shaking reaches intensity VII to VIII about 70 km away, in the city of Pereira.",run:()=>{s.radar=!1,De("P",!0),[k,te,Q,K,V,L].forEach(A=>l.removeLayer(A)),[Le,Re,ze].forEach(A=>A.addTo(l)),N([4.62,-76],8)}},{when:"Minutes later",title:"The first estimate points almost everywhere",text:"Shaking \xD7 residents ranks the dense west and centre highest. It is fast, but it cannot tell which buildings actually failed.",run:()=>{ke(),s.src="shake",s.level="comuna",ee(),N(k.getBounds())}},{when:"12 August, two days after",title:`Copernicus maps ${Ce(t.n_ems)} damaged buildings`,text:"Experts read very high-resolution optical images by eye. It is accurate, but it took two days and covers only the city centre (dashed line).",run:()=>{ke(),s.src="ems",s.level="comuna",s.ems=new Set(["destroyed","damaged","possible"]),ee(),N(V.getBounds())}},{when:"13 and 16 August, NISAR passes",title:"Radar shows where the signal over buildings changed, across the whole city",text:"NISAR images the whole city through cloud, day or night. A drop in radar coherence over buildings is an indicator of possible damage, not a confirmed collapse. Share of buildings with a changed signal \xD7 residents gives the ranking.",run:()=>{ke(),s.src="radar",s.level="comuna",s.ems=new Set,ee(),N(k.getBounds()),setTimeout(()=>nt(3),Ft?0:1900)}},{when:"The check",title:`${Ce(t.top10_ems*100)} % of the mapped damage falls in the radar's top 10 squares`,text:`Those 10 squares hold only ${Ce(t.top10_built*100)} % of the city's buildings. On a sample of ${t.n_comuna} comunas the radar ranking correlates with the official one (Spearman \u03C1 = ${Ce(t.rho_comuna,2)}). Boston, Centro and Universidad lead both rankings.`,run:()=>{ke(),s.src="radar",s.level="cell",s.ems=new Set(["destroyed","damaged","possible"]),ee(),N(V.getBounds()),setTimeout(()=>nt(3),Ft?0:1900)}},{when:"Our hometown",title:"Tashkent is ready before the next earthquake",text:"The 1966 shock left 100,000 people homeless. Today NISAR's view of Tashkent is our \u201Cbefore\u201D image, and the exposure ranking shows where 3.2 million residents are most at risk.",run:()=>{ke(),s.tk="exposure",De("T",!0),l.invalidateSize(),l.fitBounds(D.getBounds(),He)}}],ge=-1;function ke(){[Le,Re,ze,je].forEach(A=>l.removeLayer(A))}function Be(A){ge=Math.max(0,Math.min(Me.length-1,A));let B=Me[ge];ye("story").hidden=!1,ye("mapwrap").classList.add("storying"),ye("stWhen").textContent=B.when,ye("stTitle").textContent=B.title,ye("stText").textContent=B.text,ye("stN").textContent=`${ge+1} / ${Me.length}`,ye("stDots").innerHTML=Me.map((Y,ue)=>`<i class="${ue<=ge?"on":""}"></i>`).join(""),ye("stPrev").disabled=ge===0,ye("stNext").textContent=ge===Me.length-1?"Explore the map":"Next",ye("story").classList.remove("pop"),ye("story").offsetWidth,ye("story").classList.add("pop"),Ue=!0,B.run()}function tt(){let A=ge>=0;ye("story").hidden=!0,ye("mapwrap").classList.remove("storying"),ke(),ge=-1,A&&(Ue=!1,ee(),Fe())}return ye("stNext").onclick=()=>ge===Me.length-1?tt():Be(ge+1),ye("stPrev").onclick=()=>Be(ge-1),ye("stClose").onclick=tt,document.addEventListener("keydown",A=>{ye("story").hidden||(A.key==="Escape"?tt():A.key==="ArrowRight"?ye("stNext").click():A.key==="ArrowLeft"&&ge>0&&Be(ge-1))}),ye("fullMap").onclick=()=>{let A=document.querySelector(".grid"),B=!A.classList.contains("wide");A.classList.toggle("wide",B),ye("fullMap").setAttribute("aria-pressed",B),ye("fullMap").querySelector("span").textContent=B?"Show panels":"Expand map",setTimeout(()=>{l.invalidateSize(),Ue||Fe(),ne()},60)},ye("cityP").onclick=()=>{tt(),De("P")},ye("cityT").onclick=()=>{tt(),De("T")},De("P"),window.addEventListener("resize",()=>l.invalidateSize()),{startStory:()=>{l.invalidateSize(),Be(0)},go:De,refit:()=>{Ue||Fe()}}}function gc(n,e){n.indexOf(e)===-1&&n.push(e)}function Gn(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Bt=(n,e,t)=>t>e?e:t<n?n:t;var St={};var fr=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);var Di=n=>typeof n=="object"&&n!==null;var dr=n=>/^0[^.\s]+$/u.test(n);function xc(n){let e;return()=>(e===void 0&&(e=n()),e)}var dn=n=>n;var Ni=(...n)=>n.reduce((e,t)=>i=>t(e(i)));var Sn=(n,e,t)=>{let i=e-n;return i?(t-n)/i:1};var Es=class{constructor(){this.subscriptions=[]}add(e){return gc(this.subscriptions,e),()=>this.remove(e)}remove(e){Gn(this.subscriptions,e)}notify(e,t,i){let s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,i);else for(let r=0;r<s;r++){let a=this.subscriptions[r];a&&a(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};var Lt=n=>n*1e3,bt=n=>n/1e3;var pr=(n,e)=>e?n*(1e3/e):0;var bf=(n,e,t)=>{let i=e-n;return((t-n)%i+i)%i+n};var _c=(n,e,t)=>n*(3*(1-n)*((1-n)*e+n*t)+n*n);function li(n,e,t,i){return n===e&&t===i?dn:s=>{let r=0,a=1,o=s;for(let l=0;;l++){o>=r&&o<=a||(o=(r+a)/2);let c=_c(o,n,t)-s;if(c*c<1e-28||l===40)break;c>0?a=o:r=o,o-=c*1e-7/(_c(o+1e-7,n,t)-s-c)}return _c(o,e,i)}}var na=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2;var Ui=n=>e=>1-n(1-e);var ia=li(.33,1.53,.69,.99),Ts=Ui(ia),mr=na(Ts);var gr=n=>n>=1?1:(n*=2)<1?.5*Ts(n):.5*(2-Math.pow(2,-10*(n-1)));var xr=n=>1-Math.sin(Math.acos(n)),yc=Ui(xr),_r=na(xr);var vc=li(.42,0,1,1),Mc=li(0,0,.58,1),ws=li(.42,0,.58,1);var Oi=n=>Array.isArray(n)&&typeof n[0]!="number";function yr(n,e){return Oi(n)?n[bf(0,n.length,e)]:n}var Fi=n=>Array.isArray(n)&&typeof n[0]=="number";var E4={linear:dn,easeIn:vc,easeInOut:ws,easeOut:Mc,circIn:xr,circInOut:_r,circOut:yc,backIn:Ts,backInOut:mr,backOut:ia,anticipate:gr},T4=n=>typeof n=="string",As=n=>{if(Fi(n)){let[e,t,i,s]=n;return li(e,t,i,s)}else if(T4(n))return E4[n];return n};var kt={delta:0,timestamp:0,isProcessing:!1};var sa;function w4(){sa=void 0}var st={now:()=>(sa===void 0&&st.set(kt.isProcessing||St.useManualTiming?kt.timestamp:performance.now()),sa),set:n=>{sa=n,queueMicrotask(w4)}};var bn=n=>Math.round(n*1e5)/1e5;var A4=n=>e=>typeof e=="string"&&e.startsWith(n);var R4=A4("var(--"),Rs=n=>R4(n)?C4.test(n.split("/*")[0].trim()):!1,C4=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ra(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}var En={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Wn={...En,transform:n=>Bt(0,1,n)},vr={...En,default:1};var Cs=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ef(n){return n==null}var Tf=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;var Ps=(n,e)=>t=>!!(typeof t=="string"&&Tf.test(t)&&t.startsWith(n)||e&&!Ef(t)&&Object.prototype.hasOwnProperty.call(t,e)),oa=(n,e,t)=>i=>{if(typeof i!="string")return i;let[s,r,a,o]=i.match(Cs);return{[n]:parseFloat(s),[e]:parseFloat(r),[t]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}};var P4=n=>Bt(0,255,n),Sc={...En,transform:n=>Math.round(P4(n))},Tn={test:Ps("rgb","red"),parse:oa("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Sc.transform(n)+", "+Sc.transform(e)+", "+Sc.transform(t)+", "+bn(Wn.transform(i))+")"};var aa=(n,e,t)=>{let i=n.substring(1+e*t,1+(e+1)*t);return t>1?i:i+i};function I4(n){let e=n.length>5?2:1,t=aa(n,3,e);return{red:parseInt(aa(n,0,e),16),green:parseInt(aa(n,1,e),16),blue:parseInt(aa(n,2,e),16),alpha:t?parseInt(t,16)/255:1}}var Mr={test:Ps("#"),parse:I4,transform:Tn.transform};var Sr=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),pn=Sr("deg"),ci=Sr("%"),Ie=Sr("px"),wf=Sr("vh"),Af=Sr("vw"),bc={...ci,parse:n=>ci.parse(n)/100,transform:n=>ci.transform(n*100)};var hi={test:Ps("hsl","hue"),parse:oa("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+ci.transform(bn(e))+", "+ci.transform(bn(t))+", "+bn(Wn.transform(i))+")"};var dt={test:n=>Tn.test(n)||Mr.test(n)||hi.test(n),parse:n=>Tn.test(n)?Tn.parse(n):hi.test(n)?hi.parse(n):Mr.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Tn.transform(n):hi.transform(n),getAnimatableNone:n=>{let e=dt.parse(n);return e.alpha=0,dt.transform(e)}};var Rf=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;var Pf=new RegExp(Cs.source),If=new RegExp(Rf.source,"i");function L4(n){return isNaN(n)&&typeof n=="string"&&(Pf.test(n)||If.test(n))}var Lf="number",Df="color",D4="var",N4="var(",Cf="${}",U4=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;function Nf(n){let e=n.toString();return Pf.test(e)||If.test(e)}function Is(n){let e=n.toString(),t=[],i={color:[],number:[],var:[]},s=[],r=0,o=e.replace(U4,l=>(dt.test(l)?(i.color.push(r),s.push(Df),t.push(dt.parse(l))):l.startsWith(N4)?(i.var.push(r),s.push(D4),t.push(l)):(i.number.push(r),s.push(Lf),t.push(parseFloat(l))),++r,Cf)).split(Cf);return{values:t,split:o,indexes:i,types:s}}function O4(n){return Is(n).values}function la({split:n,types:e}){let t=n.length;return i=>{let s="";for(let r=0;r<t;r++)if(s+=n[r],i[r]!==void 0){let a=e[r];a===Lf?s+=bn(i[r]):a===Df?s+=dt.transform(i[r]):s+=i[r]}return s}}function F4(n){return la(Is(n))}var B4=n=>typeof n=="number"?0:dt.test(n)?dt.getAnimatableNone(n):n,k4=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:B4(n);function z4(n){let e=Is(n);return la(e)(e.values.map((i,s)=>k4(i,e.split[s])))}var Jt={test:L4,parse:O4,createTransformer:F4,getAnimatableNone:z4};function Ec(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function Uf({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let s=0,r=0,a=0;if(!e)s=r=a=t;else{let o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;s=Ec(l,o,n+1/3),r=Ec(l,o,n),a=Ec(l,o,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:i}}function Ls(n,e){return t=>t>0?e:n}var Wt=(n,e,t)=>n+(e-n)*t;var Tc=(n,e,t)=>{let i=n*n,s=t*(e*e-i)+i;return s<0?0:Math.sqrt(s)},V4=[Mr,Tn,hi],H4=n=>V4.find(e=>e.test(n));function Of(n){let e=H4(n);if(!e)return!1;let t=e.parse(n);return e===hi&&(t=Uf(t)),t}var wc=(n,e)=>{let t=Of(n),i=Of(e);if(!t||!i)return Ls(n,e);let s={...t};return r=>(s.red=Tc(t.red,i.red,r),s.green=Tc(t.green,i.green,r),s.blue=Tc(t.blue,i.blue,r),s.alpha=Wt(t.alpha,i.alpha,r),Tn.transform(s))};var ca=new Set(["none","hidden"]);function Ff(n,e){return ca.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function G4(n,e){return t=>Wt(n,e,t)}function ha(n){return typeof n=="number"?G4:typeof n=="string"?Rs(n)?Ls:dt.test(n)?wc:q4:Array.isArray(n)?Bf:typeof n=="object"?dt.test(n)?wc:W4:Ls}function Bf(n,e){let t=[...n],i=t.length,s=n.map((r,a)=>ha(r)(r,e[a]));return r=>{for(let a=0;a<i;a++)t[a]=s[a](r);return t}}function W4(n,e){let t={...n,...e},i={};for(let s in t)n[s]!==void 0&&e[s]!==void 0&&(i[s]=ha(n[s])(n[s],e[s]));return s=>{for(let r in i)t[r]=i[r](s);return t}}function X4(n,e){var s;let t=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){let a=e.types[r],o=n.indexes[a][i[a]],l=(s=n.values[o])!=null?s:0;t[r]=l,i[a]++}return t}var q4=(n,e)=>{let t=Is(n),i=Is(e);return t.indexes.var.length===i.indexes.var.length&&t.indexes.color.length===i.indexes.color.length&&t.indexes.number.length>=i.indexes.number.length?ca.has(n)&&!i.values.length||ca.has(e)&&!t.values.length?Ff(n,e):Ni(Bf(X4(t,i),i.values),la(i)):Ls(n,e)};var kf=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function $4(n,e){let t=kf.exec(n);if(!t)return;let i=kf.exec(e);if(!i||t[2]!==i[2])return;let s=t[2],r=parseFloat(t[1]),a=parseFloat(i[1]);return o=>bn(Wt(r,a,o))+s}function Ds(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return Wt(n,e,t);if(typeof n=="string"&&typeof e=="string"){let s=$4(n,e);if(s)return s}return ha(n)(n,e)}var br=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function zf(n){let e=new Set,t=new Set,i=!1,s=!1,r,a=new Set,o={delta:0,timestamp:0,isProcessing:!1};function l(h){a.has(h)&&(t.add(h),n()),(r=h)(o)}let c={schedule:(h,u=!1,f=!1)=>{let m=f&&i,g=m?e:t;return u&&a.add(h),m&&h!==r&&g.delete(h),g.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(o=h,i){s=!0;return}i=!0;let u=e;e=t,t=u,e.forEach(l),e.clear(),r=void 0,i=!1,s&&(s=!1,c.process(h))}};return c}var Y4=40;function Vf(n,e,t={delta:0,timestamp:0,isProcessing:!1}){let i=!1,s=!0,r=()=>i=!0,a=br.reduce((_,C)=>(_[C]=zf(r),_),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:h,update:u,preRender:f,render:m,postRender:g}=a,x=()=>{let _=St.useManualTiming,C=_?t.timestamp:performance.now();i=!1,_||(t.delta=s?1e3/60:Math.max(Math.min(C-t.timestamp,Y4),1)),t.timestamp=C,t.isProcessing=!0,o.process(t),l.process(t),c.process(t),h.process(t),u.process(t),f.process(t),m.process(t),g.process(t),t.isProcessing=!1,i&&e&&(s=!1,n(x))},p=()=>{i=!0,s=!0,t.isProcessing||n(x)};return{schedule:br.reduce((_,C)=>{let I=a[C];return _[C]=(R,E=!1,P=!1)=>(i||p(),I.schedule(R,E,P)),_},{}),cancel:_=>{for(let C=0;C<br.length;C++)a[br[C]].cancel(_)},state:t,steps:a}}var{schedule:Et,cancel:Hf,steps:n8}=Vf(typeof requestAnimationFrame!="undefined"?requestAnimationFrame:dn,!0,kt);var Er=n=>{let e=({timestamp:t})=>n(t);return{start:(t=!0)=>Et.update(e,t),stop:()=>Hf(e),now:()=>kt.isProcessing?kt.timestamp:st.now()}};var ua=(n,e,t=10)=>{let i="",s=Math.max(Math.round(e/t),2);for(let r=0;r<s;r++)i+=Math.round(n(r/(s-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`};function Ns(n,e=50,t=2e4,i){let s=0,r=n.next(s);for(i==null||i.push(r.value);!r.done&&s<t;)s+=e,r=n.next(s),i==null||i.push(r.value);return s>=t?1/0:s}function Tr(n,e=100,t){let{keyframes:i,velocity:s}=n,r=i&&i[i.length-1]-i[0],a=t({...n,velocity:s&&r?s*e/r:s,keyframes:[0,e]}),o=Math.min(Ns(a),2e4);return{type:"keyframes",ease:l=>a.next(o*l).value/e,duration:bt(o)}}var Gf=100,Wf=10,Z4=1,K4=800,$f=.3,J4=.3,j4=.01,Q4=2,eg=.005,tg=.5,ng=.01,ig=10,Xf=.05,Yf=n=>n<0?1/Math.max(1+n,Xf):Math.max(1-n,Xf);function Zf(n,e){if(!(n>1))return 1;let t=Math.sqrt(n*n-1),i=n-t,s=n+t,r=2*t*Math.exp(-e)*(1+e);return Kf(a=>s*Math.exp(-i*a)-i*Math.exp(-s*a)-r,a=>Math.exp(-s*a)-Math.exp(-i*a),e)/e}function Pc(n,e){return n*Math.sqrt(1-e*e)}var sg=12;function Kf(n,e,t){let i=t;for(let s=1;s<sg;s++)i=i-n(i)/e(i);return i}var Rc=.001;function rg({duration:n=K4,bounce:e=$f}){let t,i,s=Yf(e);n=Bt(ng,ig,bt(n)),s<1?(t=c=>{let h=c*s,u=h*n,f=Pc(c,s),m=Math.exp(-u);return Rc-h/f*m},i=c=>{let u=c*s*n,f=s*s*c*c*n,m=Math.exp(-u),g=Pc(c*c,s);return(-t(c)+Rc>0?-1:1)*-f*m/g}):(t=c=>{let h=Math.exp(-c*n),u=c*n+1;return-Rc+h*u},i=c=>{let h=Math.exp(-c*n),u=-c*(n*n);return h*u});let r=5/n,a=Kf(t,i,r),o=a*Zf(s,a*n),l=o*o;return{stiffness:l,damping:s*2*Math.sqrt(l),duration:Lt(n)}}var Ic=(n,e)=>(e?n>=0:n>0)&&n<1/0;function Cc(n,e){if(Ic(n,e))return n}function Jf(n){var r;let e=Cc(n.stiffness),t=Cc(n.damping,!0),i=Cc(n.mass),s={...n,stiffness:e!=null?e:Gf,damping:t!=null?t:Wf,mass:i!=null?i:Z4,isResolvedFromDuration:!1,isTimeDefined:((r=e!=null?e:t)!=null?r:i)===void 0&&(n.duration!==void 0||n.bounce!==void 0)};if(s.isTimeDefined){if(n.visualDuration){let a=Yf(n.bounce||0),o=2*Math.PI/(n.visualDuration*1.2)*Zf(a,2*Math.PI/1.2);s.stiffness=o*o,s.damping=2*a*Math.sqrt(s.stiffness)}else Object.assign(s,rg(s)),s.isResolvedFromDuration=!0;(!Ic(s.stiffness)||!Ic(s.damping,!0))&&(s.stiffness=Gf,s.damping=Wf)}return s}function qf(n=J4,e=$f){let t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n,i=t.keyframes[0],s=t.keyframes[t.keyframes.length-1],r={done:!1,value:i},{stiffness:a,damping:o,mass:l,duration:c,isResolvedFromDuration:h,isTimeDefined:u}=Jf({...t}),f=E=>h?0:-bt(E),m=o/(2*Math.sqrt(a*l)),g=bt(Math.sqrt(a/l)),x=m*g,p={target:s,delta:s-i,velocity:f(t.velocity)||0,restSpeed:0,restDelta:0},d=()=>{let E=Math.abs(p.delta)<5;p.restSpeed=t.restSpeed||(E?j4:Q4),p.restDelta=t.restDelta||(E?eg:tg)};d();let M,_,C;if(m<1){let E=Pc(g,m),P={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};C=()=>{P.A=(p.velocity+x*p.delta)/E,P.sinC=x*P.A+p.delta*E,P.cosC=x*p.delta-P.A*E};let v=b=>{b!==P.t&&(P.t=b,P.env=Math.exp(-x*b),P.sin=Math.sin(E*b),P.cos=Math.cos(E*b))};M=b=>(v(b),p.target-P.env*(P.A*P.sin+p.delta*P.cos)),_=b=>(v(b),P.env*(P.sinC*P.sin+P.cosC*P.cos))}else if(m===1){M=P=>p.target-Math.exp(-g*P)*(p.delta+(p.velocity+g*p.delta)*P);let E={C:0};C=()=>{E.C=p.velocity+g*p.delta},_=P=>Math.exp(-g*P)*(g*E.C*P-p.velocity)}else{let E=g*Math.sqrt(m*m-1),P=x-E,v=x+E,b=E<1||u?1/0:300/E,G=(te,L)=>Math.exp(L>b?(x-te)*b-x*L:-te*L),k={S:0,F:0};C=()=>{let te=(p.velocity+x*p.delta)/E;k.S=(p.delta+te)/2,k.F=(p.delta-te)/2},M=te=>p.target-k.S*G(P,te)-k.F*G(v,te),_=te=>P*k.S*G(P,te)+v*k.F*G(v,te)}C();let I=h&&c||null,R={calculatedDuration:I,retarget:(E,P)=>{p.target=E[E.length-1],p.delta=p.target-E[0],p.velocity=f(P),t.restSpeed&&t.restDelta||d(),R.calculatedDuration=I,r.done=!1,C()},velocity:E=>Lt(_(E)),next:E=>{let P=M(E);if(h)r.done=E>=c;else{let v=Lt(_(E));r.done=Math.abs(v)<=p.restSpeed&&Math.abs(p.target-P)<=p.restDelta}return r.value=r.done?p.target:P,r},toString:()=>{let E=Math.min(Ns(R),2e4),P=ua(v=>R.next(E*v).value,E,30);return E+"ms "+P}};return R}var Bi=Object.assign(qf,{applyToOptions:n=>{let e=Tr(n,100,qf);return n.ease=e.ease,n.duration=Lt(e.duration),n.type="keyframes",n}});function Us({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:h}){let u=n[0],f={done:!1,value:u},m=E=>E<o||E>l,g=E=>o===void 0?l:l===void 0||Math.abs(o-E)<Math.abs(l-E)?o:l,x=t*e,p=u+x,d=a?a(p):p;d!==p&&(x=d-u);let M=E=>-x*Math.exp(-E/i),_=E=>{let P=M(E);f.done=Math.abs(P)<=c,f.value=f.done?d:E?d+P:u},C,I,R=E=>{m(f.value)&&(C=E,I=Bi({keyframes:[f.value,g(f.value)],velocity:-M(E)/i*1e3,damping:s,stiffness:r,restDelta:c,restSpeed:h}))};return R(0),{calculatedDuration:null,next:E=>{let P=!1;return!I&&C===void 0&&(P=!0,_(E),R(E)),C!==void 0&&E>=C?I.next(E-C):(!P&&_(E),f)}}}function og(n,e,t){let i=[],s=St.mix||Ds,r=n.length-1;for(let a=0;a<r;a++){let o=(t==null?void 0:t(n[a],n[a+1]))||s(n[a],n[a+1]);if(e){let l=Array.isArray(e)?e[a]||dn:e;o=Ni(l,o)}i.push(o)}return i}function jf(n,e,{clamp:t=!0,ease:i,mixer:s}={}){let r=n.length;if(r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];let a=n[0]===n[1];n[0]>n[r-1]&&(n=[...n].reverse(),e=[...e].reverse());let o=og(e,i,s),l=o.length,c=h=>{if(a&&h<n[0])return e[0];let u=0;if(l>1)for(;u<n.length-2&&!(h<n[u+1]);u++);let f=Sn(n[u],n[u+1],h);return o[u](f)};return t?h=>c(Bt(n[0],n[r-1],h)):c}function wr(n,e){let t=n[n.length-1];for(let i=1;i<=e;i++){let s=Sn(0,e,i);n.push(Wt(t,1,s))}}function wn(n){let e=[0];return wr(e,n.length-1),e}function Qf(n,e){return n.map(t=>t*e)}function ag(n,e){return n.map(()=>e||ws).splice(0,n.length-1)}function mn({duration:n=300,keyframes:e,times:t,ease:i="easeInOut",mixer:s}){let r=typeof e[0]=="number"?void 0:s,a=Oi(i)?i.map(As):As(i)||ws,o={done:!1,value:e[0]},l=-1;if(!r){for(let u=1;u<e.length;u++)if(e[u]!==e[u-1]){if(l>=0){l=-2;break}l=u-1}}if(l>=0){let u=t&&t.length===e.length?t:wn(e),f=u[l]*n,m=u[l+1]*n,g=e[l],x=e[l+1],p=Array.isArray(a)?a[l]:a,d=(St.mix||Ds)(g,x),M=e.length-2;return{calculatedDuration:n,next:_=>(o.value=l&&_<f?d(0):l<M&&(_>=m||!n)?typeof x=="number"?x:d(1):d(p(_>=m||!n?1:_<=f?0:(_-f)/(m-f))),o.done=_>=n,o)}}let c=Qf(t&&t.length===e.length?t:wn(e),n),h=jf(c,e,{ease:Array.isArray(a)?a:ag(e,a),mixer:r});return{calculatedDuration:n,next:u=>(o.value=h(u),o.done=u>=n,o)}}var lg=5;function cg(n,e,t){let i=Math.max(e-lg,0);return pr(t-n(i),e-i)}function ed(n,e,t=0){return e<=0?t:n.velocity?n.velocity(e):cg(i=>n.next(i).value,e,n.next(e).value)}function Xn(n,{repeat:e,repeatType:t="loop"},i,s=1){let r,a,o=0;for(let h=0;h<n.length;h++){let u=n[h];u!==null&&(o++||(r=u),a=u)}let c=s<0||e&&t!=="loop"&&e%2===1?0:o-1;return!c||i===void 0?c?a:r:i}var hg={decay:Us,inertia:Us,tween:mn,keyframes:mn,spring:Bi};function fa(n){typeof n.type=="string"&&(n.type=hg[n.type])}var ug=40,da=(n,e)=>e-n>ug&&!St.useManualTiming?e:n;function fg(n,e){return{kind:n,animation:e,timestamp:st.now(),frameTimestamp:kt.timestamp,frameIsProcessing:kt.isProcessing}}function pa(n,e,t){let i=globalThis.__MOTION_INSPECT__;if(i)try{i({...fg("animation-start",n),options:t?{...e,...t}:e})}catch{}}var ui=class{constructor(){this.isResolved=!1}get finished(){return this._finished||(this._finished=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e})),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){var e;this.isResolved=!0,(e=this._resolve)==null||e.call(this)}then(e,t){return this.finished.then(e,t)}};var dg=n=>n/100,Os=n=>Math.round(n*1e4)/1e4,sn=class extends ui{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,r;let{motionValue:t}=this.options,i=st.now();t&&t.updatedAt!==i&&this.tick(t.updatedAt=i),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(s=this.options).onStop)==null||r.call(s))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause(),pa(this,this.options)}initAnimation(){var u;let{options:e}=this;fa(e);let{type:t=mn,repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:a=0}=e,{keyframes:o}=e,l=t||mn;this.mixKeyframes=void 0,l!==mn&&typeof o[0]!="number"&&(this.mixKeyframes=Ni(dg,((u=e.mixer)==null?void 0:u.call(e,o[0],o[1]))||Ds(o[0],o[1])),o=[0,100]);let c=l(o===e.keyframes?e:{...e,keyframes:o});r==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Ns(c));let{calculatedDuration:h}=c;this.calculatedDuration=h,this.resolvedDuration=h+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=c}updateTime(e){var t;this.currentTime=(t=this.holdTime)!=null?t:Math.round(e-this.startTime)*this.playbackSpeed}tick(e,t=!1){let{generator:i,totalDuration:s,calculatedDuration:r}=this;if(this.startTime===null)return i.next(0);let{delay:a=0,keyframes:o,type:l,onUpdate:c,finalKeyframe:h}=this.options;this.startTime===this.pendingStartTime&&(this.startTime=da(this.startTime,e)),this.pendingStartTime=void 0,this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let u=this.currentTime-a*(this.playbackSpeed>=0?1:-1),f=this.playbackSpeed>=0?u<0:u>s;this.currentTime=Math.max(u,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let m=this.generate(this.currentTime,f),{done:g}=m;f||(g=this.playbackSpeed>=0?r<1/0?this.currentTime>=s:g:this.currentTime<=0);let x=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&g);return x&&l!==Us&&(m.value=Xn(o,this.options,h,this.speed)),c&&c(m.value),x&&this.finish(),m}at(e){var t;return(t=this.holdTime)!=null?t:Os((e-this.startTime)*this.playbackSpeed)}sampleAt(e,t){let{options:i,totalDuration:s}=this,r=this.at(e)-(i.delay||0);return r>=s&&i.type!==Us?Xn(i.keyframes,i,t?void 0:i.finalKeyframe):this.generate(Math.max(r,0),r<0).value}generate(e,t){let{generator:i,totalDuration:s,mixKeyframes:r,mirroredGenerator:a,resolvedDuration:o}=this,{keyframes:l,repeat:c,repeatType:h,repeatDelay:u}=this.options,f=e,m=i;if(c){let x=Math.min(e,s)/o,p=Math.floor(x),d=x%1;!d&&x>=1&&(d=1),d===1&&p--,p=Math.min(p,c+1),p%2&&(h==="reverse"?(d=1-d,u&&(d-=u/o)):h==="mirror"&&(m=a)),f=Bt(0,1,d)*o}let g;return t?(this.delayState.value=l[0],g=this.delayState):g=m.next(f),r&&!t&&(g.value=r(g.value)),g}get duration(){return bt(this.calculatedDuration)}get iterationDuration(){var e;return this.duration+bt((e=this.options.delay)!=null?e:0)}get time(){return bt(this.currentTime)}set time(e){this.state==="finished"&&this.updateFinished(),e=Lt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return ed(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(st.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=bt(this.currentTime))}play(){var s,r;if(this.isStopped)return;let{driver:e=Er,startTime:t}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),(r=(s=this.options).onPlay)==null||r.call(s);let i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime/(this.playbackSpeed||1):this.startTime||(this.startTime=t!=null?t:this.pendingStartTime=i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(st.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){var e;this.state="idle",(e=this.driver)==null||e.stop(),this.driver=void 0,this.startTime=this.holdTime=null}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}};var pg=new Set(["brightness","contrast","saturate","opacity"]);function mg(n){let[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;let[i]=t.match(Cs)||[];if(!i)return n;let s=t.replace(i,""),r=pg.has(e)?1:0;return i!==t&&(r*=100),e+"("+r+s+")"}var gg=/\b([a-z-]*)\(.*?\)/gu,Ar={...Jt,getAnimatableNone:n=>{let e=n.match(gg);return e?e.map(mg).join(" "):n}};var Rr={...Jt,getAnimatableNone:n=>{let e=Jt.parse(n);return Jt.createTransformer(n)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}};var Lc={...En,transform:Math.round};var ma={rotate:pn,pathRotation:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scale:vr,scaleX:vr,scaleY:vr,scaleZ:vr,skew:pn,skewX:pn,skewY:pn,distance:Ie,translateX:Ie,translateY:Ie,translateZ:Ie,x:Ie,y:Ie,z:Ie,perspective:Ie,transformPerspective:Ie,opacity:Wn,originX:bc,originY:bc,originZ:Ie};var gn={borderWidth:Ie,borderTopWidth:Ie,borderRightWidth:Ie,borderBottomWidth:Ie,borderLeftWidth:Ie,borderRadius:Ie,borderTopLeftRadius:Ie,borderTopRightRadius:Ie,borderBottomRightRadius:Ie,borderBottomLeftRadius:Ie,width:Ie,maxWidth:Ie,height:Ie,maxHeight:Ie,top:Ie,right:Ie,bottom:Ie,left:Ie,inset:Ie,insetBlock:Ie,insetBlockStart:Ie,insetBlockEnd:Ie,insetInline:Ie,insetInlineStart:Ie,insetInlineEnd:Ie,padding:Ie,paddingTop:Ie,paddingRight:Ie,paddingBottom:Ie,paddingLeft:Ie,paddingBlock:Ie,paddingBlockStart:Ie,paddingBlockEnd:Ie,paddingInline:Ie,paddingInlineStart:Ie,paddingInlineEnd:Ie,margin:Ie,marginTop:Ie,marginRight:Ie,marginBottom:Ie,marginLeft:Ie,marginBlock:Ie,marginBlockStart:Ie,marginBlockEnd:Ie,marginInline:Ie,marginInlineStart:Ie,marginInlineEnd:Ie,fontSize:Ie,backgroundPositionX:Ie,backgroundPositionY:Ie,...ma,zIndex:Lc,fillOpacity:Wn,strokeOpacity:Wn,numOctaves:Lc};var xg={...gn,color:dt,backgroundColor:dt,outlineColor:dt,fill:dt,stroke:dt,borderColor:dt,borderTopColor:dt,borderRightColor:dt,borderBottomColor:dt,borderLeftColor:dt,filter:Ar,WebkitFilter:Ar,mask:Rr,WebkitMask:Rr},td=n=>xg[n];var _g=new Set([Ar,Rr]),nd,id,Dc;function ga(n,e){if(n===nd&&e===id)return Dc;let t=td(n);return _g.has(t)||(t=Jt),Dc=t.getAnimatableNone?t.getAnimatableNone(e):void 0,nd=n,id=e,Dc}function sd(n){var e;for(let t=1;t<n.length;t++)(e=n[t])!=null||(n[t]=n[t-1])}var ki=n=>n*180/Math.PI,Nc=n=>{let e=ki(Math.atan2(n[1],n[0]));return Uc(e)},yg={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scaleZ:()=>1,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Nc,rotateZ:Nc,skewX:n=>ki(Math.atan(n[1])),skewY:n=>ki(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Uc=n=>(n=n%360,n<0&&(n+=360),n),rd=Nc,od=n=>Math.hypot(n[0],n[1]),ad=n=>Math.hypot(n[4],n[5]),vg={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:od,scaleY:ad,scaleZ:n=>Math.hypot(n[8],n[9],n[10]),scale:n=>(od(n)+ad(n))/2,rotateX:n=>Uc(ki(Math.atan2(n[6],n[5]))),rotateY:n=>Uc(ki(Math.atan2(-n[2],n[0]))),rotateZ:rd,rotate:rd,skewX:n=>ki(Math.atan(n[4])),skewY:n=>ki(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function ld(n){return n.includes("scale")?1:0}function xa(n,e){if(!n||n==="none")return ld(e);let t=n.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);if(!t)return ld(e);let i=(t[1]?vg:yg)[e],s=t[2].split(",").map(r=>parseFloat(r));return typeof i=="function"?i(s):s[i]}var cd=(n,e)=>{let{transform:t="none"}=getComputedStyle(n);return xa(t,e)};var Xt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","scaleZ","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qn=new Set([...Xt,"pathRotation"]);var Oc=n=>n===En||n===Ie,Mg=new Set(["x","y","z"]),Sg=Xt.filter(n=>!Mg.has(n));function dd(n){let e=[];return Sg.forEach(t=>{let i=n.getValue(t);if(i!==void 0){let s=i.get(),r=t.startsWith("scale")?1:0;if(s===r)return;e.push([t,s]),i.set(r)}}),e}var pd=new Set(["bottom","right"]);function hd(n,e,t,i,s,r){let a=parseFloat(n);if(!isNaN(a))return a;let{min:o,max:l}=e()[t],c=l-o;return r==="border-box"?c:c-parseFloat(i)-parseFloat(s)}var ud=({transform:n})=>xa(n,"x"),fd=({transform:n})=>xa(n,"y"),_a={width:({width:n,paddingLeft:e="0",paddingRight:t="0",boxSizing:i},s)=>hd(n,s,"x",e,t,i),height:({height:n,paddingTop:e="0",paddingBottom:t="0",boxSizing:i},s)=>hd(n,s,"y",e,t,i),top:({top:n})=>parseFloat(n),left:({left:n})=>parseFloat(n),bottom:({top:n},e)=>{let{y:t}=e();return parseFloat(n)+(t.max-t.min)},right:({left:n},e)=>{let{x:t}=e();return parseFloat(n)+(t.max-t.min)},x:ud,y:fd,translateX:ud,translateY:fd};var zi=new Set,Fc=!1,Bc=!1,kc=!1;function md(){if(Bc){let n=[],e=new Set,t=new Set;zi.forEach(s=>{s.needsMeasurement&&(n.push(s),e.add(s.element),pd.has(s.name)&&t.add(s.element))});let i=new Map;t.forEach(s=>{let r=dd(s);r.length&&(i.set(s,r),s.render())}),n.forEach(s=>s.measureInitialState()),e.forEach(s=>{s.render();let r=i.get(s);r&&r.forEach(([a,o])=>{var l;(l=s.getValue(a))==null||l.set(o)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Bc=!1,Fc=!1,zi.forEach(n=>n.complete(kc)),zi.clear()}function gd(){zi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Bc=!0)})}function xd(){kc=!0,gd(),md(),kc=!1}function bg(n,e,t){if(typeof n=="string"){if(fr(n)||dr(n))return parseFloat(n);if(!Jt.test(n)&&Jt.test(t))return ga(e,t)}return n!=null?n:void 0}var Fs=class{constructor(e,t,i,s,r,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=s,this.element=r,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(zi.add(this),Fc||(Fc=!0,Et.read(gd),Et.resolveKeyframes(md))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:i,motionValue:s}=this;if(e[0]===null){let r=s==null?void 0:s.get(),a=e[e.length-1];if(r!==void 0)e[0]=r;else if(i&&t){let o=bg(i.readValue(t,a),t,a);o!==void 0&&(e[0]=o)}e[0]===void 0&&(e[0]=a),s&&r===void 0&&s.set(e[0])}sd(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),zi.delete(this)}cancel(){this.state==="scheduled"&&(zi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}};var fi=n=>n.startsWith("--");function ya(n,e,t){fi(e)?n.style.setProperty(e,t):n.style[e]=t}var _d={};function va(n,e){let t=xc(n);return()=>{var i;return(i=_d[e])!=null?i:t()}}var yd=va(()=>window.ScrollTimeline!==void 0,"scrollTimeline");var Bs=va(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");var $n=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`;var Cr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:$n([0,.65,.55,1]),circOut:$n([.55,0,1,.45]),backIn:$n([.31,.01,.66,-.59]),backOut:$n([.33,1.53,.69,.99])};function zc(n,e){if(n)return typeof n=="function"?Bs()?ua(n,e):"ease-out":Fi(n)?$n(n):Array.isArray(n)?n.map(t=>zc(t,e)||Cr.easeOut):Cr[n]}function vd(n,e,t,{delay:i=0,duration:s=300,repeat:r=0,repeatType:a="loop",ease:o="easeOut",times:l}={},c=void 0){let h={[e]:t};l&&(h.offset=l);let u=zc(o,s);Array.isArray(u)&&(h.easing=u);let f={delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:a==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),n.animate(h,f)}function Vi(n){return typeof n=="function"&&"applyToOptions"in n}function Md({type:n,...e}){var t,i;return Vi(n)&&Bs()?n.applyToOptions(e):((t=e.duration)!=null||(e.duration=300),(i=e.ease)!=null||(e.ease="easeOut"),e)}var Ma=class extends ui{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:i,keyframes:s,pseudoElement:r,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=e;this.isPseudoElement=!!r,this.allowFlatten=a,this.options=e;let c=Md(e);this.animation=vd(t,i,s,c,r),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=this.onFinish=()=>{var h;if(this.animation.onfinish=null,this.finishedTime=this.time,!r){let u=Xn(s,this.options,o,this.speed);(h=this.updateMotionValue)==null||h.call(this,u),ya(t,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()},pa(this,e,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.onfinish=this.onFinish,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;this.isStopped||(this.animation.onfinish=this.onFinish),(t=(e=this.animation).finish)==null||t.call(e)}cancel(){this.animation.onfinish=null;try{this.animation.cancel()}catch{}}stop(){this.isStopped||(this.isStopped=!0,!(this.state==="idle"||this.finishedTime!==null)&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel()))}commitStyles(){var t,i,s;let e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((s=(i=this.animation).commitStyles)==null||s.call(i))}get duration(){var t,i;let e=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return bt(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+bt(e)}get time(){return bt(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Lt(e),t&&(this.animation.pause(),this.updateFinished())}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){var e;return(e=this.manualStartTime)!=null?e:Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,onAttach:t,observe:i}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=this.onFinish=null,e&&yd()?(this.animation.timeline=e,t==null||t(this.animation),dn):i(this)}};var Sd={anticipate:gr,backInOut:mr,circInOut:_r};function Eg(n){return n in Sd}function bd(n){typeof n.ease=="string"&&Eg(n.ease)&&(n.ease=Sd[n.ease])}var Pr=10,Sa=class extends Ma{constructor(e){bd(e),fa(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}elapsed(){return this.state==="running"?(st.now()-this.startTime)*this.speed:this.time*1e3}sample(e){if(!this.sampler){let{motionValue:t,onUpdate:i,onComplete:s,onPlay:r,onStop:a,element:o,...l}=this.options;this.sampler=new sn({...l,autoplay:!1}),this.sampler.stop()}return this.sampler.sample(Math.max(0,e)).value}liveValue(){let{state:e}=this;if(e==="running"||e==="paused")return this.sample(this.elapsed())}updateMotionValue(e){let{motionValue:t,element:i,name:s}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let{speed:r}=this,a=this.elapsed(),o=this.state==="running"&&r?Bt(0,Pr,a):0,l=this.sample(a);i&&s&&ya(i,s,l),t.setWithVelocity(this.sample(a-o*Math.sign(r)),l,o/Math.abs(r||1))}};var Vc=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Jt.test(n)||n==="0")&&!n.startsWith("url("));function Tg(n){let e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function Ed(n,e,t,i){let s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;let r=n[n.length-1],a=Vc(s,e),o=Vc(r,e);return!a||!o?!1:Tg(n)||(t==="spring"||Vi(t))&&i}function Ir(n){n.duration=0,n.type="keyframes"}var Hc=new Set(["opacity","clipPath","filter","transform"]);var wg=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Td(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&wg.test(n[e]))return!0;return!1}var ba=({mixer:n,keyframes:e})=>n&&typeof e[0]!="number"&&e.some((t,i)=>i&&n(e[i-1],t));var wd=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Gc=()=>!St.useManualTiming&&Object.hasOwnProperty.call(Element.prototype,"animate");function Ad(n){var u;let{motionValue:e,name:t,repeatDelay:i,repeatType:s,damping:r,type:a,keyframes:o}=n;if(!t||!(Hc.has(t)||wd.has(t)))return!1;let l=(u=e==null?void 0:e.owner)==null?void 0:u.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;let{onUpdate:c,transformTemplate:h}=e.owner.getProps();return Gc()&&(Hc.has(t)||wd.has(t)&&Td(o))&&(t!=="transform"||!h)&&!c&&!i&&s!=="mirror"&&r!==0&&a!=="inertia"&&!ba(n)}var di=(n,e)=>e&&typeof n=="number"?e.transform(n):n;var Ag={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},a_=Xt.length,Rd={},Lr=(n,e,t=di(e,ma[n]))=>(Rd[n]||(Rd[n]=(Ag[n]||n)+"("))+t+")",Dr=(n,e)=>(typeof e=="number"?e:parseFloat(e))===(n.startsWith("scale")?1:0);var ks=new WeakMap;var Rg=200,Nd=.001,Cg=.1,Pg=.001,Ig=100,Cd=100,Lg=new Set(["linear","easeIn","easeOut","easeInOut"]),Dg=n=>Lg.has(n),Pd=new WeakMap,Ng=(n,e)=>{let t=Pd.get(n);return(t==null?void 0:t[0])!==e&&(t=[e,"linear("+wn(Array(e+1)).map(i=>Os(n(i))+" "+Os(i*100)+"%")+")"],Pd.set(n,t)),t[1]},Id=(n,e)=>Math.min(Rg,Math.max(2,Math.ceil((e-n)/Pr))),Ur=(n,e)=>Math.abs(n-e)<=Nd,Wc=(n,e)=>n-e,Ld=(n,e,t)=>wn(Array(t+1)).map(i=>Wt(n,e,i)),Ta=n=>n.motionValue.owner,wa=n=>ks.get(n),Dd=({state:n})=>n==="idle"||n==="finished",zs=(n,e)=>{var t;return n.latestValues?n.latestValues[e]:(t=n.getValue(e))==null?void 0:t.get()},Ud=({name:n,motionValue:e})=>{var t;return n&&Xt.includes(n)&&((t=e==null?void 0:e.owner)==null?void 0:t.current)instanceof HTMLElement&&Gc()&&Bs()};function Ug(n){var s;let e=Ta(n),{onUpdate:t,transformTemplate:i}=e.getProps();return!n.isHandoff&&!t&&!n.hasOnUpdate&&!i&&n.type!=="inertia"&&(zs(e,"transform")||"none")==="none"&&!zs(e,"pathRotation")&&!((s=e.projection)!=null&&s.isProjecting())&&!ba(n)}var Xc=class{constructor(e,t,i,s){this.element=e,this.update=t,this.makeDriver=i,this.animation=s}get js(){return this.driver||(this.driver=this.makeDriver(this.update))}now(){return this.driver||this.makeDriver!==Er?this.js.now():kt.isProcessing?kt.timestamp:st.now()}start(e=!0){let t=wa(this.element);!t||t.isJS?this.js.start(e):t.schedule(!1,!e)}stopJS(){var e;(e=this.driver)==null||e.stop()}stop(){this.stopJS();let e=wa(this.element);e&&!e.isFinishing&&e.release(this.animation)}},Ea,Aa=class extends sn{constructor(e){let t=Ta(e).current,{driver:i=Er}=e,s,r=Ug(e);e.driver=l=>new Xc(t,l,i,s),super(e),s=this;let a=this.driver;a&&(a.animation=this),this.canAccelerate=r;let{stop:o}=this;this.stop=()=>{this.isAccelerated()&&this.sync(),o()}}offsets(){let{keyframes:e,times:t}=this.options;return t||(this.offsetsOf!==e&&(this.offsetsOf=e,this.cachedOffsets=wn(e)),this.cachedOffsets)}get group(){return wa(Ta(this.options).current)}get js(){var e;return(e=this.driver)==null?void 0:e.js}stopJS(){var e;(e=this.driver)==null||e.stopJS()}get name(){return this.options.name}timing(){let{startTime:e,speed:t,totalDuration:i}=this,{delay:s=0,repeatType:r}=this.options;return this.holdTime!==null?[1/0,0]:i===1/0?[e+s/t,this.resolvedDuration*(r==="loop"?1:2)/t||1]:[e+(s+i)/t,0]}isAccelerated(){let{group:e,state:t}=this;return(e==null?void 0:e.tracks.has(this))&&!e.isJS&&this.canAccelerate&&(t==="running"||t==="paused")}liveValue(){return this.isAccelerated()?this.sampleAt(st.now()):void 0}tween(){let{keyframes:e,type:t,repeat:i,delay:s=0}=this.options,r=-1;if(i||t!==mn||this.holdTime!==null)return;for(let c=1;c<e.length;c++)if(e[c]!==e[c-1]){if(r>=0)return;r=c-1}let{ease:a}=this.options;Oi(a)&&(a=a[r]);let o=this.offsets(),l=c=>this.startTime+(s+o[c]*this.totalDuration)/this.speed;if(r>=0){let c=Fi(a)?$n(a):Dg(a)?Cr[a]:As(a);return[l(r),l(r+1),typeof c=="string"||Ur(c(0),0)&&Ur(c(1),1)?c:void 0]}}boundaries(e,t){let{startTime:i,speed:s,resolvedDuration:r,options:a}=this,{delay:o=0,repeat:l=0,repeatDelay:c=0,repeatType:h,type:u}=a,f=(u||mn)===mn?this.offsets():[0,1],m=i+o/s,g=[];if(this.holdTime!==null||!(r>0))return g;for(let x=Math.max(0,Math.floor((e-m)*s/r));x<=l;x++){let p=m+x*r/s;if(p>t)break;for(let d of f){let M=p+(x%2&&h&&h!=="loop"?1-d:d)*(r-c)/s;M>e&&M<t&&g.push(M)}}return g}numberAt(e){return parseFloat(this.sampleAt(e,!0))}sync(){let e=st.now(),t=this.sampleAt(e,!0);this.options.motionValue.setWithVelocity(this.holdTime===null?this.sampleAt(e-Pr,!0):t,t,Pr)}play(){this.isStopped||((this.group||Fg(Ta(this.options))).tracks.add(this),super.play())}pause(){super.pause(),this.isAccelerated()&&this.group.schedule(!1)}complete(){super.complete();let{group:e}=this;e&&!e.isJS&&this.tick(st.now())}get time(){return this.isAccelerated()?bt(Bt(0,this.totalDuration,this.at(st.now())-(this.options.delay||0))):super.time}set time(e){(Ea!=null?Ea:Ea=Object.getOwnPropertyDescriptor(sn.prototype,"time").set).call(this,e)}attachTimeline(e){var t;return this.canAccelerate=!1,(t=this.group)==null||t.demote(!0),super.attachTimeline(e)}},Nr,Og=n=>{Nr||queueMicrotask(()=>{let e=Nr;Nr=void 0,e.forEach(t=>t())}),(Nr||(Nr=[])).push(n)};function Fg(n){let e=n.current,t=new Set,i=new Map,s={},r=[],a=new Map,o=[],l=!1,c=!1,h=!1,u=!1,f=-1/0,m,g=1/0,x,p=O=>{for(let U of t)if(U.name===O)return!0},d=(O,U)=>{let q={};for(let D of O===void 0?Xt:r){let z=i.get(D),se=O===void 0?zs(n,D):z?z.sampleAt(U>O&&!z.timing()[1]?U:O):s[D];se!==void 0&&(q[D]=se)}return q},M=(O,U)=>{let q="";for(let D in O){let z=O[D];(!U||!Dr(D,z))&&(q+=Lr(D,z)+" ")}return(U?q.trim():q)||"none"},_=(O,U)=>M(d(O,U)),C=(O=d())=>{e.style.transform=M(O,!0)},I=O=>{O.onfinish=O.oncancel=null,O.cancel()},R=(O=!0)=>{clearTimeout(m),g=1/0,x=void 0,O&&C(),o.forEach(({animation:U})=>I(U)),o=[]},E=(O,U)=>new Animation(new KeyframeEffect(e,O,U)),P=(O,U,q=1/0)=>{let D={animation:O,offset:U,end:q};O.startTime=st.now()+U,q<1/0&&(O.onfinish=()=>{D.isDone=!0,o.some(z=>z.end===1/0)&&(I(O),o=o.filter(z=>z!==D)),W.schedule(!1)}),O.oncancel=()=>o.includes(D)&&W.demote(),o.push(D)},v=(O,U,q)=>{let D=(se,re)=>Math.abs(O(re)-O(se)),z=D(U,q);for(;q-U>.01;){let se=(U+q)/2;D(U,se)>D(se,q)?q=se:U=se}return D(U,q)>z/2?[U,q]:[]},b=(O,U,q,D)=>{let z=Id(U,q);if(D.length*4>z)return;let se;for(let T of O){let le=T.numberAt(U),ce=(T.numberAt((U+q)/2)-le)/(T.numberAt(q)-le);if(ce===ce){if(se===void 0)se=ce;else if(!Ur(ce,se))return}}let re=Ld(U,q,z).concat(D).sort(Wc),fe=T=>Sn(U,q,T),de,me;for(let T of O){let le=T.numberAt(U),ce=re.map(Ee=>T.numberAt(Ee)-le),be=ce[ce.length-1],ae=ce.some(Ee=>Math.abs(Ee)*Nd>Math.abs(be))?0:be,Ne=ce.map(Ee=>ae?Ee/ae:Ee);if(ae&&!de)de=Ne,me=Ee=>(T.numberAt(Ee)-le)/ae;else if(Ne.some((Ee,w)=>!Ur(Ee,ae&&de[w])))return}if(!de||de.every((T,le)=>Ur(T,fe(re[le]))))return"linear";let xe=[],Te=(T,le=me(T))=>xe.push(Os(le)+" "+Os(fe(T)*100)+"%");return de.forEach((T,le)=>{le&&Math.abs(T-de[le-1])>.2&&v(me,re[le-1],re[le]).forEach(ce=>Te(ce)),Te(re[le],T)}),"linear("+xe+")"},G=(O,U,q,D)=>{let z=[U],se=[],re=q,fe=U;for(let T of O){let le=T.tween();if((le==null?void 0:le[2])!=="linear"){let[ce,be]=T.timing(),[ae,Ne]=le||[U,be?q:ce];re=Math.min(re,ae),fe=Math.max(fe,Ne),se.push(T)}}re=Math.max(U,re),fe=Math.min(q,fe);let de=(T,le)=>se.every(ce=>!(Math.abs(ce.numberAt((T+le)/2)-(ce.numberAt(T)+ce.numberAt(le))/2)>(ce.name.startsWith("scale")?Pg:Cg))),me=(T,le,ce)=>{if(le-T<1||de(T,le))z.push(le);else if(ce<4)me(T,(T+le)/2,ce+1),me((T+le)/2,le,ce+1);else{for(let be of O)z.push(...v(ae=>be.numberAt(ae),T,le));z.push(le)}},xe=fe>re?Ld(re,fe,Math.ceil((fe-re)/100)):[];xe.push(q);for(let T of D)xe.push(T,Math.min(T+.01,q));let Te=U;for(let T of xe.sort(Wc))T>Te&&me(Te,T,0),Te=T;return z.sort(Wc)},k=O=>{let U;for(let q of O){let D=q.tween();if(!D||U&&(Math.abs(D[0]-U[0])>1||Math.abs(D[1]-U[1])>1))return;U=[D[0],D[1],!U||D[2]===U[2]?D[2]:void 0]}return U},te=(O,U,q,D,z={fill:"both"},se)=>{let re=D?[]:O.flatMap(Te=>Te.boundaries(U,q)),fe=D||b(O,U,q,re),de=fe?[U,q]:G(O,U,q,re),me=de.map(Te=>_(Te,se)),xe={transform:me};return fe||(xe.offset=de.map(Te=>Sn(U,q,Te))),me.every(Te=>Te===me[0])&&(C(d(U,se)),xe=null),E(xe,{...z,duration:q-U,easing:fe||"linear"})},L=O=>{let U=st.now()+O;U<g&&(clearTimeout(m),g=U,m=setTimeout(()=>{g=1/0,W.schedule(!1)},O))},V=O=>{let U=O,q=0,D=0,z=[],se=[],re=new Set;i.clear(),a=new Map;for(let de of t){i.set(de.name,de);let[me,xe]=de.timing(),Te=me===1/0;if(a.set(de,[de.at(O),de.speed,Te]),!Te){if(de.speed<0)return;if(xe){if(q){let T=(me-D)/xe;if(Math.abs(xe-q)>1||Math.abs(T-Math.round(T))*q>1)return}else q=xe,D=me;se.push(de)}else re.add(me);z.push(de),U=Math.max(U,me)}}s={},r=Xt.filter(de=>{if(i.has(de))return!0;let me=s[de]=zs(n,de);return me!==void 0&&!Dr(de,me)}),R(!1);let fe=!q&&k(z);try{if(U>O){let de;if(fe&&fe[1]>O){let[me,xe,Te]=fe;if(me-O>Cd)return z.forEach(T=>T.sync()),L(x=me-O-Cd),!0;de=typeof Te=="string"?Te:Te?Ng(Te,Id(me,xe)):b(z,me,xe,[]),de&&P(te(z,me,xe,de,{fill:"both",endDelay:U-xe}),me-O,U-me)}de||P(te(z,O,U),0,U-O),re.forEach(me=>me<U-1&&P(E(null,{duration:me-O}),0,me-O))}if(q){let de=D+Math.floor((U-D)/q)*q;P(te(se,de,de+q,void 0,{iterations:1/0,iterationStart:(U-de)/q,fill:"forwards"},U),U-O)}}catch{return}return o.length||R(),!0},K=(O,U)=>{let q,D=0;for(let z of t){let se=a.get(z);if(!se)return!1;let[re,fe,de]=se,me=z.at(O),xe=z.timing()[0]===1/0;if(de){if(xe&&(me===re||!o.length))continue;return!1}let Te=(me-re)/fe,T=xe?0:z.speed/fe;if(q===void 0)q=Te,D=T;else if(Math.abs(Te-q)>1||T!==D)return!1}if(q===void 0)return!0;if(!o.length){if(x===void 0||U&&D)return!1;if(D){let z=(x-q)/D;if(z<1)return!1;L(z)}return!0}for(let{offset:z,end:se,isDone:re}of o){let fe=q-z;if(se<1/0&&(re?fe<se-1:fe<0&&(U||z<=0)||fe>=se))return!1}for(let{animation:z,offset:se,isDone:re}of o){if(re)continue;let fe=q-se;D&&z.updatePlaybackRate&&z.playState==="running"&&Math.abs(Number(z.currentTime)-fe)<20?z.playbackRate!==D&&z.updatePlaybackRate(D):D?(z.playbackRate!==D&&(z.playbackRate=D),z.startTime=O-fe/D):(z.startTime=null,z.currentTime=fe)}return!0},Q=()=>t.size?!1:(h=!0,wa(e)===W&&ks.delete(e),W.isJS||R(),!0),ie=()=>{let O=st.now();if(W.isJS||(W.isFinishing=!0,t.forEach(D=>{let[z,se]=D.timing();D.state==="running"&&D.speed>0&&!se&&z<=O+1&&(D.complete(),s[D.name]=zs(n,D.name),a.has(D)||(l=!0))}),W.isFinishing=!1),c=!1,h||(t.forEach(D=>Dd(D)&&t.delete(D)),Q()))return;for(let D of t)if(!D.canAccelerate)return W.demote(!0);W.isJS&&(W.isJS=!1,l=!0,t.forEach(D=>D.stopJS()));let U=l,q=u;if(l=u=!1,U||!K(O,q)){if(q){if(O-f<Ig)return W.demote();f=O}if(!V(O))return W.demote()}else if(x!==void 0&&!q)return;t.forEach(D=>D.timing()[0]===1/0&&D.sync())},W={tracks:t,isJS:!1,isFinishing:!1,schedule(O,U){h||(l||(l=O),u||(u=!!U),c||(c=!0,kt.isProcessing?Et.render(ie,!1,!0):Og(ie)))},release(O){Dd(O)&&t.delete(O),Q()||W.schedule(!0)},check(){if(!W.isJS){for(let O in s)if(zs(n,O)!==s[O]&&!p(O))return W.schedule(!0,!0)}},demote(O){if(!(W.isJS||h))return t.forEach(U=>{U.isAccelerated()&&U.sync(),O||(U.canAccelerate=!1)}),W.isJS=!0,a=new Map,R(),t.forEach(U=>{var q;return U.state==="running"&&((q=U.js)==null?void 0:q.start())}),!0}};return ks.set(e,W),W}var Ra=class extends ui{constructor(e){var l,c,h,u,f,m,g;super(),this.stop=()=>{var x,p;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(p=this.keyframeResolver)==null||p.cancel()},this.createdAt=st.now();let{keyframes:t,name:i,motionValue:s,element:r}=e,a=e;(l=a.autoplay)!=null||(a.autoplay=!0),(c=a.delay)!=null||(a.delay=0),(h=a.type)!=null||(a.type="keyframes"),(u=a.repeat)!=null||(a.repeat=0),(f=a.repeatDelay)!=null||(a.repeatDelay=0),(m=a.repeatType)!=null||(a.repeatType="loop");let o=(r==null?void 0:r.KeyframeResolver)||Fs;this.keyframeResolver=new o(t,(x,p,d)=>this.onKeyframesResolved(x,p,a,!d),i,s,r),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(e,t,i,s){var p,d,M;this.keyframeResolver=void 0;let{name:r,type:a,velocity:o,delay:l,isHandoff:c,onUpdate:h}=i;this.resolvedAt=st.now();let u=Ed(e,r,a,o);u||((St.instantAnimations||!l)&&(h==null||h(Xn(e,i,t))),e[0]=e[e.length-1],Ir(i),i.repeat=0);let{onComplete:f}=i;i.finalKeyframe=t,i.keyframes=e,i.onComplete=()=>{f==null||f(),this.notifyFinished()};let m=u&&!c&&Ad(i),g=!m&&Ud(i);s&&(m||g||this.resolvedAt!==this.createdAt)&&((p=i.startTime)!=null||(i.startTime=da(this.createdAt,this.resolvedAt)));let x;if(m){i.element=(M=(d=i.motionValue)==null?void 0:d.owner)==null?void 0:M.current;try{x=new Sa(i)}catch{x=new sn(i)}}else g?x=new Aa(i):x=new sn(i);this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this._animation.finished:super.finished}then(e,t){return this.finished.finally(e).then(()=>{})}liveValue(){var e,t;return(t=(e=this._animation)==null?void 0:e.liveValue)==null?void 0:t.call(e)}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),xd()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e,t;(e=this._animation)==null||e.cancel(),(t=this.keyframeResolver)==null||t.cancel()}};var Ca=class{constructor(e){this.stop=()=>{for(let t of this.animations)t.stop()},this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}attachTimeline(e){let t=this.animations.map(i=>i.attachTimeline(e));return()=>{t.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){for(let t of this.animations)t.time=e}get speed(){return this.getAll("speed")}set speed(e){for(let t of this.animations)t.speed=e}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Od(this.animations,"duration")}get iterationDuration(){return Od(this.animations,"iterationDuration")}play(){for(let e of this.animations)e.play()}pause(){for(let e of this.animations)e.pause()}cancel(){for(let e of this.animations)e.cancel()}complete(){for(let e of this.animations)e.complete()}};function Od(n,e){let t=0;for(let i=0;i<n.length;i++){let s=n[i][e];s!==null&&s>t&&(t=s)}return t}var Vs=class extends Ca{then(e,t){return this.finished.finally(e).then(()=>{})}};var Fd=30,Bg=n=>!isNaN(parseFloat(n)),Bd={current:void 0},An=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{let s=st.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.dirty(),this.dependents))for(let r of this.dependents)r.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=st.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Bg(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){var i;return e==="change"?this.onChangeSubscribe(t):((i=this.events)[e]||(i[e]=new Es)).add(t)}onChangeSubscribe(e){let{events:t}=this;return!t.change&&!this.changeSubscriber?this.changeSubscriber=e:(t.change||(t.change=new Es,t.change.add(this.changeSubscriber),this.changeSubscriber=void 0),t.change.add(e)),()=>{var i;this.changeSubscriber===e?this.changeSubscriber=void 0:(i=t.change)==null||i.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){Et.read(()=>{var e;!this.changeSubscriber&&!((e=this.events.change)!=null&&e.getSize())&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){var i;t&&(this.updatedAt=st.now(),this.stop()),this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,(i=this.stopPassiveEffect)==null||i.call(this)}dirty(){var i;let{current:e,changeSubscriber:t}=this;t?t(e):(i=this.events.change)==null||i.notify(e)}addDependent(e){(this.dependents||(this.dependents=new Set)).add(e)}removeDependent(e){var t;(t=this.dependents)==null||t.delete(e)}get(){var t,i,s;(t=Bd.current)==null||t.push(this);let e=(s=(i=this.animation)==null?void 0:i.liveValue)==null?void 0:s.call(i);return e===void 0?this.current:e}getCurrent(){return this.current}getPrevious(){return this.prev}getVelocity(){let e=st.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Fd)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Fd);return pr(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return new Promise(t=>this.run(e,t))}run(e,t){var r;this.stop(),this.hasAnimated=!0;let i=!1,s;s=e(()=>{var a;i=!0,(a=this.events.animationComplete)==null||a.notify(),this.animation===s&&(this.animation=void 0),t==null||t()}),i||(this.animation=s),(r=this.events.animationStart)==null||r.notify()}stop(){var e;this.animation&&(this.animation.stop(),(e=this.events.animationCancel)==null||e.notify()),this.animation=void 0}isAnimating(){return!!this.animation}destroy(){var e,t,i;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),(i=this.stopPassiveEffect)==null||i.call(this)}};function Yn(n,e){return new An(n,e)}function kd(n,e){if(n!=null&&n.inherit&&e){let{inherit:t,...i}=n;return{...e,...i}}return n}function zd(n,e){var i,s;let t=(s=(i=n==null?void 0:n[e])!=null?i:n==null?void 0:n.default)!=null?s:n;return t!==n?kd(t,n):t}var kg={type:"spring",stiffness:500,damping:25,restSpeed:10},zg=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Vg={type:"keyframes",duration:.8},Hg={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Vd=(n,{keyframes:e})=>e.length>2?Vg:qn.has(n)?n.startsWith("scale")?zg(e[1]):kg:Hg;var Gg=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed","out","mixer"]);function Hd(n){for(let e in n)if(!Gg.has(e))return!0;return!1}var Pa=(n,e,t,i={},s,r)=>a=>{let o=zd(i,n)||{},l=o.delay||i.delay||0,{elapsed:c=0}=i;c=c-Lt(l);let h={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:f=>{e.set(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:n,motionValue:e,element:r?void 0:s,hasOnUpdate:!!o.onUpdate};Hd(o)||Object.assign(h,Vd(n,h)),h.duration&&(h.duration=Lt(h.duration)),h.repeatDelay&&(h.repeatDelay=Lt(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let u=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(Ir(h),h.delay===0&&(u=!0)),(St.instantAnimations||St.skipAnimations||s!=null&&s.shouldSkipAnimations||o.skipAnimations)&&(u=!0,Ir(h),h.delay=0),h.allowFlatten=!o.type&&!o.ease,u&&!r&&e.get()!==void 0){let f=Xn(h.keyframes,o);if(f!==void 0){Et.update(()=>{h.onUpdate(f),h.onComplete()});return}}return o.isSync?new sn(h):new Ra(h)};var Wg=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Xg(n){let e=Wg.exec(n);if(!e)return[,];let[,t,i,s]=e;return[`--${t!=null?t:i}`,s]}function qc(n,e,t=1){let[i,s]=Xg(n);if(!i)return;let r=window.getComputedStyle(e).getPropertyValue(i);if(r){let a=r.trim();return fr(a)?parseFloat(a):a}return Rs(s)?qc(s,e,t+1):s}var Ia=new Set(["width","height","top","left","right","bottom",...Xt]);var Hi=n=>!!(n&&n.getVelocity);var Gd={test:n=>n==="auto",parse:n=>n};var Wd=n=>e=>e.test(n);var qg=[En,Ie,ci,pn,Af,wf,Gd],$c=n=>qg.find(Wd(n));function Xd(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||dr(n):!0}var $g=new Set(["auto","none","0"]);function qd(n,e,t){let i=0,s;for(;i<n.length&&!s;){let r=n[i];typeof r=="string"&&!$g.has(r)&&Nf(r)&&(s=n[i]),i++}if(s&&t)for(let r of e)n[r]!==s&&(n[r]=ga(t,s))}var La=class extends Fs{constructor(e,t,i,s,r){super(e,t,i,s,r,!0)}scheduleResolve(){if(this.canReadNow()&&(this.readKeyframes(),!this.needsMeasurement))return this.complete();super.scheduleResolve()}canReadNow(){var r;let{unresolvedKeyframes:e,element:t,motionValue:i}=this,s=(r=e[0])!=null?r:i==null?void 0:i.get();if(!(t!=null&&t.current)||s===void 0)return!1;for(let a=0;a<e.length;a++)if(ra(a?e[a]:s))return!1;return!0}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:i}=this;if(!(t!=null&&t.current))return;super.readKeyframes();for(let h=0;h<e.length;h++){let u=e[h];if(typeof u=="string"&&(u=u.trim(),Rs(u))){let f=qc(u,t.current);f!==void 0&&(e[h]=f),h===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Ia.has(i)||e.length!==2)return;let[s,r]=e;if(typeof s=="number"&&typeof r=="number")return;let a=$c(s),o=$c(r),l=ra(s),c=ra(r);if(l!==c&&_a[i]){this.needsMeasurement=!0;return}if(a!==o)if(Oc(a)&&Oc(o))for(let h=0;h<e.length;h++){let u=e[h];typeof u=="string"&&(e[h]=parseFloat(u))}else _a[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,i=[];for(let s=0;s<e.length;s++)(e[s]===null||Xd(e[s]))&&i.push(s);i.length&&qd(e,i,t)}measure(){let{element:e,name:t}=this;return _a[t](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){var r;let{element:e,unresolvedKeyframes:t,name:i}=this;if(!(e!=null&&e.current))return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),t[0]=this.measuredOrigin;let s=t[t.length-1];s!==void 0&&((r=this.motionValue)==null||r.jump(s,!1))}measureEndState(){var r;let{element:e,unresolvedKeyframes:t}=this;if(!(e!=null&&e.current))return;(r=this.motionValue)==null||r.jump(this.measuredOrigin,!1);let i=t.length-1,s=t[i];t[i]=this.measure(),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),this.resolveNoneKeyframes()}};var Yc=[];function Zc(n){Da(n),Yc.unshift(n)}function Da(n){Gn(Yc,n)}function Kc(n){return Yc.find(e=>e.test(n))}function Na(n,e,t={},i){var c;let s=[],{velocity:r,path:a}=t,o=(c=t.reduceMotion)!=null?c:i==null?void 0:i.shouldReduceMotion;a!=null&&a.animateValues&&i&&(e={...e},a.animateValues(n,e,t,0,s));for(let h in e){if(h==="transition"||h==="transitionEnd")continue;let u=e[h];if(u===void 0)continue;let f=n(h),m=f.get();if(m!==void 0&&!f.isAnimating()&&!Array.isArray(u)&&u===m&&!r){Et.update(()=>f.set(u));continue}f.run(Pa(h,f,u,o&&Ia.has(h)?{type:!1}:t,i)),f.animation&&s.push(f.animation)}let{transitionEnd:l}=e;if(l){let h=()=>Et.update(()=>{for(let u in l)n(u).set(l[u])});s.length?Promise.all(s).then(h):h()}return s}function Or(n,e,t,i,s){let r,a=!1,o=Na(l=>{var h,u;let c=(h=r==null?void 0:r[l])!=null?h:n.get(e,l);if(!c){let f;if(!s){let m=t[l];f=(u=Yg(m))!=null?u:n.read(e,l,m)}c=Yn(f,{owner:s}),a?n(e,{[l]:c}):(r||(r={}))[l]=c}return c},t,i,s);return a=!0,r&&n(e,r),o}function Yg(n){let e=Array.isArray(n)?n[0]:void 0;return e===null?void 0:e}function Jc(n){return Di(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}function Hs(n){return Di(n)&&"ownerSVGElement"in n}var zt={};function jc(n){var e;return(e=zt.current)==null||e.add(n),n}var Qc=n=>zt.current?zt.current.bind(n):n;function Fr(n,e,t){var i,s;if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=e?e.current:((i=zt.current)==null?void 0:i.root)||document,a=(s=t==null?void 0:t[n])!=null?s:r.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n).filter(r=>r!=null)}var Ua=class{constructor(e=Et.render){this.step=e,this.values=new Map,this.pending=[],this.numPending=0,this.flush=()=>{let{pending:t,numPending:i}=this;this.numPending=0;for(let s=0;s<i;s++)t[s]()}}set(e,t,i,s){var l;if((l=this.values.get(e))==null||l.onRemove(),s)for(let c of this.values.values())c.value===s&&(i=c.render);let r=()=>i&&this.schedule(i);t.get()!==void 0&&r();let a=t.on("change",r),o=()=>{var c;a(),i&&!s&&this.cancel(i),((c=this.values.get(e))==null?void 0:c.onRemove)===o&&this.values.delete(e)};return this.values.set(e,{value:t,render:s?void 0:i,onRemove:o}),o}get(e){var t;return(t=this.values.get(e))==null?void 0:t.value}release(){let e=new Map;return this.values.forEach((t,i)=>{e.set(i,t.value),t.onRemove()}),this.transformKeys=this.transformValues=void 0,e}schedule(e){let{pending:t,numPending:i}=this;for(let s=0;s<i;s++)if(t[s]===e)return;i||this.step(this.flush),t[this.numPending++]=e}cancel(e){let{pending:t}=this;for(let i=0;i<this.numPending;i++)if(t[i]===e){t[i]=t[--this.numPending];return}}};function Gs(n,{step:e,...t}={}){let i=new WeakMap;return Object.assign((r,a)=>{var c;let o=(c=i.get(r))!=null?c:new Ua(e);i.set(r,o);let l=[];for(let h in a){let u=a[h],f=n(r,o,h,u);l.push(f)}return()=>{for(let h of l)h()}},t,{get:(r,a)=>{var o;return(o=i.get(r))==null?void 0:o.get(a)},flush:r=>{var a;return(a=i.get(r))==null?void 0:a.flush()},state:r=>i.get(r)})}function $d(n){var r;let e="",{transformKeys:t=[],transformValues:i={}}=n;for(let a=0;a<t.length;a++){let o=t[a],l=i[o].getCurrent();l!==void 0&&(Dr(o,l)||(e+=(e&&" ")+Lr(o,l)))}let s=(r=n.get("pathRotation"))==null?void 0:r.get();return s&&(e+=(e&&" ")+Lr("rotate",s)),e||"none"}var th=new Set(["originX","originY","originZ"]),eh=(n,e)=>{var t;return di((t=n.get(e))==null?void 0:t.get(),gn[e])},Oa=(n,e,t,i)=>{var a,o;let s,r;if(qn.has(t)){if(t!=="pathRotation"){let l=(a=e.transformKeys)!=null?a:e.transformKeys=[];((o=e.transformValues)!=null?o:e.transformValues={})[t]=i,l.includes(t)||(l.push(t),l.sort((c,h)=>Xt.indexOf(c)-Xt.indexOf(h)))}e.get("transform")||(!Jc(n)&&!e.get("transformBox")&&Oa(n,e,"transformBox",new An("fill-box")),e.set("transform",new An("none"),()=>{var l;(l=ks.get(n))==null||l.check(),n.style.transform=$d(e)})),r=e.get("transform")}else th.has(t)?(e.get("transformOrigin")||e.set("transformOrigin",new An(""),()=>{var u,f,m;let l=(u=eh(e,"originX"))!=null?u:"50%",c=(f=eh(e,"originY"))!=null?f:"50%",h=(m=eh(e,"originZ"))!=null?m:0;n.style.transformOrigin=`${l} ${c} ${h}`}),r=e.get("transformOrigin")):fi(t)?s=()=>{n.style.setProperty(t,i.getCurrent())}:s=()=>{n.style[t]=di(i.getCurrent(),gn[t])};return e.set(t,i,s,r)},Zg=n=>Jc(n)||Hs(n),nh=(n,e)=>{if(qn.has(e))return cd(n,e);let t=getComputedStyle(n),i=fi(e)?t.getPropertyValue(e):t[e];return typeof i=="string"&&i.trim()||0},Yd=Gs(Oa,{test:Zg,read:nh});function Br(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Zd=["transform","opacity","clipPath","filter","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Kg(n,e){if(!(e in n))return!1;let t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(n),e)||Object.getOwnPropertyDescriptor(n,e);return t&&typeof t.set=="function"}var ih=(n,e,t,i,s=t)=>{let r=Kg(n,s);!r&&(s.startsWith("data")||s.startsWith("aria"))&&(s=Br(s));let a=gn[t]||gn[s],o=r?()=>{n[s]=di(i.get(),gn[t])}:()=>{let l=di(i.get(),a);l==null?n.removeAttribute(s):n.setAttribute(s,String(l))};return e.set(t,i,o)};function Jg(n,e,t,i){return Et.render(()=>n.setAttribute("pathLength","1")),t==="pathOffset"?e.set(t,i,()=>{let s=i.get();n.setAttribute("stroke-dashoffset",`${-s}`)}):(e.get("stroke-dasharray")||e.set("stroke-dasharray",new An("1 1"),()=>{var a,o,l;let s=(o=(a=e.get("pathLength"))==null?void 0:a.get())!=null?o:1,r=(l=e.get("pathSpacing"))==null?void 0:l.get();n.setAttribute("stroke-dasharray",`${s} ${r!=null?r:1-Number(s)}`)}),e.set(t,i,void 0,e.get("stroke-dasharray")))}var jg=(n,e,t,i)=>t.startsWith("path")&&!qn.has(t)?Jg(n,e,t,i):t.startsWith("attr")?ih(n,e,t,i,Jd(t)):t==="d"?e.set(t,i,()=>{var a;let r=(a=i.get())==null?void 0:a.replace(/path\(|["')]/g,"");r===void 0?n.removeAttribute(t):n.setAttribute(t,r)}):(qn.has(t)||th.has(t)||fi(t)||t in n.style?Oa:ih)(n,e,t,i),Qg=(n,e)=>{var t,i,s;return qn.has(e)?((t=gn[e])==null?void 0:t.default)||0:fi(e)||Zd.includes(e)?nh(n,e)||n.getAttribute(Br(e))||0:(e=Jd(e),(s=(i=n.getAttribute(Br(e)))!=null?i:n.getAttribute(e))!=null?s:void 0)},Kd=Gs(jg,{test:Hs,read:Qg});function Jd(n){return n.replace(/^attr([A-Z])/,(e,t)=>t.toLowerCase())}function jd({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function Qd(n,e){if(!e)return n;let t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function e1(n,e){return jd(Qd(n.getBoundingClientRect(),e))}var e5={},t5=n=>Hs(n)?Kd:Yd,sh=class{constructor(e,t){this.effect=e,this.current=t,this.KeyframeResolver=La}getValue(e){return this.effect.get(this.current,e)}readValue(e,t){return this.effect.read(this.current,e,t)}render(){this.effect.flush(this.current)}measureViewportBox(){return e1(this.current)}getProps(){return e5}};function rh(n,e,t,i){var r;if((r=zt.current)==null||r.track(n),i)return Na(a=>i.getValue(a,null),e,t,i);let s=t5(n);return Or(s,n,e,t,new sh(s,n))}var oh=Gs((n,e,t,i)=>e.set(t,i,()=>{n[t]=i.get()}),{test:n=>Di(n),read:(n,e)=>{let t=n[e];return typeof t=="string"||typeof t=="number"?t:void 0}});function kr(n,e,t){let i=Hi(n)?n:Yn(n);return i.run(Pa("",i,e,t)),i.animation}var ah=new WeakMap;function zr(n){return typeof n=="object"&&!Array.isArray(n)}function Fa(n,e,t,i){return n==null?[]:typeof n=="string"&&zr(e)?Fr(n,t,i):n instanceof NodeList?Array.from(n):Array.isArray(n)?n.filter(s=>s!=null):[n]}function t1(n,e,t){return n*(e+1)+t*e}function lh(n,e){if(e.has(n))return e.get(n);let[,t,i]=n.match(/^(.+?)([+-][\d.]+)$/)||[];return e.has(t)?Math.max(0,e.get(t)+parseFloat(i)):void 0}function n1(n,e,t,i){var s;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,n+parseFloat(e)):e==="<"?t:e.startsWith("<")?Math.max(0,t+parseFloat(e.slice(1))):(s=lh(e,i))!=null?s:n}function n5(n,e,t){for(let i=0;i<n.length;i++){let s=n[i];s.at>e&&s.at<t&&(Gn(n,s),i--)}}function i1(n,e,t,i,s,r){n5(n,s,r);for(let a=0;a<e.length;a++)n.push({value:e[a],at:Wt(s,r,i[a]),easing:yr(t,a)})}function s1(n,e,t=0){let i=e+1+e*t;for(let s=0;s<n.length;s++)n[s]=n[s]/i}function r1(n,e){return n.at===e.at?n.value===null?1:e.value===null?-1:0:n.at-e.at}var i5="easeInOut",s5=20;function l1(n,{defaultTransition:e={},...t}={},i,s,r){let a=e.duration||.3,o=new Map,l=new Map,c={},h=new Map,u=0,f=0,m=0,g=(d,M)=>{let _=M,C=I=>typeof I=="number"?M+I:n1(f,I,u,h);for(let I=0;I<d.length;I++){let R=d[I];if(typeof R=="string"){h.set(R,f);continue}else if(!Array.isArray(R)){let k=R.at===void 0?f:C(R.at);"sequence"in R?(u=f=k,f=g(R.sequence,k),u=k,_=Math.max(_,f)):h.set(R.name,k);continue}let[E,P,v={}]=R;v.at!==void 0&&(f=C(v.at));let b=0,G=(k,te,L,V=0,K=0)=>{let Q=r5(k),{delay:ie=0,times:W=wn(Q),type:O=e.type||"keyframes",repeat:U,repeatType:q,repeatDelay:D=0,...z}=te,{ease:se=e.ease||"easeOut",duration:re}=te;L.mixer||(L.mixer=te.mixer);let fe=typeof ie=="function"?ie(V,K):ie,de=Q.length,me=Vi(O)?O:s==null?void 0:s[O||"keyframes"];if(de<=2&&me){let le=100;if(de===2&&l5(Q)){let ae=Q[1]-Q[0];le=Math.abs(ae)}let ce={...e,...z};re!==void 0&&(ce.duration=Lt(re));let be=Tr(ce,le,me);se=be.ease,re=be.duration}re!=null||(re=a);let xe=f+fe;W.length===1&&W[0]===0&&(W[1]=1);let Te=W.length-Q.length;if(Te>0&&wr(W,Te),Q.length===1&&Q.unshift(null),U&&U<s5){let le=re>0?D/re:0;re=t1(re,U,D);let ce=[...Q],be=[...W];se=Array.isArray(se)?[...se]:[se];let ae=[...se],Ne=q==="reverse"||q==="mirror",Ee=ce,w=ae;Ne&&(Ee=[...ce].reverse(),q==="reverse"&&(w=[...ae].reverse().map(y=>typeof y=="function"?Ui(y):y)));for(let y=0;y<U;y++){let X=Ne&&y%2===0,he=X?Ee:ce,oe=X?w:ae,pe=(y+1)*(1+le);le>0&&(Q.push(Q[Q.length-1]),W.push(pe),se.push("linear")),Q.push(...he);for(let Ae=0;Ae<he.length;Ae++)W.push(be[Ae]+pe),se.push(Ae===0?"linear":yr(oe,Ae-1))}s1(W,U,le)}let T=xe+re;i1(L,Q,se,W,xe,T),b=Math.max(fe+re,b),m=Math.max(T,m)};if(Hi(E)){let k=o1(E,l);G(P,v,a1("default",k))}else{let k=Fa(E,P,i,c),te=k.length;for(let L=0;L<te;L++){P=P,v=v;let V=k[L],K=o1(V,l);for(let Q in P)G(P[Q],o5(v,Q),a1(Q,K),L,te)}}u=f,f+=b,_=Math.max(_,f)}return _};g(n,0),r&&(r.duration=m,r.labels=h);let{type:x,...p}=e;return l.forEach((d,M)=>{for(let _ in d){let C=d[_];C.sort(r1);let I=[],R=[],E=[];for(let v=0;v<C.length;v++){let{at:b,value:G,easing:k}=C[v];I.push(G),R.push(Sn(0,m,b)),E.push(k||"easeOut")}R[0]!==0&&(R.unshift(0),I.unshift(I[0]),E.unshift(i5)),R[R.length-1]!==1&&(R.push(1),I.push(null)),o.has(M)||o.set(M,{keyframes:{},transition:{}});let P=o.get(M);P.keyframes[_]=I,P.transition[_]={...p,duration:m,ease:E,times:R,mixer:C.mixer||e.mixer,...t}}}),o}function o1(n,e){return!e.has(n)&&e.set(n,{}),e.get(n)}function a1(n,e){return e[n]||(e[n]=[]),e[n]}function r5(n){return Array.isArray(n)?n:[n]}function o5(n,e){return n&&n[e]?{...n,...n[e]}:{...n}}var a5=n=>typeof n=="number",l5=n=>n.every(a5);function c5(n,e){return Hi(n)||typeof n=="number"||typeof n=="string"&&!zr(e)}function Ba(n,e,t,i){var r;let s=[];if(c5(n,e))s.push(kr(n,zr(e)&&e.default||e,t&&(t.default||t)));else{if(n==null)return s;let a=Fa(n,e,i),o=a.length;for(let l=0;l<o;l++){let c=a[l],h={...t};"delay"in h&&typeof h.delay=="function"&&(h.delay=h.delay(l,o)),c instanceof Element?s.push(...rh(c,e,h,ah.get(c))):s.push(...Or((r=Kc(c))!=null?r:oh,c,e,h))}}return s}function c1(n,e,t,i){var l,c;let s=[],r=n.map(h=>{if(Array.isArray(h)&&typeof h[0]=="function"){let u=h[0],f=Yn(0);return f.on("change",u),h.length===1?[f,[0,1]]:h.length===2?[f,[0,1],h[1]]:[f,h[1],h[2]]}return h}),a=l1(r,e,t,{spring:Bi},i),o=(c=e==null?void 0:e.reduceMotion)!=null?c:(l=e==null?void 0:e.defaultTransition)==null?void 0:l.reduceMotion;return a.forEach(({keyframes:h,transition:u},f)=>{s.push(...Ba(f,h,{...u,reduceMotion:o}))}),s}var h1=0;function Ws({repeat:n=0,repeatDelay:e=0,repeatType:t="loop",delay:i=0},s,r,a){let o=s+e,l=a===void 0;if(l){let c=Math.max(0,r-i);a=o&&c>0?Math.min(n,Math.ceil(c/o-1e-9)-1):0,r=Math.min(c-a*o,s)}return t!=="loop"&&a%2&&(r=s-r),[a,l?r:i+a*o+r]}function h5(n,e){let t=[...n],i=typeof t[0]=="function"?Math.max(1,t.length-1):2;return t[i]={...t[i],at:e},t}var u1=(n,e)=>e===void 0?n:{name:n,at:e};function f1(n){n.pause(),n.time=0,n.stop()}var Vr=class n{constructor(e=[],t={},i){this.options=t,this.entries=[],this.repeatIndex=0,this.prevTime=0,this.markers=[],this.labels=new Map,this.totalDuration=0,this.isDirty=!1,this.isDone=!1,this.isRebuilding=!1,this.playbackSpeed=1,this.motionScope=zt.current,this.isKilled=!1,this.isWrapped=!1,this.stop=()=>{var s;this.flush(),(s=this.group)==null||s.stop()},this.isPaused=t.autoplay===!1,this.newFinished(),e.forEach(s=>this.add(s)),i?(this.isDirty=!1,this.isWrapped=!0,this.group=new Vs(i),this.watch()):(this.invalidate(),this.flush())}add(e,t){return e instanceof n&&e.adopt(this),this.push({item:e,at:t})}call(e,t){return this.push({item:e,at:t,marker:{name:"_m"+h1++,time:0,callback:e}})}addPause(e,t){return this.push({item:t||{},at:e,marker:{name:"_m"+h1++,time:0,callback:t,pause:!0}})}move(e,t){return this.entries.forEach(i=>{i.item===e&&(i.at=t)}),this.invalidate()}remove(e){return e instanceof n&&(e.parent=void 0),this.entries=this.entries.filter(t=>t.item!==e),this.invalidate()}clear(){return this.entries=[],this.invalidate()}getLabelTime(e){return this.flush(),this.labels.get(e)}seek(e){return this.time=this.resolve(e),this}playTo(e){let t=this.resolve(e),i=this.iterationDuration,s=this.time,[r]=Ws(this.options,i,s),a=Ws(this.options,i,t,r)[1],o=Math.abs(this.speed);return this.speed=a<s?-o:o,this.stopAt=t,this.clock||this.invalidate(),this.play(),this}reverse(){return this.speed=-this.speed,this.play(),this}get progress(){return this.duration?this.time/this.duration:0}set progress(e){this.time=e*this.duration}get time(){var e,t;return(t=(e=this.active())==null?void 0:e.time)!=null?t:0}set time(e){this.flush(),this.prevTime=e,this.group&&(this.group.time=e),this.repeatIndex=this.currentRepeat()}get speed(){return this.playbackSpeed}set speed(e){this.playbackSpeed=e,this.group&&(this.group.speed=e)}get duration(){return this.flush(),this.isWrapped?this.group.duration:this.totalDuration}get iterationDuration(){return this.flush(),this.isWrapped?this.group.iterationDuration:this.totalDuration}get state(){var e,t;return(t=(e=this.active())==null?void 0:e.state)!=null?t:"idle"}get startTime(){var e,t;return(t=(e=this.active())==null?void 0:e.startTime)!=null?t:null}play(){var e;this.flush(),this.isPaused=!1,(e=this.group)==null||e.play(),this.isDone&&(this.newFinished(),this.watch())}pause(){var e;this.flush(),this.isPaused=!0,(e=this.group)==null||e.pause()}cancel(){var e;this.flush(),(e=this.group)==null||e.cancel()}complete(){var e;this.flush(),(e=this.group)==null||e.complete()}attachTimeline(e){var t;return this.flush(),this.scrollTimeline=e,this.detachScroll=(t=this.group)==null?void 0:t.attachTimeline(e),()=>{var i;this.scrollTimeline=void 0,(i=this.detachScroll)==null||i.call(this)}}then(e,t){return this.finished.then(e,t)}active(){var e;return this.flush(),(e=this.group)!=null&&e.animations.length?this.group:void 0}push(e){return this.entries.push(e),this.invalidate()}invalidate(){return this.parent?this.parent.invalidate():this.isDirty||(this.isDirty=!0,queueMicrotask(()=>this.flush())),this}flush(){this.isDirty&&!this.parent&&!this.isKilled&&this.build()}adopt(e){this.group&&(f1(this.group),this.group=void 0),this.isDirty=!1,this.parent=e}build(){var b,G;let e=this.isWrapped?this.group.iterationDuration:this.totalDuration;this.isDirty=!1,this.isWrapped=!1;let t=this.group,i=0;t&&(this.isRebuilding=!0,this.scrollTimeline?((b=this.detachScroll)==null||b.call(this),t.cancel()):(i=t.animations.length?t.time:0,f1(t)),this.isRebuilding=!1);let{defaultTransition:s,onComplete:r,onUpdate:a,onRepeat:o,onReverseComplete:l,autoplay:c,scope:h,...u}=this.options,f={};(h==null?void 0:h.reduceMotion)!==void 0&&(f.reduceMotion=h.reduceMotion),(h==null?void 0:h.skipAnimations)!==void 0&&(f.skipAnimations=h.skipAnimations),Object.assign(f,u);let m=new Map,g={},x=zt.current;zt.current=this.motionScope;let p;try{p=c1(this.toSequence(m),{defaultTransition:s,...f},h,g)}finally{zt.current=x}let d=g.labels,M=(G=f.duration)!=null?G:g.duration,_=g.duration?M/g.duration:1;if(d.forEach((k,te)=>d.set(te,k*_)),this.markers=[],m.forEach((k,te)=>{k.time=d.get(te),d.delete(te),M=Math.max(M,k.time),this.markers.push(k)}),this.markers.sort((k,te)=>k.time-te.time),this.labels=d,this.totalDuration=M,this.clock=this.clockAnimation=void 0,this.markers.length||this.stopAt!==void 0||a||o){let k=this.clock=Yn(0);k.on("change",te=>k===this.clock&&this.onClock(te)),p.unshift(this.clockAnimation=kr(k,[0,M],{...f,duration:M,ease:"linear"}))}let C=this.group=new Vs(p),{delay:I=0,repeat:R=0,repeatDelay:E=0}=this.options,[P,v]=Ws(this.options,e,i);i>I&&(i=Ws(this.options,M,Math.min(v,M),P)[1]),this.isDone&&i<I+(R+1)*(M+E)-E&&this.newFinished(),this.scrollTimeline?this.detachScroll=C.attachTimeline(this.scrollTimeline):(C.speed=this.playbackSpeed,this.isPaused&&C.pause(),i&&(C.time=i)),this.repeatIndex=this.currentRepeat(),this.prevTime=i||-1,this.watch()}toSequence(e){return this.entries.map(({item:t,at:i,marker:s})=>s?(e.set(s.name,s),u1(s.name,i)):t instanceof n?{sequence:t.toSequence(e),at:i}:typeof t=="string"?u1(t,i):i===void 0?t:Array.isArray(t)?h5(t,i):{...t,at:i})}resolve(e){var t;return this.flush(),typeof e=="number"?e:(t=lh(e,this.labels))!=null?t:this.time}currentRepeat(){var e,t;return Ws(this.options,this.totalDuration,(t=(e=this.clockAnimation)==null?void 0:e.time)!=null?t:0)[0]}onClock(e){let t=this.prevTime;if(this.prevTime=e,this.isRebuilding)return;let{onUpdate:i,onRepeat:s,repeatType:r="loop"}=this.options;i==null||i(e);let a=this.currentRepeat(),o=a>this.repeatIndex?1:-1;for(;a!==this.repeatIndex;){let l=this.speed>0==(r==="loop"||!(this.repeatIndex%2)),c=l?this.totalDuration:0;if(this.cross(t,c))return;this.repeatIndex+=o,s==null||s(),t=r==="loop"?l?-1:1/0:c}this.cross(t,e)}cross(e,t){var a;if(e===t)return;let i=t>e,s=o=>i?o>e&&o<=t:o<e&&o>=t,r=i?this.markers:[...this.markers].reverse();for(let o of r)if(s(o.time)&&((a=o.callback)==null||a.call(o,i?1:-1),o.pause))return this.pauseAt(o.time);if(this.stopAt!==void 0&&s(this.stopAt))return this.pauseAt(this.stopAt),this.stopAt=void 0,!0}pauseAt(e){return this.pause(),this.time=Ws(this.options,this.totalDuration,e,this.repeatIndex)[1],!0}watch(){let e=this.group;e.finished.then(()=>{if(e!==this.group||this.isDone)return;this.isDone=!0;let{onComplete:t,onReverseComplete:i}=this.options,s=this.speed<0&&i||t,r=this.resolveFinished;s==null||s(),r()})}newFinished(){var i;this.isDone=!1,this.finished=new Promise(s=>{this.resolveFinished=s});let{scope:e}=this.options,t=(i=this.motionScope)==null?void 0:i.add(()=>{this.isKilled=!0,this.stop()});e==null||e.animations.push(this),this.finished.then(()=>{t==null||t(),e&&Gn(e.animations,this)})}};function u5(n){return Array.isArray(n)&&n.some(e=>Array.isArray(e)||(e==null?void 0:e.sequence))}function d1(n={}){let{scope:e,reduceMotion:t,skipAnimations:i}=n;function s(r,a,o){var u,f,m,g;let l=(u=zt.current)==null?void 0:u.transition,c={};t!==void 0&&(c.reduceMotion=t),i!==void 0&&(c.skipAnimations=i);let h;if(u5(r)){let x={...c,...a,scope:e};l&&(x.defaultTransition={...l,...x.defaultTransition}),x.reduceMotion=(g=(m=a==null?void 0:a.reduceMotion)!=null?m:(f=x.defaultTransition)==null?void 0:f.reduceMotion)!=null?g:t,h=new Vr(r,x)}else{let{onComplete:x,...p}=o||{},d={...c,...l,...p},{onUpdate:M}=p,_=typeof r=="number"||typeof r=="string"&&(typeof a=="string"||Array.isArray(a))?[M||(()=>{}),Array.isArray(a)?a:[r,a],{...d,onUpdate:void 0}]:[r,a,d];h=new Vr([_],{...c,onComplete:x,scope:e},Ba(r,a,d,e))}return h}return s}var ch=Object.assign(d1(),{addEffect:Zc,removeEffect:Da});var f5={some:0,all:1};function hh(n,e,{root:t,margin:i,amount:s="some"}={}){let r=Fr(n);e=Qc(e);let a=new WeakMap,o=c=>{c.forEach(h=>{let u=a.get(h.target);if(h.isIntersecting!==!!u)if(h.isIntersecting){let f=e(h.target,h);typeof f=="function"?a.set(h.target,f):l.unobserve(h.target)}else typeof u=="function"&&(u(h),a.delete(h.target))})},l=new IntersectionObserver(o,{root:t,rootMargin:i,threshold:typeof s=="number"?s:f5[s]});return r.forEach(c=>l.observe(c)),jc(()=>l.disconnect())}var d5=[.23,1,.32,1];function p1(n,e){let t=ye("deck"),i=n.metrics,s=window.RQ_TK.sum,r=P=>{let v=ye(P);v&&v.scrollIntoView({behavior:Ft?"auto":"smooth",block:"start"})};document.addEventListener("click",P=>{let v=P.target.closest("[data-go]");v&&(P.preventDefault(),r(v.dataset.go))});let a=()=>{r("live-map"),setTimeout(()=>e.map&&e.map.startStory(),Ft?0:700)};ye("playTop").onclick=a,ye("playHero").onclick=a;let o=ye("bar"),l=()=>o.classList.toggle("solid",t.scrollTop>30);t.addEventListener("scroll",l,{passive:!0}),l();let c=[...document.querySelectorAll(".nav a")],h=new IntersectionObserver(P=>P.forEach(v=>{v.isIntersecting&&c.forEach(b=>b.classList.toggle("on",b.dataset.go===v.target.id))}),{root:t,threshold:.45});document.querySelectorAll("main > section").forEach(P=>h.observe(P));let u=P=>Ce(P*100)+" %",f=i.pix_hit/i.pix_rand;ye("proofSub").textContent=`Copernicus EMS analysts mapped ${Ce(i.n_ems)} damaged buildings in central Pereira from optical images (activation EMSR916). We compared our radar-based ranking with their map.`,ye("stats").innerHTML=`
    <div class="stat hot reveal"><div class="v">${u(i.top10_ems)}</div><p>of the buildings mapped as damaged fall inside the <b>top-10 radar squares</b>, which hold only ${u(i.top10_built)} of the city's buildings.</p>
      <div class="cmp"><span><i style="width:${i.top10_ems*100}%"></i></span><em>${u(i.top10_ems)} of the damage</em><span class="g"><i style="width:${i.top10_built*100}%"></i></span><em>${u(i.top10_built)} of all buildings</em></div></div>
    <div class="stat reveal"><div class="v">\u03C1 = ${Ce(i.rho_comuna,2)} <small>n = ${i.n_comuna}</small></div><p><b>Spearman rank correlation</b> between the radar ranking and the official damage ranking, on a sample of ${i.n_comuna} comunas with \u2265 50 % EMS coverage (p = ${Ce(i.p_comuna,2)}). A small sample, so treat it as a first check.</p></div>
    <div class="stat reveal"><div class="v">${Ce(f,1)}\xD7</div><p>Under a building mapped as damaged, the radar change flag appears ${Ce(f,1)} times more often than under a random building (${u(i.pix_hit)} vs ${u(i.pix_rand)}).</p></div>
    <div class="stat reveal"><div class="v">${Ce(i.n_ems)}</div><p>buildings in the official map: ${i.n_destroyed} destroyed, ${i.n_damaged} damaged, ${i.n_possible} possibly damaged.</p></div>`;let m=n.validation,g=460,x=340,p=58,d=54,M=18,_=22,C=m.length,I=P=>p+(P-1)/(C-1)*(g-p-_),R=P=>M+(P-1)/(C-1)*(x-M-d),E=[...Array(C).keys()].map(P=>P+1);ye("scatterBox").innerHTML=`<figcaption><b>Radar rank vs official rank \xB7 Spearman \u03C1 = ${Ce(i.rho_comuna,2)}, n = ${i.n_comuna} comunas</b><span>One dot per comuna with \u2265 50 % EMS coverage. On the dashed line both rankings agree exactly.</span></figcaption>
    <svg viewBox="0 0 ${g} ${x}" role="img" aria-label="Radar rank versus Copernicus EMS rank for ${C} comunas">
      ${E.map(P=>`<line x1="${I(P)}" y1="${M}" x2="${I(P)}" y2="${x-d}" class="gl"/><line x1="${p}" y1="${R(P)}" x2="${g-_}" y2="${R(P)}" class="gl"/>
        <text x="${I(P)}" y="${x-d+20}" text-anchor="middle" class="tk">${P}</text><text x="${p-12}" y="${R(P)+5}" text-anchor="end" class="tk">${P}</text>`).join("")}
      <line x1="${I(1)}" y1="${R(1)}" x2="${I(C)}" y2="${R(C)}" class="diag"/>
      <text x="${(g+p-_)/2}" y="${x-8}" text-anchor="middle" class="ax">Radar rank (NISAR)</text>
      <text x="16" y="${(x-d+M)/2}" text-anchor="middle" class="ax" transform="rotate(-90 16 ${(x-d+M)/2})">Official rank (EMS)</text>
      ${m.map(P=>{let v=P.radar_sub>C-2;return`<g><circle cx="${I(P.radar_sub)}" cy="${R(P.ems_sub)}" r="8" class="pt"/><text x="${I(P.radar_sub)+(v?-14:14)}" y="${R(P.ems_sub)+5}" text-anchor="${v?"end":"start"}" class="nm">${Ot(P.name)}</text></g>`}).join("")}
    </svg>`,ye("expert").innerHTML=`
    <p><b>Radar.</b> NISAR L-band coherence. Normal = mean of 12-day pairs before the quake. Change = normal \u2212 pair across the quake, minus the city-wide drop. Buildings only (OSM), two orbits averaged, threshold 0.15 \u2248 2\xD7 normal spread.</p>
    <p><b>Priority.</b> Share of buildings with change \xD7 WorldPop population, per 500 m square and per comuna.</p>
    <p><b>Check vs Copernicus EMS EMSR916.</b> Top-10 squares = ${u(i.top10_built)} of built-up area and ${u(i.top10_ems)} of damaged buildings. Radar change under a damaged building ${u(i.pix_hit)} vs ${u(i.pix_rand)} for random buildings (\xD7${Ce(f,1)}). Spearman per square ${Ce(i.rho_cells,2)}. Stable for thresholds 0.10\u20130.20.</p>`,ye("rcPop").textContent=Ce(i.pop_tashkent/1e6,2)+"M",ye("rcPer").innerHTML=`Today about ${Ce(Math.round(i.pop_pereira/1e3))},000 people live in Pereira's 19 comunas (WorldPop 2020).<sup><a href="#src8">8</a></sup>`,ye("rcWatch").innerHTML=`Over Tashkent, ${Ce(s.watch_pct)} % of buildings already give a signal stable enough to watch.<sup><a href="#src8">8</a></sup>`,!Ft&&(document.documentElement.classList.add("anim"),document.querySelectorAll(".reveal").forEach(P=>{let v=[...P.parentElement.children].filter(G=>G.classList.contains("reveal")),b=Math.min(v.indexOf(P),5)*.05;hh(P,()=>{ch(P,{opacity:[0,1],transform:["translateY(10px)","translateY(0px)"]},{duration:.45,delay:b,ease:d5})},{root:t,amount:.05})}),requestAnimationFrame(()=>document.querySelector(".hero").classList.add("ready")))}var ka=window.RQ,m1={},za=(n,e)=>{try{return e()}catch(t){return console.error("[RapidQuake] "+n+" failed",t),null}};m1.map=za("map",()=>Sf(ka));za("ui",()=>p1(ka,m1));za("globe",()=>vf(ye("globe"),document.querySelector(".hero"),ka,{p:ye("glP"),t:ye("glT")}));za("skyline",()=>Mf(ye("skyC"),ye("sky"),ka,{mode:ye("skyMode"),tip:ye("skyTip"),note:ye("skyNote"),lbl:[ye("skyL0"),ye("skyL1"),ye("skyL2")]}));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
