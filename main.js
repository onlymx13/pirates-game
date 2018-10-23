'use strict';
var level, context;
document.onload=function () {
context = document.getElementById('canvas').getContext('2d');
level = 1;
requestAnimationFrame(mainLoop());
}
function mainLoop() {
requestAnimationFrame(mainLoop());
}
