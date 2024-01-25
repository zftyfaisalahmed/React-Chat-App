import React from 'react'
import HeaderMenu from './HeaderMenu';
import SearchList from './SearchList';
import UserList from './UserList';
import './css/sideBar.scss'

const SideBar = () => {
  return (
    <div className='left-side'>
        <HeaderMenu />
        <SearchList />
        <UserList />
    </div>
  )
}

export default SideBar