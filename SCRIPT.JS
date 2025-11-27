let startTimestamp = 0;
let runningTime = 0;
let intervalId;

const display = document.querySelector(".display");
const lapList = document.querySelector(".laps");

const formatTime = (milliseconds) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);

  return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
};

const addZero = (unit) => (unit < 10 ? "0" + unit : unit);

function startStopwatch() {
  startTimestamp = Date.now() - runningTime;
  intervalId = setInterval(() => {
    runningTime = Date.now() - startTimestamp;
    display.textContent = formatTime(runningTime);
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(intervalId);
}

function resetStopwatch() {
  clearInterval(intervalId);
  runningTime = 0;
  display.textContent = "00:00:00";
  lapList.innerHTML = "";
}

function recordLap() {
  const lapItem = document.createElement("li");
  lapItem.textContent = formatTime(runningTime);
  lapList.appendChild(lapItem);
}
