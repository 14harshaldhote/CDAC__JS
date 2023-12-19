// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Reg from './Reg';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Reg />} />
        
      </Routes>
    </Router>
  );
};

export default App;
