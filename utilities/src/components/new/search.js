import React from 'react';
import './search.css';

class Search extends React.Component{
    
    render() {
        return(
            <div>
                <input type='text' className='inputSearch' id='inputSearch'></input>
                <button className='searchButton' id='searchButton' onClick={this.searchFunction}>Search</button>
                <div className='searchResults' id='searchResults'>
                    <a id='searchLink' className='searchLink' href={this.state.link}><img className='searchImage' id='searchImage' src={this.state.image}></img></a>
                    <span hidden id='searchSpan'>No link Available</span>
                </div>
            </div>
        )
    }
}

export default Search;