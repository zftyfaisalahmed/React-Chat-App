import React from 'react'
import HeaderMenu from './HeaderMenu';
import SearchList from './SearchList';
import UserList from './UserList';

const SideBar = () => {
  return (
    <div>
        <HeaderMenu />
        <SearchList />
        <UserList />
    </div>
  )
}

export default SideBar