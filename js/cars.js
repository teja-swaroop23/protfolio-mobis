/* Procedural fallback cars, used when no .glb model is present */
var V=[{L:4.62,nz:.8,tl:.98,bt:.98,rf:1.5,x0:-2.1,x1:.9,xr:-1.75,xf:.2,c:0x262c32},{L:4.35,nz:.62,tl:.96,bt:.8,rf:1.17,x0:-1.5,x1:.8,xr:-.95,xf:.15,c:0x56656d},{L:4.9,nz:.7,tl:.82,bt:.9,rf:1.32,x0:-1.75,x1:1,xr:-1.1,xf:.25,c:0xe9eef1}],W=1.9,cars=[];
var blk=new THREE.MeshStandardMaterial({color:0x050607,roughness:.5}),gls=new THREE.MeshPhysicalMaterial({color:0x04070a,metalness:.9,roughness:.04,clearcoat:1,envMapIntensity:1.6}),
chr=new THREE.MeshStandardMaterial({color:0xc4cfd3,metalness:1,roughness:.18,envMapIntensity:1.5}),tyr=new THREE.MeshStandardMaterial({color:0x0b0b0c,roughness:.92}),
hl=new THREE.MeshStandardMaterial({color:0xffffff,emissive:0xd6fbff,emissiveIntensity:2.4}),tl=new THREE.MeshStandardMaterial({color:0x300000,emissive:0xff1a2a,emissiveIntensity:2.2});
function glow(){var c=document.createElement("canvas");c.width=c.height=128;var x=c.getContext("2d"),g=x.createRadialGradient(64,64,4,64,64,64);g.addColorStop(0,"rgba(0,0,0,.85)");g.addColorStop(.6,"rgba(0,0,0,.35)");g.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c)}
var shTex=glow();
V.forEach(function(v,i){var g=new THREE.Group(),h=v.L/2,P=paint(v.c);
var body=new THREE.Mesh(ex([[-h,.32],[-h,v.tl],[v.x0,v.bt],[v.x1,v.bt],[h-.3,v.bt-.12],[h,v.nz],[h,.32]],W-.3,.12,3),P);g.add(body);
g.add(new THREE.Mesh(ex([[v.x0,v.bt],[v.xr,v.rf],[v.xf,v.rf],[v.x1,v.bt]],W-.5,.05,2),gls));
var roof=new THREE.Mesh(ex([[v.xr-.05,v.rf-.04],[v.xr,v.rf+.02],[v.xf,v.rf+.02],[v.xf+.05,v.rf-.04]],W-.45,.04,1),P);g.add(roof);
function bx(w,hh,d,m,x,y,z){var b=new THREE.Mesh(new THREE.BoxGeometry(w,hh,d),m);b.position.set(x,y,z);g.add(b);return b}
[-1,1].forEach(function(s){bx(.06,.09,.42,hl,h+.02,.66,s*.6);bx(.05,.1,.4,tl,-h-.03,v.tl-.16,s*.6);bx(.14,.08,.1,P,v.x1-.15,v.bt+.1,s*(W/2+.02));
var arch=new THREE.Mesh(new THREE.CylinderGeometry(.45,.45,W+.04,28),blk);arch.rotation.x=Math.PI/2;
[-1,1].forEach(function(w){var a=arch.clone();a.position.set(w*h*.6+.0,.38,0);g.add(a)})});
bx(.05,.16,.9,blk,h+.02,v.nz-.2,0);bx(.07,.03,W-.4,red,h+.015,.36,0);bx(.3,.04,W-.6,blk,v.xr-.2,v.rf-.01,0);for(var k=0;k<8;k++)bx(.03,.035,.04,tl,-h-.03,v.tl-.1,(k-3.5)*.12);[-1,1].forEach(function(sd){bx(2.2,.025,.02,red,0,.33,sd*(W/2-.1));bx(.22,.03,.02,blk,v.xr+.4,v.bt-.1,sd*(W/2));for(var k=0;k<4;k++)for(var q=0;q<2;q++)bx(.03,.05,.05,hl,h+.03,v.nz-.07-q*.075,sd*(.26+k*.09))});bx(.04,.03,1.3,tl,-h-.03,v.tl-.16,0);bx(.5,.04,W-.3,blk,h-.2,.3,0);
g.userData.w=[];[-1,1].forEach(function(wx){[-1,1].forEach(function(s){var w=new THREE.Group();w.position.set(wx*h*.6,.38,s*(W/2-.2));
var t=new THREE.Mesh(new THREE.CylinderGeometry(.38,.38,.28,40),tyr);t.rotation.x=Math.PI/2;w.add(t);
var r=new THREE.Mesh(new THREE.CylinderGeometry(.27,.27,.3,40),chr);r.rotation.x=Math.PI/2;w.add(r);
for(var k=0;k<6;k++){var sp=new THREE.Mesh(new THREE.BoxGeometry(.035,.5,.03),blk);sp.position.z=s*.15;sp.rotation.z=k*Math.PI/6;w.add(sp)}
g.add(w);g.userData.w.push(w)})});
var sh=new THREE.Mesh(new THREE.PlaneGeometry(v.L*1.5,W*2),new THREE.MeshBasicMaterial({map:shTex,transparent:true,depthWrite:false}));sh.rotation.x=-Math.PI/2;sh.position.y=.01;sh.renderOrder=1;g.add(sh);
g.visible=i==0;cars.push(g)});
