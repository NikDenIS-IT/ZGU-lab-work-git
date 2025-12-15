// === Глобальные переменные ===
let currentInput = '0';
let firstOperand = null;
let operator = null;

// === Обновление дисплея ===
function updateDisplay() {
    const display = document.getElementById('display');
    if (display) {
        display.innerText = currentInput;
    }
}

// === Добавление цифры ===
function append(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

// === Очистка ===
function clearDisplay() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    updateDisplay();
}

// === Выполнение операции ===
function operate(op) {
    const num = parseFloat(currentInput);

    // Если нажата операция (+, *, и т.д.)
    if (op === '+' || op === '*') {
        if (firstOperand === null) {
            // Сохраняем первое число и оператор
            firstOperand = num;
            operator = op;
            currentInput = '0';
        } else {
            // Уже есть оператор — выполняем предыдущую операцию
            if (operator === '+') {
                firstOperand += num;
            } else if (operator === '*') {
                firstOperand *= num;
            }
            operator = op;
            currentInput = '0';
        }
    } 
    // Если нажато '='
    else if (op === '=') {
        if (operator === '+') {
            currentInput = String(firstOperand + num);
        } else if (operator === '*') {
            currentInput = String(firstOperand * num);
        } else {
            // Нет оператора — просто оставляем число
            currentInput = String(num);
        }
        // Сбрасываем состояние
        firstOperand = null;
        operator = null;
    }

    updateDisplay();
}

// === Инициализация ===
console.log('Калькулятор запущен.');
updateDisplay();