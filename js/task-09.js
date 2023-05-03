function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColorChanger = document.querySelector('button.change-color');
const bodyElem = document.querySelector('body');
const spanColorInfo = document.querySelector('span.color');

btnColorChanger.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  spanColorInfo.textContent = newColor;
});
