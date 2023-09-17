import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

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
        // componente Users
        users,
        loading,
        // componente: FormUsers
        createUser,
        updateUsers,
        updateInfo,
        setUpdateInfo, 
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
