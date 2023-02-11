import React from "react";
import { Routes, Route } from "react-router-dom"; 
import NotFount from "../pages/NotFount";
function ListRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<p>Home</p> } />  
      <Route path="*" element={<NotFount />} /> 
    </Routes>
  );
}
export default ListRoutes;
