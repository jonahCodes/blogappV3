import React,{Component} from 'react';
import axios from 'axios';

export default class logout extends Component{
render(){
    axios.get('http://localhost:3001/account/logout')
            .then(res=>{
                console.log(res);
                this.props.history.push('/login')
            })
            .catch(err=>{
                console.log(err);
            })
            
            return(
                <div>
                </div>
                 )
    }
    
}

   
        
    
