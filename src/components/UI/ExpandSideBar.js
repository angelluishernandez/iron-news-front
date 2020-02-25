import React from "react"

const ExpandSideBar = (props) => {
  return(
    <div className="sidebar-main" id="sidebar-main">
    <button className="openbtn" onClick={props.handleClose}> Open Sidebar </button>
  </div>

  )
}


export default ExpandSideBar