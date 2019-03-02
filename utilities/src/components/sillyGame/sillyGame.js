import React from 'react';
import './sillyGame.css';

class SillyGame extends React.Component {

    state = {
        correctNumber: '',
        userNumber: ''
    }

    randomFormula(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    componentWillMount() {
        let correctNumber = this.randomFormula(0, 10);
        this.setState({
            correctNumber
        });

    }

    guessNumber = () => {
        console.log(this.state.correctNumber);
        let userNumber = document.getElementById('userNumber').value
        console.log(userNumber);
        let correctNumber = this.state.correctNumber
        if (userNumber == correctNumber) {
            alert("Good Job")
            this.setState({
                correctNumber: this.randomFormula(0, 10)
            })
        } else {
            console.log(userNumber, correctNumber)
            alert("you lose")
            this.setState({
                correctNumber: this.randomFormula(0, 10)
            })
        }

    }

    render() {
        return (
            <div>
                <input id="userNumber" type="number" name="userNumber"></input>
                <button onClick={this.guessNumber} onChange={this.handleChange}>Guess</button>
            </div>
        )
    }
}

export default SillyGame;