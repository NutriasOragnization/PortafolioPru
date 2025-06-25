
const secciones = document.querySelectorAll('.animar');
function mostrarSecciones() {
  const trigger = window.innerHeight * 0.8;
  secciones.forEach(seccion => {
    const top = seccion.getBoundingClientRect().top;
    if (top < trigger) seccion.classList.add('visible');
  });
}
window.addEventListener('scroll', mostrarSecciones);
window.addEventListener('load', mostrarSecciones);

document.querySelectorAll('.card').forEach(card => {
  card.onclick = () => {
    document.getElementById(card.dataset.modal).style.display = 'flex';
  };
});
document.querySelectorAll('.modal .close').forEach(x => {
  x.onclick = () => x.closest('.modal').style.display = 'none';
});
window.onclick = e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
};

const toggle = document.getElementById('toggle-tema');
const temaGuardado = localStorage.getItem('tema') || 'oscuro';
document.documentElement.setAttribute('data-theme', temaGuardado);
toggle.textContent = temaGuardado === 'claro' ? '🌙' : '☀️';
toggle.onclick = () => {
  const nuevo = document.documentElement.getAttribute('data-theme') === 'claro' ? 'oscuro' : 'claro';
  document.documentElement.setAttribute('data-theme', nuevo);
  localStorage.setItem('tema', nuevo);
  toggle.textContent = nuevo === 'claro' ? '🌙' : '☀️';
};

window.addEventListener('scroll', () => {
  const prog = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('progress-bar').style.width = prog + '%';
});

const form = document.getElementById('form-contacto');
const gracias = document.getElementById('gracias');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  gracias.style.display = 'block';
});
