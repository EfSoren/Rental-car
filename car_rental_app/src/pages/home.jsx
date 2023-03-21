import Navbar from "../components/home/nav";
import HomeHero from "../components/home/hero";
import RentForm from "../components/home/form";
import HomeDescription from "../components/home/description";
import CarDescriptions from "../components/home/descriptions";
import Footer from "../components/home/footer";
function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeDescription />
      <CarDescriptions />
      <RentForm />
      <Footer />
    </>
  );
}

export default Home;
