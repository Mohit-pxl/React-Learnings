import React from 'react'
import UserClass from './UserClass'
import User from './User'

const about = () => {
  return (
    <div>
      <h1>React About as page</h1>
      {/* <User name={"Mohit Yadav (function)"}/> */}
      <UserClass name={"Mohit Yadav (class)"}/>
    </div>
  )
}

export default about
