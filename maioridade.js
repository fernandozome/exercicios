
let array_usuarios = [{ nome: "Pedro", idade: 24 },
{ nome: "João", idade: 19 }, { nome: "Ana", idade: 18 }]

const maioridade = (array) => {
    const resultado = array.every((elemento) => {
        return elemento.idade > 17
    })
    if (resultado) {
        console.log("Festa Liberada!")
    } else {
        console.log("Possui menor de idade")
    }
}

maioridade(array_usuarios)