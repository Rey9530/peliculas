import React, {  useState } from "react";
import PeliculaItem from "../components/PeliculaItem";
import {  getUpcoming } from "../utils/apis_peliculas";

function PeliculasUpcoming(props) {
    const [peliculas, setpeliculas] = useState([]);
    const [pagina, setpagina] = useState(1);
    const [loading, setloading] = useState(false);
  
    function cargarMas() {
      setloading(true); 
      setpagina(pagina + 1);
      getUpcoming(pagina).then((data) => {
        setpeliculas([...peliculas, ...data.results]);
        setloading(false);
      });
    }
    if (pagina == 1) {
      cargarMas();
    }
  
    return (
      <div className="row">
        {peliculas.map((key, value) => (
          <PeliculaItem key={key.id} pelicula={key} />
        ))}
  
        <div className="d-grid gap-2">
          <button className="btn btn-primary btn-block" onClick={cargarMas}>
            {loading ? (
              <div className="spinner-grow text-white me-2 align-self-center loader-sm"></div>
            ) : (
              "Cargar mas.."
            )}
          </button>
        </div>
      </div>
    );
}

export default PeliculasUpcoming;