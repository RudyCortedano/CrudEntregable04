import React, { useContext } from "react";
import { CrudContext } from "../context/CrudContext";
import CardUser from "./CardUser";

const Users = () => {
  const { currentItems,handleDelete } = useContext(CrudContext);
  return (
    <>
      <input type="checkbox" className="modalDelete" id="checkDelete" />
      <header className="modal__delete">
        <div className="modal__content">
          <div className="modal__exit__position">
            <label className="modal__exitBtn" htmlFor="checkDelete"><i className="fa-solid fa-xmark"></i></label>
          </div>
          <p>Esta seguro que quiere eliminar a este usuario</p>
          <div className="modal__delete__position">
            <label onClick={handleDelete} className="modal__btnDelete" htmlFor="checkDelete">Eliminar</label>
          </div>
        </div>
        <label htmlFor="checkDelete" className="exit__modal__delete"></label>   
      </header>

      <div className="user_init">      
        {
          currentItems?.map(user =>(
            <CardUser user={user} key={user.id}/>
          ))
        }  
      </div>
    </>
  );
};

export default Users;
