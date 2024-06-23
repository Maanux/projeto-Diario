function logar() {
  // Validar Usuário
  const usuario = document.getElementById("exampleInputEmail1").value.trim();
  if (!usuario.match(/^[a-zA-Z0-9._-]{3,16}$/)) {
    alert("Usuário inválido.");
    return false;
  }

  // Validar Senha
  const senha = document.getElementById("exampleInputPassword1").value.trim();
  if (senha.length < 8) {
    alert("Senha inválida.");
    return false;
  }

  // Recuperar dados do localStorage
  const usuarioArmazenado = localStorage.getItem("usuario");
  const senhaArmazenada = localStorage.getItem("senha");

  // Verificar se os dados de login correspondem aos armazenados
  if (usuario === usuarioArmazenado && senha === senhaArmazenada) {
    alert("Login realizado com sucesso!");

    // Redirecionar para a página de login
    var urlLoga = "Principal.html";
    window.location.href = urlLoga;
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function Cancelar() {
  // Cancelar ação de login e redirecionar para a página inicial
  var urlCancela = "Inicio.html";
  window.location.href = urlCancela;
}
