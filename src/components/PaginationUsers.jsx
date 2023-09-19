import { Box, Pagination } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CrudContext } from "../context/CrudContext";

const PaginationUsers = () => {
  const {checked,pageCount, handleChange,countPaginate} = useContext(CrudContext)

  return (
    <>
      {
        countPaginate && (
          <div className={checked ? "buttonPaginate__nigth" : "buttonPaginate__day"}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <div className="pagination__home">
                <Pagination
                  variant="outlined"
                  count={pageCount}
                  onChange={handleChange}
                  size="small"               
                />
              </div>
            </Box>
          </div>
        ) 
      }
    </>
  );
};

export default PaginationUsers;
