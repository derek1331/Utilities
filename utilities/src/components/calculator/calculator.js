import React from 'react';
import './calculator.css';

let firstNumber;
let secondNumber;
let numberModifier;
let numberCount = false;

class Calculator extends React.Component{
    
    addFunction = (a,b) => a + b; 

    subtractFunction = (a,b) => a - b;

    divideFunction = (a,b) => a / b;
    
    multiplyFunction =  (a,b) => a * b;

    clearDisplay () {
        const display = document.getElementById('spanCalculatorDisplay');
        display.textContent = ''
    }

    results = () => {
        let answer;
        const display = document.getElementById('spanCalculatorDisplay');
        secondNumber = Number(display.textContent);
        if (numberModifier === '+') {
            answer = this.addFunction(firstNumber,secondNumber)
        } else if (numberModifier === '-') {
            answer = this.subtractFunction(firstNumber,secondNumber)
        } else if (numberModifier === '/') {
            answer =this.divideFunction(firstNumber, secondNumber)
        } else if (numberModifier === '*') {
           answer = this.multiplyFunction(firstNumber, secondNumber)
        }
        display.textContent = answer
        console.log(secondNumber)
    }

    numberModifier = (e) => {
        const display = document.getElementById('spanCalculatorDisplay');
        firstNumber = Number(display.textContent);
        this.clearDisplay();
        numberModifier = e.target.value;
        display.textContent = numberModifier;
        numberCount = true;
    }

    addToCalculator = (e) => {
        // add number of button to display
        const display = document.getElementById('spanCalculatorDisplay');
        const number = e.target.value;
        // Storing all previus content in display
        const displayData = display.textContent;
        if (numberCount === false) {
            display.textContent = displayData + number; 
        } else {
            display.textContent = number
            numberCount = false;
        }
        console.log(displayData)
    }

    render() {
        return(
            <div>
                <div className='spanCalculatorDisplay' id='spanCalculatorDisplay'></div>
                <div className='divCalculatorButtonsHolder' id='divCalculatorButtonsHolderNumbers'>
                <button className='calculatorButton' id='0' onClick={this.addToCalculator} value='0' >0</button>
                <button className='calculatorButton' id='1' onClick={this.addToCalculator} value='1'>1</button>
                <button className='calculatorButton' id='2' onClick={this.addToCalculator} value='2'>2</button>
                <button className='calculatorButton' id='3' onClick={this.addToCalculator} value='3'>3</button>
                <button className='calculatorButton' id='4' onClick={this.addToCalculator} value='4'>4</button>
                <button className='calculatorButton' id='5' onClick={this.addToCalculator} value='5'>5</button>
                <button className='calculatorButton' id='6' onClick={this.addToCalculator} value='6'>6</button>
                <button className='calculatorButton' id='7' onClick={this.addToCalculator} value='7'>7</button>
                <button className='calculatorButton' id='8' onClick={this.addToCalculator} value='8'>8</button>
                <button className='calculatorButton' id='9' onClick={this.addToCalculator} value='9'>9</button>

                </div>
                <div className='divCalculatorButtonsHolder' id='divCalculatorButtonsHolderOther'>
                <button className='calculatorButton' id='+' onClick={this.numberModifier} value='+' >+</button>
                <button className='calculatorButton' id='-' onClick={this.numberModifier} value='-' >-</button>
                <button className='calculatorButton' id='/' onClick={this.numberModifier} value='/'>/</button>
                <button className='calculatorButton' id='*' onClick={this.numberModifier} value='*'>*</button>
                <button className='calculatorButton' id='=' onClick={this.results} value='=' >=</button>
                <button className='calculatorButton' id='=' onClick={this.clearDisplay} value='c' >C</button>
                </div>
            </div>
        )
    }
}

class Calculator1 extends React.Component{
    
    addFunction = (a,b) => a + b; 

    subtractFunction = (a,b) => a - b;

    divideFunction = (a,b) => a / b;
    
    multiplyFunction =  (a,b) => a * b;

    clearDisplay () {
        const display = document.getElementById('spanCalculatorDisplay');
        display.textContent = ''
    }

    results = (e) => {
        let answer;
        const display = document.getElementById('spanCalculatorDisplay');
        const display2 = document.getElementById('spanCalculatorDisplay2');
        const equals = e.target.value;
        secondNumber = Number(display.textContent);
        const displayData2 = display2.textContent;
        if (numberModifier === '+') {
            answer = this.addFunction(firstNumber,secondNumber)
        } else if (numberModifier === '-') {
            answer = this.subtractFunction(firstNumber,secondNumber)
        } else if (numberModifier === '/') {
            answer =this.divideFunction(firstNumber, secondNumber)
        } else if (numberModifier === '*') {
           answer = this.multiplyFunction(firstNumber, secondNumber)
        }
        display.textContent = answer
        display2.textContent = displayData2 + equals + answer
        console.log(secondNumber)
    }

    numberModifier = (e) => {
        const display = document.getElementById('spanCalculatorDisplay');
        const display2 = document.getElementById('spanCalculatorDisplay2');
        firstNumber = Number(display.textContent);
        this.clearDisplay();
        numberModifier = e.target.value;
        const displayData2 = display2.textContent;
        display.textContent = numberModifier;
        display2.textContent = displayData2 + numberModifier;
        numberCount = true;
    }

    addToCalculator = (e) => {
        // add number of button to display
        const display = document.getElementById('spanCalculatorDisplay');
        const display2 = document.getElementById('spanCalculatorDisplay2');
        const number = e.target.value;
        // Storing all previus content in display
        const displayData = display.textContent;
        const displayData2 = display2.textContent;
        display2.textContent = displayData2 + number
        if (numberCount === false) {
            display.textContent = displayData + number; 
        } else {
            display.textContent = number
            numberCount = false;
        }
        console.log(displayData)
    }

    render() {
        return(
            <div>
                <div className='spanCalculatorDisplay' id='spanCalculatorDisplay'></div>
                <div className='spanCalculatorDisplay2' id='spanCalculatorDisplay2'></div>
                <div className='divCalculatorButtonsHolder' id='divCalculatorButtonsHolderNumbers'>
                <button className='calculatorButton' id='0' onClick={this.addToCalculator} value='0' >0</button>
                <button className='calculatorButton' id='1' onClick={this.addToCalculator} value='1'>1</button>
                <button className='calculatorButton' id='2' onClick={this.addToCalculator} value='2'>2</button>
                <button className='calculatorButton' id='3' onClick={this.addToCalculator} value='3'>3</button>
                <button className='calculatorButton' id='4' onClick={this.addToCalculator} value='4'>4</button>
                <button className='calculatorButton' id='5' onClick={this.addToCalculator} value='5'>5</button>
                <button className='calculatorButton' id='6' onClick={this.addToCalculator} value='6'>6</button>
                <button className='calculatorButton' id='7' onClick={this.addToCalculator} value='7'>7</button>
                <button className='calculatorButton' id='8' onClick={this.addToCalculator} value='8'>8</button>
                <button className='calculatorButton' id='9' onClick={this.addToCalculator} value='9'>9</button>

                </div>
                <div className='divCalculatorButtonsHolder' id='divCalculatorButtonsHolderOther'>
                <button className='calculatorButton' id='+' onClick={this.numberModifier} value='+' >+</button>
                <button className='calculatorButton' id='-' onClick={this.numberModifier} value='-' >-</button>
                <button className='calculatorButton' id='/' onClick={this.numberModifier} value='/'>/</button>
                <button className='calculatorButton' id='*' onClick={this.numberModifier} value='*'>*</button>
                <button className='calculatorButton' id='=' onClick={this.results} value='=' >=</button>
                <button className='calculatorButton' id='=' onClick={this.clearDisplay} value='c' >C</button>
                </div>
            </div>
        )
    }
}

export default Calculator1;