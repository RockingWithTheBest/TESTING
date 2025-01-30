import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const restart = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>
                Count : <h3 data-testid="count">{count}</h3>
            </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={restart}>Restart</button>
        </div>
    );
};

export default Counter;