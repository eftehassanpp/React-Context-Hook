import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import Counter from './RenderProps/CounterProps';
import './styles/App.css';
HoverCounter;
ClickCounter;
function App() {
    return (
        <>
            <Counter>
                {(count, incrementCounter) => (
                    <ClickCounter
                        count={count}
                        incrementCounter={incrementCounter}
                    />
                )}
            </Counter>
            <Counter>
                {(count, incrementCounter) => (
                    <HoverCounter
                        count={count}
                        incrementCounter={incrementCounter}
                    />
                )}
            </Counter>
        </>
    );
}

export default App;
