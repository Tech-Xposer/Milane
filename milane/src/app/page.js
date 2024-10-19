import Hero from "./components/Hero";

import Services from "./components/Services";
import About from "./components/About";
import Dishes from "./components/Dishes";
import StaticMenu from "./components/StaticMenu";
import Testinomials from "./components/Testinomials";
import Reservation from "./components/Reservation";
import Event from "./components/Event";

export default function Home() {
  return (
    <main>
      <article>
        <Hero />
        <Services />
        <About />
        <Dishes />
        <StaticMenu />
        <Testinomials />
        <Reservation />
        <Event />
      </article>
    </main>
  );
}
