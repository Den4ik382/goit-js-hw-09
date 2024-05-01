const formData = {
  email: '',
  message: '',
};
function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  console.log(savedData);
  if (savedData) {
    formData = JSON.parse(savedData);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}
function validateForm() {
  for (const key in formData) {
    if (formData.email.trim() === '' && formData.message.trim() === '') {
      alert('Fill please all fields');
      return false;
    }
  }
  return true;
}
function clearFormData() {
  formData = { email: '', message: '' };
  saveFormData();
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
}
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', function (event) {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormData();
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (validateForm()) {
    console.log(formData);
    clearFormData();
  }
});
window.addEventListener('load', loadFormData);
