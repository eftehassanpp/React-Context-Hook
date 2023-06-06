import React from 'react';
export default class Todo extends React.Component {
    state = {
        todo: '',
        warning: null,
    };
    inputHandler = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete this task. DO you have it?'
            : 'Good Choice';

        this.setState({
            todo: inputValue,
            warning: warning,
        });
    };
    render() {
        const { todo, warning } = this.state;
        return (
            <div>
                <p>{todo}</p>
                <p>
                    <textarea
                        name="todo"
                        value={todo}
                        onChange={this.inputHandler}
                    ></textarea>
                </p>
                <hr />
                <h2>{warning}</h2>
            </div>
        );
    }
}
