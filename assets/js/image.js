export async function gerarImagem(prompt) {
  const resp = await fetch("https://gen.pollinations.ai/image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });
  const blob = await resp.blob();
  return URL.createObjectURL(blob);
}