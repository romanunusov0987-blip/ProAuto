const button = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
button.addEventListener('click', () => {
  const open = menu.classList.toggle('active');
  button.classList.toggle('active', open);
  button.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  document.body.classList.toggle('menu-open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('active'); button.classList.remove('active'); document.body.classList.remove('menu-open');
}));
