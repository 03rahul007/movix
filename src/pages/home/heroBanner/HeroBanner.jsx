import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss"

const state = { backgroundColor: "red" };
const HeroBanner = () => {
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");


  // ____________________________________
    // setInterval(()=>{
      useEffect(()=>{
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
      },[data])
    // },3000)

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      e.target.value = "";
    }
  };
  return (
    <div className="heroBanner">
    { !loading &&  <div className="backdrop-img">
      <Img src={background} className=""/>
      </div>}

<div className="opacity-layer">
  
</div>

        <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              name=""
              placeholder="Search for a movie or tv show...."
              id=""
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              />
            <button>Search</button>
          </div>
        </div>
              </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
