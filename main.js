'use strict';
var level, context, pirates, click;
var mouseClick = false;
document.onload=function () {
var canvas = document.getElementById('canvas');
canvas.addEventListener('mouseDown', mouseClick, false);
canvas.addEventListener('touchstart', touchClick, false);
context = canvas.getContext('2d');
level = 1;
requestAnimationFrame(mainLoop());
}
function mainLoop() {
if (level === 1) pirates.length = 1;
mouseClick = false;
for (var i = 0, i < pirates.length; i++) {
  while (!mouseClick){};
  pirates[i].x = click[0];
  pirates[i].y = click[1];
}
requestAnimationFrame(mainLoop());
}
function mouseClick (event) {
  mouseClick = true;
  click = [event.pageX,event.pageY];
}
function touchClick (event) {
  event.preventDefault();
  mouseClick = true;
  click = [event.targetTouches[0].pageX, event.targetTouches[0].pageY];
}
