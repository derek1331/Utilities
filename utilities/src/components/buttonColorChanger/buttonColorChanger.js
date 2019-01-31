import React from "react";
import "./buttonColorChanger.css";

class ButtonColorChanger extends React.Component {
  state = {
    text: "",
  };

  randomFormula (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  colorChanger = () => {
      // rgb
      // Random Formula
      // Id of holder div
      const r = this.randomFormula(0,225)
      const g = this.randomFormula(0,225)
      const b = this.randomFormula(0,225)
      const target =document.getElementById('textAreaTargetButtonColorChanger')
      target.style.color = `rgb(${r}, ${g}, ${b})`
}

  textChanger = () => {
    const text = document.getElementById("textAreaButtonColorChanger").value;
    this.setState({
      text,
    });
    //get the text
    //continuously supply it to div
  }

  render() {
    return (
      <div className="buttonColorChanger" id="buttonColorChanger">
        <button
          className="buttontButtonColorChanger"
          id="buttonButtonColorChanger"
          onClick={this.colorChanger}
        >
          Change Color
        </button>
        <br />
        <textarea
          className="textAreaButtonColorChanger"
          id="textAreaButtonColorChanger"
          onChange={this.textChanger}
        />
        <br />
        <div
          className="textAreaTargetButtonColorChanger"
          id="textAreaTargetButtonColorChanger"
        >
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default ButtonColorChanger;
