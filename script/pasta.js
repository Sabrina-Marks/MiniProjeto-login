function login(){
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    console.log(email, senha)
    
    const cadastro = JSON.parse(localStorage.getItem("cadastro"))
    if(cadastro === null){
        document.getElementById("mensagem").innerText = `Cadastre-se primeiro`
    }else if(email.value === cadastro.email && senha.value === cadastro.senha){
        window.location.href = "../html/detailsUser.html"
    }else{
        document.getElementById("mensagem").innerText = `Senha ou e-mail invalidos`
    }
}
