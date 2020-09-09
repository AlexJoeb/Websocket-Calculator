import React from 'react'

export default ({ className, backspace, clear, solve, equation, setEquation, ...others}) => {
    const click = val => {
        if(val === 'clr') clear()
        else if(val === 'bksp') backspace()
        else if(val === 'solve') solve()
        else setEquation(equation + val)
    }
    return (
        <div className={className}>
            <div className='calculator__buttons__group'>
                <button className='calculator__buttons--clr' onClick={e => click('clr')}>Clr</button>
                <button className='calculator__buttons--bksp' onClick={e => click('bksp')}>Bksp</button>
            </div>
            <button className='calculator__buttons--lbracket' onClick={e => click('(')}>(</button>
            <button className='calculator__buttons--rbracket' onClick={e => click(')')}>)</button>
            <button className='calculator__buttons--divide' onClick={e => click('/')}>/</button>

            <button className='calculator__buttons--seven' onClick={e => click('7')}>7</button>
            <button className='calculator__buttons--eight' onClick={e => click('8')}>8</button>
            <button className='calculator__buttons--nine' onClick={e => click('9')}>9</button>
            <button className='calculator__buttons--multiply' onClick={e => click('*')}>*</button>

            <button className='calculator__buttons--four' onClick={e => click('4')}>4</button>
            <button className='calculator__buttons--five' onClick={e => click('5')}>5</button>
            <button className='calculator__buttons--six' onClick={e => click('6')}>6</button>
            <button className='calculator__buttons--minus' onClick={e => click('-')}>-</button>

            <button className='calculator__buttons--one' onClick={e => click('1')}>1</button>
            <button className='calculator__buttons--two' onClick={e => click('2')}>2</button>
            <button className='calculator__buttons--three' onClick={e => click('3')}>3</button>
            <button className='calculator__buttons--add' onClick={e => click('+')}>+</button>

            <button className='calculator__buttons--zero' onClick={e => click('0')}>0</button>
            <button className='calculator__buttons--period' onClick={e => click('.')}>.</button>
            <button className='calculator__buttons--solve' onClick={e => click('solve')}>=</button>

        </div>
    )
}
