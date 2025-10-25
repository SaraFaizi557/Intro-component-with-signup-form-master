const btn = document.querySelector('#btn')
const name = document.querySelector('.name')
const errorName = document.querySelector('.error_name');
const lastName = document.querySelector('.last_name')
const errorLastName = document.querySelector('.error_last');
const email = document.querySelector('.email')
const errorEmail = document.querySelector('.error_email')
const password = document.querySelector('.password')
const errorPassword = document.querySelector('.error_password');


btn.addEventListener('click', function() {
  const validatedName = name.value.trim();
  const validatedLastName = lastName.value.trim();
  const validatedEmail = email.value.trim();
  const validEmail = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
  const validatedPassword = password.value.trim();

  if(validatedName === ""){
    name.classList.add('input');
    name.style.color = 'hsl(0, 100%, 74%)';
    errorName.style.display = 'flex';
  }else {
    name.classList.remove('input');
    name.style.color = 'hsl(249, 10%, 26%)';
    errorName.style.display = 'none';
  }

  if(validatedLastName === ""){
    lastName.classList.add('input');
    lastName.style.color = 'hsl(0, 100%, 74%)';
    errorLastName.style.display = 'flex';
  }else {
    lastName.classList.remove('input');
    lastName.style.color = 'hsl(249, 10%, 26%)';
    errorLastName.style.display = 'none';
  }

  if(!validEmail.test(validatedEmail)) {
    email.classList.add('input');
    email.style.color = 'hsl(0, 100%, 74%)';
    errorEmail.style.display = 'flex';
  } else {
    email.classList.remove('input');
    email.style.color = 'hsl(249, 10%, 26%)';
    errorEmail.style.display = 'none';
    email.textContent = ''
  }

  // Password Validation
  if(validatedPassword === "") {
    password.classList.add('input');
    password.style.color = 'hsl(0, 100%, 74%)';
    errorPassword.style.display = 'flex';
  } else if(validatedPassword.length < 8){
    password.classList.add('input');
    errorPassword.style.display = 'flex';
    password.style.color = 'hsl(0, 100%, 74%)';
    errorPassword.textContent = 'Password must should be equal to 8 characters.'
  }else{
    password.classList.remove('input');
    password.style.color = 'hsl(249, 10%, 26%)';
    errorPassword.style.display = 'none';
  }

})