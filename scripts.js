function showHome() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById('home-section').style.display = 'block';
}

function showArticle(articleNumber) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(`article${articleNumber}`).style.display = 'block';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const darkModeButton = document.querySelector('.dark-mode-btn img');
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.src = 'dark-mode-icon.png';
        darkModeButton.alt = 'Light Mode';
    } else {
        darkModeButton.src = 'light-mode-icon.png';
        darkModeButton.alt = 'Dark Mode';
    }
}
