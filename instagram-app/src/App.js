import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  state={
      dummyData: dummyData
  }

  render() {
    console.log(this.state.dummyData.id)
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((post) => (
            <PostContainer postProp={post} />
        ))}
      </div>
    );
  }
}

export default App;
