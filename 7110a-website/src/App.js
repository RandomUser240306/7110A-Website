import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Members from './Members';
import Timeline from './Timeline';


function App() {
  return (
    <Router>
      <div className="App Index">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/members" exact element={<Members />} />
          <Route path="/timeline" exact element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
