import herocar from "../../assets/herocar.png";
import heroaccent from "../../assets/hero-background.png";
import { FaCheckCircle } from "react-icons/fa";
function HomeHero() {
  return (
    <div className="hero">
      <section className="hero-message">
        <h4>Plan your trip now</h4>
        <h1>
          Save <span style={{ color: "#ff4d30" }}>big</span> with our rental
          cars
        </h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more
        </p>
        <div className="hero-buttons">
          <a href="#form-wrapper">
            <button
              style={{
                backgroundColor: "#ff4d30",
                border: "none",
                borderRadius: "5px",
                color: "white",
              }}
            >
              {"Book a Ride  "}
              <FaCheckCircle />
            </button>
          </a>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              border: "none",
            }}
          >
            {"Learn More >"}
          </button>
        </div>
      </section>
      <img src={herocar} className="hero-image" />
      <img src={heroaccent} className="hero-accent" />
    </div>
  );
}

export default HomeHero;
