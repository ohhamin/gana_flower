import Header from "./components/Header";
import Hero from "./components/Hero";
import Units from "./components/Units";
import Location from "./components/Location";
import Sales from "./components/Sales";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Units />
        <Location />
        <Sales />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
