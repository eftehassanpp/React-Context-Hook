import React from 'react';
export default class ClickCounter extends React.Component {
   state = { count: 0 };
   incrementCounter = () => {
      this.setState((prveState) => ({ count: prveState.count + 1 }));
   };
   render() {
      const { count } = this.state;
      return (
         <>
            <button type="text" onClick={this.incrementCounter}>
               Clicked {count} time
            </button>
         </>
      );
   }
}
