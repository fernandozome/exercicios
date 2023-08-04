const ultimos_digitos = "3456"
const num_cartão = ultimos_digitos.padStart(19, "****")
console.log(num_cartão)

function imprimir_data(dia, mes, ano) {
    const dia_format = String(dia).padStart(2, "0")
    const mes_format = String(mes).padStart(2, "0")

    console.log(`${dia_format}/${mes_format}/${ano}`)
}
imprimir_data(1, 3, 2002)