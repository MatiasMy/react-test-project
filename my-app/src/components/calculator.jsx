import React, { useState } from 'react';

function Calculator() {
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState(null);

    const handleButtonClick = (value) => {
        if (!isNaN(value)) {
            setDisplay((prev) => prev + value);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (display) {
                setDisplay((prev) => prev + ' ' + value + ' ');
            }
        } else if (value === 'c') {
            setDisplay('');
            setResult(null);
        } else if (value === '=') {
            try {
                const evalResult = eval(display);
                setResult(evalResult);
            } catch (error) {
                setResult('Error');
            }
        } else {
            console.error('Invalid button value:', value);
        }
    };

    return (
        <div className="calculator">
            <div className="calculatorheader">
                <h1>Calculator</h1>
            </div>
            <div className="calculatordisplay">
                <input
                    type="text"
                    value={result !== null ? result : display}
                    readOnly
                />
            </div>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '0', '-', '*', '=', '/', 'c'].map((button) => (
                <div key={button} className="calculatorbutton" onClick={() => handleButtonClick(button)} >
                    {button}
                </div>
            ))}
        </div>
    );
}

export default Calculator;
