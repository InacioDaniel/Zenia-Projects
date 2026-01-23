        const chatBox = document.getElementById('chatBox');
        const historyList = document.getElementById('historyList');
        const userInput = document.getElementById('userInput');
        let sessions = JSON.parse(localStorage.getItem('zenia_sessions') || '[]');
        let currentSessionId = null;

        function checkQueryString() {
            const params = new URLSearchParams(window.location.search);
            const msg = params.get('msg');
            if (msg) { userInput.value = decodeURIComponent(msg); userInput.style.height = userInput.scrollHeight + 'px'; }
        }

        function init() { renderHistory(); checkQueryString(); if(sessions.length > 0) loadSession(sessions[sessions.length-1].id); else startNewChat(); }

        function startNewChat() { currentSessionId = Date.now(); chatBox.innerHTML = ''; addMessage("Mbwéte! Sou a IA-ZÉNIA do Lubango. O que vamos criar hoje?", false); renderHistory(); }

        async function handleSend(textOverride = null) {
            const query = textOverride || userInput.value.trim();
            if(!query) return;
            addMessage(query, true); userInput.value = ''; userInput.style.height = '48px';
            const loading = addMessage("Zénia está a pensar...", false);

            try {
                const isImageRequest = /desenha|gera uma imagem|pinta|mostra uma foto|imagem de/i.test(query);
                if (isImageRequest) {
                    const imgUrl = `https://pollinations.ai/p/${encodeURIComponent(query)}?width=1024&height=1024&seed=${Math.floor(Math.random()*1000)}&nologo=true`;
                    loading.remove();
                    processResponse(`![ARTE](${imgUrl})`, query);
                } else {
                    const sys = `Você é IA-ZÉNIA do Lubango. Use LaTeX \( \) e \[ \].`;
                    const res = await fetch(`https://text.pollinations.ai/${encodeURIComponent(sys + "\n" + query)}?model=mistral`);
                    const text = await res.text();
                    loading.remove();
                    processResponse(text, query);
                }
            } catch(e) { loading.innerText = "Erro na conexão."; }
        }

        function processResponse(text, query) {
            const wrapper = document.createElement('div');
            wrapper.className = 'msg-wrapper ai-wrapper';
            
            const imgMatch = text.match(/!\[.*?\]\((.*?)\)/);
            if (imgMatch) {
                const loader = document.createElement('div');
                loader.className = 'img-loader';
                loader.innerText = 'Pintando obra de arte...';
                wrapper.appendChild(loader);

                const img = document.createElement('img');
                img.src = imgMatch[1];
                img.className = 'art-img';
                img.onload = () => { loader.remove(); img.style.display = 'block'; chatBox.scrollTop = chatBox.scrollHeight; };
                wrapper.appendChild(img);
                text = text.replace(imgMatch[0], '');
            }

            const parts = text.split(/```/);
            parts.forEach((part, i) => {
                if(i % 2 !== 0) {
                    const lines = part.split('\n');
                    const lang = lines[0].trim() || 'js';
                    const code = lines.slice(1).join('\n').trim();
                    wrapper.appendChild(createCodeBlock(code, lang));
                } else if(part.trim()) {
                    const msgDiv = document.createElement('div');
                    msgDiv.className = 'msg ai-msg';
                    msgDiv.innerHTML = formatAI(part);
                    wrapper.appendChild(msgDiv);
                }
            });

            const controls = document.createElement('div');
            controls.className = 'msg-controls';
            controls.innerHTML = `<span class="ctrl-btn" onclick="handleSend('${query.replace(/'/g, "\\'")}')">🔄 Reenviar</span>
                                  <span class="ctrl-btn" onclick="this.closest('.msg-wrapper').remove()">❌ Apagar</span>
                                  <span class="ctrl-btn" onclick="this.innerHTML='❤️'">👍</span>`;
            wrapper.appendChild(controls);
            chatBox.appendChild(wrapper);
            saveSession(query, text + (imgMatch ? ` [IMAGEM: ${imgMatch[1]}]` : ""));
            document.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function createCodeBlock(code, lang) {
            const div = document.createElement('div');
            div.className = 'code-container';
            div.innerHTML = `<div class="code-header"><span class="text-xs font-bold text-blue-400 uppercase">${lang}</span>
                <div class="flex gap-2"><button class="btn-action" onclick="downloadFile('${code.replace(/'/g, "\\'")}', '${lang}')">📥 BAIXAR</button>
                <button class="btn-action" onclick="copy(this)">COPIAR</button></div></div><pre><code class="language-${lang}">${code.replace(/</g, '&lt;')}</code></pre>`;
            return div;
        }

        function downloadFile(content, lang) {
            const ext = { javascript: 'js', python: 'py', html: 'html' }[lang] || 'txt';
            const blob = new Blob([content], { type: 'text/plain' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `zenia_${Date.now()}.${ext}`; a.click();
        }

        function addMessage(t, isUser) {
            const w = document.createElement('div');
            w.className = `msg-wrapper ${isUser ? 'user-wrapper' : 'ai-wrapper'}`;
            w.innerHTML = `<div class="msg ${isUser ? 'user-msg' : 'ai-msg'}">${isUser ? t : formatAI(t)}</div>`;
            if(isUser) {
                const editCtrl = document.createElement('div');
                editCtrl.className = 'msg-controls self-end';
                editCtrl.innerHTML = `<span class="ctrl-btn" onclick="editMessage(this)">✏️ Editar</span>`;
                w.appendChild(editCtrl);
            }
            chatBox.appendChild(w);
            chatBox.scrollTop = chatBox.scrollHeight;
            return w;
        }

        function editMessage(btn) {
            const wrapper = btn.closest('.msg-wrapper');
            const oldText = wrapper.querySelector('.msg').innerText;
            const newText = prompt("Edite sua mensagem:", oldText);
            if(newText && newText !== oldText) { wrapper.remove(); handleSend(newText); }
        }

        function formatAI(t) { return t.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\\\[([\s\S]*?)\\\]/g, '<div class="math-render">$$$1$$</div>').replace(/\\\((.*?)\\\)/g, '$$$1$$').replace(/\n/g, '<br>'); }
        function copy(btn) { navigator.clipboard.writeText(btn.closest('.code-container').querySelector('code').innerText); btn.innerText = "OK"; setTimeout(() => btn.innerText = "COPIAR", 1000); }
        
        function saveSession(q, a) {
            let session = sessions.find(s => s.id === currentSessionId);
            if(!session) { session = { id: currentSessionId, title: q.substring(0, 20) + '...', messages: [] }; sessions.push(session); }
            session.messages.push({role: 'user', text: q}, {role: 'ai', text: a});
            localStorage.setItem('zenia_sessions', JSON.stringify(sessions)); renderHistory();
        }

        function renderHistory() {
            historyList.innerHTML = '';
            sessions.slice().reverse().forEach(s => {
                const item = document.createElement('div');
                item.className = `hist-item ${s.id === currentSessionId ? 'active' : ''}`;
                item.innerHTML = `<span>${s.title}</span><button onclick="deleteSession(event, ${s.id})">❌</button>`;
                item.onclick = () => loadSession(s.id); historyList.appendChild(item);
            });
        }

        function loadSession(id) {
            currentSessionId = id; const session = sessions.find(s => s.id === id); chatBox.innerHTML = '';
            if(session) session.messages.forEach(m => { 
                if(m.role === 'ai') {
                    if (m.text.includes("[IMAGEM:")) {
                        const url = m.text.match(/\[IMAGEM: (.*?)\]/)[1];
                        processResponse(`![ARTE](${url})`, "");
                    } else processResponse(m.text, "");
                } else addMessage(m.text, true); 
            });
            renderHistory();
        }

        function deleteSession(e, id) { e.stopPropagation(); sessions = sessions.filter(s => s.id !== id); localStorage.setItem('zenia_sessions', JSON.stringify(sessions)); startNewChat(); }
        function clearAllData() { if(confirm("Limpar tudo?")) { localStorage.clear(); location.reload(); } }
        init();
 
