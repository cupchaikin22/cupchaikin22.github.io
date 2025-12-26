// Динамический синий свет за курсором
const cursorLight = document.getElementById('cursor-light');
document.addEventListener('mousemove', e => {
  cursorLight.style.left = e.clientX + 'px';
  cursorLight.style.top = e.clientY + 'px';
});
