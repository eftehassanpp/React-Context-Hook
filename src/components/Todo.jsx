import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        desc: '',
    });
    const { title, desc } = todo;
    return (
        <div>
            <p>{title}</p>
            <p>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                ></input>
            </p>
            <p>
                <textarea
                    name="todo"
                    value={desc}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            desc: e.target.value,
                        });
                    }}
                ></textarea>
            </p>
            <hr />
        </div>
    );
}
