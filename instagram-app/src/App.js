import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import withAuthenticate from './components/authentication/withAuthenticate';
import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage';
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

  handleClick = e => {
    this.setState({dummyData: dummyData.likes + 1})
  }

  render() {
    console.log(this.state.dummyData.id)
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
        <SearchBar newSearch={this.state.search} searchFilter={this.searchFilter} />
        <PostContainer postProp={this.state.dummyData} filteredPosts={this.state.filteredPosts} searchFilter={this.searchFilter} handleClick={this.handleClick} />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

export default App;
