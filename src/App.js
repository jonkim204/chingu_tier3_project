import React from 'react';
import axios from 'axios';
import './App.css';
import { Row, Col } from "antd";
import Header from './Components/header';
import SearchBox from './Components/searchBox';
import Results from './Components/results';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        meteorites: [],
        searchTerm: "",
        isDataLoaded: false
    };
    this.allResults = [];
  }

  searchResults = searchTerm => {
    this.setState(() => {
      const matched = this.allResults.filter(row=> {
        return row.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });
      return { meteorites: matched };
    })
  }

  searchHandler = searchTerm => {
    this.setState({searchTerm: searchTerm});
    this.searchResults(searchTerm);
  }

  componentDidMount() {
    axios.get("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(res => {
        this.allResults = res.data;
        // console.log(this.allResults);
        this.setState ({
          meteorites: this.allResults,
          isDataLoaded: true
        });
        // console.log(this.state.meteorites);
      });
  }
  render() {
    return (
        <div className = "App">
            <Header />
            <SearchBox searchHandler={this.searchHandler} />
            <div className="table">
              <Results
                meteorites={this.state.meteorites}
                isDataLoaded={this.state.isDataLoaded}
              />
            </div>
      </div>
    )
  }
}

export default App;
