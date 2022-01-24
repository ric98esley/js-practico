var datos = [];


function makeObjet(list){
    let obj = {};
    list.map(
        function (element) {
            if (obj[element]) {
                obj[element] += 1;
            }
            else {
                obj[element] = 1;
            }
        }
    );
    return obj;
}
function makeNewArray(listCount){
    const list = Object.entries(listCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    return list;
}


function enviarAlArray() {
    const input = document.getElementById("Input");
    const value = input.value;
//     var enviar = datos.push(value);
    datos = value.split(",");
}

function calcular() {
    const objeto = makeObjet(datos);
    console.log(objeto);
    const listArray = makeNewArray(objeto);
    const moda = listArray[listArray.length - 1]
    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El valor de la moda es: ${moda[0]}`;
}