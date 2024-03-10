const editar = document.getElementById("editar")
const valoresCadastrados = JSON.parse(localStorage.getItem("cadastro"))

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
    window.location.href = '../html/hallo.html'
}

function editarInfo() {
    const dados = new Cadastros(nome.value, especie.value, tamanhoAnimal.value, idadeAnimal.value, nomeDono.value, email.value, contato.value, senha.value)
    localStorage.setItem("cadastro", JSON.stringify(dados))
    redirecionar()
}

editar.addEventListener('submit', e => {
    e.preventDefault()
})


editar.innerHTML = `<h2>Editar Informações </h2>
<div>
<label>Nome do Animal:</label>
<input value="${valoresCadastrados.name}" type="text" class="input name" id="nome" >
</div>
<div>
<label>Espécie:</label>
<input value="${valoresCadastrados.especie}" type="text" class="input Especie" id="especie">
</div>
<div>
<label>Tamanho do Animal:</label>
<input value="${valoresCadastrados.tamanhoAnimal}" type="text" class="input tamanho" id="tamanhoAnimal">
</div>
<div>
<label>Idade do Animal:</label>
<input value="${valoresCadastrados.idadeAnimal}" type="number" class="input idade" id="idadeAnimal">
</div> 
<div>
<label>Nome do dono:</label>
<input value="${valoresCadastrados.nomeDono}" type="text" class="input nomeDono" id="nomeDono">
</div>
<div>
<label>E-mail:</label>
<input value="${valoresCadastrados.email}" type="email" class="input email" id="email" required>
</div>
<div>
<label>Contato:</label>
<input value="${valoresCadastrados.contato}" type="text" class="input contato" id="contato">
</div>
<div>
<label>Senha:</label>
<input value="${valoresCadastrados.senha}" type="password" class="input senha" id="senha">
</div>
<button onclick="editarInfo()">Editar informações</button>`
