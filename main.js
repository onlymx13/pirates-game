'use strict';
var level;
var context;
var pirates = new Array();
var click;
var pirateImg;
var mouseClicked = false;
document.body.onload=function () {
pirateImg = document.getElementById('pirateimg');
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
for (var i = 0; i < pirates.length; i++) {
  while (!mouseClicked){};
  pirates[i].x = click[0];
  pirates[i].y = click[1];
  context.drawImage(pirateImg, pirates[i].x, pirates[i].y);
  mouseClicked = false;
}
requestAnimationFrame(mainLoop());
}
function mouseClick (event) {
  mouseClicked = true;
  click = [event.pageX,event.pageY];
}
function touchClick (event) {
  event.preventDefault();
  mouseClicked = true;
  click = [event.targetTouches[0].pageX, event.targetTouches[0].pageY];
}
