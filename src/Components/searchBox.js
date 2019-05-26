import React from 'react';

class SearchBox extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        this.props.searchHandler(this.input.value);
        // console.log(this.input.value);
    }
    render() {

    return(
        <div className="searchBox">
            <form className="searchForm" onSubmit={e => this.onSubmit(e)}>
                <input 
                type="text" 
                className="searchText" 
                placeholder="Enter Meteorite"
                ref={input => (this.input = input)}
                />
                <input 
                type="submit"
                className="searchButton"
                value='Search'
                />
            </form>
        </div>
    
    )
    }
}




export default SearchBox;
  