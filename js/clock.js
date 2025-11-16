const clock = document.querySelector("h2#clock");
const recordButton = document.querySelector("#recordtime");
const recordArea = document.querySelector("h1.record");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliSeconds = String(Math.trunc(date.getMilliseconds() / 10)).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}

function handleRecordClick() {
  recordArea.innerText = clock.innerText;
}

getClock();

setInterval(getClock, 10);

recordButton.addEventlistener("click", handleRecordClick);
