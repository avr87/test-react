import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Jamani Hamjambo?</h1>
        <p>
          <Weather city="Moshi" />
        </p>
      </header>
    </div>
  );
}

export default App;
