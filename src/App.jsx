import './App.css';
import MultiplicationTable from './MultiplicationTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiplication Table</h1>
        <MultiplicationTable size={10} />
      </header>
    </div>
  );
}

export default App;
