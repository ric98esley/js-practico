// Helpers
        // Diámetro
    function diametroCirculo(radio){
        return radio*2;
    }
        // PI
    const pi = Math.PI;
        // Circurferencia
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * pi;

    }
        // Área
    function areaCirculo(radio){
        return (radio * radio) * pi;
    };


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
