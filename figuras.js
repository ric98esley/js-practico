const ladoCuadrado = 5;

console.group("Cuadrados");
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El área del cuadrado es: " + areaCuadrado +"cm²");

console.groupEnd();

// Código del triangulo

console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm ${ladoTriangulo2}cm ${baseTriangulo}cm`);

console.log(
    "La altura del triángulo es de: "
    + alturaTriangulo +
    "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();

// Código de circulo

console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm")
// Diámetro
const diametroCirculo = radioCirculo * 2
console.log("El Díametro del circulo es: " + diametroCirculo + "cm");
// PI
const pi = Math.PI;
console.log("pi es: " + pi);

// Circurferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("El perímetro del círculo es: " + perimetroTriangulo + "cm");
// Área
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El radio del círculo es: " + areaCirculo + "cm");

console.groupEnd();