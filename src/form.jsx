
import React from "react";
import './form.scss'
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            URL:"",
            method:"",
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
    render(){
        return(
            
<div className="form">
<form >
  <label for="url">URL:  </label>

  <input onChange= {this.handleURL} id="url" />
  <input type="submit" value="GO!"/>
</form> 
<div id="buttons">
    <button onClick={this.handleMethod} value="Get">GET</button>
<button onClick={this.handleMethod} value="POST">POST</button>
<button onClick={this.handleMethod} value="PUt">PUT</button>
<button onClick={this.handleMethod} value="DELETE">DELETE</button
></div>
<section id="result">  {this.state.method}    {this.state.URL}</section>

</div>
        )
    }

}

export default Form;