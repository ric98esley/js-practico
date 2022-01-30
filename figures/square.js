// Helpers

function perimeterSquare(side){
    return side * 4;
}

function areaSquare(side){
    return side * side;
}

// Square

function calculatePerimeterSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimeter = perimeterSquare(value);
    const resultP = document.getElementById("SquarePerimeter");
    resultP.innerText = `${perimeter}`;
};

function calculateAreaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const area = areaSquare(value);
    const resultP = document.getElementById("SquareArea");
    resultP.innerText = `${area}`;
};