//Variável número máximo indica o maior valor de um dado
let numeroMaximo;

//A função tipo de dado alterá o valor do dado
function tipoDado(a) {
    numeroMaximo = parseInt(a);
    let textoTelaDano = document.querySelector('h4');
    textoTelaDano.innerHTML = 'Dado D'+numeroMaximo;
}

function iniciar() {
    let quantidade = parseInt(document.getElementById('quantidadedados').value);
    let alterador = parseInt(document.getElementById('alteradordados').value);
    let numeroSorteado = 0;
    let resultado;

    if (!numeroMaximo || isNaN(quantidade) || isNaN(alterador)) {
        alert('Por favor, selecione um tipo de dado, uma quantidade de dados e um alterador válido.');
        return;
    }

    for (let index = 0; index < quantidade; index++) {
        numeroSorteado  += Math.floor(Math.random() * (numeroMaximo - 1 + 1)) + 1;

    }
    resultado = numeroSorteado + alterador;


    let resultadoTela = document.querySelector('h3')
    resultadoTela.innerHTML = "Resultado: " + resultado
}
