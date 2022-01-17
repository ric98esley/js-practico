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