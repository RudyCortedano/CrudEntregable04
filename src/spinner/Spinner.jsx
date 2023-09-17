import { DotSpinner } from "@uiball/loaders";
import React, { useContext } from "react";
import { CrudContext } from "../context/CrudContext";

const Spinner = () => {
  const {checked} = useContext(CrudContext)
  return (
    <div className="spinner__global">
      <DotSpinner size={100} speed={0.9} color={checked ? "white" : "black" } />
    </div>
  );
};

export default Spinner;
