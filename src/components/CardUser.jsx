import React, { useContext } from 'react'
import { CrudContext } from '../context/CrudContext'

const CardUser = ({user}) => {
  const {deleteUsers, setUpdateInfo, checked, reset} = useContext(CrudContext)

  const handleDelete = () =>{
    deleteUsers('/users',user.id)   
    setUpdateInfo() 
  }
  const handleEdit = () =>{
    reset(user)
    setUpdateInfo(user)
  }
  return (
    <div className="user__general">
      <article className={checked ? "user__nigth" : "user__day"}>
        <ul className="user__list">
          <li className="user__item"><strong>Email: </strong><span>{user.email}</span></li>
          <li className="user__item"><strong>Password: </strong><span>{user.password}</span></li>
          <li className="user__item"><strong>First name: </strong><span>{user.first_name}</span></li>
          <li className="user__item"><strong>Last name: </strong><span>{user.last_name}</span></li>
          <li className="user__item"><strong>Birthday: </strong><span>{user.birthday}</span></li>
        </ul>
        <div className="user__button">
          <label htmlFor="check">
            <span className='user__buttonEdit' onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></span>
          </label>
          <button className='user__buttonDelete' onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button>
        </div>
      </article>
    </div>

  )
}

export default CardUser
