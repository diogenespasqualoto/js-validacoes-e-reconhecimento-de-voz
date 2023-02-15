function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div> Valor Inválido: Diga um número entre ${menorValor} e ${maiorValor}</ >
            `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Tu acertou!</h2>
            <h3>O número secreto era ${numeroSecreto} </h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}