// Home Page

const HomePage = {
  render() {
    return `
      <div class="hero">
        <div class="container">
          <h1 class="hero-title">Zénia Projects</h1>
          <p class="hero-subtitle">Portal central de inteligência artificial, ferramentas de desenvolvimento e soluções profissionais com núcleos de raciocínio avançado.</p>
          
          <div class="hero-actions">
            <button class="btn btn-primary btn-lg" onclick="App.goPage('ias')">🤖 Explorar IAs</button>
            <button class="btn btn-secondary btn-lg" onclick="App.goPage('api')">📡 API & Testes</button>
            <button class="btn btn-secondary btn-lg" onclick="App.goPage('dev')">💻 Dev Tools</button>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">✨ Características</h2>
            <p class="section-subtitle">Tudo que precisas integrado num só lugar</p>
          </div>

          <div class="grid-3">
            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">🧠 IA Elite</h3>
                  <p class="card-subtitle">Núcleos série M</p>
                </div>
                <span class="card-badge">M5 PRO</span>
              </div>
              <div class="card-body">
                Raciocínio complexo, lógica avançada e engenharia de ponta. Núcleos otimizados para tarefas profissionais.
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">⚡ Performance</h3>
                  <p class="card-subtitle">Rápido e eficiente</p>
                </div>
                <span class="card-badge">HIGH</span>
              </div>
              <div class="card-body">
                Respostas em tempo real, processamento de contexto inteligente e execução otimizada para produção.
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">🔗 Integrado</h3>
                  <p class="card-subtitle">API simples</p>
                </div>
                <span class="card-badge">REST</span>
              </div>
              <div class="card-body">
                Endpoint POST simples com suporte a streaming, múltiplos modelos e configuração flexível.
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">🛠️ Dev Tools</h3>
                  <p class="card-subtitle">Zedex IDE</p>
                </div>
                <span class="card-badge">IDE</span>
              </div>
              <div class="card-body">
                Ambiente completo de desenvolvimento com editor, execução e debugging integrado.
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">📚 Recursos</h3>
                  <p class="card-subtitle">Completos</p>
                </div>
                <span class="card-badge">DOCS</span>
              </div>
              <div class="card-body">
                Documentação completa, exemplos de código, tutoriais e suporte ativo da comunidade.
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">🔒 Seguro</h3>
                  <p class="card-subtitle">Profissional</p>
                </div>
                <span class="card-badge">SSL</span>
              </div>
              <div class="card-body">
                Encriptação end-to-end, autenticação segura e conformidade com standards profissionais.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" style="background: var(--accent-lighter); border-radius: 20px; margin: 40px 0;">
        <div class="container">
          <div style="text-align: center;">
            <h2 class="section-title" style="color: var(--accent);">🚀 Comece Agora</h2>
            <p class="section-subtitle">Escolhe o teu caminho</p>
            
            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 24px;">
              <button class="btn btn-primary btn-lg" onclick="App.goPage('ias')">IAs (${Object.keys(ZeniaAPI.MODELS).length} modelos)</button>
              <button class="btn btn-secondary btn-lg" onclick="App.goPage('api')">API & Testes</button>
              <button class="btn btn-secondary btn-lg" onclick="App.goPage('dev')">Dev & Tools</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};