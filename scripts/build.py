"""Bundle the site into one self-contained dist/index.html (inlines CSS, JS, config and models/hyundai.glb if present)."""
import json,base64,os
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd=lambda p:open(os.path.join(R,p),encoding="utf8").read()
cfg=json.loads(rd("data/config.js").split("=",1)[1].strip().rstrip(";"));glb=os.path.join(R,"models","hyundai.glb");has=os.path.exists(glb)
if not has:cfg["model"]=None
html=rd("index.html").replace('<link rel="stylesheet" href="css/style.css">',"<style>"+rd("css/style.css")+"</style>")
pre="window.CFG="+json.dumps(cfg)+";"
if has:pre+='window.GLB_B64="'+base64.b64encode(open(glb,"rb").read()).decode()+'";'
inline="<script>"+rd("js/ui.js")+"</script>\n<script>"+pre+"</script>\n"+"".join("<script>"+rd("js/"+f)+"</script>\n" for f in ["scene.js","cars.js","scroll.js","model.js"])
html=html.replace('<script src="js/ui.js"></script>\n<script src="js/main.js"></script>\n',inline)
os.makedirs(os.path.join(R,"dist"),exist_ok=True);open(os.path.join(R,"dist","index.html"),"w",encoding="utf8").write(html)
print("dist/index.html written",len(html)//1024,"KB","(with model)" if has else "(procedural car)")
