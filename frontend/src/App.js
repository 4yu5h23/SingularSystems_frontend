// import Random from './components/Random'
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Platform from './pages/Platform'
import IntelCPU from './pages/IntelCPU'
import PreBuilt from './pages/PreBuilt'
import Support from './pages/Support'
import Forge from './pages/Forge'
import Veteran from './pages/Veteran'
import Elite from './pages/Elite'
import Rendero from './pages/Rendero'
import Try from './pages/try';
import React, { Component } from 'react';
import { useState } from 'react';
// import Cart from'./components/Cart'
// import Footer from './components/Footer'

export default class App extends Component {
  state = {
    isAuthenticated: false
  }

  setAuthState = (authState) => {
    this.setState({ isAuthenticated: authState });
  }



  render() {
  return (
    <>
    <Router>

    <NavBar isAuthenticated={this.state.isAuthenticated} setAuthState={this.setAuthState} />
      {/* <Home /> */}

      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/platform" element={<Platform />} />
      <Route exact path="/intel" element={<IntelCPU />} />
      <Route exact path="/prebuilts" element={<PreBuilt />} />
      <Route exact path="/support" element={<Support />} />
      <Route exact path="/login" element={<Login setAuthState={this.setAuthState} />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/forge" element={<Forge />} />
      <Route exact path="/veteran" element={<Veteran />} />
      <Route exact path="/elite" element={<Elite />} />
      <Route exact path="/rendero" element={<Rendero />} />
      <Route exact path="/try" element={<Try />} />

      </Routes>
      {/* <Footer /> */}

    </Router>



      {/* <IntelCPU /> */}
      {/* <Login /> */}
      {/* <Forge /> */}
      
      
      
      {/* <Cart /> */}
      {/* <Random /> */}
    </>
  );
}
}