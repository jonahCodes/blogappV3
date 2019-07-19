import React,{Component} from 'react';
import { register } from './Userfunction';
import axios from 'axios'

export default class Register extends Component{
    state = {
        email:"",
        password:"",
        username:""
    }
    
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit=(e)=>{
        e.preventDefault();
       
  
      axios.post('http://localhost:3001/account/register', {
      email: this.state.email,
      password: this.state.password,
      username:this.state.username
    })
    .then(response => {
      console.log('registered', response.data)
    })
    .catch(err=>{
      console.log(err.response);
    })
}
            
    
    render(){
        return(
            <div className='container'>
         <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
            <h1 className='h3 mb-3 font-weight-normal'>Register</h1>
            <div className="form-group">
                <label htmlFor="username">Username </label>
                <input
                  type="username"
                  className="form-control"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
            
              <div className="form-group">
                <label htmlFor="email">email </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
            </div>
        );
    }
}