import './App.css'
import React from 'react';
import NavBar from './components/NavBar'
import MainContent from './components/MainContent';
import Services from './components/Services'
function App() {


  return (
    <div className='App'>
      <NavBar/>
      <MainContent/>
      <Services/>
      
    </div>
  )

}

export default App
