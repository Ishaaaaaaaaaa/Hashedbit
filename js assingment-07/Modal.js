const openModalButton = document.getElementById('open-modal-button');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal-button');


function openModal() {
  modal.classList.remove('hidden');
}


function closeModal() {
  modal.classList.add('hidden'); 
}


openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
