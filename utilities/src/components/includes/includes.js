import React from "react";
import "./includes.css";

const derekInfo = {
  Questions: ["What animals has Derek had?", "What jobs has derek had?"],
  Answers: [
    ["cat", "dog", "rabbit", "fish", "bearded dragon"],
    ["jimmy john's", "1-800-got-junk?"],
  ],
};

// not actualy an array
class Includes extends React.Component {
  state = {
    answers: "",
  };

  // include button
  includesFunction = () => {
    // value of input
    const value = document.getElementById("inputIncludes").value;
    const resultSpan = document.getElementById("spanIncludesResult");
    const result = this.state.answers.includes(value);
    resultSpan.textContent = result;
  };

  // includesFunction = (array,value) => {
  //     array.includes(value)
  // }

  selectFunction = e => {
    //select input
    // this.setState({
    //     answers:
    // })
    // event.target.value
    const selectedValue = document.getElementById("select").value;
    this.setState({
      answers: selectedValue,
    });

    //update state
    //button runs function that run includes on state.answers
    // do i need state.questions?
  };

  render() {
    return (
      <div>
        <select id="select" onChange={this.selectFunction}>
          <option value={derekInfo.Answers[0]}>{derekInfo.Questions[0]}</option>
          <option value={derekInfo.Answers[1]}>{derekInfo.Questions[1]}</option>
        </select>
        <br />
        <input
          name="includes"
          value={this.state.includes}
          type="text"
          className="inputIncludes"
          id="inputIncludes"
        />
        <button
          onClick={this.includesFunction}
          className="buttonIncludes"
          id="buttonIncludes"
        >
          Search
        </button>
        <br />
        <span className="spanIncludesResult" id="spanIncludesResult" />
      </div>
    );
  }
}

export default Includes;
