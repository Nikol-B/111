import { closeErrorModal } from './ajax.js';

const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeErrorModal();
  }
});

closeButton.addEventListener('click', () => {
  closeErrorModal();
});
