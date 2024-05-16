// Función para alternar el menú abierto y cerrado
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Cerrar el menú si se toca nuevamente en un enlace del menú
var menuLinks = document.querySelectorAll('.header-li-a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.classList.remove('open');
    });
});

// Cerrar el menú si se toca fuera del menú o del botón de menú
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var menuButton = document.querySelector('.header-menu');
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove('open');
    }
});

// Observador de intersección
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Cambiamos el umbral para activar la observación
};

let observer = new IntersectionObserver(callback, options);

// Elementos a observar
let items = document.querySelectorAll('.item');
items.forEach(item => {
    observer.observe(item);
});

// Función de devolución de llamada
function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}