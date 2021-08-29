import './App.css';
import useCounterContext from './providers/count/useCounter';

function App() {
  const { state, actions } = useCounterContext()

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={actions.decrease}>-</button>
        <h1>{state.total}</h1>
        <button onClick={actions.increase}>+</button>
      </header>
    </div>
  );
}

export default App;
