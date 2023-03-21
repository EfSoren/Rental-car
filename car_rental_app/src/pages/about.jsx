import Navbar from "../components/home/nav";
import AboutBio from "../components/about/about_bio";
import SecondaryHero from "../components/about/secondary";
import HomeDescription from "../components/home/description";
import Footer from "../components/home/footer";
import Biography from "../components/about/biography";
function About() {
  return (
    <>
      <SecondaryHero />
      <Navbar />
      <AboutBio />
      <Biography />
      <HomeDescription />
      <Footer />
    </>
  );
}

export default About;
