const cadastro = JSON.parse(localStorage.getItem("cadastro"))
const dados = document.getElementById("dados")

dados.innerHTML = `

<h3> Nome do Animal:${cadastro.name}</h3>
<h3> Espécie:${cadastro.especie}<h3>
<h3> Tamanho do Animal:${cadastro.tamanhoAnimal}<h3>
<h3> Idade do Animal:${cadastro.idadeAnimal}<h3>
<h3> Nome do Dono:${cadastro.nomeDono}<h3>
<h3> E-mail:${cadastro.email}<h3>
<h3> Contato:${cadastro.contato}<h3>
<h3> Senha:${cadastro.senha}<h3>
<a href="cas.html">Editar Informaçoes</a> <br>`

