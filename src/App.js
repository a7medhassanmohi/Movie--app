import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/umd/popper.min";
import "bootstrap/dist/js/bootstrap.min";
import Topnav from "./pages/naves/Topnav.jsx"
import Sidenav from "./pages/naves/Sidenav.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";

import './App.css';
import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home.jsx";
import MovieInfo from "./pages/movieinfo/MovieInfo.jsx";
import axios from "axios";

function App() {
  const [navopen, setnavopen] = useState(false);
  const [movies, setmovies] = useState([])
  const [currentpage, setcurrentpage] = useState(1)
  const [allnoofpage, setallnoofpage] = useState(0)
  const [tvopen, settvopen] = useState(false)
  const [refrespage, setrefrespage] = useState(0)
  let location = useLocation();
  console.log(location);
  useEffect(async () => {
    if (tvopen) {
      let data = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US&sort_by=popularity.desc&page=${currentpage}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
      console.log(data);
      setallnoofpage(data.data.total_pages)
      setmovies(data.data.results)
    } else {
      let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${currentpage}&with_watch_monetization_types=flatrate`)
      console.log(data);
      setallnoofpage(data.data.total_pages)
      setmovies(data.data.results)
      console.log(currentpage);
    }

  }, [currentpage, tvopen, refrespage])

  if (location.pathname == "/") {
    return <Redirect to="/home" />
  }

  return (
    <div className="app">
      <Topnav navopen={navopen} setnavopen={setnavopen} settvopen={settvopen} setcurrentpage={setcurrentpage} tvopen={tvopen} setmovies={setmovies} refrespage={refrespage} setrefrespage={setrefrespage} />
      <Sidenav navopen={navopen} setnavopen={setnavopen} settvopen={settvopen} setcurrentpage={setcurrentpage} tvopen={tvopen} setmovies={setmovies} refrespage={refrespage} setrefrespage={setrefrespage} />
      {movies.length <= 0 ? (<div className="vh-100 d-flex justify-content-center align-items-center" >
        <h3>.....Loading</h3>
      </div>) : (
        <Switch>
          <Route exact path="/home">

            <Home movies={movies} currentpage={currentpage} setcurrentpage={setcurrentpage} allnoofpage={allnoofpage} tvopen={tvopen} />
          </Route>
          <Route exact path="/home/:id">

            <MovieInfo tvopen={tvopen} />
          </Route>


        </Switch>
      )
      }

    </div>
  );
}

export default App;
