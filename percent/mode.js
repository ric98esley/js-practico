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


function calculateMode() {
    const input = document.getElementById("InputAritmetic");
    const value = input.value;
    console.log(value);
    const list = value.split(",");
    const objet = makeObjet(list);
    console.log(objet);
    const listArray = makeNewArray(objet);
    const mode = listArray[listArray.length - 1]
    const resultP = document.getElementById("ResultMode");
    resultP.innerText = `${mode[0]}`;
}