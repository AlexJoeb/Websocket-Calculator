import React, { useState, useEffect } from 'react'

import Equations from 'equations';
import Buttons from './Buttons';

export default () => {

    let [equation, setEquation] = useState('');
    let [answer, setAnswer] = useState(null);
    let [error, setError] = useState(false);

    // Clear equation.
    const clear = () => {
        setEquation('')
        setAnswer(null)
    };

    // Solve equation.
    const solve = () => {
        const solved = Equations.solve(equation);
        if(isNaN(solved) || !solved) {
            // Error Occured
            setError(true);
            setTimeout(() => setError(false), 2500)
            clear();
        } else {
            setError(false);
            setAnswer(solved);
        }
    };

    // Backspace one character.
    const backspace = () => equation.length > 0 ? setEquation(equation.slice(0, -1)) : null;

    return (
        <div className='calculator'>
            {/*  Plan: Store the sequence as a string. */}
            <div className={`calculator__error ${error ? 'open' : ''}`}>
                <p>There was an error with the equation provided.</p>
            </div>
            <div className='calculator__prompt'>
                <p>{answer ? answer : equation}</p>
            </div>
            {/* Buttons */}
            <Buttons className='calculator__buttons' backspace={backspace} clear={clear} solve={solve} equation={equation} setEquation={setEquation} />
        </div>
    )
}
