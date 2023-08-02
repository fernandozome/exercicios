function imprimirOla() {
    const cadastro = {
        nome: "João",
        sobrenome: "Silva",
        idade: 43,
        profissao: "pintor",
        tem_cnh: true
    }
    console.log(`Olá, sou ${cadastro.nome}, tenho ${cadastro.idade} anos e sou ${cadastro.profissao}`)
}

imprimirOla()