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

//  Average


function calculateAverage() {
    const input = document.getElementById("InputAritmetic");
    const value = input.value;
    const list = value.split(",");
    const average = calculateMeanArithmetic(list)
    const resultP = document.getElementById("ResultAverage");
    resultP.innerText = `${average.toFixed(2)}`;
}