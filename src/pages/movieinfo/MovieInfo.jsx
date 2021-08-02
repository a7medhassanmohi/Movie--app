import React, { useEffect, useState } from "react";
import trailer from "../../assets/1qRZBuU7y6VUtSGyisguroNurFK.jpg";
import img from "../../assets/th.jpg";
import Simalrmovie from "./Simalrmovie";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

function MovieInfo({ tvopen }) {
  const [movieinfoo, setmovieinfoo] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    if (tvopen) {
      let movieinfo = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US`
      );
      // console.log(movieinfo);
      setmovieinfoo(movieinfo);
    } else {
      let movieinfo = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US`
      );
      // console.log(movieinfo);
      setmovieinfoo(movieinfo);
    }
  }, [id, tvopen]);

  if (movieinfoo.status == 200) {
    return (
      <>
        <div className="movieinfo">
          <div className="backimg">
            {movieinfoo.data.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movieinfoo.data.backdrop_path}`}
                alt=""
              />
            ) : null}
          </div>
          <div className="overlay"></div>
          <div className="container allinfo">
            {/* ..... */}
            <div className="row ">
              <div className="col-4 col-md-4 ">
                <div className="movieposter my-3 ">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieinfoo.data.poster_path}`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-8 col-md-8 my-5">
                <div className="movie-info my-3">
                  <h2>
                    {tvopen ? movieinfoo.data.name : movieinfoo.data.title}
                  </h2>
                  <h4>
                    {movieinfoo.data.release_date}.(
                    {movieinfoo.data.original_language}) .
                    <span className="gener mx-1">
                      {movieinfoo.data.genres.map((gen) => {
                        return <a href="#"> {gen.name}</a>;
                      })}
                    </span>
                    .
                    <span className="duration">
                      {tvopen ? null : movieinfoo.data.runtime}
                      {tvopen ? null : "min"}
                    </span>
                  </h4>
                  <h3>overview</h3>
                  <p>{movieinfoo.data.overview}</p>
                  <div className="rating">
                    {movieinfoo.data.vote_average == 10 ? (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </>
                    ) : movieinfoo.data.vote_average > 8 ? (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </>
                    ) : movieinfoo.data.vote_average > 6 ? (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </>
                    ) : movieinfoo.data.vote_average > 4 ? (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </>
                    ) : movieinfoo.data.vote_average > 2 ? (
                      <>
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Simalrmovie id={movieinfoo.data.id} tvopen={tvopen} />
      </>
    );
  } else {
    return <h2>movie not found</h2>;
  }
}

export default MovieInfo;
