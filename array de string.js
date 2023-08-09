

function inverter(texto) {
    const texto_array = texto.split(" ")
    texto_array.reverse()
    let texto_final = ""
    for (let letra of texto_array) {
        texto_final += letra + " "
    }
    console.log(texto_final)
}
inverter("Programar em JavaScript é como dançar com a lógica encantadora.")

function inverter_join(texto) {
    const texto_array = texto.split(" ")
    texto_array.reverse()
    let texto_final = texto_array.join(" ")
    console.log(texto_final)
}

inverter_join("Programar em JavaScript é como dançar com a lógica encantadora")