import React from "react";
import { URL_IMAGES } from "../utils/env";

function PeliculaItem({pelicula}) {
    const url =URL_IMAGES+pelicula.poster_path;
  return (
    <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
      <a className="card style-6" href="./app-ecommerce-product.html">
        <span className="badge badge-primary">{pelicula.vote_average}</span>
        <img
          src={url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-footer">
          <div className="row  h-100 d--inline-block">
            <div className="col-9 ">
              <b>{(pelicula.title)}</b>
            </div>
            <div className="col-3">
              <div className="pricing d-flex justify-content-end">
                <p className="text-success mb-0">{(pelicula.original_language).toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="card-text m-2 ">{(pelicula.overview).slice(0,100)}...</p>
      </a>
    </div>
  );
}

export default PeliculaItem;
