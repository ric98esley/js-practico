const lista = [];
// const lista = [40000001, 100, 200, 60, 1500, 300, 400, 500, 40000000];

function calcularMediaAritmeticaPar(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(lista) {
    if (lista % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function medianaAritmetica(lista) {
    const listaOrdenada = lista.sort(function(a,b){return a - b;});
    console.log(listaOrdenada);

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedio = calcularMediaAritmeticaPar([elemento1, elemento2]);
        mediana = promedio;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

function enviarAlArray(){
    const input = document.getElementById("Input");
    const value = Number(input.value);

    var enviar = lista.push(value);

    console.log(enviar);
}

function calcular(){
    const resultado = medianaAritmetica(lista);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El valor de la mediana es: ${resultado}`;
}