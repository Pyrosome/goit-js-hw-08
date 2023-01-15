import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

onLoad();

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
  const formData = {
    email: form.email.value,
    message: form.message.value
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', e => {
  const formData = {
    email: form.email.value,
    message: form.message.value
  };
  console.log(formData);

  e.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
});

function onLoad() {
  const formInfo = localStorage.getItem('feedback-form-state');
  const parsedInfo = JSON.parse(formInfo);
  form.email.value = parsedInfo.email;
  form.message.value = parsedInfo.message;
}

/*

import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

onLoad();

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
  const formData = {
    email: form.email.value,
    message: form.message.value
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', (e) => {
  const formData = {
    email: form.email.value,
    message: form.message.value
  };
  console.log(formData);

  e.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
});

function onLoad() {
  const formInfo = localStorage.getItem('feedback-form-state');
  const parsedInfo = JSON.parse(formInfo);
  form.email.value = parsedInfo.email;
  form.message.value = parsedInfo.message;
}

*/
