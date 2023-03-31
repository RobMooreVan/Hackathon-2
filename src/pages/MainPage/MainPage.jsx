import React from 'react'
import {Link} from "react-router-dom"
import arrow from "../../assets/icons/arrow.svg"

function MainPage() {
  return (
    <>
    <div className='page-layout'> {/* do not touch pls */}
    <div>Dashboard</div>
    <Link to="/retention">Link to retention page</Link>
    <button className='cta cta--dark'>Button 1</button>
    <button className='cta cta--light'>Button 2</button>
    <img className="" src={arrow} alt="arrow test"/>

    <button className='tag tag--light'>Tag test 1</button>
    <button className='tag tag--dark'>Tag test 2</button>
    </div>
    </>
  )
}

export default MainPage