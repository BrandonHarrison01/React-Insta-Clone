import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  state={
      dummyData: [],
      filteredPosts: []
  }

  changeHandler = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  componentDidMount(){
    this.setState({dummyData: dummyData})
  }

  searchFilter = e => {
    const filtered = this.state.dummyData.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({filteredPosts: filtered})
  }

  render() {
    console.log(this.state.dummyData.id)
    return (
      <div className="App">
        <SearchBar newSearch={this.state.search} searchFilter={this.searchFilter} />
        <PostContainer postProp={this.state.dummyData} filteredPosts={this.state.filteredPosts} searchFilter={this.searchFilter} />
      </div>
    );
  }
}

export default App;
