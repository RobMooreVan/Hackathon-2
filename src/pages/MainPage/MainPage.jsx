import React from 'react'
import {Link} from "react-router-dom"

function MainPage() {
  return (
    <>
    <div>Dashboard</div>
    <Link to="/retention">Link to retention page</Link>
    </>
  )
}

export default MainPage