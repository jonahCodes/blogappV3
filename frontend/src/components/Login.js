import React ,{Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class Login extends Component{
    state={
        username:'',
        password:'',
        error:{},
        redirectToReferrer:false,
        loading:false
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }

    onSubmit=(e)=>{
        e.preventDefault();
      
    axios.post('http://localhost:3001/account/login', {
      username:this.state.username,
      password: this.state.password
    })
    .then(response => {
      console.log(response.data)
      const isAuth = response.data;
      
      window.localStorage.setItem('isAuth',isAuth)
    })
    .catch(err => {
      console.log(err)
    })
    this.setState({
      loading:true
    })
    // setTimeout(()=>this.setState({loading:false,redirectToReferrer:true}),1000);
  
    }
    render(){
      const isAuth = window.localStorage.getItem('isAuth');
      if(isAuth){
          return <Redirect to='/'/>
      }
      var redirectToReferrer = this.state.redirectToReferrer;
      if (redirectToReferrer === true) {
          return <Redirect to="/"/>

      }
        return(
            <div className='container'>
                 <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                  type="username"
                  className="form-control"
                  name="username"
                  placeholder="Enter Username"
                  value={this.state.username}
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
                Sign in
              </button>
            </form>
          </div>
        </div>
            </div>
        )
    }
}