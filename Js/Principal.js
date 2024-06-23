function atualizarDiario() {
  const diarioContent = document.getElementById("diarioContent");

  const areaDoPost = document.getElementById("areaDoPost").value.trim();

  if (areaDoPost) {
    const novoBloco = document.createElement("div");
    novoBloco.classList.add("entrada-diario");

    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = areaDoPost;

    const dataHoraSpan = document.createElement("span");
    dataHoraSpan.textContent = obterDataHoraAtual();
    dataHoraSpan.classList.add("data-hora");

    novoParagrafo.appendChild(dataHoraSpan);

    novoBloco.appendChild(novoParagrafo);

    diarioContent.appendChild(novoBloco);

    document.getElementById("areaDoPost").value = "";
  } else {
    console.log();
    ("Por favor, escreva algo no diário.");
  }
}

function obterDataHoraAtual() {
  const dataHora = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return dataHora.toLocaleDateString("pt-BR", options);
}

document
  .getElementById("atualizarBtn")
  .addEventListener("click", atualizarDiario);

function sair() {
  var urlSair = "Inicio.html";
  window.location.href = urlSair;
}
document.getElementById("sairBtn2").addEventListener("click", sair);
