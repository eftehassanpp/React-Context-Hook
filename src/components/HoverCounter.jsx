import withCounter from './Counter';

const HoverCounter = ({ count, incrementCount }) => {
   return (
      <>
         <p onMouseOver={incrementCount}>Clicked {count} times</p>
      </>
   );
};

export default withCounter(HoverCounter);
