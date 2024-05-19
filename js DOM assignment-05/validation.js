const surveyForm = document.getElementById('survey-form');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');

surveyForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  if (!validatePhone(phoneInput.value)) {
    phoneError.textContent = "Please enter a valid phone number.";
    phoneInput.focus(); 
    return; 
  }

  
  console.log("Form submitted successfully!"); 
});

function validatePhone(phoneNumber) {
 
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(phoneNumber);
}
