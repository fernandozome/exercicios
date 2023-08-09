function filtrar(dados) {
    const strt_index = Math.round(dados.length * (10 / 100))
    const end_index = Math.floor(dados.length * (90 / 100))
    const array_fatia = dados.slice(strt_index, end_index)
    console.log(array_fatia)
}

const dados1 = [32, 23, 5, 3, 2, 1, 4, 6, 5, 3, 78, 5, 43423, 2, 4, 65, 89, 0, 65, 43, 43]

filtrar(dados1)