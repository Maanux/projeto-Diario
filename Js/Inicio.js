// index1.js

$(document).ready(function () {
  // Evento de clique no botão Logar
  $("#btnLogar").click(function () {
    var urlLoga = "Login.html";
    window.location.href = urlLoga;
  });

  // Evento de clique no botão Cadastrar
  $("#btnCadastrar").click(function () {
    var urlCadastra = "Cadastro.html";
    window.location.href = urlCadastra;
  });
});
