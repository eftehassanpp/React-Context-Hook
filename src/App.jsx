import React from 'react';
import ClickCounter from './RenderProps/ClickCounterProps';
import Counter from './RenderProps/CounterProps';
import Section from './RenderProps/Section';
import ThemeContext from './context/ThemeContext';
import './styles/App.css';

export default class App extends React.Component {
    state = {
        theme: 'dark',
    };
    render() {
        console.log('App rendered');
        const { theme } = this.state;
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
                <ThemeContext.Provider
                    value={{ theme: theme }}
                ></ThemeContext.Provider>
                <Section />
            </div>
        );
    }
}
