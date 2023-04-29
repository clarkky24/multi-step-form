// Constants
const form = document.getElementById('form');
const firstStep = document.getElementById('step-1');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const back = document.querySelector('.go-back');
const next = document.querySelector('.next');
const step = document.querySelectorAll('.step');
const stepNumber = document.querySelectorAll('.step-number');
const stepOne = document.getElementById('step-1');
const stepTwo = document.getElementById('step-2');
const formStep = form.querySelectorAll('.form-step');

let currentStep = 0;



// Functions

// Validation function for name field
const nameValidation = () => {
  const nameValue = name.value.trim();
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (nameValue === '') {
    nameError.textContent = '';
    name.style.borderColor = 'hsl(227, 12%, 86%)';
  } else if (!nameRegex.test(nameValue)) {
    nameError.textContent = 'Please enter a valid name';
    nameError.style.color = 'red';
    nameError.style.marginBottom = '1em';
    nameError.style.fontSize = '.7em';
    nameError.style.textAlign = 'center';
    name.style.marginBottom = '.3em';
    name.style.borderColor = 'red';
  } else {
    nameError.textContent = '';
    name.style.borderColor = 'hsl(227, 12%, 86%)';
  }
};

// Validation function for email field
const emailValidation = () => {
  // implementation
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //if statement
  if (emailValue === '') {
    emailError.textContent = '';
    email.style.borderColor = 'hsl(227, 12%, 86%)';
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Please enter a valid name';
    emailError.style.color = 'red';
    emailError.style.marginBottom = '1em';
    emailError.style.fontSize = '.7em';
    emailError.style.textAlign = 'center';
    email.style.marginBottom = '.3em';
    email.style.borderColor = 'red';
  } else {
    emailError.textContent = '';
    email.style.borderColor = 'hsl(227, 12%, 86%)';
  }
};

//validation functions Ph phone number 
const phoneValidation = () => {
  const phoneValue = phone.value.trim();
  const phoneRegex = /^(\+?63|0)[1-9][0-9]{9}$/;

  //if statement
  if (phoneValue === '') {
    phoneError.textContent = '';
    phone.style.borderColor = 'hsl(227, 12%, 86%)';
  } else if (!phoneRegex.test(phoneValue)) {
    phoneError.textContent = 'Please enter a valid name';
    phoneError.style.color = 'red';
    phoneError.style.marginBottom = '1em';
    phoneError.style.fontSize = '.7em';
    phoneError.style.textAlign = 'center';
    phone.style.marginBottom = '.3em';
    phone.style.borderColor = 'red';
  } else {
    phoneError.textContent = '';
    phone.style.borderColor = 'hsl(227, 12%, 86%)';
  }

};




// next and previous buttons


function nextStep() {
  formStep[currentStep].classList.remove('active');
  currentStep++;
  formStep[currentStep].classList.add('active');
  back.style.visibility = 'visible';

}

function prevStep() {
  formStep[currentStep].classList.remove('active');
  currentStep--;
  formStep[currentStep].classList.add('active');

  if (currentStep === 0) {
    back.style.visibility = 'hidden'; // Hide the button if on the first step
  } else {
    back.style.visibility = 'visible'; // Show the button if not on the first step
  }
}




// avtive number of steps

function activeNumber() {

}

// Event Listeners
name.addEventListener('input', nameValidation);
email.addEventListener('input', emailValidation);
phone.addEventListener('input', phoneValidation);
next.addEventListener('click', nextStep);
back.addEventListener('click', prevStep);

