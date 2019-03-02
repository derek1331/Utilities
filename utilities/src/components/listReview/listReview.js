import React from 'react';
import './listReview.css';

class ListReview extends React.Component{
    
    render() {
        return(
            <div>
                <input className="" id=""></input>
                <button className="" id="" onclick={this.addToList}></button>
                <ul className="newList" id="newList">

                </ul>

            </div>
        )
    }
}

export default ListReview;