import React ,{Component}from 'react'
import axios from 'axios';
import uuid from 'uuid/v4'
import { Link } from 'react-router-dom'
import Show from './showindex'
import Oneitem from './oneitem';


export default class Items extends Component{
    state={
    item:[]
  }
  componentDidMount(){
    axios.get('http://localhost:3001/')
    .then(res=>{
      console.log(res);
      this.setState({item:res.data});
    })
  }


   render(){
  
const allitems = this.state.item.map(items => {
        return <Oneitem
        key={items._id}
        id={items._id}
        image={items.image}
        title={items.description}
        />
    });
       return(
            <div>
            {allitems}
            </div>
       )
   }
}
