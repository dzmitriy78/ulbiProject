import React from 'react';
import "./Counter.scss"

export const Counter = () => {
    const [count, setCount] = React.useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}
