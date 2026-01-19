import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutIntro from '../sections/about/AboutIntro';
import AboutWho from '../sections/about/AboutWho';
import AboutBackground from '../sections/about/AboutBackground';
import AboutCTA from '../sections/about/AboutCTA';
import Experience from '../sections/about/Experience';
import Skills from '../sections/about/Skills';

export default function About() {
  return (
    <>
      <Navbar />
      <AboutIntro />
      <AboutWho />
      <AboutBackground />
      <AboutCTA />
      <Footer />
    </>
  );
}
