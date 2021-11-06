import React from 'react'

import UserList from '../components/UserList'

const Users = () => {
    const USER = [
        {
            id: 'u1',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncxHwv7BXAjmaSBtTzrsp1mVdUkJGEKrUuA&usqp=CAU',
            name: 'Neha',
            places: 2
        }
    ]
        
    return <UserList items={USER}/>
}

export default Users