// const list = [40000001, 100, 200, 60, 1500, 300, 400, 500, 40000000];
// Helpers
function calculateMeanArithmetic(list){
    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return Number(accumulatedValue) + Number(newElement);
        }
    );
    const meanList = sumList / list.length;
    return meanList;
}

function pair(list) {
    return (list % 2 === 0);
}

function medianArithmetic(list) {
    const listOrdered = list.sort(function(a,b){return a - b;});

    const halfList = parseInt(list.length / 2);

    let median;

    if (pair(listOrdered.length)) {
        const element1 = listOrdered[halfList - 1];
        const element2 = listOrdered[halfList];

        const mean = calculateMeanArithmetic([element1, element2]);
        median = mean;
    } else {
        median = list[halfList];
    }
    return median;
}
// funtions
function calculateMedian(){
    const input = document.getElementById("InputAritmetic");
    const value = input.value;

    const list = value.split(",");
    const median = medianArithmetic(list);
    const resultP = document.getElementById("ResultMedian");
    resultP.innerText = ` ${median}`;
}