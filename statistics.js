class NumberList {
    constructor(numbers) {
        this.numbers = numbers;
    }

    mean() {
        return this.numbers.reduce((acc, val) => acc + val, 0) / this.numbers.length;
    }

    variance() {
        const mean = this.mean();
        return this.numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.numbers.length;
    }

    standardDeviation() {
        return Math.sqrt(this.variance());
    }
}

function calculate(operation) {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(' ').map(Number).filter(n => !isNaN(n));

    if (numbers.length === 0) {
        displayError('Please enter a valid list of numbers separated by spaces.');
        return;
    }

    const numberList = new NumberList(numbers);
    let result;

    switch (operation) {
        case 'mean':
            result = numberList.mean();
            break;
        case 'variance':
            result = numberList.variance();
            break;
        case 'stdDev':
            result = numberList.standardDeviation();
            break;
        default:
            displayError('Invalid operation.');
            return;
    }

    displayResult(result.toFixed(4));
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Result: ${result}`;
    resultElement.style.color = 'black';
}

function displayError(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.color = 'red';
}
