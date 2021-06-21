import React from 'react'
import './App.scss';
import Header from './header'
import Footer from './footer';
import Form from './form';
import Result from './result';

  class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        results:['no results yet'],
        Headers:{header:'NA'},
        count:0
      }
    }

    handleForm = (results, count,Headers) => {
      console.log('from the parent handler', count);
      this.setState({ results, count, Headers});
  }

  render() {
      return (
          <React.Fragment>
              <div className="App">
              <Header/>
                  <Form handler={this.handleForm} />
                  <Result count={this.state.count} results={this.state.results} Headers={this.state.Headers} />
                  <Footer/>
              </div>
          </React.Fragment>
      )
  }

  
  }
 


export default App;
