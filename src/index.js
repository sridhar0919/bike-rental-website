import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Homepage from './components/Homepage';
import About from './components/About';
import Bikelisting from './components/Bikelisting';
import Bikespecs from './components/Bikespecs';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import Verifyuser from './components/Verifyuser';

const routing = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/bike-listing" element={<Bikelisting />} />
      <Route exact path="/bike-specs/:brand" element={<Bikespecs />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sign-up" element={<Signup />} />
      <Route exact path="/forgot-pwd" element={<Forgotpassword />} />
      <Route exact path="/reset-password/:token" element={<Resetpassword />} />
      <Route exact path="/verify-email/:token" element={<Verifyuser />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
