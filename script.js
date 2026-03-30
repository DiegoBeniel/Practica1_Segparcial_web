const btnMenu = document.getElementById('btnMenu');
const barra = document.getElementById('barra');
const overlay = document.getElementById('overlay');
const menuLinks = barra.querySelectorAll('a');
const secciones = document.querySelectorAll('main section');

function abrirMenu() {
  barra.classList.add('abierto'); // desliza la sidebar hacia adentro
  overlay.classList.add('visible');     
  btnMenu.setAttribute('aria-expanded', 'true');
}
function cerrarMenu() {
  barra.classList.remove('abierto'); // oculta la sidebar
  overlay.classList.remove('visible');
  btnMenu.setAttribute('aria-expanded', 'false');
}
btnMenu.addEventListener('click', () => { barra.classList.contains('abierto') ? cerrarMenu() : abrirMenu();
});

// en caso de click fuera del menu
overlay.addEventListener('click', cerrarMenu);
menuLinks.forEach(link => { link.addEventListener('click', cerrarMenu);});

// que seccion esta visible para marcar el subrayado en el secciones
window.addEventListener('scroll', function() {
  let actual = '';
  secciones.forEach(function(seccion) 
  {
    const top = seccion.offsetTop-420;
    const bottom = top + seccion.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) 
      {
      actual = seccion.id;
    }
  });
  menuLinks.forEach(function(link) {
    link.classList.remove('activo');
    if (link.getAttribute('data-seccion') === actual) 
      {
      link.classList.add('activo');
    }
  });

});

secciones.forEach(s => observador.observe(s));

document.addEventListener('DOMContentLoaded', () => {
  btnMenu.setAttribute('aria-expanded', 'false');
});