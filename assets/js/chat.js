export async function zeniaChat(message) {
  const resp = await fetch("https://zenia-5.onrender.com/api/index.php?route=chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "zenia-m5",
      messages: [{ role: "user", content: message }],
      stream: false
    })
  });
  return await resp.json();
}