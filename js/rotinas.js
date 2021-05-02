
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

                         // usuários e senhas pra teste
function entrar() {
   if (email.value == '' || password.value == '') {
        alert("Preencha todos os campos!") 
    } else if 
             (email.value == "nilson@admin.com" && password.value == "adminNilson"  
          ||  email.value == "jonathas@admin.com" && password.value == "adminJonathas" 
          ||  email.value == "Lucas@admin.com" && password.value == "adminLucas" 
          ||  email.value == "Paulo@admin.com" && password.value == "adminPaulo"
          ||  email.value == "Matheus@admin.com" && password.value == "adminMatheus" ) {
      window.location.href= "DuvidaForm.html" 
    } else
     alert("Usuário ou senha invalidos!") 
}