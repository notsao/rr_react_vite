import './App.css'
import React from 'react';
import NavBar from './components/NavBar'
import MainContent from './components/MainContent';
import Services from './components/Services'
import FAQs from './components/FAQ'
import ContactUs from './components/ContactUs'
function App() {


  return (
    <div className='App'>
      <NavBar/>
      <MainContent/>
      <Services/>
      <FAQs/>
      <ContactUs/>
    </div>
  )

}

export default App
