import React from "react";

const StaticMenu = ({ toggleMenu }) => {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
          Special Selection
        </p>
        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

        <ul className="grid-list">
          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./assets/images/menu-1.jpg"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Greek Salad"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <span className="card-title" onClick={toggleMenu}>
                      Murghi tikka
                    </span>
                  </h3>
                  <span className="badge label-1">Seasonal</span>
                  <span className="span title-2">€8.00</span>
                </div>

                <p className="card-text label-1">
                  Morceaux de poulet aux herbes fraiches&rsquo; grillés au
                  tandoor.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./assets/images/menu-2.jpg"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Lasagne"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <span className="card-title" onClick={toggleMenu}>
                      Mutton Tikka
                    </span>
                  </h3>

                  <span className="span title-2">€9.00</span>
                </div>

                <p className="card-text label-1">
                  Brochettes fr&apos;agneau macérées dans du yourt, jus de
                  citron, all, gingembre
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./assets/images/butter-chicken.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Butternut Pumpkin"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <span className="card-title" onClick={toggleMenu}>
                      Poulet au beurre
                    </span>
                  </h3>

                  <span className="span title-2">€10.50</span>
                </div>

                <p className="card-text label-1">
                  Savourez l'onctuosité parfaite d'un poulet tendre dans une
                  sauce riche et épicée.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./assets/images/menu-6.jpg"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Tokusen Wagyu"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <span className="card-title" onClick={toggleMenu}>
                      Prawns masala
                    </span>
                  </h3>

                  <span className="badge label-1">New</span>

                  <span className="span title-2">€12.00</span>
                </div>

                <p className="card-text label-1">
                  Crevettes au curry moyennement épicées, poivron, tomate,
                  petits pois, herbes fraiches
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./assets/images/cheese-naan.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Olivas Rellenas"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <span className="card-title" onClick={toggleMenu}>
                      Naan au fromage
                    </span>
                  </h3>

                  <span className="span title-2">€17.00</span>
                </div>

                <p className="card-text label-1">
                  Dégustez un naan chaud et moelleux, généreusement garni de
                  fromage fondant
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="menu-card hover:card">
              <figure
                className="card-banner img-holder"
                style={{ width: 100, height: 100 }}
              >
                <img
                  src="./assets/images/menu-4.png"
                  width="100"
                  height="100"
                  loading="lazy"
                  alt="Opu Fish"
                  className="img-cover"
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <span className="card-title" onClick={toggleMenu}>
                      Palak Paneer
                    </span>
                  </h3>

                  <span className="span title-2">€8.00</span>
                </div>

                <p className="card-text label-1">
                  Épinards fromage maison, sauce aux épices et aux herbes peu
                  relevé
                </p>
              </div>
            </div>
          </li>
        </ul>

        <p className="menu-text text-center">
          Lunch Time <span className="span">12:00 pm</span> to{" "}
          <span className="span">14:30</span>
        </p>
        <p className="menu-text text-center">
          Dinner Time <span className="span">19:00</span> to{" "}
          <span className="span">23:00</span>
        </p>
        <button href="" className="btn btn-primary" onClick={toggleMenu}>
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </button>

        <img
          src="./assets/images/shape-5.png"
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <img
          src="./assets/images/shape-6.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default StaticMenu;
