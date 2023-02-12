import React from "react";
import { Routes, Route } from "react-router-dom"; 
import NotFount from "../pages/NotFount";
import PeliculaDetail from "../pages/PeliculaDetail";
import Peliculas from "../pages/Peliculas";
function ListRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<p>Home</p> } />  
      <Route path="/peliculas" element={ <Peliculas /> } /> 
      <Route path="/peliculas/:peliculaId" element={<PeliculaDetail />} /> 
      <Route path="*" element={<NotFount />} /> 
    </Routes>
  );
}
export default ListRoutes;
