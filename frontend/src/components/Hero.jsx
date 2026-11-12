import React from 'react';
import { assets } from '../assets/assets';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      {/* Hero Left Side */}
      <div className="hero-left">
        <div className="hero-content">
          <div className="hero-tag">
            <p className="hero-line"></p>
            <p className="hero-tag-text">WINTER COLLECTION</p>
          </div>

          <h1 className="hero-heading">Shop With Us!</h1>

          <div className="hero-shop">
            <p className="hero-shop-text">SHOP NOW</p>
            <p className="hero-line-small"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img
        className="hero-image"
        src={assets.hero_img}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;