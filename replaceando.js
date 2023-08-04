const valor_original = "87.90"
let valor_alterado = valor_original.replace(".", ",")
console.log(valor_alterado)

let valor_milhar = "2,600,00"


function replaceall(original, texto, newtexto) {
    while (original !== original.replace(texto, newtexto)) {
        original = original.replace(texto, newtexto)
    }
    return original
}

console.log(replaceall(valor_milhar, ",", "."))