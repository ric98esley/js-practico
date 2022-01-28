// Código del Cuadrado

console.group("Cuadrados");

    // Perímetro

function perimetroCuadrado(lado){
    return lado * 4;
}

    //Área

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Código del triangulo

    // Perimetro

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

    // Área

function areaTriangulo(base, altura){
    return (base * altura) / 2;
};

console.groupEnd();

// Código de circulo

console.group("Circulos");

    // Diámetro

function diametroCirculo(radio){
    return radio*2;
}

    // PI
const pi = Math.PI;
console.log("pi es: " + pi);

    // Circurferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;

}

    // Área
function areaCirculo(radio){
    return (radio * radio) * pi;
};

console.groupEnd();

// Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

// Triangulo
function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("LadoA");
    const valueA = Number(ladoA.value);

    const ladoB = document.getElementById("LadoB");
    const valueB = Number(ladoB.value);

    const base = document.getElementById("Base");
    const valueC = Number(base.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueC);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const ladoA = document.getElementById("Altura");
    const valueA = Number(ladoA.value);

    const base = document.getElementById("Base");
    const valueC = Number(base.value);

    const area = areaTriangulo(valueA, valueC);
    alert(area);
}

// Circulo

function calcularCircunferencia(){
    const input = document.getElementById("Radio");
    const radio = Number(input.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("Radio");
    const radio = Number(input.value);

    const area = areaCirculo(radio);
    alert(area);
}
