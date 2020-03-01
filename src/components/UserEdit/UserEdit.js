import React from "react"
import { WithAuthConsumer } from "../../contexts/AuthContext"
import SignIn from "../SignIn/SignIn"

const UserEdit = (props) => {

  return (
    <div>
      <SignIn user={props.currentUser}>

      </SignIn>

    </div>
  )

}

export default WithAuthConsumer(UserEdit)