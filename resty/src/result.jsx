import React from 'react';
import JSONPretty from 'react-json-pretty';
import './result.scss';
class Result extends React.Component {
 
    render (){
      if(this.props.count>0){ return (
        <React.Fragment>
            <div id="App-result"> results for your search : 
                <p>Headers :</p> <JSONPretty id="json-pretty" data= {this.props.header}></JSONPretty>
                <p>count is {this.props.count}</p>
                <p>Results : </p><JSONPretty id="json-pretty" data={this.props.results}></JSONPretty> 
            </div>
        </React.Fragment>
    )}else
    {return(<p> </p>)}  
    }
}
export default Result;

