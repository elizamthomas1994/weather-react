import './App.css';
import Form from './Form';
import Location from "./Location";
import Temperature from "./Temperature";
import Description from "./Description";
import Time from "./Time";
import Wind from "./Wind";
import Coder from "./Coder";

export default function App() {
  return (
    <div className="App">
      <div className="weather-project">
        <br />
        <Form />
        <Location />
        <div className="row">
          <div className="col-6">
            <Temperature />
          </div>
          <div className="col-6">
            <Description />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Time />
          </div>
          <div className="col-6">
            <Wind />
          </div>
        </div>
      </div>
      <Coder />
    </div>
  );
  }
