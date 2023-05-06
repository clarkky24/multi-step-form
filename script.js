//Constants
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
const one = document.getElementById('num1');
const two = document.getElementById('num2');
const three = document.getElementById('num3');
const four = document.getElementById('num4');
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const yearlyLabel = document.querySelectorAll('.yearly-label');
const buttonForm = document.querySelector('.button-form');
const arcadeYearlyP = document.querySelector('.annual-p-arcade');  
const advancedYearlyP = document.querySelector('.annual-p-advanced');
const proYearlyP = document.querySelector('.annual-p-pro');
const arcadeMonthlyP = document.querySelector('.monthly-p-arcade');  
const advancedMonthlyP = document.querySelector('.monthly-p-advanced');
const proMonthlyP = document.querySelector('.monthly-p-pro');
const arcade = document.querySelector('.product-arcade');
const advanced = document.querySelector('.product-advanced');
const pro = document.querySelector('.product-pro');
const product = document.querySelectorAll('.product');
const arcadeStyle = document.querySelector('#arcade');
const advancedStyle = document.querySelector('#advanced');
const proStyle = document.querySelector('#pro');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const plan = document.querySelector('.plan-type');
const spanTag =  document.querySelector('.sub');
const planPrice = document.querySelector('.plan-price');
const subTotal = document.querySelector('.total');
const addOnsType1 = document.querySelector('.addOns-type1');
const addOnsType2 = document.querySelector('.addOns-type2');
const addOnsType3 = document.querySelector('.addOns-type3');
const addOnsType1Price = document.querySelector('.addOns-type1-price');
const addOnsType2Price = document.querySelector('.addOns-type2-price');
const addOnsType3Price = document.querySelector('.addOns-type3-price');




let totalAddOns = 0;
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

  if (currentStep === 0) {
    back.style.visibility = 'hidden'; // Hide the button if on the first step
  }else if(currentStep === 1){
    one.classList.remove('active-num')
    two.classList.add('active-num')
  }else if(currentStep === 2){
    two.classList.remove('active-num')
    three.classList.add('active-num')
  }else if(currentStep === 3){
    next.textContent = 'CONFIRM';
    next.style.letterSpacing = '1px';
    next.style.padding  = '1em';
    next.style.fontSize = '.7em';
    three.classList.remove('active-num')
    four.classList.add('active-num')
  } else if(currentStep === 4){
    next.style.display = 'none';
    back.style.display = 'none';
    
  }else{
    back.style.visibility = 'visible'; // Show the button if not on the first step
  }

}

function prevStep() {
  formStep[currentStep].classList.remove('active');
  currentStep--;
  formStep[currentStep].classList.add('active');


  if (currentStep === 0) {
    back.style.visibility = 'hidden'; // Hide the button if on the first step
    one.classList.add('active-num');
    two.classList.remove('active-num');
  }else if(currentStep === 1){
    one.classList.remove('active-num');
    two.classList.add('active-num');
    three.classList.remove('active-num');
  }else if(currentStep === 2){
    two.classList.remove('active-num');
    three.classList.add('active-num');
    four.classList.remove('active-num')
    next.textContent = 'NEXT STEP';
  }else if(currentStep === 3){
    three.classList.remove('active-num')
    four.classList.add('active-num')
  } else{
    back.style.visibility = 'visible'; // Show the button if not on the first step
  }

}


// monthly plan option
function monthlyPlan() {
  yearly.style.backgroundColor = 'hsl(206, 79%, 85%)';
  monthly.style.backgroundColor = 'hsl(206, 85%, 58%)';
 

  // Get the value of the selected plan for each product
  product.forEach(product => {
    product.setAttribute('data-value', '9');
    arcadeStyle.style.borderColor = 'hsl(227, 12%, 86%)';
    advancedStyle.style.borderColor = 'hsl(227, 12%, 86%)';
    proStyle.style.borderColor = 'hsl(227, 12%, 86%)';
  });

  form.style.top ='-3%'
  arcadeYearlyP.style.display = 'none';
  advancedYearlyP.style.display = 'none';
  proYearlyP.style.display = 'none';
  arcadeMonthlyP.style.display = 'block';
  advancedMonthlyP.style.display = 'block';
  proMonthlyP.style.display = 'block';

  yearlyLabel.forEach(label => {
    label.textContent  = '';
    buttonForm.style.marginTop = '0';
  });
};

// yearly plan option
function yearlyPlan() {
  yearly.style.backgroundColor = 'hsl(206, 85%, 58%)';
  monthly.style.backgroundColor = 'hsl(206, 79%, 85%)';

  // Get the value of the selected plan for each product
  product.forEach(product => {
    product.setAttribute('data-value', '90');
    arcadeStyle.style.borderColor = 'hsl(227, 12%, 86%)';
    advancedStyle.style.borderColor = 'hsl(227, 12%, 86%)';
    proStyle.style.borderColor = 'hsl(227, 12%, 86%)';
  });

  form.style.top ='-4.5%'
  arcadeMonthlyP.style.display = 'none';
  advancedMonthlyP.style.display = 'none';
  proMonthlyP.style.display = 'none';
  arcadeYearlyP.style.display = 'block';
  advancedYearlyP.style.display = 'block';
  proYearlyP.style.display = 'block';

  yearlyLabel.forEach(label => {
    label.textContent  = '2 months free';
    label.style.fontSize = '.6em';
    label.style.marginTop = '-.5em';
    label.style.color = 'green';
    buttonForm.style.marginTop = '2.5em';
  });
};



//arcade plan

function arcadePlan(){
 

  product.forEach(product => {
    const data = product.getAttribute('data-value');
    const arcadePlanPrice = 9;
    const arcadePlanPriceYearly = 90;
  
    if(data === '9'){
      const planType = '(Monthly)';
      const planName = 'Arcade';
      plan.textContent = planName;
      spanTag.textContent = planType;
      planPrice.textContent = `$${arcadePlanPrice}/mso`; 
      spanTag.style.color = 'green';
      
    } else{
      const yearlyPlan = '(Annually)';
      const planName = 'Arcade';
      plan.textContent = planName;
      spanTag.textContent = yearlyPlan;
      planPrice.textContent = `$${arcadePlanPriceYearly}/yr`; 
      spanTag.style.color = 'green';
    } 
  });



  arcadeStyle.style.borderColor = 'hsl(243, 100%, 62%)';
  advancedStyle.style.borderColor = 'hsl(227, 12%, 86%)';
  proStyle.style.borderColor = 'hsl(227, 12%, 86%)';
}

// advanced plan
function advancedPlan(){

  product.forEach(product => {
    const data = product.getAttribute('data-value');
    const advancedPlanPrice = 12;
    const advancedPlanPriceYearly = 120;
  
    if(data === '9'){
      const planType = '(Monthly)';
      const planName = 'Advanced';
      plan.textContent = planName;
      spanTag.textContent = planType;
      planPrice.textContent = `$${advancedPlanPrice}/mo`; 
      spanTag.style.color = 'green';
      
    } else{
      const yearlyPlan = '(Annually)';
      const planName = 'Advanced';
      plan.textContent = planName;
      spanTag.textContent = yearlyPlan;
      planPrice.textContent = `$${advancedPlanPriceYearly}/yr`; 
      spanTag.style.color = 'green';
    } 
  });

  arcadeStyle.style.borderColor = 'hsl(227, 12%, 86%)';
  advancedStyle.style.borderColor = 'hsl(243, 100%, 62%)';
  proStyle.style.borderColor = 'hsl(227, 12%, 86%)';
  }

// pro plan
  function proPlan(){
    

    product.forEach(product => {
      const data = product.getAttribute('data-value');
      const proPlanPrice = 15;
      const proPlanPriceyearly = 150;



    if(data === '9'){
      const planType = '(Monthly)';
      const planName = 'Pro';
      plan.textContent = planName;
      spanTag.textContent = planType;
      planPrice.textContent = `$${proPlanPrice}/mo`; 
      spanTag.style.color = 'green';
      
    } else{
      const yearlyPlan = '(Annually)';
      const planName = 'Pro';
      plan.textContent = planName;
      spanTag.textContent = yearlyPlan;
      planPrice.textContent = `$${proPlanPriceyearly}/yr`; 
      spanTag.style.color = 'green';
    } 
  });

    arcadeStyle.style.borderColor = 'hsl(227, 12%, 86%)';
    advancedStyle.style.borderColor = 'hsl(227, 12%, 86%)';
    proStyle.style.borderColor = 'hsl(243, 100%, 62%)';
    }

// AddOns product


     

      checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          
          const itemValue = checkbox.value;
          // If checkbox is checked, add the value to the total
          if (checkbox.checked) {

              if(itemValue === '1'){
                addOnsType1.textContent = 'Online Service'
                addOnsType1Price.textContent = `$${itemValue}/mo`;
              } else if(itemValue === '2'){
                addOnsType2.textContent = 'Larger Storage'
                addOnsType2Price.textContent = `$${itemValue}/mo`;
              } else if(itemValue === '3'){
                addOnsType3.textContent = 'Customizable Profile'
                addOnsType3Price.textContent = `$${itemValue}/mo`;
              }

              totalAddOns += parseInt(checkbox.value);
          } else {
            // If checkbox is unchecked, subtract the value from the total
            totalAddOns -= parseInt(checkbox.value);
            if (itemValue === '1') {
              addOnsType1.textContent = '';
              addOnsType1Price.textContent = '';
            } else if (itemValue === '2') {
              addOnsType2.textContent = '';
              addOnsType2Price.textContent = '';
            } else if (itemValue === '3') {
              addOnsType3.textContent = '';
              addOnsType3Price.textContent = '';
            }
          }
          
      
          // Update the total element
          // Assuming totalAddOns and planPrice are strings containing numeric values:
          const planPriceText = planPrice.textContent;
          const totalPriceValue = parseFloat(planPriceText.substring(1, planPriceText.length - 4));
          let subTotalValue = parseInt(totalAddOns) + totalPriceValue;
          subTotal.textContent = subTotalValue;


        });
      });
     

    
// form 

function formSubmit(e){
  e.preventDefault();
  
}

// Event Listeners
form.addEventListener('submit', formSubmit)
name.addEventListener('input', nameValidation);
email.addEventListener('input', emailValidation);
phone.addEventListener('input', phoneValidation);
next.addEventListener('click', nextStep);
back.addEventListener('click', prevStep);
yearly.addEventListener('click', yearlyPlan);
monthly.addEventListener('click', monthlyPlan);
arcade.addEventListener('click', arcadePlan);
advanced.addEventListener('click', advancedPlan);
pro.addEventListener('click', proPlan);
arcade.addEventListener('click', arcadePlan);
advanced.addEventListener('click', advancedPlan);
pro.addEventListener('click', proPlan);