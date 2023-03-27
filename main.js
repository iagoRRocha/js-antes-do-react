const nome = 'Iago'
const nome2 = 'Paulo'
const a = 1

function verificarNome() {
  if (a == 1) {
    return document.body.innerHTML = `<p class="${nome}"></p>`
  }
  document.body.innerHTML = `<p class="${nome2}"></p>`
}

verificarNome()