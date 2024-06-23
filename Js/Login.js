function logar() {
  const usuario = document.getElementById("exampleInputEmail1").value.trim();
  if (!usuario.match(/^[a-zA-Z0-9._-]{3,16}$/)) {
    alert("Usuário inválido.");
    return false;
  }

  const senha = document.getElementById("exampleInputPassword1").value.trim();
  if (senha.length < 8) {
    alert("Senha inválida.");
    return false;
  }

  const usuarioArmazenado = localStorage.getItem("usuario");
  const senhaArmazenada = localStorage.getItem("senha");

  if (usuario === usuarioArmazenado && senha === senhaArmazenada) {
    alert("Login realizado com sucesso!");

    var urlLoga = "Principal.html";
    window.location.href = urlLoga;
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function Cancelar() {
  var urlCancela = "Inicio.html";
  window.location.href = urlCancela;
}
