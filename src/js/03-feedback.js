import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

onLoad();

// input data collect and set to local storage ---------------//
form.addEventListener('input', throttle(onInput, 500));

function onInput() {
  const formData = {
    email: form.email.value,
    message: form.message.value
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// submit data to console and clear local storage ---------------//
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

// load data from local storage to form inputs ---------------//
function onLoad() {
  const formInfo = localStorage.getItem('feedback-form-state');
  const parsedInfo = JSON.parse(formInfo);
  if (parsedInfo) {
    form.email.value = parsedInfo.email;
    form.message.value = parsedInfo.message;
  }
}

/* 
// I dont understand why parsedInfo here is undefined?????? //

const form = document.querySelector('.feedback-form');
const formInput = {
  email: form.email,
  message: form.message
};

form.addEventListener('input', e => {
  e.target.name === 'email'
    ? (formInput.email.value = e.target.value)
    : (formInput.message.value = e.target.value);

  localStorage.setItem('feedback-form-state', JSON.stringify(formInput));

  const formInfo = localStorage.getItem('feedback-form-state');
  const parsedInfo = JSON.parse(formInfo);
  console.log(parsedInfo.message.value);
  console.log(formInput.message.value);
});

*/
