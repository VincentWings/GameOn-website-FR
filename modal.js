// Variable Declarations
const modalbg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const toggleButton = document.querySelector('#toggleButton');
const reserveForm = document.querySelector("form[name='reserve']");
const readAndAgreedCheckbox = reserveForm.querySelector("#checkbox1");
const submitButton = reserveForm.querySelector(".btn-submit");
const formInputs = reserveForm.querySelectorAll('.formData input');
const confirmationDiv = document.querySelector(".confirmation");
const closeButton = document.querySelector(".btn-close");

// Event Listeners
toggleButton.addEventListener('click', toggleResponsiveNav);
modalBtns.forEach(btn => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);
readAndAgreedCheckbox.addEventListener('change', checkReadAndAgree);
submitButton.addEventListener("click", validateForm);
closeButton.addEventListener("click", closeModal);

// Attach event listeners to form inputs for immediate validation feedback
formInputs.forEach(input => {
  input.addEventListener('input', validateInput); // Trigger validation on input change
  input.addEventListener('blur', validateInput); // Trigger validation when input loses focus
});

// Initial function calls
// ...

// Validation function to validate individual form inputs
function validateInput(event) {
  const input = event.target;
  const formDataElement = input.closest('.formData');
  let errorMessage = '';

  switch (input.id) {
    case 'first':
    case 'last':
      if (!isValidText(input.value)) { // Check if input contains only alphabet characters, hyphens, and spaces
        errorMessage = `Le champ du ${input.id === 'first' ? 'prénom' : 'nom'} ne doit contenir que des lettres, des tirets et des espaces.`; // If the input.id is 'first', it displays "prénom"; otherwise, it displays "nom"
      } else if (input.value.trim().length < 2) { // Trim the value of the input field to remove spaces
        errorMessage = `Veuillez entrer 2 caractères ou plus pour le champ du ${input.id === 'first' ? 'prénom' : 'nom'}.`; // If the input.id is 'first', it displays "prénom"; otherwise, it displays "nom"
      }
      break;

    case 'email':
      const email = input.value.trim(); // Trim the value of the input field to remove spaces
      if (email === '') {
        errorMessage = 'Veuillez entrer votre adresse e-mail.';
      } else if (!isValidEmail(email)) {
        errorMessage = 'Veuillez entrer une adresse e-mail valide.';
      }
      break;

    case 'birthdate':
      if (!isValidDate(input.value)) {
        errorMessage = 'Vous devez entrer votre date de naissance.';
      }
      break;

    case 'quantity':
      const quantity = input.value.trim();
      if (!isValidQuantity(quantity)) {
        errorMessage = 'Veuillez entrer un nombre valide pour le nombre de tournois.';
      }
      break;

    case 'checkbox1':
      if (!input.checked) {
        errorMessage = 'Vous devez vérifier que vous acceptez les termes et conditions.';
      }
      break;
  }

  // Set error message visibility based on validation result
  if (errorMessage) {
    formDataElement.setAttribute('data-error-visible', 'true');
    formDataElement.setAttribute('data-error', errorMessage);
  } else {
    formDataElement.setAttribute('data-error-visible', 'false');
    formDataElement.removeAttribute('data-error');
  }
}

function checkReadAndAgree() {
  // Check if the checkbox is checked
  const isChecked = readAndAgreedCheckbox.checked;

  // Get the parent element with the class 'formData'
  const formDataElement = readAndAgreedCheckbox.closest('.formData');

  // Set error message visibility based on checkbox state
  if (isChecked) {
    formDataElement.setAttribute('data-error-visible', 'false');
    formDataElement.removeAttribute('data-error');
  } else {
    formDataElement.setAttribute('data-error-visible', 'true');
    formDataElement.setAttribute('data-error', 'Vous devez accepter les conditions d\'utilisation.');
  }
}

function checkOptions() {
  // Find all radio buttons with name "location"
  const locationInputs = reserveForm.querySelectorAll('.checkbox-input[type="radio"][name="location"]');
  let formDataElement = null;

  // Check if any radio button is checked
  for (const input of locationInputs) {
    if (input.checked) {
      formDataElement = input.closest('.formData');
      break;
    }
  }

  // Set error message visibility based on radio button state
  if (formDataElement) {
    formDataElement.setAttribute('data-error-visible', 'false');
    formDataElement.removeAttribute('data-error');
  } else {
    formDataElement = reserveForm.querySelector('.checkbox-input[type="radio"][name="location"]:first-of-type')?.closest('.formData');

    if (formDataElement) {
      formDataElement.setAttribute('data-error-visible', 'true');
      formDataElement.setAttribute('data-error', 'Vous devez choisir une option.');
    } else {
      console.error('Error: formDataElement is null');
    }
  }
}

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
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the individual input validation function for each input
  formInputs.forEach(input => validateInput({ target: input }));

  // Check the agreement checkbox and options after individual input validation
  checkReadAndAgree();
  checkOptions();

  // If any form input has an error, prevent the form submission
  const hasError = Array.from(formInputs).some(input => {
    const formDataElement = input.closest('.formData');
    return formDataElement.getAttribute('data-error-visible') === 'true';
  });

  // If there are errors, prevent form submission
  if (hasError) {
    return false;
  }

  // Call the confirmation message function
  confirmMessageSent();

  // If there are no errors, submit the form
  //reserveForm.submit();
}

function confirmMessageSent() {
  confirmationDiv.classList.remove("hide");
  reserveForm.classList.add("hide");
}

function isValidEmail(email) {
  // Regular expression for basic email validation
  // ^          - Asserts the start of the string.
  // [^\s@]+    - Matches one or more characters that are not whitespace or '@'.
  // @          - Matches the '@' symbol.
  // [^\s@]+    - Matches one or more characters that are not whitespace or '@'.
  // \.         - Matches the '.' symbol (escaped with a backslash).
  // [^\s@]+    - Matches one or more characters that are not whitespace or '@'.
  // $          - Asserts the end of the string.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidText(text) {
  // Regular expression for validating names with alphabet characters, hyphens, and spaces
  // ^              - Asserts the start of the string.
  // [a-zA-ZÀ-ÿ\- ] - Matches one or more characters that are either:
  //                    - lowercase alphabet characters (a-z),
  //                    - uppercase alphabet characters (A-Z),
  //                    - accented characters (À-ÿ),
  //                    - hyphens ('-'), or
  //                    - spaces (' ').
  // +              - Quantifier that matches one or more occurrences of the preceding character class.
  // $              - Asserts the end of the string.
  const textRegex = /^[a-zA-ZÀ-ÿ\- ]+$/;
  return textRegex.test(text);
}

function isValidDate(date) {
  // Check if the date is not empty
  return date.trim() !== '';
}

function isValidQuantity(quantity) {
  // Check if the quantity is a valid number
  // Return true if it is a number, otherwise return false
  return quantity !== '' && !isNaN(quantity);
}