
function faixa_etaria(idade) {
    if (idade <= 21) {
        return "jovem"
    } else if (idade > 21 && idade < 66) {
        return "adulto(a)"
    } else {
        return "idoso(a)"
    }
}

function apresentacao(cadastro) {
    const texto_idade = faixa_etaria(cadastro.idade)
    console.log(`Olá! Meu nome é ${cadastro.nome}, sou um(a) ${texto_idade} de ${cadastro.idade} anos, 
tenho ${cadastro.altura}m de altura e sou ${cadastro.profissao}`)
}



const cadastro_ana = {
    nome: "Ana",
    idade: 23,
    profissao: "Arquiteta",
    altura: 1.78
}
const cadastro_joao = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.76
}
const cadastro_felipe = {
    nome: "Felipe",
    idade: 66,
    profissao: "Pintor",
    altura: 1.76
}
apresentacao(cadastro_ana)
apresentacao(cadastro_joao)
apresentacao(cadastro_felipe)