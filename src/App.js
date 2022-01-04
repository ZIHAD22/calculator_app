import React, { Component } from "react";
import Calculet from "./components/index.jsx";
import "./style/style.calculet.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Calculator App</h1>
        <Calculet />
      </div>
    );
  }
}
export default App;
