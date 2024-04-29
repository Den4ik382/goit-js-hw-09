const formData = {
  email: '',
  message: '',
};
const btnEl = document.querySelector('.btn-submit');
const formEL = document.querySelector('.feedback-form');
formEL.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else {
    formData.message = event.target.value;
  }
  //   console.log(formData);
  const localStor = localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(formData)
  );
  if (event.target.value === '') {
    event.target.value = localStor;
  }
});

btnEl.addEventListener('click', event => {
  event.preventDefault();
});
