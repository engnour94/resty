import React from 'react';
import JSONPretty from 'react-json-pretty';
import './result.scss';
class Result extends React.Component {
    render (){
    console.log ('props : ' , this.props)
        return (
            <React.Fragment>
                <div id="results"> results for your search : 
                    <p>Headers :</p> <JSONPretty id="json-pretty" data= {this.props.header}></JSONPretty>
                    <p>count is {this.props.count}</p>
                    <p>Results : </p><JSONPretty id="json-pretty" data={this.props.results}></JSONPretty> 
                </div>
            </React.Fragment>
        )
    }
}
export default Result;

// export default Results;
// class Result extends React.Component {
//    render(){
//          console.log("child : ", this.props)
//     return(
        
//         <div className="App-result"> 
//           <h3>Header:  <JSONPretty  data={this.props.Headers} ></JSONPretty>  </h3>
//           <h3>Count:  {this.props.count}</h3>
//           <h3>Result:  <JSONPretty  data={this.props.results} ></JSONPretty>  </h3>
           
//         </div>
        
//     )


//    }
// }

// export default  Result;