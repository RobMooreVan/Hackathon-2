import React from 'react'
import {Link} from "react-router-dom"
import Chat from "../../components/Chat/Chat"
import "./AdvancePage.scss"

function AdvancePage() {
  return (
    <>
    <div className='page-layout'> {/* do not touch pls */}
    <Chat/>
    <div>ADVANCE PAGE</div>
    </div>
    </>

  )
}

export default AdvancePage