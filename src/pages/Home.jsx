import React, { useState } from "react";
import PeliculaItem from "../components/PeliculaItem";
import { getSeacrhMovie } from "../utils/apis_peliculas";

function Home(props) {
  const [peliculas, setpeliculas] = useState([]);
  const [pagina, setpagina] = useState(1);
  const [shearch, setShearch] = useState("");
  const [loading, setloading] = useState(false);

  function cargarMas() {
    setloading(true);
    setpagina(pagina + 1);
    getSeacrhMovie(shearch, pagina).then((data) => {
      setpeliculas(data.results);
      setloading(false);
    });
  }

  const hanleKeyPress = (e) => { 
    setShearch(e.target.value);
    if (e.key === "Enter") {
      cargarMas();
    }
  };

  return (
    <div className="fq-header-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12 align-self-center order-md-0 order-1">
            <div className="faq-header-content">
              <h1 className="">Bienvenidos</h1>

              <p className="mb-4 mb-0">
                Millones de películas y personas por descubrir. Explora ahora 
              </p>
              <div className="row mb-4">
                <div className="col-lg-5 mx-auto">
                  <div className="autocomplete-btn">
                    <input
                      id="example2"
                      className="form-control"
                      placeholder="Busca tu pelicula..."
                      onKeyUp={(e) => hanleKeyPress(e)}
                    />
                    <button className="btn btn-primary" onClick={cargarMas}>
                      {loading ? (
                        <div className="spinner-grow text-white  align-self-center loader-sm"></div>
                      ) : (
                        "Buscar"
                      )}
                    </button>
                  </div>
                </div>
              </div>


              <div className="row">
                {peliculas.map((key, value) => (
                  <PeliculaItem key={key.id} pelicula={key} />
                ))}
                <div className="col-12">
                  {peliculas.length == 0 ? <h3>Sin datos que mostrar</h3> : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
