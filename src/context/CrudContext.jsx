import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useForm } from "react-hook-form";

export const CrudContext = createContext();

const CrudProvider = (props) => {
  // -------------------------------------------------------------------------------------------------//
  // logica del  CRUD
  const [updateInfo, setUpdateInfo] = useState();

  const baseUrl = `https://users-crud.academlo.tech`;  //? API Usada en el modulo de front-end
  // const baseUrl = `https://users-dev-hfnd.3.us-1.fl0.io`; //? API Creada en el modulo de back-end
  // const baseUrl = `https://users-crud-backend-rchj.onrender.com`; //? API Creada en el modulo de back-end

    // hook personalizado para la realizacion del CRUD
  const [users, getUsers, createUser, deleteUsers, updateUsers, loading] = useFetch(baseUrl);

  useEffect(() => {
    getUsers("/users/");
  }, []);
  // -------------------------------------------------------------------------------------------------//
  // libreria useForm global para controlar inputs y setiar campos desde las card.
  const { register, handleSubmit, reset } = useForm();
  const [userID, setUserID] = useState()

  const handleDelete = () =>{
    deleteUsers('/users',userID)   
    setUpdateInfo() 
  }

  const handleCancelReset = () =>{
    setUpdateInfo()
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
  console.log(checked)
  // -------------------------------------------------------------------------------------------------//
  // logica del paginado
  const itemsPerPage = 8;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = users?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users?.length / itemsPerPage); 

  const handleChange = (event, value) => {
    const value2 = value - 1;
    const newOffset = value2 * itemsPerPage;

    setItemOffset(newOffset);
  };
  const countPaginate = users?.length >=  itemsPerPage;  
  // -------------------------------------------------------------------------------------------------//
  return (
    <CrudContext.Provider
      value={{
        // componente: navbar     
        handleCancelReset,
        // componente: card
        reset,
        setUserID,
        // componente: Users
        handleDelete,
        currentItems,
        loading,            
        // componente: FormUsers
        createUser,
        updateUsers,
        updateInfo,
        setUpdateInfo,
        register,
        handleSubmit,
        // componente: CardUser
        deleteUsers,
        // componente: Switch
        checked,
        handleChecked,
        // componente: paginateusers
        pageCount,
        handleChange,
        countPaginate,           
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
};

export default CrudProvider;
