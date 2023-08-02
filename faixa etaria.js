function faixa_etaria(idade) {
    if (idade <= 21) {
        texto_etario = "jovem"
        return `Esta pessoa é ${texto_etario}`
    } else if (idade < 66) {
        texto_etario = "adulto(a)"
        return `Esta pessoa é ${texto_etario}`
    } else {
        texto_etario = "idoso(a)"
        return `Esta pessoa é ${texto_etario}`
    }
}

const texto_final = faixa_etaria(75)
console.log(texto_final)