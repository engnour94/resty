import './help.scss'
import React from 'react';

class Help extends React.Component{

 render() {
     return(

        <React.Fragment>
        <div className="help">
        <h2>How to use RESTy web App</h2>
        
        <p> 1. Fill URL</p> 
        
        <p> 2.  the method </p>
        <p> 3. the body of the request if the method is put and post</p>
         
         <p> 4.  and hit (GO!) button so you can got the response.</p>
         
        </div>
    
        </React.Fragment> 
     
    
   )     
 }
}

export default Help