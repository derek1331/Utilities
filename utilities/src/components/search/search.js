import React from 'react';
import './search.css';

class Search extends React.Component{

    state = {
        image: '',
        link: ''
    }

    searchFunction = () => {
        const inputSearch = document.getElementById('inputSearch')
        const value = inputSearch.value
        fetch(`http://www.omdbapi.com/?t=${value}&apikey=447f330`)
            .then(res => res.json())
            .then(res => {
                this.displayFunction(res)
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
            
    }

    displayFunction = (apiData) => {
        const image = apiData.Poster;
        const link = apiData.Website;
        const noLink = document.getElementById('searchSpan')
        if (apiData.Response === 'False') {
            alert('no title fix me pls')
            } else {
                if (image === 'N/A'){
                    alert('no post available fix me')
                } else if (link === 'N/A' || null){
                    noLink.style.display = 'initial' 
                } else {
                    this.setState({
                    image,
                    link
                })
            }
        
        }

}
    
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