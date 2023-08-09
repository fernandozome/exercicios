const frutas = ["banana", "manga", "goiaba", "melancia"]

const resultado = frutas.every((fruta_atual) => {
    return fruta_atual !== "abacaxi"
})
console.log(resultado)

const numeros = [1, 2, 3, 4, 5, 6]
const resultado_num = numeros.every((numero) => {
    return numero < 6
})
console.log(resultado_num)