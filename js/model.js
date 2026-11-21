/* Loads models/hyundai.glb (if present), fits it to the garage and replaces the procedural cars. */
(function(){var M=CFG.model;if(!M)return;
function fail(e){console.warn("Real car model not loaded, using procedural car.",e)}
function done(gltf){
var G=new THREE.Group(),W=new THREE.Group(),sc=gltf.scene;W.add(sc);G.add(W);
var b=new THREE.Box3().setFromObject(sc),sz=b.getSize(new THREE.Vector3());
sc.rotation.y=(sz.z>sz.x?Math.PI/2:0)+(M.rotateY||0)*Math.PI/180;W.updateMatrixWorld(true);
var re=new RegExp(M.wheelRegex||"wheel|tire|tyre","i"),ws=[],wl=[];
sc.traverse(function(o){if(re.test(o.name)){var p=o.parent,an=false;while(p&&p!==sc){if(re.test(p.name)){an=true;break}p=p.parent}if(!an)ws.push(o)}});
if(ws.length>=2&&ws.length<=8)ws.forEach(function(o){var bb=new THREE.Box3().setFromObject(o),c=bb.getCenter(new THREE.Vector3()),z=bb.getSize(new THREE.Vector3()),pv=new THREE.Group();pv.position.copy(c);W.add(pv);W.updateMatrixWorld(true);pv.attach(o);pv.userData.ax=z.x<z.y&&z.x<z.z?"x":z.y<z.z?"y":"z";wl.push(pv)});
sc.traverse(function(o){if(!o.isMesh)return;var arr=Array.isArray(o.material);(arr?o.material:[o.material]).forEach(function(m,k){if(!m)return;m.envMapIntensity=1.3;
if(m.isMeshStandardMaterial&&/paint|body|carpaint/i.test(m.name)){var q=m;if(!m.isMeshPhysicalMaterial){q=new THREE.MeshPhysicalMaterial();THREE.MeshStandardMaterial.prototype.copy.call(q,m)}if(M.matte){q.clearcoat=0;q.roughness=.85;q.metalness=Math.min(q.metalness,.12);q.roughnessMap=null;q.metalnessMap=null;q.envMapIntensity=.6}else{q.clearcoat=1;q.clearcoatRoughness=.06}if(M.paintColor)q.color.set(M.paintColor);if(arr)o.material[k]=q;else o.material=q}
if(m.transmission){m.transmission=0}if(/glass|window/i.test(m.name)){m.transparent=true;m.opacity=Math.min(m.opacity,.35);m.depthWrite=false}})});
W.updateMatrixWorld(true);var b2=new THREE.Box3().setFromObject(W),f=(M.fitLength||4.6)/b2.getSize(new THREE.Vector3()).x;W.scale.setScalar(f);W.updateMatrixWorld(true);
var b3=new THREE.Box3().setFromObject(W),c3=b3.getCenter(new THREE.Vector3());W.position.set(-c3.x,-b3.min.y,-c3.z);
var sh=new THREE.Mesh(new THREE.PlaneGeometry((M.fitLength||4.6)*1.5,3),new THREE.MeshBasicMaterial({map:shTex,transparent:true,depthWrite:false}));sh.rotation.x=-Math.PI/2;sh.position.y=.01;sh.renderOrder=1;G.add(sh);
G.userData.w=wl;cars.forEach(function(c){pit.remove(c)});cars=[G];pit.add(G);cur=0;tr=-1;trT=0;VM=VM.map(function(){return 0});
if(M.credit){var e=document.getElementById("credit");if(e)e.innerHTML=" · "+M.credit}}
var ld=new THREE.GLTFLoader();
if(window.GLB_B64){var bin=atob(window.GLB_B64),u=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);ld.parse(u.buffer,"",done,fail)}
else ld.load(M.url,done,undefined,fail)})();
