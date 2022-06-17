import './App.css';
import React from 'react';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import MainContainer from './mainContainer/mainContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;
