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
    // Пока не реализовано — просто заглушка
    alert(`Операция "${op}" пока не поддерживается.`);
}

function clearDisplay() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    updateDisplay();
}

// === Приветствие в консоль (аналог "Hello, World!") ===
console.log("Hello, World! — Калькулятор инициализирован.");