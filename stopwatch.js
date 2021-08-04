//stopwatch.js

//Dark theme vars
var darkTextColor = "white";
var darkBackgroundColor = "black";

//Light theme vars
var lightTextColor = "black";
var lightBackgroundColor = "white";

//variables
var stopwatchTimer = 0; //time counter
var action; //variable for setInterval

//minutes,seconds,centiseconds for time and lap
var timeMinutes, timeSeconds, timeCentiseconds;

var lapCount = 0;
var lapTime = 0;
var stopwatchTimerDisplay = document.getElementById("stopwatchTimerDisplay");
var startStopwatchBtn = document.getElementById("startStopwatchBtn");
var stopStopwatchBtn = document.getElementById("stopStopwatchBtn");
var resetStopwatchBtn = document.getElementById("resetStopwatchBtn");
var lapStopwatchBtn = document.getElementById("lapStopwatchBtn");
var resumeStopwatchBtn = document.getElementById("resumeStopwatchBtn");

var startTimerBtn = document.getElementById("startTimerBtn");
var stopTimerBtn = document.getElementById("stopTimerBtn");
var resetTimerBtn = document.getElementById("resetTimerBtn");

function initialSetup() {
  stopStopwatchBtn.style.display = "none";
  resumeStopwatchBtn.style.display = "none";
  lapStopwatchBtn.style.display = "none";
  resetStopwatchBtn.style.display = "none";

  stopTimerBtn.style.display = "none";
  resetTimerBtn.style.display = "none";
}

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

function startStopwatch() {
  action = setInterval(function () {
    stopwatchTimer++;
    if (stopwatchTimer == 100 * 60 * 100) {
      stopwatchTimer = 0;
      console.log(stopwatchTimer);
    }
    updateTime();
  }, 10);
  startStopwatchBtn.style.display = "none";
  stopStopwatchBtn.style.display = "inline-block";
  lapStopwatchBtn.style.display = "inline-block";
  resetStopwatchBtn.style.display = "inline-block";
}

function stopStopwatch() {
  clearInterval(action);
  resumeStopwatchBtn.style.display = "inline-block";
  lapStopwatchBtn.style.display = "none";
  resetStopwatchBtn.style.display = "inline-block";
}

function resumeStopwatch() {
  action = setInterval(function () {
    stopwatchTimer++;
    if (stopwatchTimer == 100 * 60 * 100) {
      stopwatchTimer = 0;
      console.log(stopwatchTimer);
    }
    updateTime();
  }, 10);
  resumeStopwatchBtn.style.display = "none";
  lapStopwatchBtn.style.display = "inline-block";
}

function resetStopwatch() {
  clearInterval(action);
  stopwatchTimer = 0;
  lapCount = 0;
  stopwatchTimerDisplay.innerHTML = "00:00:00";
  startStopwatchBtn.style.display = "inline-block";
  stopStopwatchBtn.style.display = "none";
  lapStopwatchBtn.style.display = "none";
  resetStopwatchBtn.style.display = "none";
  resumeStopwatchBtn.style.display = "none";
}

//updateTime: converts counters to min,sec,centisec
function updateTime() {
  //1min=60*100centiseconds=6000centiseconds
  timeMinutes = Math.floor(stopwatchTimer / 6000);
  //1sec=100centiseconds
  timeSeconds = Math.floor((stopwatchTimer % 6000) / 100);
  timeCentiseconds = (stopwatchTimer % 6000) % 100;
  timeToDisplay =
    format(timeMinutes) +
    ":" +
    format(timeSeconds) +
    ":" +
    format(timeCentiseconds);
  lapTime = timeToDisplay;
  stopwatchTimerDisplay.innerHTML = timeToDisplay;
}

function lap() {
  console.log("lap ", lapCount,lapTime);
  // TODO: add code to insert row in table
  lapCount++;
}

//format numbers
function format(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
