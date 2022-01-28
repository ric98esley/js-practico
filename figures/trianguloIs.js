// Código del triangulo
console.group("triangulo");

//altura

function alturaTrianguloIso(base, lado1) {
    return Math.sqrt((lado1 * lado1) - ((base * base) / 4))
};
console.groupEnd();
// Triangulo

function calcularAlturaTrianguloIso() {
    const ladoA = document.getElementById("LadoA");
    const valueA = Number(ladoA.value);

    const ladoB = document.getElementById("LadoB");
    const valueB = Number(ladoB.value);

    const base = document.getElementById("Base");
    const valueC = Number(base.value);
    if (valueA == valueB) {
        const altura = alturaTrianguloIso(valueA, valueC);
        alert(altura);
    }
    else {
        alert("No es un triangulo Isoceles")
    }
}