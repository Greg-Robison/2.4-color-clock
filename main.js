(function(){
  "use strict";

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
    document.getElementById("MyClockDisplay").innerText = time;
    var color = "#"+h+m+s;
    var color2 = "#"+m+s+h;
    var color3 = "#"+s+h+m;
    console.log (color);
    var timeLine = s / 60 * 100;
    console.log(timeLine);
    document.getElementById("timeBar").style.width = timeLine + "%";
    if (s % 3 == 0){
    document.body.style.backgroundColor = color2;
    document.getElementById("timeBar").style.backgroundColor = color3;
    document.body.style.color = color;
  }
    if (s % 3 == 1){
    document.body.style.backgroundColor = color3;
    document.getElementById("timeBar").style.backgroundColor = color;
    document.body.style.color = color2;
  }
    if (s % 3 == 2 ){
    document.body.style.backgroundColor = color;
    document.getElementById("timeBar").style.backgroundColor = color2;
    document.body.style.color = color3;
  }
    // onmouseover=document.getElementById('MyClockDisplay')=color;

  document.body.style.backgroundColor = 'radial-gradient(color + ', ' + color1 + )';





}

    showTime();

    setInterval(showTime, 1000);








}());
