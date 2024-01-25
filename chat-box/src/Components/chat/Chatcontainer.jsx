import React from 'react'
import SideBar from './SideBar';
import ChatWindow from './ChatWindow';
import './css/chatContainer.scss'

const Chatcontainer = () => {
  return (
    <div className='chat-container'>
        <SideBar />
        <ChatWindow />
    </div>
  )
}

export default Chatcontainer