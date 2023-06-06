import ReactDOM from 'react-dom/client';
import './styles/index.css';

let states = []; //[[value,setValue],[value,setValue]]
let stateIndex = -1;

function useState(defaultValue) {
    const index = ++stateIndex;
    if (states[index]) return states[index];
    const setValue = (newValue) => {
        states[index][0] = newValue;
        renderWithEfte();
    };
    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
}

function App() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWanting = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete this task. DO you have it?'
            : null;

        setTodo(inputValue);
        setWarning(updatedWanting);
    };
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea
                    name="todo"
                    value={todo}
                    onChange={handleInput}
                ></textarea>
            </p>
            <hr />
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    );
}

function renderWithEfte() {
    stateIndex = 1;
    root.render(<App />);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
renderWithEfte();
