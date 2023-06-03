import React from 'react';

const withCounter = (OgComponent) => {
   class NewComponent extends React.Component {
      state = { count: 0 };
      incrementCount = () => {
         this.setState((prevstate) => ({ count: prevstate.count + 1 }));
      };
      render() {
         const { count } = this.state;

         return (
            <OgComponent count={count} incrementCount={this.incrementCount} />
         );
      }
   }
   return NewComponent;
};

export default withCounter;
