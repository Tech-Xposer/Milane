"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef(null);
  const backTopBtnRef = useRef(null);
  let lastScrollPos = useRef(0);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const hideHeader = () => {
    const isScrollBottom = lastScrollPos.current < window.scrollY;
    if (isScrollBottom) {
      headerRef.current.classList.add("hide");
    } else {
      headerRef.current.classList.remove("hide");
    }
    lastScrollPos.current = window.scrollY;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY >= 50) {
        headerRef.current.classList.add("active");
        backTopBtnRef.current.classList.add("active");
        hideHeader();
      } else {
        headerRef.current.classList.remove("active");
        backTopBtnRef.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header ${navOpen ? "active" : ""}`}
      data-header=""
    >
      <div className="container">
        {/* Logo */}
        <a href="/" className="logo">
          <Image
            src="/assets/images/logo.svg"
            width={160}
            height={50}
            alt="Milane - Home"
          />
        </a>

        {/* Navbar */}
        <nav className={`navbar ${navOpen ? "active" : ""}`} data-navbar="">
          <button
            className="close-btn"
            aria-label="close menu"
            onClick={toggleNav}
          >
            <ion-icon name="close-outline" aria-hidden="true" />
          </button>

          <a href="/" className="logo">
            <Image
              src="/assets/images/logo.svg"
              width={160}
              height={50}
              alt="Milane - Home"
            />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link
                href="/"
                className="navbar-link hover-underline active"
                onClick={toggleNav}
              >
                <div className="separator" />
                <span className="span">Accueil</span>
              </Link>
            </li>
            <li className="navbar-item">
              <a
                href="/#menu"
                className="navbar-link hover-underline"
                onClick={toggleNav}
              >
                <div className="separator" />
                <span className="span">À Emporter</span>
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="#about"
                className="navbar-link hover-underline"
                onClick={toggleNav}
              >
                <div className="separator" />
                <span className="span">À propos de nous</span>
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="#"
                className="navbar-link hover-underline"
                onClick={toggleNav}
              >
                <div className="separator" />
                <span className="span">Nos chefs</span>
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="/checkout"
                className="navbar-link hover-underline"
                onClick={toggleNav}
              >
                <div className="separator" />
                <span className="span">Panier</span>
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          <div className="text-center">
            <p className="headline-1 navbar-title">Visitez-nous</p>
            <address className="body-4">
              21&rsquo; Boulevard Jean-Jaurès&rsquo; 94260 FRESNES <br />
              France
            </address>
            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
            <a
              href="mailto:khullarakshay723@gmail.com"
              className="body-4 sidebar-link"
            >
              Khullarakshay723@gmail.com
            </a>
            <div className="separator" />
            <p className="contact-label">Demande de réservation</p>
            <a
              href="tel:+330146662579"
              className="body-1 contact-number hover-underline"
            >
              +33-01 46 66 25 79
            </a>
          </div>
        </nav>

        {/* Reservation Button */}
        <a href="/#reservation" className="btn btn-secondary">
          <span className="text text-1">Trouver une table</span>
          <span className="text text-2" aria-hidden="true">
            Trouver une table
          </span>
        </a>

        {/* Menu Open Button */}
        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={toggleNav}
        >
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
        </button>

        {/* Back to Top Button */}
        <button
          ref={backTopBtnRef}
          className="back-top-btn"
          data-back-top-btn=""
        >
          <ion-icon name="arrow-up-outline" />
        </button>

        {/* Overlay */}
        {navOpen && <div className="overlay" onClick={toggleNav}></div>}
      </div>
    </header>
  );
};

export default Header;
