// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const toggleButton = document.querySelector('#toggleButton');
const reserveForm = document.querySelector("form[name='reserve']");

// Toggle Responsive nav
toggleButton.addEventListener('click', toggleResponsiveNav);

// Launch modal event
modalBtns.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalClose.addEventListener("click", closeModal);

// Add event listener for form submission
reserveForm.addEventListener("submit", validateForm);

// Toggle Responsive nav
function toggleResponsiveNav() {
  const myTopNav = document.getElementById("myTopnav");
  myTopNav.classList.toggle("responsive");
}

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate form
function validateForm(event) {
  event.preventDefault();

  const isValid = checkFields();

  if (isValid) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// Check fields
function checkFields() {
  console.log("checked");
  return true;
}

/*
// Check if input is not empty
function isNotEmpty(input) {
  if (input.value.trim() !== "") {
    input.classList.remove("error");
    return true;
  } else {
    input.classList.add("error");
    return false;
  }
}

// Check minimum of characters
function hasMinimumCharacters(input, minLength) {
  return input.value.trim().length >= minLength;
}

// Check if email is valid
function isValidEmail(input) {
  const emailValue = input.value.trim();
  console.log("Email value:", emailValue); // Log the email value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailValue);
}

// Check fields
function checkFields() {
  // Select each input field by its ID
  const firstNameInput = document.querySelector("#first");
  const lastNameInput = document.querySelector("#last");
  const emailInput = document.querySelector("#email");
  const birthdateInput = document.querySelector("#birthdate");
  const quantityInput = document.querySelector("#quantity");
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const checkbox1Input = document.querySelector("#checkbox1");
  const checkbox2Input = document.querySelector("#checkbox2");

  if (isNotEmpty(firstNameInput)) {
    console.log("First name is not empty");
  } else {
    console.log("First name is empty");
  }

  if (hasMinimumCharacters(firstNameInput, 2)) {
    console.log("First name has minimum of characters");
  } else {
    console.log("First name doesn't have the minimum of characters");
  }

  if (isNotEmpty(lastNameInput)) {
    console.log("Last name is not empty");
  } else {
    console.log("Last name is empty");
  }

  if (hasMinimumCharacters(lastNameInput, 2)) {
    console.log("Last name has minimum of characters");
  } else {
    console.log("Last name doesn't have the minimum of characters");
  }

  if (isNotEmpty(emailInput)) {
    console.log("email is not empty");
  } else {
    console.log("email is empty");
  }

  if (isValidEmail(emailInput)) {
    console.log("email is not valid");
  } else {
    console.log("email is valid");
  }

  if (isNotEmpty(birthdateInput)) {
    console.log("Birthdate is not empty");
  } else {
    console.log("Birthdate is empty");
  }

  if (isNotEmpty(quantityInput)) {
    console.log("Quantity is not empty");
  } else {
    console.log("Quantity is empty");
  }

  // If all checks pass, return true
  return true;
}
*/