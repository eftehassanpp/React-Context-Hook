import React from 'react';
export default class ClickCounter extends React.Component {
    render() {
        const { count, incrementCounter } = this.props;
        return (
            <>
                <button onClicked={incrementCounter}>
                    Clicked {count} times
                </button>
            </>
        );
    }
}
