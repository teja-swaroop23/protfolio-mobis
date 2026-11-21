/* Bootstrap: loads config + model data + scene scripts in order. Plain script tags, so it also works when index.html is opened by double-click. */
(function(){var order=[["data/config.js"],["models/hyundai.glb.js",1],["js/scene.js"],["js/cars.js"],["js/scroll.js"],["js/model.js"]];
(function n(i){if(i>=order.length)return;var s=document.createElement("script");s.src=order[i][0];s.onload=function(){n(i+1)};s.onerror=function(){if(order[i][1])n(i+1);else console.error("Failed to load "+order[i][0])};document.body.appendChild(s)})(0)})();
