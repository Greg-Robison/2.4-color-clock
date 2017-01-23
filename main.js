(function(){
  "use strict";
// var hov = document.getElementById("MyClockDisplay").innerText = time;
var isHovering = false;

function showTime() {
    var x = new Date();
    var h = x.getHours();// 0-23
    var m = x.getMinutes();// 0-59
    var s = x.getSeconds();// 0-59

    if(h == 0){
      h = 12;
    }
    if(h > 12){
      h = h - 12;
    }
    if (h < 10){
      h = "0" + h;
    }
    if (m < 10){
      m = "0" + m;
    }
    if (s < 10){
      s = "0" + s;
    }

    var time = h + ":" + m + ":" +  s;
    var ch = h.toString(16);
    console.log('h', h);
    console.log('ch', ch);
    var cm = m.toString(16);
    var cs = s.toString(16);

    var color = "#" + ch + cm + cs;




    // var color = "#" + h + m + s;

    if(isHovering) {
      document.getElementById("MyClockDisplay").innerText = color;
    } else {
      document.getElementById("MyClockDisplay").innerText = time;
    }




    document.body.style.backgroundColor = color;

    console.log ('color', color);
    // document.getElementById("MyClockDisplay").innerText = time;
    var timeLine = s / 60 * 100;
    console.log('timeline', timeLine);
    document.getElementById("timeBar").style.width = timeLine + "%";

    // var clockDisplay;
    //
    // if (isHovering){
    //   clockDisplay = color;
    // }
    // else {
    //   clockDisplay = time;
    // }

  // function isInside(node, target) {
  //   for (; node != null; node = node.parentNode)
  //     if (node == target) return true;
  // }
}

var hov = document.getElementById("MyClockDisplay");

hov.addEventListener("mouseover", function () {
  isHovering = true;
  // document.getElementById("MyClockDisplay").innerText = color;
});

hov.addEventListener("mouseout", function() {
  isHovering = false;
  // document.getElementById("MyClockDisplay").innerText = time;
});
// function handleMouseOver(){
//   isHovering = true;
// }
// function handleMouseOut(){
//   isHovering = false;
// }
// hov.addEventListener(mo)


 showTime();




setInterval(showTime, 100);









}());
