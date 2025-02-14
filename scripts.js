let display = document.getElementById('display');
let expression = localStorage.getItem('expression') || '';
updateDisplay();

function updateDisplay() {
    display.textContent = expression || '0';
    localStorage.setItem('expression', expression);
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function appendNumber(num) {
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    if (expression && !isNaN(expression.slice(-1))) {
        expression += op;
        updateDisplay();
    }
}

function calculateResult() {
    try {
        expression = eval(expression.replace('^', '**')).toString();
    } catch {
        expression = 'Ошибка';
    }
    updateDisplay();
}
