import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlockchainProvider from './blockchain';
import { Dashboard, Landing, PageNotFound } from './globals';
import './App.scss';
function App() {
  return (
    <>
    <BlockchainProvider/>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App