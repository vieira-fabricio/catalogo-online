const cards = document.querySelectorAll('.product-card');
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const nome = card.getAttribute('data-nome');
    const descricao = card.getAttribute('data-descricao');
    const imagem = card.getAttribute('data-imagem');

    modalImg.src = imagem;
    modalTitle.textContent = nome;
    modalDesc.textContent = descricao;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});