import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Units from "./components/Units";
import Location from "./components/Location";
import Sales from "./components/Sales";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Units />
        <Location />
        <Sales />
        <Community />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
