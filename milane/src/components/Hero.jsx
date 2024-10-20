"use client";
import React, { useState, useEffect } from "react";

const Hero = ({ toggleMenu }) => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    {
      subtitle: "Traditionnel et hygiène",
      title: "Pour l'amour de la\nnourriture délicieuse",
      text: "Venez en famille et ressentez la joie d'une nourriture succulente",
      imgSrc: "./assets/images/hero-slider-1.jpg"
    },
    {
      subtitle: "expérience délicieuse",
      title: "Saveurs inspirées par\nles saisons",
      text: "Venez en famille et ressentez la joie d'une nourriture alléchante",
      imgSrc: "./assets/images/hero-slider-2.jpg"
    },
    {
      subtitle: "incroyable et délicieux",
      title: "Où chaque saveur raconte\nhistoire",
      text: "Nous prenons soin de nos clients comme de notre propre famille",
      imgSrc: "./assets/images/hero-slider-3.jpg"
    }
  ];

  const slideNext = () => {
    setCurrentSlidePos((prev) =>
      prev >= heroSliderItems.length - 1 ? 0 : prev + 1
    );
  };

  const slidePrev = () => {
    setCurrentSlidePos((prev) =>
      prev <= 0 ? heroSliderItems.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(slideNext, 7000);
    return () => clearInterval(autoSlideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider="">
        {heroSliderItems.map((item, index) => (
          <li
            key={index}
            className={`slider-item ${
              currentSlidePos === index ? "active" : ""
            }`}
            data-hero-slider-item=""
          >
            <div className="slider-bg">
              <img
                src={item.imgSrc}
                width={1880}
                height={950}
                alt=""
                className="img-cover"
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal">
              {item.subtitle}
            </p>
            <h1 className="display-1 hero-title slider-reveal">
              {item.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="body-2 hero-text slider-reveal">{item.text}</p>
            <div
              href="#"
              className="btn btn-primary slider-reveal"
              onClick={toggleMenu}
            >
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        onClick={slidePrev}
      >
        <ion-icon name="chevron-back" />
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        onClick={slideNext}
      >
        <ion-icon name="chevron-forward" />
      </button>
      <a href="#reservation" className="hero-btn has-after">
        <img
          src="./assets/images/hero-icon.png"
          width={48}
          height={48}
          alt="booking icon"
        />
        <span className="label-2 text-center span">Réservez une table</span>
      </a>
    </section>
  );
};

export default Hero;
