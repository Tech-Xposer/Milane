import React from "react";

const Event = () => {
  return (
    <section className="section event bg-black-10" aria-label="event">
      <div className="container">
        <p className="section-subtitle label-2 text-center">
          Mises à jour récentes
        </p>
        <h2 className="section-title headline-1 text-center">
          Événement à venir
        </h2>
        <ul className="grid-list">
          <li>
            <div className="event-card has-before hover:shine">
              <div
                className="card-banner img-holder"
                style={{ width: 350, height: 450 }}
              >
                <img
                  src="./assets/images/event-1.jpg"
                  width={350}
                  height={450}
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2022-09-15">
                  15/09/2022
                </time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">
                  Nourriture&rsquo; saveur
                </p>
                <h3 className="card-title title-2 text-center">
                  Une saveur si délicieuse que vous voudrez manger avec les
                  yeux.
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div className="event-card has-before hover:shine">
              <div
                className="card-banner img-holder"
                style={{ width: 350, height: 450 }}
              >
                <img
                  src="./assets/images/event-2.jpg"
                  width={350}
                  height={450}
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2022-09-08">
                  08/09/2022
                </time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">
                  Nourriture saine
                </p>
                <h3 className="card-title title-2 text-center">
                  Des saveurs exquises qui ravissent vos papilles.
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div className="event-card has-before hover:shine">
              <div
                className="card-banner img-holder"
                style={{ width: 350, height: 450 }}
              >
                <img
                  src="./assets/images/event-3.jpg"
                  width={350}
                  height={450}
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2022-09-03">
                  03/09/2022
                </time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Recipie</p>
                <h3 className="card-title title-2 text-center">
                  Une explosion de saveurs à chaque bouchée.
                </h3>
              </div>
            </div>
          </li>
        </ul>
        <a href="#" className="btn btn-primary">
          <span className="text text-1">Découvrez notre blog</span>
          <span className="text text-2" aria-hidden="true">
            Découvrez notre blog
          </span>
        </a>
      </div>
    </section>
  );
};

export default Event;
