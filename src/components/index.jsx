import React, { Component } from "react";
import CalcuBtnFanc from "./CalcuBtnFanc";
import NumberPlate from "./numberPlate";
import { selectFild } from "./AllFunc";
class Calculet extends Component {
  inputFild = selectFild("#fildOfCall");

  render() {
    return (
      <div>
        <input
          id="fildOfCall"
          type="number"
          value="10"
          onChange={() => {
            console.log("nothing");
          }}
        />
        <NumberPlate />
        {console.log(this.inputFild.value)}
      </div>
    );
  }
}

export default Calculet;
