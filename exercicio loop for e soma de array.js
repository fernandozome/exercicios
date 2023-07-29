let numeros = [32, 213, 4, 45, 97, 87, 84, 69, 111]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

let soma_dos_numeros = 0

for (let i of numeros) {
    soma_dos_numeros += i
}
console.log(soma_dos_numeros)