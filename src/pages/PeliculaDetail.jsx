import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../utils/apis_peliculas";
import { URL_IMAGES } from "../utils/env";

function PeliculaDetail(props) {
  const [pelicula, setpelicula] = useState({});
  const [loading, setloading] = useState(false);
  let { peliculaId } = useParams();
    let stylelavel = { marginRight: "0.5em" };
  useEffect(() => {
    setloading(true);
    getDetailMovie(peliculaId).then((data) => {
      setpelicula(data);
      setloading(false);
    });
  }, []);
  const url = URL_IMAGES+pelicula.backdrop_path;

  let idiomas ;
  if(pelicula.spoken_languages!=null){
    idiomas = pelicula.spoken_languages.map( (key,value)=>{
        return <label className="badge badge-primary" style={stylelavel} key={key.name}>{key.name}</label>
    });
  }

  let genres ;
  if(pelicula.genres!=null){
    genres = pelicula.genres.map( (key,value)=>{
        return <label className="badge badge-primary" style={stylelavel} key={key.name}>{key.name}</label>
    });
  }
  let imagen;
  if(pelicula.backdrop_path!=null){
      imagen =<img
      src={url}
      alt="image-1"
      className="img-fluid"
    />;
  }else{
    imagen =<img
    src="/assets/img/notfont.webp"
    alt="image-1"
    className="img-fluid"
  />;

  }


  let production_companies;
  if(pelicula.production_companies!=null){
    production_companies = pelicula.production_companies.map( (key,value)=>{ 
        return <span className="avatar-chip bg-info mb-2 me-2 position-relative" key={key.id}> 
                    <span className="text">{key.name}</span>
                </span>
    });
  }


  let paises;
  if(pelicula.production_companies!=null){
    paises = pelicula.production_countries.map( (key,value)=>{ 
        return   <span key={key.name}
          className="badge badge-info mr-2"
          style={stylelavel}
        >
          {key.name}
        </span>
    });
  }
  
  return   (
    <>
      <div className="row layout-top-spacing" >
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
          <div className="single-post-content">
            <div className="post-content row">
              <div className="text-center col-6">
                  <h2> {pelicula.title}</h2>
                  <h5> {pelicula.tagline}</h5>
                {imagen}
              </div>
              <div className=" col-6">

                <h5 className="text-primary font-weight-bold text-left">Trama:</h5>
                <p>{pelicula.overview}</p>

                Fecha de Lanzamiento: <label className="badge badge-primary" style={stylelavel}  > {pelicula.release_date} </label> <br />
                Duracion: <label className="badge badge-primary" style={stylelavel}  > {pelicula.runtime}Min </label> <br />
                Popularidad: <label className="badge badge-primary" style={stylelavel}  > {pelicula.popularity} </label> <br />
                Votos Promedio: <label className="badge badge-primary" style={stylelavel}  > {pelicula.vote_average}/10 </label> <br />
                Recuento de Votos: <label className="badge badge-primary" style={stylelavel}  > {pelicula.vote_count} </label> <br />
                Estado: <label className="badge badge-primary" style={stylelavel}  > {pelicula.status} </label> <br />

                Idiomas: { idiomas }  <br />
                Géneros: { genres } 
              </div>  

 
            </div>

            <div className="post-info row">
              <hr />

              <div className="post-tags  col-6">  
                <h5>Países de Producción</h5>
                {paises} 
              </div> 
                <div className="  col-6">
                <h5>Compañías de producción</h5>
                    {production_companies} 
                </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PeliculaDetail;
