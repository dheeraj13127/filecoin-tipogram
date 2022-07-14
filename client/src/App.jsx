import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlockchainProvider from './blockchain';
import { Dashboard, Landing } from './globals';
import './App.scss';
function App() {
  return (
    <>
    <BlockchainProvider/>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
       
      </Routes>
    </Router>
    </>
  )
}

export default App