import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

function App() {
  return (
    <div className="App">
      <SearchBar />
      {/* <PostContainer />
      <CommentSection /> */}
    </div>
  );
}

export default App;