import React from "react";
import "./result.scss"
import JSONPretty from 'react-json-pretty';
class Result extends React.Component {
   render(){
         console.log("child : ", this.props)
    return(
        
        <div className="App-result"> 
          <h3>Header:  <JSONPretty  data={this.props.Headers} ></JSONPretty>  </h3>
          <h3>Count:  {this.props.count}</h3>
          <h3>Result:  <JSONPretty  data={this.props.results} ></JSONPretty>  </h3>
           
        </div>
        
    )


   }
}

export default  Result;