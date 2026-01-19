import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Hero from "../sections/home/Hero";
import FeaturedProjects from "../sections/home/FeaturedProjects";
import DesignProcess from "../sections/home/DesignProcess";
import ToolsExpertise from "../sections/home/ToolsExpertise";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <DesignProcess />
      <ToolsExpertise />
      <Footer />
    </>
  );
}
