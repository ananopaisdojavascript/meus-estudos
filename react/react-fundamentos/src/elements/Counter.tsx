import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const mais = () => setCounter(counter + 1)
    const menos = () => setCounter(counter - 1)
    return (
        <div>
            <button onClick={mais}>Aumentar</button>
            <h1>{counter}</h1>
            <button onClick={menos} disabled={counter === 0}>Diminuir</button>
        </div>
    )
}

export default Counter;