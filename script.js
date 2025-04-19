
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

const darkModeButton = document.getElementById('dark-mode-toggle');
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}
