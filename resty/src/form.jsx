
import React from "react";
import './form.scss'
const superagent = require('superagent')
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
      method: "",
    }
  }
  handleURL = e => {
    let URL = e.target.value;
    this.setState({ URL });
  }
  handleMethod = e => {
    let method = e.target.value;
    this.setState({ method });
  }
  handelSubmit = async e => {
    e.preventDefault()
    let URL = this.state.URL;
    let res = await superagent.get(URL)
    // console.log('........', res)
    let count=0
    let results = []
    let Headers={}
    if(res.body){
     count = res.body.count;
     results = res.body.results;
     Headers =res.headers
    }

    
    
    console.log('header   ...',Headers)
    console.log('result  ...',results)
    console.log('count ...',count)
    this.props.handler(results, count, Headers);
  }

  render() {
    return (

      <div className="form">
        <form onSubmit={this.handelSubmit} >
          <label for="url">URL:  </label>

          <input onChange={this.handleURL} id="url" />
          <input type="submit" value="GO!" />
        </form>
        <div id="buttons">
          <button onClick={this.handleMethod} value="Get">GET</button>
          <button onClick={this.handleMethod} value="POST">POST</button>
          <button onClick={this.handleMethod} value="PUt">PUT</button>
          <button onClick={this.handleMethod} value="DELETE">DELETE</button
          >

        </div>
        <section id="result">  {this.state.method}    {this.state.URL}</section>

      </div>
    )
  }

}

export default Form;