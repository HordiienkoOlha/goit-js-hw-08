import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
// const email = document.querySelector('.feedback-form  input');
// const message = document.querySelector('.feedback-form  textarea');
// const parcedItem = {};

initForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(changeForm, 500));

function onFormSubmit(event) {
  event.preventDefault();
  // console.log('Form sent');
  const formData = new FormData(form);
  // console.log(formData);
  formData.forEach((key, value) => console.log(`${value}-${key}`));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  // console.log(event.currentTarget);
}
function changeForm(event) {
  let parcedItem = localStorage.getItem(STORAGE_KEY);
  parcedItem = parcedItem ? JSON.parse(parcedItem) : {};
  parcedItem[event.target.name] = event.target.value;

  if (!parcedItem) return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(parcedItem));
}
function initForm() {
  let persistedItem = localStorage.getItem(STORAGE_KEY);
  // console.log(parcedItem);

  if (persistedItem) {
    persistedItem = JSON.parse(persistedItem);
    console.log(persistedItem);

    Object.entries(persistedItem).forEach(([key, value]) => (form.elements[key].value = value));
  }
}
