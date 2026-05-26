// IAs Page

const IAsPage = {
  render() {
    const models = ZeniaAPI.MODELS;
    
    return `
      <div class="section">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">🤖 Inteligências Artificiais</h2>
            <p class="section-subtitle">Núcleos de raciocínio série M - Otimizados para engenharia, lógica e criatividade</p>
          </div>

          <div class="grid-3">
            ${Object.entries(models).map(([key, model]) => `
              <div class="card" style="border-color: var(--accent);">
                <div class="card-header">
                  <div>
                    <h3 class="card-title">${model.name}</h3>
                    <p class="card-subtitle" style="color: var(--accent);">Nível: ${model.level}</p>
                  </div>
                  <span class="card-badge" style="background: var(--accent-light);">${key.toUpperCase()}</span>
                </div>
                <div class="card-body">
                  <p><strong>Recomendado para:</strong></p>
                  <p>${model.recommended}</p>
                </div>
                <div class="card-footer">
                  <button class="btn btn-primary flex-1" onclick="App.testIA('${key}')">🧪 Testar</button>
                  <button class="btn btn-secondary flex-1" onclick="App.openChat('${key}')">💬 Chat</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="section" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">📊 Comparação de Modelos</h2>
          </div>

          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <thead>
                <tr style="border-bottom: 2px solid var(--soft2);">
                  <th style="padding: 12px; text-align: left; color: var(--accent);">Modelo</th>
                  <th style="padding: 12px; text-align: left; color: var(--accent);">Nível</th>
                  <th style="padding: 12px; text-align: left; color: var(--accent);">Velocidade</th>
                  <th style="padding: 12px; text-align: left; color: var(--accent);">Qualidade</th>
                  <th style="padding: 12px; text-align: left; color: var(--accent);">Caso de Uso</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--soft2);">
                  <td style="padding: 12px; color: var(--fg);">Zénia M5</td>
                  <td style="padding: 12px;"><span class="badge badge-success">Elite PRO</span></td>
                  <td style="padding: 12px;">⚡⚡⚡ Rápida</td>
                  <td style="padding: 12px;">⭐⭐⭐⭐⭐ Máxima</td>
                  <td style="padding: 12px;">Engenharia, Lógica Complexa</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--soft2);">
                  <td style="padding: 12px; color: var(--fg);">Zénia M4</td>
                  <td style="padding: 12px;"><span class="badge">Alta</span></td>
                  <td style="padding: 12px;">⚡⚡⚡⚡ Muito Rápida</td>
                  <td style="padding: 12px;">⭐⭐⭐⭐ Excelente</td>
                  <td style="padding: 12px;">Respostas Rápidas</td>
                </tr>
                <tr>
                  <td style="padding: 12px; color: var(--fg);">Zénia M3</td>
                  <td style="padding: 12px;"><span class="badge">Standard</span></td>
                  <td style="padding: 12px;">⚡⚡⚡⚡⚡ Instantânea</td>
                  <td style="padding: 12px;">⭐⭐⭐ Boa</td>
                  <td style="padding: 12px;">Tarefas Quotidianas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }
};