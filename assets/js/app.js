// Main Application

const App = {
  currentPage: 'home',
  pages: {
    home: HomePage,
    ias: IAsPage,
    dev: DevPage,
    api: APIPage,
    about: AboutPage
  },

  init() {
    this.loadPages();
    this.goPage('home');
  },

  loadPages() {
    // Load page scripts
    const scripts = [
      'assets/js/pages/home.js',
      'assets/js/pages/ias.js',
      'assets/js/pages/api.js',
      'assets/js/pages/dev.js',
      'assets/js/pages/about.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
    });
  },

  goPage(pageId) {
    if (!this.pages[pageId]) {
      console.error('Página não encontrada:', pageId);
      return;
    }

    this.currentPage = pageId;
    const page = this.pages[pageId];
    
    const main = document.getElementById('conteudo');
    main.innerHTML = page.render();
    
    UI.renderNav(pageId);
    
    window.scrollTo(0, 0);
    window.location.hash = pageId;
  },

  async testIA(modelKey) {
    UI.toast('🧪 Testando modelo ' + modelKey.toUpperCase() + '...');
    
    try {
      const response = await ZeniaAPI.chat('Teste de conexão', modelKey);
      UI.showModal(
        '✅ Teste Bem-sucedido',
        `<div style="background: var(--soft); padding: 12px; border-radius: 8px; font-size: 12px;">
          <p><strong>Modelo:</strong> ${ZeniaAPI.MODELS[modelKey].name}</p>
          <p><strong>Resposta:</strong></p>
          <p style="font-family: var(--mono); white-space: pre-wrap;">${response}</p>
        </div>`,
        [{ text: 'Fechar', onclick: 'UI.closeModal()' }]
      );
    } catch (error) {
      UI.toast('❌ Erro no teste: ' + error.message);
    }
  },

  openChat(modelKey) {
    const model = ZeniaAPI.MODELS[modelKey];
    let chatMessages = [];

    const chatHTML = `
      <div style="display: flex; flex-direction: column; height: 400px;">
        <div id="chatBox" style="flex: 1; overflow-y: auto; background: var(--soft); padding: 12px; border-radius: 8px; margin-bottom: 12px; font-size: 12px;">
          <p style="color: var(--muted);">Chat com ${model.name}</p>
        </div>
        <div style="display: flex; gap: 8px;">
          <input type="text" id="chatInput" class="form-control" placeholder="Escreve uma mensagem..." style="flex: 1;" />
          <button class="btn btn-primary" onclick="App.sendChatMessage('${modelKey}')">Enviar</button>
        </div>
      </div>
    `;

    UI.showModal(`💬 Chat com ${model.name}`, chatHTML, [{ text: 'Fechar', onclick: 'UI.closeModal()' }]);
  },

  async sendChatMessage(modelKey) {
    const input = document.getElementById('chatInput');
    const chatBox = document.getElementById('chatBox');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    chatBox.innerHTML += `<p style="text-align: right; color: var(--accent);"><strong>Tu:</strong> ${message}</p>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
      const response = await ZeniaAPI.chat(message, modelKey);
      chatBox.innerHTML += `<p style="color: var(--fg);"><strong>Zénia:</strong> ${response}</p>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
      chatBox.innerHTML += `<p style="color: var(--danger);"><strong>Erro:</strong> ${error.message}</p>`;
    }
  }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

// Handle hash navigation
window.addEventListener('hashchange', () => {
  const page = window.location.hash.slice(1) || 'home';
  App.goPage(page);
});