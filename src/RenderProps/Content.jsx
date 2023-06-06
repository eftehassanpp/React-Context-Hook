import ThemeContext from '../context/ThemeContext';
import Counter from './CounterProps';
import HoverCounter from './HoverCounterProps';
export default function Content() {
    return (
        <div>
            <h2>This is a content</h2>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
