
const cadastro = {
    nome: "João",
    faixa_etaria: function () {
        faixa_etaria(this.idade)
        if (idade <= 21) {
            return "jovem"
        } else if (this.idade > 21 && this.idade < 66) {
            return "adulto(a)"
        } else {
            return "idoso(a)"
        }

    },
    idade: 30,
    profissao: "estudante",
    altura: 1.76,
    apresentar: function () {
        const texto_idade = faixa_etaria(this.idade)
        console.log(`Olá! Meu nome é ${this.nome}, sou um(a) ${texto_idade} de ${this.idade} anos, 
    tenho ${this.altura}m de altura e sou ${this.profissao}`)
    }
}

cadastro.apresentar()
