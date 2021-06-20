import React from 'react'
import './App.scss';
import Header from './header'
import Footer from './footer';
import Form from './form';

function App() {
  return (
  <React.Fragment >
    <div className="App">
   <Header/>
   <Form/>
  <Footer/>
  </div>
  </React.Fragment>


  );
}

export default App;
