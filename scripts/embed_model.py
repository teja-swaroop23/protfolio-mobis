"""Writes models/hyundai.glb.js (base64) so the page can load the model without a web server. Run after replacing models/hyundai.glb."""
import base64,os
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
b=open(os.path.join(R,"models","hyundai.glb"),"rb").read()
open(os.path.join(R,"models","hyundai.glb.js"),"w").write('window.GLB_B64="'+base64.b64encode(b).decode()+'";\n')
print("models/hyundai.glb.js written",len(b)//1024,"KB model")
