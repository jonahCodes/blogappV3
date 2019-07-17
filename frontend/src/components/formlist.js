// import React,{Component} from 'react'
// import '../css/formshow.css'
// import axios from 'axios';


// export default class FormList extends Component{
//   state={
//     item:[]
//   }
//   componentDidMount(){
//     axios.get('http://localhost:3001/')
//     .then(res=>{
//       console.log(res);
//       this.setState({item:res.data});
//     })
//   }

//   render(){ 
//     var item = this.state.item.map((items) =>{
//         return  <section className="main special">
//         <div className="container fit primary">
//           <div className="content">
          
//                 <div className="thumbnail">
//                 <div className="thumbnail__container">
//                   <div className="thumbnail__img" ><img alt="show"src={items.image}/>
//                   </div>
                 
//                 </div>
//               </div>
//              </div>
//         </div>
             
        
//      </section>
//     })
//     return(
//      <div>{item}</div>
   
//   )
// }
// }
