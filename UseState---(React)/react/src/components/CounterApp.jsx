import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0);

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return (
        <div style={{ border: '5px solid red' }}>
            <h1 style={{ color: 'green' }}>COUNTER APP</h1>
            <br />
            <button onClick={inc} style={{ padding: '10px', margin: '20px' }}>Increment</button>
            <span>{count}</span>
            <button onClick={dec} style={{ padding: '10px', margin: '20px' }}>Decrement</button>
        </div>
    )
}

export default CounterApp