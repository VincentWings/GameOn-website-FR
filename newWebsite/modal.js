// Variable Declarations
const modalbg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const toggleButton = document.querySelector('#toggleButton');
const reserveForm = document.querySelector("form[name='reserve']");
const readAndAgreedCheckbox = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");

// Event Listeners
toggleButton.addEventListener('click', toggleResponsiveNav);
modalBtns.forEach(btn => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);
reserveForm.addEventListener("submit", validateForm);
readAndAgreedCheckbox.addEventListener('change', toggleSubmitButton);
readAndAgreedCheckbox.addEventListener('change', checkReadAndAgree);

// Initial function calls
// ...

// Function Declarations
function toggleResponsiveNav() {
  const myTopNav = document.getElementById("myTopnav");
  myTopNav.classList.toggle("responsive");
}

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

function validateForm(event) {
  const isValid = checkFields();
  const readAndAgree = checkReadAndAgree();
  console.log(isValid);
  console.log(readAndAgree);
}

function toggleSubmitButton() {
  // Check if the checkbox is checked
  const isCheckboxChecked = readAndAgreedCheckbox.checked; // true or false

  // Toggle the checked attribute of the checkbox:
  // If the checkbox is currently checked, remove the checked attribute; otherwise, add the checked attribute
  // If isCheckboxChecked is true, remove the checked attribute, making the checkbox unchecked
  // If isCheckboxChecked is false, add the checked attribute, making the checkbox checked
  if (isCheckboxChecked) {
    readAndAgreedCheckbox.setAttribute('checked', 'checked');
  } else {
    readAndAgreedCheckbox.removeAttribute('checked');
  }

  console.log(isCheckboxChecked);

  // Set the disabled state of the submit button
  // If the checkbox is checked, enable the submit button; otherwise, disable it
  // Use the logical NOT operator (!) to toggle the checked state:
  // If isCheckboxChecked is true, !isCheckboxChecked becomes false,
  // and if isCheckboxChecked is false, !isCheckboxChecked becomes true.
  submitButton.disabled = !isCheckboxChecked;
}

function checkFields() {
  console.log("checked");
  return true;
}

function checkReadAndAgree(event) {
  const target = event.target;
  console.log("event: ", event);
  console.log("target: ", target);
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