import ThemeContext from '../context/ThemeContext';
import Counter from './CounterProps';
import HoverCounter from './HoverCounterProps';
export default function Content() {
    console.log('content rendered');
    // const context = useContext(ThemeContext);
    // const { theme, switchTheme } = context;
    return (
        <div>
            <h2>This is a content</h2>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext switchThemeontext>
                        {({ theme, switchTheme }) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                                switchTheme={switchTheme}
                            />
                        )}
                    </ThemeContext>
                )}
            </Counter>
        </div>
    );
}
