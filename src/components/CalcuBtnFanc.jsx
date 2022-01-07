import React, { Component } from "react";

class CalcuFunc extends Component {
  render() {
    return (
      <button onClick={this.props.btnFunc} className={this.props.ClassName}>
        {this.props.btnName}
      </button>
    );
  }
}

export default CalcuFunc;
