import React from 'react';
export default class HoverCounter extends React.Component {
    render() {
      \const { count, incrementCounter } = this.props;
        return (
            <>
                <p onMouseOver={incrementCounter}>Hovered {count} times</p>
            </>
        );
    }
}
