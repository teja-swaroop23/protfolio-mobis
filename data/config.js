/* Site settings: model options and per-chapter camera keyframes [azimuth, distance, targetX, targetY, targetZ, screenOffset, canvasOpacity, carX] */
window.CFG={
 "model": {
  "url": "models/hyundai.glb",
  "fitLength": 4.6,
  "rotateY": 0,
  "wheelRegex": "^3DWheel[ _](Front|Rear)",
  "paintColor": null,
  "credit": "Model: <a href=\"https://sketchfab.com/3d-models/2024-hyundai-elantra-n-4ba1b1b0eb844e318cc708ada1f2f51f\" target=\"_blank\" rel=\"noopener\">2024 Hyundai Elantra N</a> by <a href=\"https://sketchfab.com/ddiaz-design\" target=\"_blank\" rel=\"noopener\">Ddiaz Design</a>, <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\" target=\"_blank\" rel=\"noopener\">CC BY-NC-SA 4.0</a> (optimized copy)",
  "matte": true
 },
 "chapters": [
  {
   "sel": "#hero",
   "name": "Intro",
   "variant": 0,
   "cam": [
    1.5,
    9,
    0,
    0.75,
    0,
    2.0,
    1,
    0
   ]
  },
  {
   "sel": "#about",
   "name": "Profile",
   "variant": 0,
   "cam": [
    0.7,
    8.5,
    0,
    0.7,
    0,
    2.6,
    0.95,
    0
   ]
  },
  {
   "sel": "#adas",
   "name": "Hyundai Mobis",
   "variant": 0,
   "cam": [
    1.0,
    7,
    1.0,
    0.75,
    0,
    -2.2,
    0.95,
    0
   ]
  },
  {
   "sel": "#skills",
   "name": "Systems",
   "variant": 0,
   "cam": [
    0,
    12,
    0,
    0.8,
    0,
    0,
    0.22,
    0
   ]
  },
  {
   "sel": "#p1",
   "name": "Project 01",
   "variant": 1,
   "cam": [
    1.25,
    4.2,
    2.2,
    0.7,
    0.2,
    -2.2,
    0.95,
    0
   ]
  },
  {
   "sel": "#p2",
   "name": "Project 02",
   "variant": 1,
   "cam": [
    0.15,
    3.8,
    1.4,
    0.4,
    0.9,
    2.2,
    0.95,
    0
   ]
  },
  {
   "sel": "#p3",
   "name": "Project 03",
   "variant": 1,
   "cam": [
    -0.35,
    4.5,
    -0.2,
    1.05,
    0.3,
    -2.2,
    0.95,
    0
   ]
  },
  {
   "sel": "#exp",
   "name": "Journey",
   "variant": 2,
   "cam": [
    -0.9,
    9,
    0,
    0.7,
    0,
    2.4,
    0.9,
    0
   ]
  },
  {
   "sel": "#edu",
   "name": "Education",
   "variant": 0,
   "cam": [
    -0.8,
    11,
    0,
    0.8,
    0,
    -2.2,
    0.5,
    0
   ]
  },
  {
   "sel": "#contact",
   "name": "Contact",
   "variant": 0,
   "cam": [
    -1.57,
    9,
    0,
    0.7,
    0,
    0,
    1,
    46
   ]
  }
 ]
};
