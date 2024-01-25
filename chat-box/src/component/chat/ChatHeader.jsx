import React from 'react'
import {chatList} from './content/data'
import './css/chatHeader.scss'

function ChatHeader() {
  return (
    <div className='header'>
        <div className="imgText">
            <div className="userimg">
                <img src="https://i.pinimg.com/originals/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg" alt="" className='cover' />
            </div>
            <h4> terril hills </h4>
        </div>
        <div className="icons">
            <div><i className="bi bi-search"></i></div>
            <div><i className="bi bi-three-dots-vertical"></i></div>
        </div>
    </div>
  )
}

export default ChatHeader
