import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrementClick = () => {
        if (count < 25) {
            setCount(state => state + 1);

        }
    }

    const handleDecrementClick = () => {
        if (count > 0) {
            setCount(state => state - 1);
        }
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleDecrementClick}>Decrement</button>
            <button onClick={handleIncrementClick}>Increament</button>
        </div>
    )
}