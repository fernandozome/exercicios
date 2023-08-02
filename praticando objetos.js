const carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2023,
    potencia: 89
}

const dados_pessoais = {
    nome: "Bruno",
    idade: 32,
    altura: 1.76,
    tem_cnh: false,
    aperlidos: ["Bruninho", "Bru"],
    carro
}

const textCHN = dados_pessoais.tem_cnh ? "possui CNH" : "não possui CNH"

console.log(`${dados_pessoais.nome} tem ${dados_pessoais.idade} anos, ${dados_pessoais.altura}m de altura, ${textCHN}
e os seguintes apelidos:`)
for (let apelido of dados_pessoais.aperlidos) {
    console.log(`-${apelido}`)
}
console.log(carro)