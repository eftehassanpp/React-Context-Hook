import withCounter from './Counter';

const ClickCounter = ({ count, incrementCount }) => {
   return (
      <>
         <button type="button" onClick={incrementCount}>
            Clicked {count} times
         </button>
      </>
   );
};

export default withCounter(ClickCounter);
