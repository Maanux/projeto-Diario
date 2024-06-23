// Função para atualizar o conteúdo no bloco central
function atualizarDiario() {
  // Captura o elemento onde será exibido o conteúdo do diário
  const diarioContent = document.getElementById("diarioContent");

  // Captura o valor do textarea e remove espaços em branco extras
  const areaDoPost = document.getElementById("areaDoPost").value.trim();

  // Verifica se o textarea não está vazio
  if (areaDoPost) {
    // Cria um novo elemento <div> para cada entrada
    const novoBloco = document.createElement("div");
    novoBloco.classList.add("entrada-diario");

    // Cria um novo elemento <p> para o novo conteúdo
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = areaDoPost;

    // Cria um novo elemento <span> para a data e hora
    const dataHoraSpan = document.createElement("span");
    dataHoraSpan.textContent = obterDataHoraAtual();
    dataHoraSpan.classList.add("data-hora");

    // Adiciona o span de data e hora ao novo parágrafo
    novoParagrafo.appendChild(dataHoraSpan);

    // Adiciona o novo parágrafo ao novo bloco
    novoBloco.appendChild(novoParagrafo);

    // Adiciona o novo bloco ao conteúdo existente no diário
    diarioContent.appendChild(novoBloco);

    // Limpa o textarea após atualizar o diário
    document.getElementById("areaDoPost").value = "";
  } else {
    console.log();
    ("Por favor, escreva algo no diário.");
  }
}

// Função para obter a data e hora atual formatada
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

// Adiciona um event listener para capturar o evento de clique no botão "Atualizar Diário"
document
  .getElementById("atualizarBtn")
  .addEventListener("click", atualizarDiario);

// Função para redirecionar para a página inicial
function sair() {
  // Redirecionar para a página inicial
  var urlSair = "Inicio.html";
  window.location.href = urlSair;
}

// Adiciona event listener para capturar o evento de clique no botão "Sair"
document.getElementById("sairBtn2").addEventListener("click", sair);
