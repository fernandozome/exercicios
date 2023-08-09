//Buscando um usuário
let array_usuarios = [{ nome: "Pedro", idade: 24 },
{ nome: "João", idade: 19 }, { nome: "Ana", idade: 18 }]

const resultado = array_usuarios.find((usuario) => {
    return usuario.nome === "Ana"
})
console.log(resultado)

//Buscando um número
const numeros = [1, 3, 4, 6, 8, 9, 5, 4, 3, 0]
const resultado_num = numeros.find((numero) => {
    return numero === 3
})
console.log(resultado_num)

//Buscando um carro
const carros = [{ nome: "Onix", marca: "Chevrolet" }, { nome: "Uno", marca: "Fiat" }, { nome: "HB20", marca: "Hyundai" }]
const buscar_carro = (marca, array_carros) => {
    const resultado = array_carros.find((carro) => {
        return carro.marca === marca
    })
    console.log(resultado)
}
const onde_carro = carros.findIndex((carro) => {
    return carro.nome === "Uno"
})
console.log(onde_carro)


buscar_carro("Fiat", carros)