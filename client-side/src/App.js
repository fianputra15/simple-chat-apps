import React from 'react';
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import {BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat}/>
      </Router>
    </div>
  );
}

export default App;
