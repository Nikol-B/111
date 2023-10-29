export function sendFormData() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Очистка ошибок перед отправкой
      clearErrors();
  
      const formData = new FormData(form);
  
      fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'error') {
            handleErrors(data.fields);
            } else if (data.status === 'success') {
            clearForm();
            displayModal(data.message);
            
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach((element) => {
      element.textContent = '';
      element.style.display = 'none';
    });
  }
  
  function handleErrors(fields) {
    for (const fieldName in fields) {
      const input = document.querySelector(`[name="${fieldName}"]`);
      const errorMessage = fields[fieldName];
      displayError(input, errorMessage);
    }
  }
  
  function displayError(input, message) {
    const errorElement = document.getElementById(`${input.name}-error`);
    errorElement.textContent= message;
    errorElement.style.display = 'block';
    input.classList.add('error');
  }
  
  function clearForm() {
    const form = document.getElementById('contact-form');
    form.reset();
  }
  
  function displayModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
  }
  
  export function closeErrorModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  