import React from 'react';

const AboutUs = () => {
  return (
    <main>
        <articel>
    <div className="flex flex-col items-center justify-center  p-5  text-white mt-[100px] md:h-screen w-full  ">
      <h1 className="text-6xl font-bold text-center mb-6 text-[#F4BE39] font-londrina tracking-wider">À propos de nous</h1>
      
      <section className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-3xl  text-white mb-4 font-quicksand">
          Bienvenue <strong>Milane</strong>, Où la nourriture est notre passion et notre excellence est notre norme.Situé au cœur de la ville, nous nous engageons à vous offrir une expérience culinaire mémorable à chaque repas.
</p>
        <p className="text-3xl  text-white mb-4 font-quicksand">
          Nos chefs sont inspirés par les cuisines locales et internationales, fabriquant des plats qui sont non seulement délicieux mais aussi magnifiquement présentés.Chez Milane, chaque bouchée raconte une histoire, que ce soit un plat classique repensé ou une nouvelle création culinaire.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6">
          <h2 className="text-6xl font-bold mb-4 text-[#F4BE39] font-londrina tracking-wider">Notre mission</h2>
          <p className="text-white font-quicksand">
           Chez Milane, notre mission est simple: offrir une expérience culinaire incroyable et délicieuse qui rend chaque visite inoubliable.Nous priorisons les ingrédients frais, les saveurs authentiques et une atmosphère accueillante, en vous assurant de partir avec un sourire sur votre visage.
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-6xl font-bold mb-4 text-[#F4BE39] font-londrina tracking-wider">Notre histoire</h2>
          <p className="text-white font-quicksand">
            Fondée par des passionnés de nourriture avec un amour pour les gastronomies, Milane a commencé comme un petit rêve qui est devenu un restaurant bien-aimé.Au fil des ans, nous sommes devenus connus pour nos plats créatifs, notre engagement envers la qualité et notre passion pour un excellent service.
          </p>
        </div>
      </section>

      <section className="text-center my-12">
        <h2 className="text-6xl text-[#F4BE39] font-bold mb-6 font-londrina tracking-wider">Pourquoi choisir Milane?</h2>
        <ul className="text-white list-disc list-inside font-quicksand text-start">
          <li>Aliments exceptionnels faits avec les ingrédients les plus frais </li>
<li> plats créatifs qui mélangent les saveurs locales et internationales </li>
<li> Un personnel professionnel amical axé sur la fourniture d'un service de premier ordre </li>
<li> Une atmosphère chaleureuse et accueillante parfaite pour toute occasion </li>
        </ul>
      </section>  

      <section className="text-center">
        <h2 className="text-6xl text-[#F4BE39] font-bold mb-6 font-londrina tracking-wider">Rejoignez-nous à Milane</h2>
        <p className="text-3xl text-white font-quicksand">
          Que vous soyez ici pour un déjeuner décontracté ou un dîner spécial, nous avons hâte de vous servir!Visitez-nous et expérimentez la nourriture incroyable et délicieuse pour laquelle Milane est connue.
</p>
      </section>
    </div>
    </articel>
    </main>
  );
};

export default AboutUs;
