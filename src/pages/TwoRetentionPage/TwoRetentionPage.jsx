import React from 'react'
import {Link} from "react-router-dom"
import Chat from "../../components/Chat/Chat"
import "./TwoRetentionPage.scss"

function TwoRetentionPage() {
  return (
    <>
    <div className='page-layout'> {/* do not touch pls */}
    <Chat/>
    <div>RetentionPage</div>
    <Link to="/main">Link to main page</Link>
    </div>
    </>

  )
}

export default TwoRetentionPage