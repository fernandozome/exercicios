const numeros = [2, 4, 6, 8, 4]

const dobro = numeros.map((numero) => {
    return numero * 2
})
//console.log(dobro)

const usuarios = [
    { nome: "Pedro", sobrenome: "Souza", idade: 24 },
    { nome: "João", sobrenome: "Gomes", idade: 19 },
    { nome: "Ana", sobrenome: "Faris", idade: 18 }]

const novo_array = usuarios.map((usuario) => {
    return {
        nome_completo: `${usuario.nome} ${usuario.sobrenome}`,
        idade: usuario.idade
    }
})
//console.log(usuarios)

//console.log(novo_array)

const produtos = [
    { nome: "banana", preco: 450 },
    { nome: "arroz", preco: 500 },
    { nome: "biscoito", preco: 200 },
    { nome: "carne", preco: 3200 }]

const produtos_com_desconto = produtos.map((produto) => {
    let desconto = produto.preco * 0.1
    let novo_preco = produto.preco - desconto
    return {
        produto: `${produto.nome}`, preco: `${novo_preco}`, desconto: `${desconto}`
    }
})
console.log(produtos_com_desconto)
