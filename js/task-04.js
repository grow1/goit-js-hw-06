const incBtn = document.querySelector('#counter button[data-action="increment"]');
const decBtn = document.querySelector('#counter button[data-action="decrement"]');
const spanValue = document.querySelector('#value');
let counterValue = 0;
const handleIncrementClick = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};

const handleDecrementClick = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};

incBtn.addEventListener('click', handleIncrementClick);
decBtn.addEventListener('click', handleDecrementClick);
