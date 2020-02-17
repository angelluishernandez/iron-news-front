import React from "react"
import { WithAuthConsumer } from "../../contexts/AuthContext"

class Home extends React.Component{
  state={
    data:{

    }


  }
render(){
  return(
    <div>
      Hola
    </div>
  )



}


}

export default WithAuthConsumer(Home)