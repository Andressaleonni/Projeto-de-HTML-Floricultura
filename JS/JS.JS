function fazer_login(event) {
    event.preventDefault()
    const email= document.getElementById("email").value;
    const passaword= document.getElementById("senha").value;

    if(email == "luis@gmail.com" && passaword == "luis@123"){
       alert("Login realizado com sucesso!");
       window.location.href = "cadastro.html"
    } else {
        alert("Usuario não cadastrado, reveja seus dados");
    }
}
