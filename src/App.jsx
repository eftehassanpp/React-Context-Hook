import Counter from './components/Counter';
import './styles/App.css';

export default function App() {
    console.log('App rendered');
    return (
        <div className="app">
            <Counter />
        </div>
    );
}
