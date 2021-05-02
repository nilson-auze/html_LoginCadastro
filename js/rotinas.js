
var username = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordconfirm = document.getElementById("passwordconfirm");

console.log (email.value + password.value)

function cadastreSe() {
    window.location.href= "Cadastro.html"
}

function cancelar() {
    window.location.href= "index3.html"
}

function pagEntrar() {
    window.location.href= "index3.html"
}

                         // senha usuário e senha pra teste
function entrar() {
   if (email.value == "helpdesk@admin.com" && password.value == "123admin") {
      window.location.href= "DuvidaForm.html" 
    } else
     alert("Usuário ou senha invalidos!") 
}