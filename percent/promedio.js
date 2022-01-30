// Helpers
    function calcularMediaAritmetica(lista){

        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return Number(valorAcumulado) + Number(nuevoElemento);
            }
        );


        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

//  Average


function calculateAverage() {
    const input = document.getElementById("InputAritmetic");
    const value = input.value;
    const lista = value.split(",");
    console.log(lista);
    const average = calcularMediaAritmetica(lista)
    const resultP = document.getElementById("ResultAverage");
    resultP.innerText = `El valor de la media es: ${average}`;
}