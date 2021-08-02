import React, { useState, useRef } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
function Sidenav({
  navopen,
  tvopen,
  settvopen,
  setnavopen,
  setcurrentpage,
  setmovies,
  refrespage,
  setrefrespage,
}) {
  const homref = useRef(null);
  const movieref = useRef(null);
  const tvref = useRef(null);
  function addclassactive(name) {
    if (name == "home") {
      homref.current.classList.add("active");
      movieref.current.classList.remove("active");
      tvref.current.classList.remove("active");
    } else if (name == "movie") {
      movieref.current.classList.add("active");
      homref.current.classList.remove("active");
      tvref.current.classList.remove("active");
    } else if (name == "tv") {
      tvref.current.classList.add("active");
      homref.current.classList.remove("active");
      movieref.current.classList.remove("active");
    }
  }

  return (
    <div className={`sidenav ${navopen ? "navopen" : null}`}>
      <div className="sidenavcontent">
        <ul>
          <li
            ref={homref}
            onClick={() => (
              settvopen(false),
              setcurrentpage(1),
              setmovies([]),
              setrefrespage(refrespage + 1),
              addclassactive("home")
            )}
          >
            <Link to="/home">Home</Link>
          </li>

          <li
            ref={movieref}
            onClick={() => (
              settvopen(false),
              setcurrentpage(1),
              setmovies([]),
              setrefrespage(refrespage + 1),
              addclassactive("movie")
            )}
          >
            <Link to="/home">Movies</Link>
          </li>
          <li
            ref={tvref}
            onClick={() => (
              settvopen(true),
              setcurrentpage(1),
              setmovies([]),
              setrefrespage(refrespage + 1),
              addclassactive("tv")
            )}
          >
            <Link to="/home">Tv Shows</Link>
          </li>
        </ul>
      </div>
      <AiFillCloseCircle
        className="close"
        onClick={() => setnavopen(!navopen)}
      />
    </div>
  );
}

export default Sidenav;
