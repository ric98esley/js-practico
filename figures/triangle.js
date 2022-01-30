// Helpers
        // Perimeter
    function perimeterTriangle(side1, side2, base){
        return side1 + side2 + base;
    };
        // area
    function triangleArea(base, altura){
        return (base * altura) / 2;
    };
        //height
    function IsoTriangleHeight(base, side1) {
        return Math.sqrt((side1 * side1) - ((base * base) / 4))
};
// Triangulo

function calculateIsoTriangleHeight() {
    const sideA = document.getElementById("SideA");
    const valueA = Number(sideA.value);

    const sideB = document.getElementById("SideB");
    const valueB = Number(sideB.value);

    const base = document.getElementById("Base");
    const valueC = Number(base.value);
    if (valueA == valueB) {
        const height = IsoTriangleHeight(valueA, valueC);
        const resultP = document.getElementById("TriangleHeight");
        resultP.innerText = `${height.toFixed(2)}`;
    }
    else {
        const resultP = document.getElementById("TriangleHeight");
        resultP.innerText = `Isn't a Isocele Triangle`;
    }
}

// Triangulo
function calculatePerimeterTriangle(){
    const sideA = document.getElementById("SideA");
    const valueA = Number(sideA.value);

    const sideB = document.getElementById("SideB");
    const valueB = Number(sideB.value);

    const base = document.getElementById("Base");
    const valueC = Number(base.value);

    const perimeter = perimeterTriangle(valueA, valueB, valueC);
    const resultP = document.getElementById("TrianglePerimeter");
    resultP.innerText = `${perimeter}`;
}
function calculartriangleArea(){
    calculateIsoTriangleHeight();
    const sideA = document.getElementById("TriangleHeight");
    const valueA = Number(sideA.innerHTML);

    const base = document.getElementById("Base");
    const valueC = Number(base.value);

    const area = triangleArea(valueA, valueC);
    const resultP = document.getElementById("TriangleArea");
    resultP.innerText = `${area}`;
}