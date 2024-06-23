// Js/index2.js

// Espera até que o documento esteja completamente carregado
$(document).ready(function () {
  // Aplicar a máscara para exigir ao menos 8 caracteres com pelo menos um número
  $("#exampleInputPassword1").mask("0#");
});

function Cadastrar() {
  // Validar Usuário
  const usuario = document.getElementById("exampleInputEmail1").value.trim();
  if (!usuario.match(/^[a-zA-Z0-9._-]{3,16}$/)) {
    alert(
      "Usuário inválido. Deve ter entre 3 e 16 caracteres e conter apenas letras, números, ponto e hífen."
    );
    return false;
  }

  // Validar Senha
  const senha = document.getElementById("exampleInputPassword1").value.trim();
  if (senha.length < 8) {
    alert("Senha inválida. Deve ter pelo menos 8 caracteres.");
    return false;
  }

  // Salvar dados no localStorage
  localStorage.setItem("usuario", usuario);
  localStorage.setItem("senha", senha);

  // Redirecionar para a página de cadastro
  var urlCadastra = "Login.html";
  window.location.href = urlCadastra;
}

function Cancelar() {
  // Cancelar ação de cadastro e redirecionar para a página inicial
  var urlCancela = "Inicio.html";
  window.location.href = urlCancela;
}
