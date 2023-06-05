import ClickCounter from './RenderProps/ClickCounterProps';
import HoverCounter from './RenderProps/HoverCounterProps';
import User from './RenderProps/User';
import './styles/App.css';
function App() {
   return (
      <>
         <ClickCounter />
         <HoverCounter />
         <User render={(isLoggedIn) => (isLoggedIn ? 'Efte H' : 'Guest')} />
      </>
   );
}

export default App;
