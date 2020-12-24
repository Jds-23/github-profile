import React from "react";
import './App.css';
import SearchBox from "./Components/SearchBox";

function App() {
  return (
    <div className="app">
      <div className="app-header">
      <h4>GitHub Searcher</h4>
      </div>
        <SearchBox/>
    </div>
  );
}

export default App;
