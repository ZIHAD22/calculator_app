import React, { Component } from "react";
import CalcuBtnFanc from "./CalcuBtnFanc";

class NumberPlate extends Component {
  render() {
    return (
      <div>
        <CalcuBtnFanc
          btnFunc={() => {
            console.log(this.state.fild);
          }}
          btnName="0"
        />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="1" />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="2" />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="3" />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="4" />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="5" />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="6" />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="7" />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="8" />
        <CalcuBtnFanc btnFunc={() => console.log("number1")} btnName="9" />
      </div>
    );
  }
}

export default NumberPlate;
