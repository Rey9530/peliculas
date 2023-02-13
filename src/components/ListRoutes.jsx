import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "../pages/Home";
import NotFount from "../pages/NotFount";
import PeliculaDetail from "../pages/PeliculaDetail";
import Peliculas from "../pages/Peliculas";
import PeliculasCarteleras from "../pages/PeliculasCarteleras";
import PeliculasTopRate from "../pages/PeliculasTopRate";
import PeliculasUpcoming from "../pages/PeliculasUpcoming";
function ListRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Home /> } />  
      <Route path="/peliculas" element={ <Peliculas /> } /> 
      <Route path="/peliculas_carteleras" element={ <PeliculasCarteleras /> } /> 
      <Route path="/peliculas_top_rate" element={ <PeliculasTopRate /> } /> 
      <Route path="/peliculas_proximamente" element={ <PeliculasUpcoming /> } /> 
      <Route path="/peliculas/:peliculaId" element={<PeliculaDetail />} /> 
      <Route path="*" element={<NotFount />} /> 
    </Routes>
  );
}
export default ListRoutes;
