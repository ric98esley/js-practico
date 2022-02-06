//Helpers
function capacity () {
    const salary = document.getElementById("InputSalary");
    const salaryValue = Number(salary.value);

    const expense = document.getElementById("InputExpense");
    const expenseValue = Number(expense.value);

    const diff = salaryValue - expenseValue;
    return diff
}

function getPorcent() {
    const porcent = document.getElementById("inputPorcent");
    const porcentValue = Number(porcent.value)/100;
    console.log(porcentValue);
    return porcentValue;
}


// funtions

function calculateSaving() {
    const capaciyBorring = capacity() * getPorcent();

    const borrowing = document.getElementById("ResultBorrowing");
    borrowing.innerText = `Capacity Borring $${capaciyBorring}`;
}