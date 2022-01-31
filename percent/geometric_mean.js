function calculateGeometricMean() {
    // var list = [-28,60,-10,100]
    const input = document.getElementById("InputAritmetic");
    const value = input.value;

    const list = value.split(",");


    let fixPorcent = list.map(function(x) {
        return (x / 100) + 1;
    });
    console.log(fixPorcent);

    let radicand = fixPorcent.reduce((a, b) => a * b);
    console.log(radicand);

    const result = (radicand ** (1/fixPorcent.length));
    console.log(result);

    const geometricMean = ((result-1) * 100).toFixed(2) ;
    console.log(geometricMean);
    const resultP = document.getElementById("GeometricMean");
    resultP.innerText = `${geometricMean}`;
}