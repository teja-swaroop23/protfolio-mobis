/* Renderer, studio environment, garage, matte floor, lights */
// three
var cv=document.getElementById("cv");if(!window.THREE){throw new Error("Three.js failed to load")}
var R=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,2));R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=1.1;R.outputEncoding=THREE.sRGBEncoding;
var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(30,1,.1,60);C.position.set(0,1,10);C.lookAt(0,0,0);
var es=new THREE.Scene();es.add(new THREE.Mesh(new THREE.SphereGeometry(20,32,16),new THREE.MeshBasicMaterial({side:THREE.BackSide,color:0x0b1317})));
function sb(w,h,x,y,z,c,k){var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(k),side:THREE.DoubleSide}));m.position.set(x,y,z);m.lookAt(0,0,0);es.add(m)}
sb(18,2.5,0,9,0,0xffffff,5);sb(2,7,-12,3,3,0xbffcf0,4);sb(2,7,12,3,-3,0xffffff,3);sb(12,1.2,0,2,-12,0x5eead4,3);sb(14,5,0,-1,14,0x4a6068,1.2);
var pm=new THREE.PMREMGenerator(R);S.environment=pm.fromScene(es,.02).texture;
S.fog=new THREE.FogExp2(0x06090d,.028);
var red=new THREE.MeshStandardMaterial({color:0x200000,emissive:0xff2a3a,emissiveIntensity:1}),strips=[],mb=innerWidth<820;
var fc=document.createElement("canvas");fc.width=fc.height=256;var fx=fc.getContext("2d"),fg=fx.createRadialGradient(128,128,8,128,128,128);fg.addColorStop(0,"rgba(22,30,36,1)");fg.addColorStop(.35,"rgba(14,19,24,.92)");fg.addColorStop(.7,"rgba(8,11,15,.5)");fg.addColorStop(1,"rgba(6,9,13,0)");fx.fillStyle=fg;fx.fillRect(0,0,256,256);
var fm=new THREE.Mesh(new THREE.PlaneGeometry(90,40),new THREE.MeshBasicMaterial({map:(function(){var t=new THREE.CanvasTexture(fc);t.encoding=THREE.sRGBEncoding;return t})(),transparent:true,depthWrite:false,fog:false}));fm.rotation.x=-Math.PI/2;fm.renderOrder=-2;S.add(fm);
for(var i=0;i<16;i++){[-1,1].forEach(function(sd){var m=new THREE.Mesh(new THREE.BoxGeometry(2.4,.08,.18),new THREE.MeshBasicMaterial({color:new THREE.Color(0xe6fffb).multiplyScalar(2.2)}));m.position.set(-40+i*5,6.5,sd*4.5);S.add(m);strips.push(m)});var d2=new THREE.Mesh(new THREE.BoxGeometry(1.4,.012,.07),red);d2.position.set(-37.5+i*5,.012,3.4*(i%2?1:-1));S.add(d2);strips.push(d2)}
var pl=new THREE.PointLight(0xff3a4a,1.2,14);pl.position.set(-3,.8,3.5);S.add(pl);var pl2=new THREE.PointLight(0x5eead4,1.4,16);pl2.position.set(4,2.5,-4);S.add(pl2);
var dl=new THREE.DirectionalLight(0xffffff,.7);dl.position.set(3,6,5);S.add(dl);
function paint(c){return new THREE.MeshPhysicalMaterial({color:c,metalness:.85,roughness:.34,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.3})}
function ch(p,n){while(n--){var o=[];for(var i=0;i<p.length;i++){var a=p[i],b=p[(i+1)%p.length];o.push([.75*a[0]+.25*b[0],.75*a[1]+.25*b[1]],[.25*a[0]+.75*b[0],.25*a[1]+.75*b[1]])}p=o}return p}
function ex(pts,d,bv,n){var q=ch(pts,n),s=new THREE.Shape();q.forEach(function(p,i){i?s.lineTo(p[0],p[1]):s.moveTo(p[0],p[1])});var g=new THREE.ExtrudeGeometry(s,{depth:d,bevelEnabled:true,bevelThickness:bv,bevelSize:bv,bevelSegments:6,steps:1});g.translate(0,0,-d/2);return g}
