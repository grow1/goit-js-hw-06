const textInput = document.querySelector('#validation-input');

textInput.classList.add('invalid');

textInput.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(textInput.getAttribute('data-length'))) {
    textInput.classList.replace('invalid', 'valid');
  } else {
    textInput.classList.replace('valid', 'invalid');
  }
});
