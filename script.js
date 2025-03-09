// Переключение темы
const themeToggle = document.querySelector(".theme-toggle");

// Проверяем, есть ли сохраненная тема
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀ Светлая тема";
}

// Клик по кнопке — меняем тему
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Сохраняем состояние в LocalStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀ Светлая тема";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Тёмная тема";
        }
    });
}

// Скрипт для плавной прокрутки
const scrollBtn = document.querySelector(".scroll-btn");
if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        document.querySelector(".content").scrollIntoView({ behavior: "smooth" });
    });
}