// Переключение тёмной темы
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? '☀️ Светлая тема' 
        : '🌙 Тёмная тема';
});

// Анимация кнопки при клике
document.querySelector('.btn').addEventListener('click', () => {
    alert('дристун!');
});