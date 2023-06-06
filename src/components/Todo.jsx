import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
    const inputhandler = (e) => {
        const inputValue = e.target.value;
        const updatedWanting = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete this task. DO you have it?'
            : null;

        setTodo(inputValue);
        setWarning(updatedWanting);
    };
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea
                    name="todo"
                    value={todo}
                    onChange={inputHandler}
                ></textarea>
            </p>
            <hr />
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    );
}
