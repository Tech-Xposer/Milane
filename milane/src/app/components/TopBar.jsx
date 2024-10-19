import React from "react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <ion-icon name="location-outline" aria-hidden="true" />
          </div>
          <span className="span">21, Boulevard Jean-Jaurès, 94260 FRESNES</span>
        </address>
        <div className="separator" />
        <div className="topbar-item item-2">
          <div className="icon">
            <ion-icon name="time-outline" aria-hidden="true" />
          </div>
          <span className="span">Daily : 8.00 am to 10.00 pm</span>
        </div>
        <a href="tel:+33014662579" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true" />
          </div>
          <span className="span">+33 014 66 25 79</span>
        </a>
        <div className="separator" />
        <a
          href="mailto:khullarakshay723@gmail.com"
          className="topbar-item link"
        >
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true" />
          </div>
          <span className="span">khullarakshay723@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
