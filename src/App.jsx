import Todo from './components/TodoClass';
import './styles/App.css';

export default function App() {
    console.log('App rendered');
    return (
        <div className="app">
            <Todo />
        </div>
    );
}
