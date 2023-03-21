import Navbar from "../components/home/nav";
import SecondaryHero from "../components/about/secondary";
import DisplayRentalInfo from "../components/rental/rentalcomplete";
import Footer from "../components/home/footer";

function Rental() {
  return (
    <>
      <SecondaryHero />
      <Navbar />
      <DisplayRentalInfo />
      <Footer />
    </>
  );
}

export default Rental;
