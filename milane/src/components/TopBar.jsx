import React from "react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <ion-icon name="location-outline" aria-hidden="true" />
          </div>
          <span className="span">
            21&rsquo; Boulevard Jean-Jaurès&rsquo; 94260 FRESNES
          </span>
        </address>
        <div className="separator" />
        <div className="topbar-item item-2 ">
          <div className="icon ">
            <ion-icon name="time-outline" aria-hidden="true" />
          </div>
          <div className="flex gap-5">
            {" "}
            <span className="span">
              <b className="text-[#]">Lunch Time:</b> Du lundi au dimanche
              12:00 pm to 14:30{" "}
            </span>
            <span>
              {" "}
              <b>Dinner Time</b>: Du lundi au dimanche 19:00-23:00
            </span>
          </div>
        </div>
        <a href="tel:014662579" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true" />
          </div>
          <span className="span"> 014 66 25 79</span>
        </a>
        <div className="separator" />
        <a href="mailto:danziastorage@gmail.com" className="topbar-item link">
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true" />
          </div>
          <span className="span">danziastorage@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
