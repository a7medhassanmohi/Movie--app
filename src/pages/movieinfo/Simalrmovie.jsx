import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Simalrmovie({ id, tvopen }) {
  const [similarr, setsimilarr] = useState([]);
  useEffect(async () => {
    if (tvopen) {
      const similarmovi = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US&page=1`
      );
      setsimilarr(similarmovi.data.results.slice(1, 13));
    } else {
      const similarmovi = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US&page=1`
      );
      setsimilarr(similarmovi.data.results.slice(1, 13));
    }
  }, [id, tvopen]);

  return (
    <div className="container">
      {similarr.length > 0 ? (
        <h2 className="similartitle">
          {" "}
          {tvopen ? "Similar tv" : "Similar Movies"}{" "}
        </h2>
      ) : null}

      <div className="row">
        {similarr.map((item, i) => {
          return (
            <div className="col-6 col-md-2 col-lg-2" key={i}>
              <div className="movie-item mt-3 mb-2">
                <Link
                  to={`/home/${item.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="card position-relative">
                    <div className="cardimg">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                        alt=""
                        className="img-fluid"
                      />
                    </div>

                    <div className="hd">
                      <h6 className="d-inline-block"> {item.vote_average}</h6>
                    </div>
                  </div>
                  <h6 className="movtitle">{item.title} </h6>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Simalrmovie;
