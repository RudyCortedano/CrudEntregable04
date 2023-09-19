import React, { useContext, useEffect } from "react";
import { CrudContext } from "../context/CrudContext";

const FormUsers = () => {

  const {
    updateInfo,
    setUpdateInfo, 
    checked, register, 
    handleSubmit,    
    reset,
    updateUsers, 
    createUser
  } = useContext(CrudContext)

  useEffect (() => {
    reset(updateInfo)
  }, [updateInfo])

  const submit = data =>{
    if(updateInfo){
      updateUsers('/users',updateInfo.id, data)
      setUpdateInfo()
    }else{
      createUser('/users/', data)
      console.log(data)
    }
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    })
  }  
  const handleCancel = () =>{
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    })     
  }
  
  return (
    <>
      <input type="checkbox"  className="checkModal" id="check"/>    
      <header className="form__modal">
        <div className="form__global">
          <form className={checked ? "form__night" : "form__day"} onSubmit={handleSubmit(submit)}>
            <div className="form__exit">
              <label className="form__exit__style" htmlFor="check"><i className="fa-solid fa-xmark"></i></label>
            </div>
            <div>
              <label htmlFor="first_name">First name</label>
              <input required {...register("first_name")} type="text" id="first_name" />
            </div>
            <div>
              <label htmlFor="last_name">Last name</label>
              <input required {...register("last_name")} type="text" id="last_name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input required {...register("email")} type="text" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input required {...register("password")} type="password" id="password" />
            </div>         
            <div>    
              <label htmlFor="birthday">Birthday</label>
              <input required {...register("birthday")} type="date" id="birthday" />
            </div>
            <div className="form__button">
              <button className="form__btnUpdate">{updateInfo ? "Update" : "Create"}</button>
              <button className="form__btnReset"  onClick={handleCancel}>Reset</button>
            </div>
          </form>
        </div> 
        <label htmlFor="check" className="exit__modal"></label>   
      </header>
    </>
  );
};

export default FormUsers;
