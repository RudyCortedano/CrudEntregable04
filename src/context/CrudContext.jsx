import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useForm } from "react-hook-form";

export const CrudContext = createContext();

const CrudProvider = (props) => {
  // -------------------------------------------------------------------------------------------------//
  // logica del  CRUD
  const [updateInfo, setUpdateInfo] = useState();
  const baseUrl = `https://users-crud.academlo.tech`;
  const [users, getUsers, createUser, deleteUsers, updateUsers, loading] =
    useFetch(baseUrl);

  useEffect(() => {
    getUsers("/users/");
  }, []);
  console.log(users);
  // -------------------------------------------------------------------------------------------------//
  //  usaremos el reset globalmente para llenar los campos con la informacion ya que updateInfo
  //  presento un bug de dejar vacio los campos cuando entras para editar reseteas los campos
  //  te sales del formulario-modal dejandolo vacio y vuelves a editar el mismo usuario.
  const { register, handleSubmit, reset } = useForm();

  // -------------------------------------------------------------------------------------------------//
  // logica del modo nocturno
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  // -------------------------------------------------------------------------------------------------//
  // logica del paginado
  const itemsPerPage = 5;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = users?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users?.length / itemsPerPage);
  const pageCount2 = Math.round(users?.length / itemsPerPage);

  const handleChange = (event, value) => {
    const value2 = value - 1;
    const newOffset = value2 * itemsPerPage;

    setItemOffset(newOffset);
  };
  const prueba = users?.length > itemsPerPage;
  const prueba2 = users?.length === itemsPerPage;
  // -------------------------------------------------------------------------------------------------//
  return (
    <CrudContext.Provider
      value={{
        // componente: card
        reset,
        // componente: Users
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
        prueba,
        prueba2,
        pageCount2,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
};

export default CrudProvider;
