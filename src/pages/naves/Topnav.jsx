import React, { useRef, useEffect } from "react";
import { IoIosPerson } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logo from "../../assets/vmovee.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

function Topnav({
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
    <div className="topnav">
      <div className="container">
        <div className="navcontent">
          <div className="left">
            <HiOutlineMenuAlt1 onClick={() => setnavopen(!navopen)} />
            <img src={logo} alt="" className="img-fluid" />
            <ul>
              <li>
                <Link
                  to="/home"
                  onClick={() => (
                    settvopen(false),
                    setcurrentpage(1),
                    setmovies([]),
                    setrefrespage(refrespage + 1),
                    addclassactive("home")
                  )}
                  ref={homref}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  onClick={() => (
                    settvopen(false),
                    setcurrentpage(1),
                    setmovies([]),
                    setrefrespage(refrespage + 1),
                    addclassactive("movie")
                  )}
                  ref={movieref}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  onClick={() => (
                    settvopen(true),
                    setcurrentpage(1),
                    setmovies([]),
                    setrefrespage(refrespage + 1),
                    addclassactive("tv")
                  )}
                  ref={tvref}
                >
                  Tv Shows
                </Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="img">
              <IoIosPerson />
            </div>
            <CgLogOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
