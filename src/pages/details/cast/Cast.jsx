import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import { Link } from "react-router-dom";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  console.log(url)

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let imgUrl =  item?.profile_path
                ? url?.profiler + item?.profile_path
                : avatar;
              return (
                <div className="listItem" key={item.id}>
                  <Link to={`https://www.google.com/search?q=${item.name}`} target="__blank">
                  <div className="profileImg">
                    <Img src={imgUrl} alt={item.name} />
                  </div>
                  </Link>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
