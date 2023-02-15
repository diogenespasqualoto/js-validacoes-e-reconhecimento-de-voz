function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (Number.isNaN(numero)) {
        console.log('valor inválido')
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log(`Valor Inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }


    function chuteForInvalido(numero) {
        return Number.isNaN(numero)
    }
}


function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}