import React from 'react';
import './Slide.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Import the arrow icons

import image1 from './1_pzbYin_gqDNVjOSLQs06NQ.jpg';
import image2 from './cartoon-pictures-q3hxkk0gmw6vnivj.jpg';
import image3 from './characters-from-cartoons-walt-disney-wallpaper-hd-for-desktop-full-screen-1920×1080-wallpaper-preview.jpg';
import image4 from './image copy.png';
import image5 from './image.png';




function Slide() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block " alt="Cartoon Slide 1" />
        </div>

        <div className="carousel-item">
          <img src={image2} className="d-block " alt="Cartoon Slide 2" />
        </div>

        <div className="carousel-item">
          <img src={image3} className="d-block " alt="Cartoon Slide 3" />
        </div>

        <div className="carousel-item">
          <img src={image4} className="d-block " alt="Cartoon Slide 4" />
        </div>

        <div className="carousel-item">
          <img src={image5} className="d-block " alt="Cartoon Slide 5" />
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <FaArrowLeft size={30}color='black'  aria-label="Previous" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <FaArrowRight size={30}color='black'  aria-label="Next" />
        </button>
      </div>
    </div>
  );
}

export default Slide;
