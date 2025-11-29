// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Formulario simulado
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Formulario enviado (simulado).');
});

// Crear partículas burbuja
const container = document.createElement('div');
container.classList.add('particles');
document.body.appendChild(container);

for(let i=0;i<80;i++){
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const size = Math.random()*4+1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.top = `${Math.random()*100}vh`;
  particle.style.left = `${Math.random()*100}vw`;
  particle.style.animationDuration = `${Math.random()*30+20}s`;
  particle.style.opacity = Math.random()*0.3+0.05;
  container.appendChild(particle);
}
