import { useState } from 'react'
import './App.css'
import Insert from './insert'
import Select from './select'
import Update from './update'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Insert />} />
        <Route path='/select' element={<Select />} />
        <Route path='/update/:userId' element={<Update />} />
        
      </Routes>
    </Router>
  );
}

export default App;
