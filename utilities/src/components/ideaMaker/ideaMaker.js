import React from 'react';
import './ideaMaker.css';

const wordArray = ['blind', 'red', 'orange', 'fly', 'sunshine', 'create', 'upload', 'shift', 'cry', 'angry', 'smart', 'change', 'sick', 'jelous', 'ketchup',
    'star', 'super', 'future', 'genuis', 'drugs',];

const firstWordArray = ['The', 'What', 'When', 'Howcome', 'Who', 'Why',]

function randomFormula(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class IdeaMaker extends React.Component {

    // inputHandler = () => {

    // }


    // generators? nope
    newIdea = () => {
        const boxes = document.querySelectorAll('.ideaMakerBox');
        const firstWord = document.getElementById('firstWord')
        // const lastIndex = `${this}.length - 1;`
        const lastIndex = (array) => array.length - 1;
        firstWord.textContent = firstWordArray[randomFormula(0, lastIndex(firstWordArray))]
        boxes.forEach(element => {
            let newWord = wordArray[randomFormula(0, lastIndex(wordArray))]
            element.textContent = newWord
        });


    }

    // saveIdea = () => {

    // }

    render() {
        return (
            <div>
                <span className="firstWord" id="firstWord"></span>
                <div className="ideaMakerBox" id="ideaMakerBox1">

                </div>
                <div className="ideaMakerBox" id="ideaMakerBox2">

                </div>
                <div className="ideaMakerBox" id="ideaMakerBox3">

                </div>
                <button className="newIdea" id="newIdea" onClick={this.newIdea}>New Idea</button>
            </div>
        )
    }
}

export default IdeaMaker;