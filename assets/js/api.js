// Zénia API Integration

class ZeniaAPI {
  static BASE_URL = 'https://zenia-5.onrender.com/api/index.php?route=chat';
  
  static MODELS = {
    'm5': { id: 'zenia-m5', name: 'Zénia M5 (Elite PRO)', level: 'Elite', recommended: 'Engenharia, Lógica Complexa' },
    'm4': { id: 'zenia-m4', name: 'Zénia M4', level: 'Alta Performance', recommended: 'Respostas Rápidas' },
    'm3': { id: 'zenia-m3', name: 'Zénia M3', level: 'Performance', recommended: 'Tarefas Quotidianas' },
  };

  static async chat(message, modelKey = 'm5', stream = false) {
    try {
      const model = this.MODELS[modelKey];
      if (!model) throw new Error('Modelo inválido');

      const response = await fetch(this.BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: model.id,
          messages: [{ role: 'user', content: message }],
          stream: stream
        })
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      if (stream) {
        return this._handleStream(response);
      } else {
        const data = await response.json();
        return data.choices?.[0]?.message?.content || 'Sem resposta';
      }
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  static async _handleStream(response) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value);
    }

    return result;
  }

  static async testConnection() {
    try {
      const response = await this.chat('Olá! Testa a tua conexão.');
      return { success: true, message: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

// Simple test endpoint
class APITest {
  static async runTests() {
    const results = [];
    
    results.push({
      name: 'Conexão API',
      status: 'pending',
      result: await this._testConnection()
    });

    results.push({
      name: 'Modelo M5',
      status: 'pending',
      result: await this._testModel('m5')
    });

    results.push({
      name: 'Modelo M4',
      status: 'pending',
      result: await this._testModel('m4')
    });

    return results;
  }

  static async _testConnection() {
    try {
      const test = await ZeniaAPI.testConnection();
      return test.success ? 'Conectado ✓' : `Erro: ${test.error}`;
    } catch (e) {
      return `Falha: ${e.message}`;
    }
  }

  static async _testModel(modelKey) {
    try {
      const response = await ZeniaAPI.chat('Teste', modelKey);
      return response ? 'Funcionando ✓' : 'Sem resposta';
    } catch (e) {
      return `Erro: ${e.message}`;
    }
  }
}