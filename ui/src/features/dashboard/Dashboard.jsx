import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {
  var {role} = useSelector(state => state.auth)  
  return (
    <div>
      <h1>All Type of Users Dashboard : {role}</h1>
    </div>
  )
}

export default Dashboard