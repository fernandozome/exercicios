const nome = "dofagal quithir xyudue"
const array_nome = nome.split(" ")
let nome_formatado = ""

for (let nome of array_nome) {
    let primeira_letra = nome.slice(0, 1)
    let restante_nome = nome.slice(1)
    nome_formatado += primeira_letra.toUpperCase() + restante_nome + " "
}

console.log(nome_formatado.trim())