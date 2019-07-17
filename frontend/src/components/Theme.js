import React,{Component} from 'react'
// import createForm from './Form'
import { Link } from 'react-router-dom'
import Nav from './navbar'


export default class Home extends Component{
  state={

  }
  render(){
    return(
      <div>
         <section id="header">  
              <Nav/>
      <header className="major" style={{marginTop:'250px'}}>
        <Link to="/"><h1>PROGUE</h1></Link>
       
      </header>
      <div className="container" style={{marginLeft:"-570px"}}>
        <ul className="actions special">
          <li><a href="#one" className="button primary scrolly">Begin</a></li>
        </ul>
      </div>
    </section>

     <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary"><img src="images/pic01.jpg" alt="" /></span>
        <div className="content">
          <header className="major">
            <h2>simplBlog app</h2>
          </header>
          <p>
          This App is a blog web mobile using responsive practice and React js combined with a Backend making it called the MERN stack.
           </p>
           <a className="button primary" href='/create' name="jonathan">Add blog</a> 
        </div>
      </div>
    </section> 
        </div>
    )
  }
}