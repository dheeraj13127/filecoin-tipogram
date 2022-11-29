import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BlockchainProvider from './blockchain';
import { Dashboard, Landing,SignIn,SignUp } from './globals';
import './App.scss';
function App() {
  return (
    <>
    <BlockchainProvider/>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/dashboard/*' element={<Dashboard/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/> 
       
      </Routes> 
    </Router>
    </>
  ) 
}

export default App