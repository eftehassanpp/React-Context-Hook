import React from 'react';
import ClickCounter from './RenderProps/ClickCounterProps';
import Counter from './RenderProps/CounterProps';
import Section from './RenderProps/Section';
import ThemeContext from './context/ThemeContext';
import './styles/App.css';

export default class App extends React.Component {
    state = {
        theme: 'dark',
        switchTheme: () => {
            this.setState((preveState) => {
                if (preveState.theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        console.log('App rendered');
        return (
            <div className="app">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter
                            count={count}
                            incrementCount={incrementCount}
                        />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
