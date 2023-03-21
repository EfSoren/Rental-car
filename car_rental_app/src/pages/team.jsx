import TeamCards from "../components/team/teamcard";
import Navbar from "../components/home/nav";
import SecondaryHero from "../components/about/secondary";
import Footer from "../components/home/footer";
function Team() {
  return (
    <>
      <SecondaryHero />
      <Navbar />
      <TeamCards />
      <Footer />
    </>
  );
}

export default Team;
