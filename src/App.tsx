import Logo from "./components/Logo";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import WorksPage from "./components/WorksPage";
import SpecPage from "./components/SpecPage";
import FleetPage from "./components/FleetPage";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Logo />
      <TopNav />
      <main className="page">
        <section className="page__section page__section--hero">
          <Hero />
        </section>
        <section className="page__section page__section--works">
          <WorksPage />
        </section>
        <section className="page__section page__section--spec">
          <SpecPage />
        </section>
        <section className="page__section page__section--fleet">
          <FleetPage />
        </section>
        <section className="page__section page__section--footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
