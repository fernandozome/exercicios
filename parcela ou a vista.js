let valor_da_compra = 100
let qunt_de_parecelas = 12
let valor_parcelas = valor_da_compra / qunt_de_parecelas
let valor_desconto = valor_da_compra * 10 / 100
let taxa_de_juros = 1
let montante = valor_da_compra * (1 + taxa_de_juros / 100) ** qunt_de_parecelas


if (qunt_de_parecelas === 1) {
    valor_da_compra = valor_da_compra.toFixed(2) - valor_desconto.toFixed(2)
    console.log(`Você deve pagar R$ ${valor_da_compra} tem 10% de desconto`)
} else if (qunt_de_parecelas >= 2 && qunt_de_parecelas <= 6) {
    valor_parcelas = valor_da_compra.toFixed(2) / qunt_de_parecelas
    console.log(`Você comprou em ${qunt_de_parecelas} vezes sem juros de R$ ${valor_parcelas}`)
} else if (qunt_de_parecelas >= 7 && qunt_de_parecelas <= 12) {
    valor_parcelas = montante.toFixed(2) / qunt_de_parecelas
    console.log(`Você comprou em ${qunt_de_parecelas} vezes com juros de R$ ${valor_parcelas}, num total de R$ ${montante.toFixed(2)}`)
} else {
    console.log("Número de parcelas inválido.")
}