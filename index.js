
window.onload = function () {
var seconds = 00;
var milliSeconds = 00;

var sec = document.getElementById("seconds");
var mSec = document.getElementById("milliSeconds");

var start = document.getElementById("button1");
var stop = document.getElementById("button2");
var reset = document.getElementById("button3");
var interval ;



  start.onclick = function () {
      
      clearInterval(interval);
      interval = setInterval(showTimmer1,10);    
      
    }

  stop.onclick = function () {
      
      clearInterval(interval);    
      
    }
    reset.onclick = function() {
        clearInterval(interval);
        sec.innerHTML = "00";
        mSec.innerHTML = "00";

    }

 function showTimmer1() {

    milliSeconds++;

    if( milliSeconds <= 9)
    {
        mSec.innerHTML = "0" + milliSeconds;
    }

    if(milliSeconds>9)
    {
        mSec.innerHTML = milliSeconds;
    }

    if(milliSeconds>99)
    {
        seconds++
        sec.innerHTML = "0" + seconds;

       milliSeconds = 0;
       mSec.innerHTML = "0" + 0;
    }

    if(seconds>9)
    {
        sec.innerHTML = seconds;
    }
     
 }
}