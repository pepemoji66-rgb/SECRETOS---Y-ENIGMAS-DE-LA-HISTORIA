// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Formulario simulado
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Formulario enviado (simulado).');
});

// Acordeón "Sobre mí"
const accordionBtn = document.querySelector('.accordion-btn');
const accordionContent = document.querySelector('.accordion-content');
accordionBtn.addEventListener('click', () => {
  accordionContent.classList.toggle('show');
});

// Crear burbujas flotantes
const bubblesContainer = document.querySelector('.bubbles');
for (let i = 0; i < 30; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 20 + 15;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.animationDuration = `${Math.random() * 20 + 15}s`;
  bubble.style.opacity = Math.random() * 0.5 + 0.4;
  bubblesContainer.appendChild(bubble);
};
