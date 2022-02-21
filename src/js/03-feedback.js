import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  //   console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  // console.log(message);
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

// // Домой
// // сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;
  // console.log(formData);

  const formDataJSON = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, formDataJSON);
  // console.log(formDataJSON);
  const savedData = localStorage.getItem(STORAGE_KEY);
  console.log('savedData', savedData);

  const parsedData = JSON.parse(formDataJSON);
  console.log('parsedData', parsedData);
});

// function onEmailInput(evt) {
//   const email = evt.target.value;
//   console.log(email);

//   localStorage.setItem(STORAGE_KEY, email);
// }
// populateEmail();

// function populateEmail() {
//   const savedEmail = localStorage.getItem(STORAGE_KEY);

//   if (savedEmail) {
//     refs.email.value = savedEmail;
//   }
// }
