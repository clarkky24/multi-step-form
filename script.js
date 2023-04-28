// Constants
const form = document.getElementById('form');
const firstStep = document.getElementById('step-1');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');

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
    if(emailValue === ''){
        emailError.textContent = '';
        email.style.borderColor = 'hsl(227, 12%, 86%)';
    } else if(!emailRegex.test(emailValue)){
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
  if(phoneValue === ''){
    phoneError.textContent = '';
    phone.style.borderColor = 'hsl(227, 12%, 86%)';
} else if(!phoneRegex.test(phoneValue)){
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


// Event Listeners
name.addEventListener('input', nameValidation);
email.addEventListener('input', emailValidation);
phone.addEventListener('input', phoneValidation);
