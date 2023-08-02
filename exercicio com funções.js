const cadastro = {
    nome: "João",
    idade: 34,
    profissao: "estudante",
    altura: 1.76
}

function apresentacao() {
    textoidade = cadastro.idade < 18 ? "jovem" : "adulto"
    console.log(`Olá! Meu nome é ${cadastro.nome}, sou um ${textoidade} de ${cadastro.idade} anos, 
tenho ${cadastro.altura}m de altura e sou ${cadastro.profissao}`)
}

apresentacao()