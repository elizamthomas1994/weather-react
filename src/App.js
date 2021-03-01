import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Coder from "./Coder";

export default function App() {
  return (
    <div className="App">
      <div className="weather-project">
        <br />
        <Weather defaultCity="London"/>
        <br />
      </div>
      <Coder />
    </div>
  );
  }
