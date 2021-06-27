import React from 'react';
import './history.scss'
class History extends React.Component {
    constructor (props){
        super (props)
        this.hisClickHandler =this.hisClickHandler.bind(this);
 
    }
    hisClickHandler = e =>{
        e.preventDefault ()
        let array2 = []
        let oldResult =JSON.parse(localStorage.getItem('request'))
        if (oldResult){
            Object.values(oldResult).map((item) => {
                if (!array2.includes (item)){
                    array2.push (item)
                }
            });
            let meth = e.target.method.value;
            let ur = e.target.url.value;
            let bod = e.target.body.value;
            this.props.after (meth,ur,bod)

    };
}





      
      render (){
          return (
            <React.Fragment>
          <div id="historyStyle">
              <ul>
                 {  
                     this.props.arr.map(item=>{
                      let str = item.split(',')
                      let method = str[0];
                      let url = str[1];
                      let body;
                      if (str[2]){

                       body = str[2] 
                      }
                      if (str.length > 3){
                          for (let i = 3; i < str.length ; i ++){
                              body = body + str[i]
                          }
                      }
                      return (
                          <React.Fragment>
                          
                          <form onSubmit={this.hisClickHandler}>
                          <input type="hidden" value={str[0]} name="method"/>
                          <input type="hidden" value={str[1]} name="url"/>
                          <input type="hidden" value={str[2] + str[3]} name="body"/>
                          <li><button type='submit'>{method}</button>   {url} , body is {body}</li>
                          </form>
                         
                       
                      
                          </React.Fragment>

                      )
                     })
                     
                  }
              </ul>
              </div>
            
        </React.Fragment>
                   
         )          
  
    }
}



export default History
