import React from 'react';
import './App.scss';
import Header from './header'
import Footer from './footer'
import Form from './form'
import Result from './result'
import History from './History';


class App extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      results : ['Results will be here'],
      count : 0,
      header : 'Headers will be here',
      array : [],
      method : '',
      URL : '',
      body : {},
      flag : false,
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleHistory = this.handleHistory.bind (this);
  }


  handleForm (results,count, header , array , flag){
    this.setState({ results, count  , header , array ,flag});
  }

  handleHistory(array, flag ){
    this.setState ({...this.state, array : array, flag : flag })
  };
  afterSubmit = (method, URL , body)=>{
    this.setState ({method , URL , body})
    
  }

  componentDidMount = ()=>{

    let array = []
      let oldResult =JSON.parse(localStorage.getItem('request'))
      if (oldResult){
        Object.values(oldResult).map((item) => {
          if (!array.includes (item)){
            array.push (item)
          }
        });
      }
    this.setState({array})

  }

  render(){
    return(
      <React.Fragment>

        <div className=".App">
      <Header/>
      <main>
      <History historyHandler={this.handleHistory} after={this.afterSubmit}   arr={this.state.array} flag={this.state.flag} />
      <Form handler={this.handleForm}  meth= {this.state.method} ur={this.state.URL}  bod={this.state.body} fl={this.state.flag}/> 
      <Result results = {this.state.results} count={this.state.count} header={this.state.header}/>
      </main>
  
      <Footer/>
      </div>
      </React.Fragment>
    )
  }
}


export default App;
