let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    
    // Verifica se está em uma tela menor que 480px
    const isMobile = window.innerWidth <= 480;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Ajusta o offset baseado no tamanho da tela
    const offset = isMobile ? -currentSlide * 100 : -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide++;
    updateCarousel();
}

function prevSlide() {
    currentSlide--;
    updateCarousel();
}

// Adiciona suporte para navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

//correção do button de redes sociaois

// Atualiza o carousel quando a janela é redimensionada
window.addEventListener('resize', updateCarousel);

// Inicializa o carousel
updateCarousel();


 