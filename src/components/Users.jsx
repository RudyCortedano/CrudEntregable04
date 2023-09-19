import React, { useContext } from 'react'
import { CrudContext } from '../context/CrudContext'
import CardUser from './CardUser'

const Users = () => {
  const {currentItems} = useContext(CrudContext)
  return (
    <div className="user_init">      
        {
          currentItems?.map(user =>(
            <CardUser user={user} key={user.id}/>
          ))
        }  
</div>
  )
}

export default Users