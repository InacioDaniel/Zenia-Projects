// API Page

const APIPage = {
  render() {
    return `
      <div class="section">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">📡 API & Integração</h2>
            <p class="section-subtitle">Endpoint REST simples para integrar diálogos inteligentes nas tuas aplicações</p>
          </div>

          <div class="grid-2">
            <div class="card">
              <h3 class="card-title">📍 Endpoint</h3>
              <div class="card-body">
                <p style="margin: 0;"><strong>POST</strong></p>
                <p style="font-family: var(--mono); background: var(--soft); padding: 10px; border-radius: 8px; margin: 8px 0 0;">
                  https://zenia-5.onrender.com/api/index.php?route=chat
                </p>
              </div>
            </div>

            <div class="card">
              <h3 class="card-title">📦 Request Body</h3>
              <div class="card-body">
                <pre style="background: var(--soft); padding: 12px; border-radius: 8px; overflow-x: auto; font-size: 11px; margin: 0;">{
  "model": "zenia-m5",
  "messages": [
    {
      "role": "user",
      "content": "Olá!"
    }
  ],
  "stream": false
}</pre>
              </div>
            </div>
          </div>

          <div class="card" style="margin-top: 20px;">
            <h3 class="card-title">🧪 Testar API</h3>
            <div style="margin-top: 16px;">
              <div class="form-group">
                <label class="form-label">Modelo</label>
                <select class="form-control" id="apiTestModel">
                  <option value="m5">Zénia M5 (Elite)</option>
                  <option value="m4">Zénia M4</option>
                  <option value="m3">Zénia M3</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Mensagem</label>
                <textarea class="form-control" id="apiTestMessage" placeholder="Escreve uma mensagem para testar...">Olá Zénia, como posso integrar a tua API no meu projeto?</textarea>
              </div>

              <button class="btn btn-primary btn-lg" onclick="APIPage.testAPI()" style="width: 100%;">🚀 Enviar Teste</button>
            </div>

            <div id="apiTestResult" style="display: none; margin-top: 20px;">
              <div style="background: var(--soft); padding: 16px; border-radius: 8px;">
                <p style="font-size: 12px; color: var(--muted); margin: 0 0 8px;">Resposta:</p>
                <p id="apiTestResultText" style="margin: 0; font-family: var(--mono); font-size: 12px;"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" style="background: var(--bg-secondary);">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">💻 Exemplos de Código</h2>
          </div>

          <div class="grid-2">
            <div class="card">
              <h3 class="card-title">JavaScript</h3>
              <pre style="background: var(--soft); padding: 12px; border-radius: 8px; overflow-x: auto; font-size: 11px; margin-top: 12px;">const response = await fetch(
  'https://zenia-5.onrender.com/api/index.php?route=chat',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'zenia-m5',
      messages: [{
        role: 'user',
        content: 'Olá!'
      }],
      stream: false
    })
  }
);
const data = await response.json();</pre>
            </div>

            <div class="card">
              <h3 class="card-title">Python</h3>
              <pre style="background: var(--soft); padding: 12px; border-radius: 8px; overflow-x: auto; font-size: 11px; margin-top: 12px;">import requests

response = requests.post(
  'https://zenia-5.onrender.com/api/index.php?route=chat',
  json={
    'model': 'zenia-m5',
    'messages': [{
      'role': 'user',
      'content': 'Olá!'
    }],
    'stream': False
  }
)
data = response.json()</pre>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async testAPI() {
    const model = document.getElementById('apiTestModel').value;
    const message = document.getElementById('apiTestMessage').value;
    
    if (!message.trim()) {
      UI.toast('❌ Escreve uma mensagem!');
      return;
    }

    const resultDiv = document.getElementById('apiTestResult');
    const resultText = document.getElementById('apiTestResultText');
    resultDiv.style.display = 'none';
    resultText.innerHTML = '<div class="loading"></div> Carregando...';
    resultDiv.style.display = 'block';

    try {
      const response = await ZeniaAPI.chat(message, model);
      resultText.textContent = response || 'Sem resposta';
      UI.toast('✅ Teste bem-sucedido!');
    } catch (error) {
      resultText.textContent = `❌ Erro: ${error.message}`;
      UI.toast('❌ Erro no teste');
    }
  }
};