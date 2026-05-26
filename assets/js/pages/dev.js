// Dev Page

const DevPage = {
  render() {
    return `
      <div class="section">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">💻 Dev & Ferramentas</h2>
            <p class="section-subtitle">Ambientes de desenvolvimento integrados com Zénia</p>
          </div>

          <div class="grid-3">
            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">Zedex IDE</h3>
                  <p class="card-subtitle">Ambiente completo de desenvolvimento</p>
                </div>
                <span class="card-badge">IDE</span>
              </div>
              <div class="card-body">
                Editor de código completo com destaque de sintaxe, execução em tempo real e debugging integrado.
              </div>
              <div class="card-footer">
                <a href="https://zedex-ide.onrender.com" target="_blank" rel="noreferrer" class="btn btn-primary flex-1">Abrir IDE →</a>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">Zedex Code</h3>
                  <p class="card-subtitle">Snippets e experimentos rápidos</p>
                </div>
                <span class="card-badge">CODE</span>
              </div>
              <div class="card-body">
                Zona de código para experimentos, snippets rápidos e testes de funcionalidades com IA integrada.
              </div>
              <div class="card-footer">
                <a href="https://ia-zenia.onrender.com/zedex" target="_blank" rel="noreferrer" class="btn btn-primary flex-1">Entrar →</a>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">Portal Central</h3>
                  <p class="card-subtitle">Hub de todos os subprojectos</p>
                </div>
                <span class="card-badge">HUB</span>
              </div>
              <div class="card-body">
                Ponto central de integração de todos os subprojectos Zénia Projects com organização modular.
              </div>
              <div class="card-footer">
                <a href="https://zenia-projects.onrender.com" target="_blank" rel="noreferrer" class="btn btn-primary flex-1">Visitar →</a>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">IA Zénia 5</h3>
                  <p class="card-subtitle">Inteligência Elite para Dev</p>
                </div>
                <span class="card-badge">M5</span>
              </div>
              <div class="card-body">
                Assitente de IA especializado em engenharia, análise de código, otimização e soluções avançadas.
              </div>
              <div class="card-footer">
                <a href="https://zenia-5.onrender.com" target="_blank" rel="noreferrer" class="btn btn-primary flex-1">Acessar →</a>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">IA Zénia 4</h3>
                  <p class="card-subtitle">Assistência profissional</p>
                </div>
                <span class="card-badge">M4</span>
              </div>
              <div class="card-body">
                Interface ativa com comunicação, assistência e apoio profissional para projectos em desenvolvimento.
              </div>
              <div class="card-footer">
                <a href="https://ia-zenia.onrender.com" target="_blank" rel="noreferrer" class="btn btn-primary flex-1">Acessar →</a>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <div>
                  <h3 class="card-title">Downloads</h3>
                  <p class="card-subtitle">Pacotes e versões</p>
                </div>
                <span class="card-badge">DL</span>
              </div>
              <div class="card-body">
                Área de download com versões estáveis, pacotes de desenvolvimento e ferramentas complementares.
              </div>
              <div class="card-footer">
                <a href="https://ia-zenia.onrender.com/download" target="_blank" rel="noreferrer" class="btn btn-primary flex-1">Descarregar →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">🔧 Tecnostack</h2>
            <p class="section-subtitle">Tecnologias e frameworks suportados</p>
          </div>

          <div class="grid-4">
            <div class="card">
              <h3 class="card-title">JavaScript</h3>
              <div class="card-body" style="font-size: 12px;">
                Node.js, React, Vue, Express, Next.js, Vite
              </div>
            </div>

            <div class="card">
              <h3 class="card-title">Python</h3>
              <div class="card-body" style="font-size: 12px;">
                Django, Flask, FastAPI, Pandas, NumPy
              </div>
            </div>

            <div class="card">
              <h3 class="card-title">PHP</h3>
              <div class="card-body" style="font-size: 12px;">
                Laravel, Symfony, WordPress, Composer
              </div>
            </div>

            <div class="card">
              <h3 class="card-title">Outras</h3>
              <div class="card-body" style="font-size: 12px;">
                Java, Go, Rust, C#, Ruby, SQL
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};