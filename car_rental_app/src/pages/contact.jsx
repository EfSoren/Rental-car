import Contact from "../components/contact/email";
import Navbar from "../components/home/nav";
import SecondaryHero from "../components/about/secondary";
import Footer from "../components/home/footer";
function ContactForm() {
  return (
    <>
      <SecondaryHero />
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactForm;
