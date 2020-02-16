import React from "react"

import {WithAuthConsumer} from "../../contexts/AuthContext"
import { Redirect } from "react-router-dom"


const AuthenticatedRoute = (props) => {
  if(!props.currentUser){
    return <Redirect to="/login"/>
  }else{
    return <h1>Hola</h1>
  }

}

export default AuthenticatedRoute