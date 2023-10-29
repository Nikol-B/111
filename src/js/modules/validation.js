export function validateForm() {
    const form = document.getElementById('contact-form');
        form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = form.elements.name;
      const emailInput = form.elements.email;
      const phoneInput = form.elements.phone;
      const messageInput = form.elements.message;
  
      // Сброс ошибок перед валидацией
      clearErrors();
  
      // Валидация имени (поле не должно быть пустым)
      if (!nameInput.value == "") {
        displayError(nameInput, 'Имя обязательно к заполнению');
        
      }
  
      // Валидация email (должен быть корректным email-адресом)
      if (!validateEmail(emailInput.value)) {
        displayError(emailInput, 'Введите корректный адрес электронной почты');
      }
  
      // Валидация телефона (поле не должно быть пустым)
      if (!phoneInput.value.trim()) {
        displayError(phoneInput, 'Телефон обязателен к заполнению');
      }
  
      // Валидация сообщения (поле не должно быть пустым)
      if (!messageInput.value.trim()) {
        displayError(messageInput, 'Сообщение обязательно к заполнению');
      }
    });
  }
  
  function displayError(input, message) {
    const errorElement = document.getElementById(`${input.name}-error`);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('error');
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach((element) => {
      element.textContent = '';
      element.style.display = 'none';
    });
  
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.classList.remove('error');
    });
  }
  
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
   