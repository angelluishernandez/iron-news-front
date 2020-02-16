import React from "react"
import IronNewsService from "../../services/IronNewsService"
import {Link, Redirect} from "react-router-dom"
import {WithAuthConsumer} from "../../contexts/AuthContext"


class Login extends React.Component{

  state = {
    data: {
      email: "", 
      password: ""
    }, 
    error: false, 
    loading: false
  }

  handleSubmit = event => {

  }

  handleBlur = event =>{


  }

  handleChange = event =>{



  }

  render(){
    const {data, error, loading} = this.state
    return(
      <div className="Login"> 
        <form className="mb-4" onSubmit={this.handleSubmit}>
          <div className="mb-4">
        <label htmlFor="email">
          Email
        </label>
        <input type="text" className="form-control" id="email" autoComplete="off" value={data.email} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Email"/>
        </div>
        <div className="mb-4">
        <label htmlFor="password">
          Email
        </label>
        <input type="password" className="form-control" id="password" autoComplete="off" value={data.password} onBlur={this.handleBlur} onChange={this.handleChange} placeholder="Password"/>
        </div>
        </form>



      </div>




    )
  }
}

