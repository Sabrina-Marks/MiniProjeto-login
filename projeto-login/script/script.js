const name = document.getElementById("name")
const especie = document.getElementById("especie")
const tamanhoAnimal = document.getElementById("tamanhoAnimal")
const idadeAnimal = document.getElementById("idadeAnimal")
const nomeDono = document.getElementById("nomeDono")
const email = document.getElementById("email")
const contato = document.getElementById("contato")
const senha = document.getElementById("senha")

class Cadastros{
    constructor(name, especie, tamanhoAnimal, idadeAnimal, nomeDono, email, contato, senha){
        this.name = name
        this.especie = especie
        this.tamanhoAnimal = tamanhoAnimal
        this.idadeAnimal = idadeAnimal
        this.nomeDono = nomeDono
        this.email = email
        this.contato = contato
        this.senha = senha
    }
}

function redirecionar(){
    const dados = new Cadastros(name.value, especie.value, tamanhoAnimal.value, idadeAnimal.value, nomeDono.value, email.value, contato.value, senha.value)
    localStorage.setItem("cadastro", JSON.stringify(dados))
    window.location.href = "./entry.html"
}