document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hearts-bg');
    const carta = document.getElementById('carta');
    const btnAbrir = document.getElementById('abrir-carta');
    const colors = ['#ff4081', '#ff1493', '#ff69b4', '#ff0066', '#ff007f'];
    
    // Función para crear corazones animados
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = `${Math.random() * 25 + 15}px`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        heart.style.animation = `float ${Math.random() * 6 + 4}s linear infinite`;
        container.appendChild(heart);
    }
    
    // Detecta si es móvil
const isMobile = window.innerWidth < 768;

// Ajusta la cantidad de corazones
const heartCount = isMobile ? 80 : 300; // Menos corazones en móvil

// Genera los corazones
for (let i = 0; i < heartCount; i++) {
    setTimeout(createHeart, i * 100); // Espaciado para mejor rendimiento
}
    
    // Mostrar carta al hacer clic en el botón
    btnAbrir.addEventListener('click', function() {
        carta.classList.remove('hidden');
        carta.classList.add('visible');
        btnAbrir.style.display = 'none'; // Ocultar botón después de abrir
    });
});