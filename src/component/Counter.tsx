import React from 'react';
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = React.useState(0)

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}
