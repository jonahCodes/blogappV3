import React ,{Component}from 'react'
import { Switch, Route, Router } from 'react-router-dom'


import Home from './Theme'
import CreateForm from './Form'
import Show from './showindex'
import Footer from './Footer'
import Items from './items'
import App from './App'
import Nav from './navbar'
import Update from './update'
import OneFormUpdate from './showComponents/formupdate'
import Register from './register'
import Login from './Login'
import axios from 'axios'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export default class Main extends Component{
 //testing 
  render(){

  console.log('9999999999')
  console.log(this.props)
  
    return( 
      
      <div>
   
    <Route exact path='/' component={Home}/>   
    <Route exact path='/' component={Items}/>   
    <Route  path='/' component={Nav}/>
    <Route exact path='/update/:id' component={OneFormUpdate}/>
    <Route exat path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/logout' render={()=>{
      axios.get('http://localhost:3001/account/logout')
    }}/>
    <Route exact path='/create' render={()=><CreateForm/>}/>
    <Route path='/items/:id' component={Show}/>    
    <Route path='/' component={Footer}/>
    </div>

    
    )
  }
}

    



