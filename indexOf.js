const email = "roberto.alberto@gmail.com"
let posicao_arroba = email.indexOf("@")

if (posicao_arroba > 0 && email.includes(".", posicao_arroba)) {
    console.log("email válido")
} else {
    console.log("email não é valido")
}

