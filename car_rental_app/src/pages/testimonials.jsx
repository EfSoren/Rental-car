import Navbar from "../components/home/nav";
import SecondaryHero from "../components/about/secondary";
import Footer from "../components/home/footer";
import TestIntro from "../components/testimonials/test_intro";
import TestCards from "../components/testimonials/test_comments";
function Testimonials() {
  return (
    <section>
      <SecondaryHero />
      <Navbar />
      <TestIntro />
      <TestCards />
      <Footer />
    </section>
  );
}

export default Testimonials;
