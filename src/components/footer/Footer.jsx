import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        Welcome to Movix, your ultimate hub for all things cinema! Explore a diverse collection of films spanning every genre and era. Our platform provides detailed information on movies, including synopses, cast and crew details, reviews, trailers, and more.

Easily navigate our user-friendly interface to find new releases, timeless classics, and hidden gems. Create personalized watchlists, rate your favorite films, and engage with a vibrant community of fellow movie enthusiasts.

Discover, rate, and discuss your favorite movies on Movix – your go-to site for everything cinematic.
        <div className="Name"><b>Clone by:</b> Rahul</div>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
