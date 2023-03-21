import bio1 from "../../assets/bio1.png";
import bio2 from "../../assets/bio2.png";
import bio3 from "../../assets/bio3.png";
function HomeDescription() {
  return (
    <section className="bio-cont">
      <h2 className="bio-head">Plan your trip now</h2>
      <h1 className="bio-intro">Quick and easy car rental</h1>
      <div>
        <article className="home-bio-card">
          <img className="bio-image" src={bio1} />
          <h2>Select a car</h2>
          <p>
            we offer a large range of vehicles, we have the perfect car for you
            regardless of your needs
          </p>
        </article>
        <article className="home-bio-card">
          <img className="bio-image" src={bio2} />
          <h2>Contact an Operator</h2>
          <p>
            {" "}
            Our knowledgeable and friendly operators are always ready to help
            you with any questions or concerns
          </p>
        </article>
        <article className="home-bio-card">
          <img className="bio-image" src={bio3} />
          <h2>Let's drive</h2>
          <p>
            Our wide variety of cars will get you everywhere you need to go in
            your travels
          </p>
        </article>
      </div>
    </section>
  );
}

export default HomeDescription;
