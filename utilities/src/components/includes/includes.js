import React from 'react';
import './includes.css';

const derekInfo = {
    Questions: ['What animals has Derek had?','What jobs has derek had?'],
    Answers: [['cat','dog','rabbit','fish','bearded dragon',],["jimmy john's",'1-800-got-junk?']]
}

class Includes extends React.Component{

    componentWillMount(){
        console.log(derekInfo.Questions[1])
    }

    state = {
        answers: ''
    }

    includesFunction (array,value) { 
        array.includes(value)
    }

    selectFunction = (e) => {
        //select input
        // this.setState({
        //     answers: 
        // })
        console.log(`this is`, this)
        //update state
        //button runs function that run includes on state.answers
        // do i need state.questions?
    }
    
    render() {
        return(
            <div>
                <select >
                    <option onSelect={this.selectFunction} value={derekInfo.Answers[0]}>{derekInfo.Questions[0]}</option>
                    <option onSelect={this.selectFunction} value={derekInfo.Answers[1]}>{derekInfo.Questions[1]}</option>
                </select>
                <br></br>
                <input type='text' className='inputIncludes' id='inputIncludes'></input>
                <button className='buttonIncludes' id='buttonIncludes'>Search</button>

            </div>
        )
    }
}

export default Includes;