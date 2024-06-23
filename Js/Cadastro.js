$(document).ready(function () {
  $("#exampleInputPassword1").mask("0#");
});

function Cadastrar() {
  const usuario = document.getElementById("exampleInputEmail1").value.trim();
  if (!usuario.match(/^[a-zA-Z0-9._-]{3,16}$/)) {
    alert(
      "Usuário inválido. Deve ter entre 3 e 16 caracteres e conter apenas letras, números, ponto e hífen."
    );
    return false;
  }

  const senha = document.getElementById("exampleInputPassword1").value.trim();
  if (senha.length < 8) {
    alert("Senha inválida. Deve ter pelo menos 8 caracteres.");
    return false;
  }

  localStorage.setItem("usuario", usuario);
  localStorage.setItem("senha", senha);

  var urlCadastra = "Login.html";
  window.location.href = urlCadastra;
}

function Cancelar() {
  var urlCancela = "Inicio.html";
  window.location.href = urlCancela;
}
