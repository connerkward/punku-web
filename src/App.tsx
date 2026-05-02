import Logo from "./components/Logo";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
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
        <section className="page__section page__section--footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
