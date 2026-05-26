// UI Helper Functions

class UI {
  static toast(message, duration = 2200) {
    const el = document.getElementById('toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(el._timeout);
    el._timeout = setTimeout(() => el.classList.remove('show'), duration);
  }

  static showModal(title, content, actions = []) {
    const modal = document.getElementById('modal');
    const html = `
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">${title}</h2>
          <button class="modal-close" onclick="UI.closeModal()">&times;</button>
        </div>
        <div>${content}</div>
        ${actions.length > 0 ? `
          <div style="display: flex; gap: 12px; margin-top: 20px;">
            ${actions.map(a => `<button class="btn ${a.class || 'btn-primary'}" onclick="${a.onclick}">${a.text}</button>`).join('')}
          </div>
        ` : ''}
      </div>
    `;
    modal.innerHTML = html;
    modal.classList.add('show');
  }

  static closeModal() {
    document.getElementById('modal').classList.remove('show');
  }

  static renderNav(currentPage) {
    const nav = document.getElementById('navMain');
    const pages = [
      { id: 'home', label: 'Home' },
      { id: 'ias', label: 'IAs' },
      { id: 'dev', label: 'Dev' },
      { id: 'api', label: 'API' },
      { id: 'about', label: 'Sobre' }
    ];

    nav.innerHTML = `
      <div class="nav-brand" onclick="App.goPage('home')">
        <div class="nav-brand-logo">Z</div>
        <div>Zénia Projects</div>
      </div>
      <div class="nav-links">
        ${pages.map(p => `
          <a href="#${p.id}" class="${currentPage === p.id ? 'active' : ''}" onclick="App.goPage('${p.id}'); return false;">
            ${p.label}
          </a>
        `).join('')}
      </div>
    `;
  }

  static renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-section">
            <h3>🚀 Zénia Projects</h3>
            <p>Portal central de IA, desenvolvimento e ferramentas profissionais.</p>
          </div>
          <div class="footer-section">
            <h3>📡 Links</h3>
            <p><a href="#home" onclick="App.goPage('home'); return false;">Home</a></p>
            <p><a href="#ias" onclick="App.goPage('ias'); return false;">IAs</a></p>
            <p><a href="#api" onclick="App.goPage('api'); return false;">API</a></p>
          </div>
          <div class="footer-section">
            <h3>💬 Contacto</h3>
            <p>Email: <a href="mailto:projectszenia@gmail.com">projectszenia@gmail.com</a></p>
            <p>Tel: <a href="tel:+244952037562">+244952037562</a></p>
          </div>
        </div>
        <div class="footer-bottom">
          © 2026 Zénia Projects. Dark Theme. Powered by IA Elite.
        </div>
      </div>
    `;
  }
}

// Render footer on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => UI.renderFooter());
} else {
  UI.renderFooter();
}