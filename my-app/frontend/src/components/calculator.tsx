import React, { useState } from 'react';

function Calculator() {
    const [display, setDisplay] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const handleButtonClick = (value: string) => {
        if (
            value === '0' || value === '1' || value === '2' ||
            value === '3' || value === '4' || value === '5' ||
            value === '6' || value === '7' || value === '8' || value === '9'
        ) {
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
                // eslint-disable-next-line no-eval
                const evalResult = eval(display);
                setResult(evalResult);
            } catch (error) {
                setResult(null);
            }
        } else {
            console.error('Invalid button value:', value);
        }
    };

    return (
        <>
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
            <hr />
        </>
    );
}

export default Calculator;
