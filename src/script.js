// === Глобальные переменные ===
let currentInput = '0';
let firstOperand = null;
let operator = null;

// === Вспомогательные функции ===
function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

// === Основные функции калькулятора ===
function append(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function operate(op) {
    const num = parseFloat(currentInput);

    if (op === '+' && firstOperand === null) {
        // Сохраняем первое число и оператор
        firstOperand = num;
        operator = '+';
        currentInput = '0';
    } else if (op === '=' && operator === '+') {
        // Выполняем сложение
        const result = firstOperand + num;
        currentInput = String(result);
        // Сбрасываем состояние
        firstOperand = null;
        operator = null;
    } else if (op === '=') {
        // Нажатие = без оператора — ничего не делаем
        return;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    updateDisplay();
}

// === Приветствие в консоль ===
console.log("Калькулятор готов к работе");