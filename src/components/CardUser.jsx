import React, { useContext } from 'react'
import { CrudContext } from '../context/CrudContext'

const CardUser = ({user}) => {
  const {deleteUsers, setUpdateInfo, checked, reset, setUserID} = useContext(CrudContext)

  // const handleDelete = () =>{
  //   deleteUsers('/users',user.id)   
  //   setUpdateInfo() 
  // }
  const deleteID = () =>{
    setUserID(user.id)
  }
  const handleEdit = () =>{
    reset(user)
    setUpdateInfo(user)
  }
  return (
    <>
   
    <div className="user__general">
      <article className={checked ? "user__nigth" : "user__day"}>
   
        
        <ul className="user__list">
          <li className="user__item user__bottom" ><h3 className='user__name'>{user.first_name} {user.last_name}</h3></li>         
          <li className="user__item"><span className='user__form'>Email: </span><span className='user__bold'>{user.email}</span></li>
          <li className="user__item"><span className='user__form'>Password: </span><span className='user__bold'>{user.password}</span></li>
          <li className="user__item user__bottom">< span className='user__form'>Birthday: </span><span className='user__bold'>{user.birthday}</span></li>
        </ul>


     
        <div className="user__button">
          <label htmlFor="check">
            <span className='user__buttonEdit' onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></span>
          </label>
          <label onClick={deleteID} htmlFor='checkDelete'  className='user__buttonDelete' ><i className="fa-solid fa-trash-can"></i></label>
        </div>

      </article>
    </div>
    </>

  )
}

export default CardUser
