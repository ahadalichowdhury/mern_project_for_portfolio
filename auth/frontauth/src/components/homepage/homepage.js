import React from 'react'
import "./homepage.css"

function Homepage({setLoginUser}) {
  return (
    <div className='div'>
      <h1 className='home'>hello homepage</h1>
      <div className="button" onClick={() => setLoginUser({})} >Logout</div>
    </div>
  )
}

export default Homepage
