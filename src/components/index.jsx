import React, { Component } from "react";
import CalcuBtnFanc from "./CalcuBtnFanc";
import NumberPlate from "./numberPlate";
import { selectFild } from "./AllFunc";
class Calculet extends Component {
  state = {
    fild: [0],
  };

  seperatArray = () => {
    let storeOfArr = "";
    this.state.fild.forEach((item) => (storeOfArr += item));
    return storeOfArr;
  };

  render() {
    return (
      <div>
        <input
          id="fildOfCall"
          type="number"
          value={this.seperatArray()}
          onChange={() => {
            console.log("nothing");
          }}
        />
        <NumberPlate state={this.state} />
        {/* {console.log(this.inputFild.value)} */}
      </div>
    );
  }
}

export default Calculet;
