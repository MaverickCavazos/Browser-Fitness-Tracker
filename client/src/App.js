import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome';
import Register from './components/Register'
import Login from './components/Login'
import Workouts from './components/Workouts'
import Nav from './components/Navbar'
import Stats from './components/Stats'

function App() {
  return (
    <div className="App">
        <Router>
          <Nav/>
          <Routes>
            <Route path="/" exact element={ <Welcome/>} />
            <Route path="/Register" exact element={ <Register/>} />
            <Route path='/Login' exact element={ <Login/>} />
            <Route path='/Workouts' exact element={ <Workouts/>} />
            <Route path='/Stats' exact element={<Stats/>} />
         
          </Routes>
      </Router>
    </div>
  );
}

export default App;
