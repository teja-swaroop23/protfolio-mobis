/* UI: loader, reveal-on-scroll, copy email */
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
setTimeout(function(){document.getElementById("ld").classList.add("off")},RM?100:1100);
// reveal + counters
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add("in");var c=e.target.querySelector("[data-n]");if(c&&!c.done){c.done=1;var n=+c.dataset.n,d=+c.dataset.d||0,s=c.dataset.s,t0=performance.now();(function f(t){var p=RM?1:Math.min((t-t0)/1400,1);c.textContent=(n*(1-Math.pow(1-p,3))).toFixed(d)+s;if(p<1)requestAnimationFrame(f)})(t0)}io.unobserve(e.target)})},{threshold:.2});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
// copy
document.getElementById("cp").onclick=function(){var b=this;(navigator.clipboard?navigator.clipboard.writeText("tejaxswaroop@gmail.com"):Promise.reject()).then(function(){b.textContent="Copied ✓"},function(){b.textContent="Select email above"});setTimeout(function(){b.textContent="Copy email"},2000)};

/* Split headings into words for the masked slide-up reveal */
(function(){var i=0;function sp(n){[].slice.call(n.childNodes).forEach(function(c){if(c.nodeType==3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(" "));return}var w=document.createElement("span");w.className="w";var s=document.createElement("span");s.textContent=t;s.style.setProperty("--i",i++);w.appendChild(s);f.appendChild(w)});n.replaceChild(f,c)}else if(c.nodeType==1&&c.tagName!="BR")sp(c)})}
document.querySelectorAll("h1,h2").forEach(function(e){i=0;sp(e)})})();
