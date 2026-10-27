// Menú para celular
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('abierto');
  });

  menu.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', () => menu.classList.remove('abierto'));
  });
}

// Animación al hacer scroll
const elementos = document.querySelectorAll('.reveal');

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

elementos.forEach((el) => observador.observe(el));

// Año automático en el pie de página
const anio = document.getElementById('anio');
if (anio) {
  anio.textContent = new Date().getFullYear();
}
