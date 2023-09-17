import React, { useContext } from 'react'
import { CrudContext } from '../context/CrudContext'
import CardUser from './CardUser'

const Users = () => {
  const {users} = useContext(CrudContext)
  return (
    <div className="user_init">
    {
      users?.map(user =>(
        <CardUser user={user} key={user.id}/>
      ))
    }
</div>
  )
}

export default Users