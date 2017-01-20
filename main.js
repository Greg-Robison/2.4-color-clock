// (function(){
//   "use strict";

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
    document.getElementById("MyClockDisplay");
    setTimeout(showTime, 1000);
}
    showTime();



  //   function millisecondsToInterval(ms){
  //
  //   var msInHour = 60000 * 60;
  //   var msInMinute = 60000;
  //   var msInSecond = 1000;
  //
  //   var hourCount = Math.floor(msLeft / msInHour);
  //
  //   var minutesCount = Math.floor(msLeft / msInMinute);
  //
  //   var secondsCount = Math.floor(msLeft / msInSecond);
  //
  //   return [hourCount, minutesCount, secondsCount];
  // }

  // function printToScreen (interval){
  //   hours.textContent = ("0" + interval[0]);
  //   minutes.textContent = ("0" + interval[1]);
  //   seconds.textContent = ("0" + interval[2]);
  // }





// }());
