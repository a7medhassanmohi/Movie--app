import React from "react";
import poster from "../../assets/th.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home({ movies, currentpage, setcurrentpage, allnoofpage, tvopen }) {
  function pagprev() {
    if (currentpage <= 1) {
      return;
    } else {
      setcurrentpage(currentpage - 1);
      window.scrollTo(0, 0);
    }
  }
  function pagnext() {
    if (currentpage >= allnoofpage) {
      return;
    } else {
      setcurrentpage(currentpage + 1);
      window.scrollTo(0, 0);
    }
  }
  function nextPage(i) {
    setcurrentpage(i);
    window.scrollTo(0, 0);
  }
  const pagination = [];
  for (let i = 1; i <= allnoofpage; i++) {
    const active = currentpage == i ? "active" : null;
    pagination.push(
      <a className={`${active} paglink`} onClick={() => nextPage(i)}>
        {i}
      </a>
    );
  }
  // console.log(pagination);
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          {movies.map((item, i) => {
            return (
              <div className="col-6 col-md-3 col-lg-3" key={i}>
                <div className="movie-item mt-3 mb-2">
                  <Link to={`/home/${item.id}`}>
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
                  </Link>
                  <h6 className="movtitle">
                    {tvopen ? item.name : item.title}{" "}
                  </h6>
                  <h6 className="moviedate">{item.release_date} </h6>
                </div>
              </div>
            );
          })}
        </div>

        <div className="paginaton">
          <a className="paglink" onClick={() => pagprev()}>
            prev
          </a>
          {currentpage == 1
            ? pagination.slice(currentpage - 1, currentpage + 4)
            : currentpage > 1
            ? pagination.slice(currentpage - 2, currentpage + 4)
            : null}

          <a className="paglink" onClick={() => pagnext()}>
            next
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
