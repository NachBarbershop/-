function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Cerrar el menú si se toca nuevamente
var menuLinks = document.querySelectorAll('.header-li-a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.classList.remove('open');
    });
});

// Cerrar el menú si se toca fuera del menú
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var menuButton = document.querySelector('.header-menu');
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove('open');
    }
});