// CONFIGURAÇÃO DA API NEMOTRON
const API_URL = "https://api.kie.ai/v1/chat/completions";
const API_KEY = "SUA_API_KEY_AQUI"; // Coloque sua chave

// ELEMENTOS
const chatBox = document.getElementById("chat");
const sendBtn = document.getElementById("sendBtn");
const promptInput = document.getElementById("prompt");

function addMessage(sender, text) {
  const div = document.createElement("div");
  div.className = sender === "user"
    ? "text-right"
    : "text-left";

  div.innerHTML = `
    <div class="inline-block px-4 py-3 rounded-xl max-w-[80%] ${
      sender === "user"
        ? "bg-[var(--accent)] text-white"
        : "bg-[#0c1627] border border-white/10"
    }">
      ${text}
    </div>
  `;

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const prompt = promptInput.value.trim();
  if (!prompt) return;

  addMessage("user", prompt);
  promptInput.value = "";

  // placeholder
  const loading = document.createElement("div");
  loading.className = "text-left";
  loading.innerHTML =
    `<div class="inline-block px-4 py-3 rounded-xl bg-[#0c1627] border border-white/10 text-gray-400 animate-pulse">
      A pensar...
    </div>`;
  chatBox.appendChild(loading);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "nemotron-3-nano-30b-a3b",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();

    loading.remove();

    if (!data.choices || !data.choices[0]) {
      addMessage("ai", "Erro: resposta inválida da API.");
      return;
    }

    const aiText = data.choices[0].message.content;
    addMessage("ai", aiText);

  } catch (err) {
    loading.remove();
    addMessage("ai", "Erro ao conectar com a API.");
  }
}

sendBtn.addEventListener("click", sendMessage);

promptInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
