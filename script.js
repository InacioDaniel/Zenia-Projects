document.getElementById("sendBtn").addEventListener("click", function() {
  const userText = document.getElementById("userInput").value;
  if(userText.trim() !== "") {
    // Redireciona para IA-Zenia com query string
    window.location.href = `https://ia-zenia.netlify.app?msg=${encodeURIComponent(userText)}`;
  }
});
