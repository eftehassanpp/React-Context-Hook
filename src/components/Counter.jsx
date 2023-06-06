import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            {count}
            <button
                type="button"
                onClick={() => setCount((prevState) => prevState + 1)}
            >
                add 1
            </button>
        </div>
    );
}

export default Counter;
