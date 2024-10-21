import React from 'react'

const Dishes = ({toggleMenu}) => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
  <div className="special-dish-banner">
    <img
      src="./assets/images/special-dish-banner.jpg"
      width={940}
      height={900}
      loading="lazy"
      alt="special dish"
      className="img-cover"
    />
  </div>
  <div className="special-dish-content bg-black-10">
    <div className="container">
      <img
        src="./assets/images/badge-1.png"
        width={28}
        height={41}
        loading="lazy"
        alt="badge"
        className="abs-img"
      />
      <p className="section-subtitle label-2">Special Dish</p>
      <h2 className="headline-1 section-title">Mashli Masala</h2>
      <p className="section-text">
        Découvrez notre plat phare&rsquo; Poisson Grillé aux Herbes&rsquo; une merveilleuse
        alliance de saveurs maritimes et d'aromates méditerranéens. Chaque filet
        de poisson est soigneusement sélectionné&rsquo; puis grillé à la perfection et
        assaisonné d'un mélange d'herbes fraîches et d'huile d'olive extra
        vierge&rsquo; offrant un équilibre subtil entre tendreté et croquant.
      </p>
      <div className="wrapper">
        <del className="del body-3">€11.50</del>
        <span className="span body-1">€11.50</span>
      </div>
      <button onClick={toggleMenu} className="btn btn-primary">
        <span className="text text-1">View All Menu</span>
        <span className="text text-2" aria-hidden="true">
          View All Menu
        </span>
      </button>
    </div>
  </div>
  <img
    src="./assets/images/shape-4.png"
    width={179}
    height={359}
    loading="lazy"
    alt=""
    className="shape shape-1"
  />
  <img
    src="./assets/images/shape-9.png"
    width={351}
    height={462}
    loading="lazy"
    alt=""
    className="shape shape-2"
  />
</section>

  )
}

export default Dishes