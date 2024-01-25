import React from 'react'
import './css/headerMenu.scss'

const HeaderMenu = () => {
  return (
    <div className='Header'>
      <div className="userimg">
        <img src="https://i.pinimg.com/originals/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg" alt="" />
      </div>
      <div className="icons">
          <i className='bi bi-megaphone-fill'></i>
          <i className='bi bi-people-fill'></i>
          <i className='bi bi-chat'></i>
          <i className='bi bi-three-dots-vertical'></i>
      </div>
    </div>
  )
}

export default HeaderMenu