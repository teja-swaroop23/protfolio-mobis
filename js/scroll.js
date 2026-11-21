/* Scroll choreography: camera chapters, driving motion, render loop */
var root=new THREE.Group(),pit=new THREE.Group();S.add(root);root.add(pit);cars.forEach(function(c){pit.add(c)});
var mx=0,my=0;addEventListener("mousemove",function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function rs(){var w=innerWidth,h=innerHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}rs();addEventListener("resize",rs);
var CH=CFG.chapters,chs=CH.map(function(c){return document.querySelector(c.sel)}),NM=CH.map(function(c){return c.name}),VM=CH.map(function(c){return c.variant||0}),K=CH.map(function(c){return c.cam}),
cam=K[0].slice(),cur=0,tr=-1,trT=0,sy=scrollY,vel=0,spin=0,pitch=0,last=performance.now(),born=last+1300,hud=document.getElementById("hud"),lab=document.getElementById("lab"),dots=document.getElementById("dots"),bar=document.getElementById("bar"),sw=document.getElementById("sweep"),fk=0,hk="",li=-1,went=false;
chs.forEach(function(){dots.appendChild(document.createElement("i"))});
function L2(a,b,t){return a+(b-a)*t}function sm(u){return u*u*(3-2*u)}
function loop(){requestAnimationFrame(loop);var now=performance.now(),dt=Math.min((now-last)/1000,.05)||.016,t=now/1000,y=scrollY,mob=innerWidth<820;last=now;
var v=RM?0:(y-sy)/Math.max(dt,.001);sy=y;vel+=(v-vel)*Math.min(dt*6,1);
var pv=y+innerHeight*.4,tp=chs.map(function(c){return c.getBoundingClientRect().top+y}),i=0;tp.forEach(function(p,n){if(p<=pv)i=n});
var j=Math.min(i+1,chs.length-1),u=j==i?0:Math.max(0,Math.min(1,(pv-tp[i])/(tp[j]-tp[i]))),k=sm(u);
for(var n=0;n<8;n++)cam[n]+=(L2(K[i][n],K[j][n],k)-cam[n])*Math.min(1,dt*(RM?60:3.5));
var iu=RM?1:Math.max(0,Math.min(1,(now-born)/3400)),ib=Math.pow(1-iu,1.5);
if(iu>.5&&!went){went=true;document.body.classList.add("go")}
var tv=Math.min(VM[i],cars.length-1);if(tv!=cur&&tr<0){if(RM||iu<1){cur=tv;cars.forEach(function(c,q){c.visible=q==cur})}else tr=0}
var off=0,bt=0;if(tr>=0){trT+=dt/1.3;bt=1;if(trT<.5)off=Math.pow(trT*2,2)*14;else{if(cur!=tv){cur=tv;cars.forEach(function(c,q){c.visible=q==cur})}off=-14*Math.pow(1-(trT-.5)*2,2)}if(trT>=1){tr=-1;trT=0;off=0}}
var b=Math.max(ib,bt);
root.position.x=-55*Math.pow(1-iu,3)+off+cam[7];
spin-=(vel*dt*.011)+b*dt*18;(cars[cur].userData.w||[]).forEach(function(w){w.rotation[w.userData.ax||"z"]=spin});
var pt=Math.max(-.035,Math.min(.035,vel*.00002))+b*.02;pitch+=(pt-pitch)*.1;pit.rotation.z=pitch;pit.position.y=Math.sin(t*38)*.012*Math.min(1,(Math.abs(vel)+b*900)/900);
var dx=-(vel*dt*.012+b*dt*55);strips.forEach(function(m){m.position.x+=dx;if(m.position.x<-40)m.position.x+=80;else if(m.position.x>40)m.position.x-=80});
hl.emissiveIntensity=2.4+3*b;
var d=cam[1]*(mob?1.35:1),ox=mob?0:cam[5],a=cam[0]+mx*.18,cs=Math.sin(a),cc=Math.cos(a);
C.position.set(cam[2]+cs*d-cc*ox,cam[3]+.25+d*.035-my*.3,cam[4]+cc*d+cs*ox);var lift=mob?1.4*Math.max(0,1-y/(innerHeight*.8)):0;C.lookAt(cam[2]-cc*ox,cam[3]+lift,cam[4]+cs*ox);
cv.style.opacity=(cam[6]*(mob&&i>0?.6:1)).toFixed(2);
if(i!=li){li=i;lab.textContent=NM[i];if(!RM){sw.classList.remove("go");void sw.offsetWidth;sw.classList.add("go");lab.classList.remove("sw");void lab.offsetWidth;lab.classList.add("sw");if(li>0)fk=5}[].forEach.call(dots.children,function(e,q){e.className=q==i?"on":""})}
var kh=Math.min(240,Math.round(Math.abs(vel)*.1+b*220))+" km/h";if(kh!=hk){hk=kh;hud.textContent=kh}
var pr=y/Math.max(1,document.documentElement.scrollHeight-innerHeight);bar.style.transform="scaleX("+Math.min(1,pr)+")";
fk+=(0-fk)*Math.min(1,dt*3);C.fov=30+fk;C.updateProjectionMatrix();
R.render(S,C)}loop();
