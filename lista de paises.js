const lista_de_paises = ["Brasil", "Argentina", "Uruguai", "Equador", "Chile"]

lista_de_paises.push("Paraguai")
console.log(lista_de_paises)

lista_de_paises.pop()
console.log(lista_de_paises)

lista_de_paises.unshift("Peru")
console.log(lista_de_paises)

lista_de_paises.shift()
console.log(lista_de_paises)

let ultimo_da_lista = lista_de_paises.length - 1
console.log(lista_de_paises[ultimo_da_lista])

console.log(lista_de_paises[1])
console.log(lista_de_paises[2])