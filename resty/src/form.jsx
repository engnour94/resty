
import React from "react";
import './form.scss'
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
      method: "",
    }
    this.handelSubmit = this.handelSubmit.bind(this)
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
        
    let req = this.state.URL;
    let body = e.target.body.value
    let raw;
        if ((this.state.method === 'PUT' || this.state.method === 'POST') ){
            raw = await fetch(req , {method : this.state.method , body :  body ,mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },});

        }else if (this.state.method === 'GET' || this.state.method === 'DELETE' ) {

           raw = await fetch(req , {method : this.state.method});
        }
    let Headers= await fetch(req).then((response) => {    
        for (let pair of response.headers.entries()) {
            let n = pair.length
            let string = '';
            for (let i =0;i<n;i++){
                if (i %2 === 0){
                    string = string + pair[i] + ': ' + pair[i+1]
                }
            }
            return string;
        }
    }); 
    let data = await raw.json()
     let array = [];
    if (data){
      let str = `${this.state.method},${this.state.URL},${body}`
      console.log('this is the req',str)
     
      let oldResult =JSON.parse(localStorage.getItem('request'))
      if (oldResult){
          console.log ('these are old results' , oldResult)
          Object.values(oldResult).map((item) => {
              if (!array.includes (item)){
                  array.push (item)
              }
          });
      }
      if (!array.includes(str)){
          console.log('inside for if ')
          array.push (str)
          array.filter((item, index) => array.indexOf(item) === index)
              localStorage.setItem('request', JSON.stringify(array));
          }
    
  }
    let results;
        if (data.results){
            results  = data.results;
        }else {
            results = data
        }
        let count;
        if (data.count){    
            count = data.count;
        }else {
            count = data.length
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
           <div></div>
           <div id="buttons">
          <button onClick={this.handleMethod} value="GET">GET</button>
          <button onClick={this.handleMethod} value="POST">POST</button>
          <button onClick={this.handleMethod} value="PUT">PUT</button>
          <button onClick={this.handleMethod} value="DELETE">DELETE</button>
          <section id="result">  {this.state.method}    {this.state.URL}</section>
        </div>
          <textarea rows="4" cols="50" id="textarea" name="body" placeholder="please enter a json body"></textarea>
       

        </form>
   
       

      </div>
    )
  }

}

export default Form;

