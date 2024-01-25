import React from 'react'
import './css/searchUser.scss'

const SearchList = () => {
  return (
    <div className='search_chat'>
      <div>
        <input type="search" name='user' id='user' placeholder='search or start new chat' required />
        <i className='bi bi-search'></i>
      </div>
    </div>
  )
}

export default SearchList