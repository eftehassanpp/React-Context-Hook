import React from 'react';
export default class HoverCounter extends React.Component {
   state = { count: 0 };
   incrementCounter = () => {
      this.setState((prveState) => ({ count: prveState.count + 1 }));
   };
   render() {
      const { count } = this.state;
      return (
         <>
            <p onMouseOver={this.incrementCounter}>Hovered {count} time</p>
         </>
      );
   }
}
