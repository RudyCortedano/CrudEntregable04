import { Box, Pagination } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CrudContext } from "../context/CrudContext";

const PaginationUsers = () => {
  const {users,checked,pageCount, handleChange,prueba, prueba2,pageCount2} = useContext(CrudContext)

  if(prueba2){
    pageCount-1
  }

  return (
    <>
    {
      // prueba ? (
        <div className={checked ? "buttonPaginate__nigth" : "buttonPaginate__day"}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div className="pagination__home">
              <Pagination
                variant="outlined"
                count={prueba ?  pageCount : pageCount2}
                onChange={handleChange}
                size="large"
                siblingCount={2}
                boundaryCount={2}
              />
            </div>
          </Box>
        </div>
      // ) : (
      //   <h1> <a href="/">Regresar</a></h1>            
      // )     
    }

    </>
  );
};

export default PaginationUsers;
