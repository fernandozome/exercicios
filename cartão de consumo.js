const cliente = {
    nome: "João Pedro",
    idade: 35,
    produtos: [
        {
            nome_produto: "Refrigerante",
            valor_unit: 300,
            quantidade_comprada: 3,
        },
        {
            nome_produto: "Cerveja",
            valor_unit: 700,
            quantidade_comprada: 5,
        },
        {
            nome_produto: "Água",
            valor_unit: 500,
            quantidade_comprada: 2,
        }
    ]
}
console.log(cliente.nome)
console.log(cliente.idade)

cliente.idade = 45
console.log(cliente.idade)
console.log(cliente.produtos[0].nome_produto)
console.log(cliente.produtos[cliente.produtos.length - 1].valor_unit)

let soma = 0

for (let produtos of cliente.produtos) {
    soma += (produtos.valor_unit * produtos.quantidade_comprada) / 100
}

let text_pagamento = soma = 0 ? "Não há produtos" : console.log(`${cliente.nome}, a sua conta é de R$${soma.toFixed(2)} reais.`)