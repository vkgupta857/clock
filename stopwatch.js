//stopwatch.js

//Dark theme vars
var darkTextColor = "white";
var darkBackgroundColor = "black";

//Light theme vars
var lightTextColor = "black";
var lightBackgroundColor = "white";

function toggleLightTheme(checkbox) {
  if (checkbox.checked) {
    // console.log("light");
    document.body.style.backgroundColor = lightBackgroundColor;
    document.body.style.color = lightTextColor;
  } else {
    // console.log("dark");
    document.body.style.backgroundColor = darkBackgroundColor;
    document.body.style.color = darkTextColor;
  }
}

function openFullscreen() {
  var elem = document.getElementById("timer");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

//variables
var timeCounter = 0; //time counter
var action; //variable for setInterval

//minutes,seconds,centiseconds for time and lap
var timeMinutes,
  timeSeconds,
  timeCentiseconds;

var stopwatchTimerDisplay = document.getElementById("stopwatchTimerDisplay");

function startStopwatch() {
  action = setInterval(function () {
    timeCounter++;
    if (timeCounter == 100 * 60 * 100) {
      timeCounter = 0;
      console.log(timeCounter);
    }
    
    updateTime();
  }, 10);
}

function stopStopwatch() {
  clearInterval(action);
}

function resetStopwatch() {
    stopwatchTimerDisplay.innerHTML = "00:00:00";
}

//updateTime: converts counters to min,sec,centisec
function updateTime() {
  //1min=60*100centiseconds=6000centiseconds
  timeMinutes = Math.floor(timeCounter / 6000);
  //1sec=100centiseconds
  timeSeconds = Math.floor((timeCounter % 6000) / 100);
  timeCentiseconds = (timeCounter % 6000) % 100;

  stopwatchTimerDisplay.innerHTML =
    format(timeMinutes) + ":" + format(timeSeconds) + ":" + format(timeCentiseconds);
}

//format numbers
function format(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}