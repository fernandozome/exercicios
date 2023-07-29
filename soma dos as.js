let frase_analisada = "Programar em JavaScript é como dançar com a lógica encantadora."
let soma_dos_as = 0

for (let letra_a of frase_analisada) {
    if (letra_a === "a") {
        soma_dos_as++

    }
}
console.log(soma_dos_as)