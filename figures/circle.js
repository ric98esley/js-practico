// Helpers
        // Diameter
    function diameterCircle(radio){
        return radio*2;
    }
        // PI
    const pi = Math.PI;
        // Circurferencia
    function perimetercircle(radio){
        const diametro = diameterCircle(radio);
        return diametro * pi;

    }
        // Area
    function circleArea(radio){
        return (radio * radio) * pi;
    };


// Circle

function calculateCircumference(){
    const input = document.getElementById("Radio");
    const radio = Number(input.value);

    const Circumferencer = perimetercircle(radio);
    const resultP = document.getElementById("PerimeterArea");
    resultP.innerText = `${Circumferencer.toFixed(2)}`;
}

function calculateCircleArea(){
    const input = document.getElementById("Radio");
    const radio = Number(input.value);

    const area = circleArea(radio);
    const resultP = document.getElementById("CircleArea");
    resultP.innerText = `${area.toFixed(2)}`};
