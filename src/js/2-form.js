const formData = {
  email: '',
  message: '',
};
const emailInput = document.querySelector('input[name="email"]');
const massageInput = document.querySelector('textarea[name="message"]');
const savedData = localStorage.getItem('feedback-form-state');
const submitBtn = document.querySelector(`button`);
console.log(savedData);
function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function loadFormData() {
  if (savedData !== null) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email.trim();
    massageInput.value = formData.message.trim();
  }
}

function validateForm() {
  if (emailInput.value.trim() === '' || massageInput.value.trim() === '') {
    return alert('Fill please all fields');
  }
}
function clearFormData() {
  formData.email = '';
  formData.message = '';
  saveFormData();
  emailInput.value = '';
  massageInput.value = '';
}
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormData();
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  console.log(formData);
  clearFormData();
});
window.addEventListener('load', loadFormData);
