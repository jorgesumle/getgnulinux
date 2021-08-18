$(window).on('load', function() {
    initDarkMode();
    $('.sidenav').sidenav();
    $('.language-button-small').dropdown();
    $('.language-button-large').dropdown();
    $('.materialboxed').materialbox();
    $('.flexslider').flexslider({
        animation: 'fade'
    });
    $('.dark-mode-button').on('click', function(e) {
        e.preventDefault();
        toggleDarkMode();
    });
});

function initDarkMode() {
    var root = document.documentElement;
    var darkMode = window.localStorage.getItem('dark-mode');

    if (darkMode === '1' && !root.classList.contains('dark-mode')) {
        toggleDarkMode();
    }
}

function toggleDarkMode() {
    var storage = window.localStorage;
    var button = document.querySelector('.dark-mode-button');
    var icon = button.querySelector('.material-icons');

    document.documentElement.classList.toggle('dark-mode');

    if (icon.textContent === 'dark_mode') {
        icon.textContent = 'light_mode';
        storage.setItem('dark-mode', '1');
    }
    else {
        icon.textContent = 'dark_mode';
        storage.setItem('dark-mode', '0');
    }
}
