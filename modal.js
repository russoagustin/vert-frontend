const modalOverlay = document.querySelector('.modal-overlay');
const modalImage = document.querySelector('.modal-image');
const modalPrice = document.querySelector('.modal-price');
const closeButton = document.querySelector('.modal-close');

document.querySelectorAll('.catalog-item img').forEach(img => {
    img.addEventListener('click', () => {
        const figure = img.closest('figure');
        const priceElement = figure.querySelector('.item-price');
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalPrice.textContent = priceElement ? priceElement.textContent : '';
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

closeButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', event => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
