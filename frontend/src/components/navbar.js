import React,{Component} from 'react'
import { Link ,NavLink} from 'react-router-dom'
import '../css/navbar.css'
export default class Nav extends Component{
    render(){
        return(
                // <div>
                //     <nav>
                //         <div className='logo'>
                //             <h4>Progue</h4>
                //         </div>
                //         <ul className='nav-links'>
                //        <NavLink to='/'><li><a>home</a></li></NavLink>
                //        <NavLink to="/create"><li><a>create</a></li></NavLink>
                //         </ul>
                      
                //     </nav>
                // </div>
                <div className='header'>
                 
      <div className="logo"> </div>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href="/create">Create</a></li>
          <li><a href="https://github.com/jonahCodes">Contact</a></li>
          <li><a href="/register">Register</a></li>

        </ul>
      </nav>
      <div className="menu-toggle">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>        
        )
    }
}