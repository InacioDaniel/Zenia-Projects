// About Page

const AboutPage = {
  render() {
    return `
      <div class="section">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">ℹ️ Sobre Zénia Projects</h2>
            <p class="section-subtitle">Conhece o nosso projecto e missão</p>
          </div>

          <div class="grid-2">
            <div class="card">
              <h3 class="card-title">🎯 Missão</h3>
              <div class="card-body">
                Criar um ecossistema integrado de inteligência artificial, ferramentas de desenvolvimento e soluções profissionais acessíveis a todos os desenvolvedores.
              </div>
            </div>

            <div class="card">
              <h3 class="card-title">🚀 Visão</h3>
              <div class="card-body">
                Ser a plataforma de referência para IA profissional, offering núcleos de raciocínio avançado e ferramentas de ponta integradas.
              </div>
            </div>

            <div class="card">
              <h3 class="card-title">💡 Valores</h3>
              <div class="card-body">
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Inovação contínua</li>
                  <li>Excelência técnica</li>
                  <li>Acessibilidade</li>
                  <li>Comunidade ativa</li>
                </ul>
              </div>
            </div>

            <div class="card">
              <h3 class="card-title">👥 Equipa</h3>
              <div class="card-body">
                Uma equipa dedicada de desenvolvedores, engenheiros de IA e especialistas em UX trabalhando para oferecer as melhores soluções.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">🌍 Parceiros</h2>
            <p class="section-subtitle">Projectos aliados que ampliam o nosso ecossistema</p>
          </div>

          <div class="grid-2">
            <div class="card">
              <h3 class="card-title">PLEE Universe</h3>
              <div class="card-body">
                Ecossistema de subprojectos colaborativo integrado com Zénia Projects.
              </div>
              <div class="card-footer">
                <a href="https://plee-universe.onrender.com" target="_blank" rel="noreferrer" class="btn btn-primary flex-1">Visitar →</a>
              </div>
            </div>

            <div class="card">
              <h3 class="card-title">ZZénia Projects</h3>
              <div class="card-body">
                Brand oficial com integração profissional de todas as ferramentas do ecossistema.
              </div>
              <div class="card-footer">
                <a href="https://zenia-projects.onrender.com" target="_blank" rel="noreferrer" class="btn btn-primary flex-1">Visitar →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container" style="text-align: center;">
          <div class="card" style="background: var(--accent-lighter); border-color: var(--accent);">
            <h2 class="section-title" style="color: var(--accent);">📞 Contacto</h2>
            <p class="section-subtitle">Tens dúvidas? Fala connosco!</p>
            
            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 20px;">
              <a href="mailto:projectszenia@gmail.com" class="btn btn-primary btn-lg">
                📧 Email
              </a>
              <a href="tel:+244952037562" class="btn btn-secondary btn-lg">
                📱 Ligar
              </a>
              <button class="btn btn-secondary btn-lg" onclick="App.openChat('m5')">
                💬 Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};