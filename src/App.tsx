import './App.css';
import useCounterContext from './providers/count/useCounter';

function App() {
  const { state, actions } = useCounterContext()

  return (
    <div className="counter-wrapper">
      <button className="button" onClick={actions.decrease}>Decrease</button>
      <h1 className="number">{state.total}</h1>
      <button className="button" onClick={actions.increase}>Increase</button>
    </div>
  );
}

export default App;
