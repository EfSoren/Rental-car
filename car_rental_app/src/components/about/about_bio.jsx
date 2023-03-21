import {} from "react-icons/fa";
import carSale from "../../assets/carSale.jpg";
function AboutBio() {
  return (
    <section className="about-wrapper">
      <h1 className="about-title">About our Company</h1>
      <div>
        <img src={carSale} className="sale-img" />
        <article>
          <h2 className="about-header">
            We start the engine. You start the adventure
          </h2>
          <p className="about-desc">
            Welcome to Road Runners! We are dedicated to providing exceptional
            customer service and high-quality rental vehicles to meet your
            transportation needs. Our company was founded with the goal of
            offering reliable and affordable car rentals to both local and
            visiting customers.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutBio;

/* 







 */
