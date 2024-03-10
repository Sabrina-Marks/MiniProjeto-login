const editar = document.getElementById("editar")
const valoresCadastrados =  JSON.parse(localStorage.getItem("cadastro"))

function editarInfo(){
    const dados = new Cadastros(name.value, especie.value, tamanhoAnimal.value, idadeAnimal.value, nomeDono.value, email.value, contato.value, senha.value)

localStorage.setItem("cadastro", JSON.stringify(dados))
window.location.href='./hallo.html'
}

editar.innerHTML = ` <h2>Editar Informações </h2>
<div>
<label>Nome do Animal:</label>
<input value="${valoresCadastrados.name}" type="text" class="input name" id="name" >
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
<input value"${valoresCadastrados.nomeDono}" type="text" class="input nomeDono" id="nomeDono">
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
<a href="hallo.html">Editar Informaçoes</a> <br>`
console.log(valoresCadastrados)



