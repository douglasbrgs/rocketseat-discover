/*
 * Sistemas de gastos familiar

Objeto com 2 propriedades do tipo array
* receitas
* dispesas

 */

const family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [9320.34, 128.45, 176.87, 1450],
};

const sum = (total, atual) => (total += atual);

function calculateBalance(obj) {
    const calculateIncomes = obj.incomes.reduce(sum, 0);
    const calculateExpenses = obj.expenses.reduce(sum, 0);

    const balanceValue = calculateIncomes - calculateExpenses;
    let textBalance = 'negativo';

    if (balanceValue >= 0) {
        textBalance = 'positivo';
    }

    console.log(`Seu saldo é ${textBalance}: R$ ${balanceValue.toFixed(2)}`);
}

calculateBalance(family);
