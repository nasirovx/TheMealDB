import React from 'react';
import Header from './Components/Header/Header';
import Main from './Pages/Main';
import './App.css'
import Footer from './Components/Footer/Footer';

const App = () => {
  
  return (
    <div className='app'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
