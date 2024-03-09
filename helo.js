const cadastro = JSON.parse(localStorage.getItem("cadastro"))
const resultados = document.getElementById("resultados")
resultados.innerHTML = `<p>${cadastro.contato} </p>`