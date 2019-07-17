import React,{Component} from 'react'
import { Switch, Route, Router,Link, Redirect} from 'react-router-dom'

import '../css/forms.css'
import axios from 'axios'
import Nav from './navbar'
export default class CreateForm extends Component{
  constructor(props){ 
    super(props);
    this.state={
     image:'',
     description:'',
     redirectToReferrer:false,
     loading:false
       
    }
  }
   
  handleChange=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    
    })
  }
 
  handleRedirect=()=>{
    axios.post('http://localhost:3001/',{image:this.state.image,description:this.state.description})
    .then(res =>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
    this.setState({
    loading:true
  })
  setTimeout(()=>this.setState({loading:false,redirectToReferrer:true}),1000);

    
  }
  

   render=()=>{
          var redirectToReferrer = this.state.redirectToReferrer;
      if (redirectToReferrer === true) {
          return <Redirect to="/"/>
      }
     const { image,description} = this.state;
  return( 
      <div className='container' style={{paddingTop:'200px'}}>

      
      <form className="login-form" >


              <input name="image" type="text" value ={image} onChange={this.handleChange} className="input username" placeholder="URL IMAGE" />

              <input name="description" type="textbox" value={description} onChange={this.handleChange} className="input password" placeholder="Description" />

             <button onClick={this.handleRedirect} disabled={this.state.loading}>add</button>
            
	
      	</form>


        </div>
    )
  }
}