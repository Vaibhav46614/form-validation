const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const emailId = document.getElementById('emailId');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

fullName.addEventListener('change', validateName);
emailId.addEventListener('change', validateEmail);
phoneNumber.addEventListener('input', validatePhone);
password.addEventListener('change', validatePassword);
confirmPassword.addEventListener('change', validateConfirmPassword);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;
    if (isValid) { alert("Registration successful!"); form.reset(); clearErrors(); }
});

function validateName() {
    if (fullName.value.trim().length < 5) { nameError.textContent = "Name must be at least 5 characters long."; return false; } 
    else { nameError.textContent = ""; return true; }
}

function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailId.value.trim())) { emailError.textContent = "Enter a valid email."; return false; } 
    else { emailError.textContent = ""; return true; }
}

function validatePhone() {
    const phone = phoneNumber.value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) { phoneError.textContent = "Phone must be a 10-digit number."; return false; } 
    else if (phone === "1234567890") { phoneError.textContent = "Phone number cannot be 1234567890."; return false; } 
    else { phoneError.textContent = ""; return true; }
}

function validatePassword() {
    const pwd = password.value.trim();
    const lowerPwd = pwd.toLowerCase();
    const name = fullName.value.trim().toLowerCase();
    if (pwd.length < 8) { passwordError.textContent = "Password must be at least 8 characters."; return false; } 
    else if (lowerPwd === "password") { passwordError.textContent = "Password cannot be 'password'."; return false; } 
    else if (lowerPwd === name) { passwordError.textContent = "Password cannot be your name."; return false; } 
    else if (pwd.includes(" ")) { passwordError.textContent = "Password cannot contain spaces."; return false; } 
    else { passwordError.textContent = ""; return true; }
}

function validateConfirmPassword() {
    if (confirmPassword.value.trim() !== password.value.trim()) { confirmPasswordError.textContent = "Passwords do not match."; return false; } 
    else { confirmPasswordError.textContent = ""; return true; }
}

function clearErrors() {
    nameError.textContent="";
    emailError.textContent="";
    phoneError.textContent="";
    passwordError.textContent="";
    confirmPasswordError.textContent="";
}
