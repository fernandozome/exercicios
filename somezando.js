const arquivos = ["teste.txt", "foto.png", "arquivo.doc", "doc.bat"]

const anti_viurus = (arquivos) => {
    const resultado = arquivos.some((arquivo) => {
        const tem_extensao = arquivo.indexOf(".bat")
        return tem_extensao !== -1

    })
    if (resultado) {
        console.log("Vírus Detectado!")
    } else {
        console.log("Nenhum vírus encontrado")
    }
}

anti_viurus(arquivos)