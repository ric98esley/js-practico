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
    function heronForm(base,sideA,sideB){
        const s = (base + sideA + sideB) /2;
        const he = Math.sqrt(s *(s-base) *(s-sideA) *(s-sideB))
        console.log(he);
        return he;
    }
    function TriangleHeightHeron(base,side1,side2){
        const heron = heronForm(base, side1, side2);
        const height = (2/base) * heron;
        return height;
    }
// Triangle

function calculateIsoTriangleHeight() {
    const sideA = document.getElementById("SideA");
    const valueA = Number(sideA.value);

    const sideB = document.getElementById("SideB");
    const valueB = Number(sideB.value);

    const base = document.getElementById("Base");
    const valueC = Number(base.value);
    let height
    if (valueA == valueB) {
        height = IsoTriangleHeight(valueA, valueC);
        const resultP = document.getElementById("TriangleHeight");
        resultP.innerText = `${height.toFixed(2)}`;
    }
    else {
        height = TriangleHeightHeron(valueC,valueB,valueA);
        const resultP = document.getElementById("TriangleHeight");
        resultP.innerText = `${height.toFixed(2)}`;
    }
    return height
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
function calculatetriangleArea(){
    const valueA = calculateIsoTriangleHeight();

    const base = document.getElementById("Base");
    const valueC = Number(base.value);

    const area = triangleArea(valueA, valueC);
    const resultP = document.getElementById("TriangleArea");
    resultP.innerText = `${area.toFixed(2)}`;
}