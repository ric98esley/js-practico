function calculateGeometricMean() {
    // var datos = [-28,60,-10,100]
    const input = document.getElementById("InputAritmetic");
    const value = input.value;

    datos = value.split(",");


    let arreglo = datos.map(function(x) {
        return (x / 100) + 1;
    });
    console.log(arreglo);

    let radicando = arreglo.reduce((a, b) => a * b);
    console.log(radicando);

    const resultado = (radicando ** (1/arreglo.length));
    console.log(resultado);

    const mediaGeometrica = ((resultado-1) * 100).toFixed(2) ;
    console.log(mediaGeometrica);
    const resultP = document.getElementById("GeometricMean");
    resultP.innerText = `El valor de la media geometrica es: ${mediaGeometrica}`;
}