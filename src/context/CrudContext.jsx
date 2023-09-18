import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useForm } from "react-hook-form";

export const CrudContext = createContext();

const CrudProvider = (props) => {
  // -------------------------------------------------------------------------------------------------//
  // logica del  CRUD
  const [updateInfo, setUpdateInfo] = useState();
  const baseUrl = `https://users-crud.academlo.tech`;
  const [users, getUsers, createUser, deleteUsers, updateUsers, loading] = useFetch(baseUrl);
  
  useEffect(() => {
    getUsers("/users/");
  }, []);
  console.log(users)
  // -------------------------------------------------------------------------------------------------//
  // logica del formulario
  const {register, handleSubmit, reset} = useForm()
  const handleCancel = () =>{
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    })     
  }
  // -------------------------------------------------------------------------------------------------//
  // logica del modo nocturno
  const [checked, setChecked] = useState(false);
  
  const handleChecked = () => {
    setChecked(!checked);
  };
  // -------------------------------------------------------------------------------------------------//
  // logica del paginado

  return (
    <CrudContext.Provider
      value={{
        reset, 
        // componente Users
        users,
        loading,
        // componente: FormUsers
        createUser,
        updateUsers,
        updateInfo,
        setUpdateInfo, 
        register,
        handleSubmit,
        handleCancel,
        // componente CardUser
        deleteUsers,
        // componente: switch
        checked,
        handleChecked,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
};

export default CrudProvider;
