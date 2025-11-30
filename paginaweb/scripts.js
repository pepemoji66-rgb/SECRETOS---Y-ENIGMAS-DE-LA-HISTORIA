// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Formulario simulado
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Formulario enviado (simulado).');
});

// ACORDEONES (solo uno abierto a la vez)
const acordeonBtns = document.querySelectorAll('.acordeon-btn');
acordeonBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const targetId = btn.getAttribute('data-target');
    const panel = document.getElementById(targetId);

    // Cerrar todos los demás
    document.querySelectorAll('.acordeon-panel').forEach(p=>{
      if(p !== panel) p.style.display='none';
    });

    // Alternar el panel actual
    panel.style.display = (panel.style.display==='block') ? 'none' : 'block';
  });
});

// Lightbox galería
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.galeria img').forEach(img=>{
  img.addEventListener('click',()=>{
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

// Cerrar lightbox
lightboxClose.addEventListener('click',()=>{
  lightbox.style.display = 'none';
});
lightbox.addEventListener('click', e=>{
  if(e.target === lightbox){
    lightbox.style.display = 'none';
  }
});
