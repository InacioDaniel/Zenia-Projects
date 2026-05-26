// Carrega header/footer em todas as páginas
async function includeComponent(selector, url) {
  const el = document.querySelector(selector);
  if (el) {
    const resp = await fetch(url);
    el.innerHTML = await resp.text();
  }
}
window.addEventListener('DOMContentLoaded', () => {
  includeComponent('#header', '/components/header.html');
  includeComponent('#footer', '/components/footer.html');
});