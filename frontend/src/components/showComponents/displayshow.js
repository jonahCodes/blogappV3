import React,{Component} from 'react'
import axios from 'axios'
export default class DisplayShow extends Component{
   
    render(){
        return(
            <div>
                <img src={this.props.image}/>
            </div>
        )
    }
}