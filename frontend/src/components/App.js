import React,{Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import Footer from './Footer'
import '../css/formshow.css'
import Items from './items'
import Nav from './navbar'


  export default class App extends Component {
 render(){
      return(
             <div>
              
               <Main />  
              </div>
            )
          }
    }

  
  



