const dialog = document.querySelector('#login-dialog');
const scanner = document.querySelector('#scanner');
const toast = document.querySelector('.toast');

document.querySelectorAll('[data-open-login]').forEach((button) => button.addEventListener('click', () => dialog.showModal()));
document.querySelector('[data-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

document.querySelectorAll('[data-role]').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelectorAll('[data-role]').forEach((item) => item.classList.toggle('active', item === tab));
  document.querySelector('#login-form button').firstChild.textContent = tab.dataset.role === 'admin' ? 'Admin-Login ' : 'Anmelden ';
}));

document.querySelector('#login-form').addEventListener('submit', (event) => {
  event.preventDefault(); dialog.close(); showToast('Willkommen zurück – dein Abenteuer wartet!');
});

document.querySelectorAll('[data-scan]').forEach((button) => button.addEventListener('click', () => { scanner.hidden = false; }));
document.querySelector('[data-close-scan]').addEventListener('click', () => { scanner.hidden = true; });
document.querySelectorAll('[data-start]').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('#touren').scrollIntoView({ behavior: 'smooth' }); showToast('Wähle dein nächstes Abenteuer!');
}));

function showToast(message) {
  toast.textContent = message; toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2800);
}
