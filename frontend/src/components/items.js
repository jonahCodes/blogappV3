import React ,{Component}from 'react'
import axios from 'axios';
import uuid from 'uuid/v4'
import { Link } from 'react-router-dom'
import Show from './showindex'
import Oneitem from './oneitem';


export default class Items extends Component{
    state={
    items:[]
  }
  componentDidMount(){
  axios.get('http://localhost:3001/items')
    .then(res=>{
      console.log(res.data);
      this.setState({items:res.data});
    })
  } 
  
   render(){
    var allitems = this.state.items.map(item => {
        return <Oneitem
        key={item._id}
        id={item._id}
        image={item.image}
        title={item.description}
        />
    });
  

       return(
            <div>
            {allitems}
            </div>
       )
   }
}
