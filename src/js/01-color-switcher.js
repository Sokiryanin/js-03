const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart() {
  btnStart.setAttribute('disabled', '');
  changeId = setInterval(() => {
    onChangeColor();
  }, 1000);
}

function onStop() {
  btnStart.removeAttribute('disabled');
  clearInterval(changeId);
}

function onChangeColor() {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
