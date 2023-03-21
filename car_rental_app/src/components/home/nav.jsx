import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo-cont">
          <IoCarSport className="car-icon-svg" />
          <div className="logo-text">
            <p>Road</p>
            <p>Runners</p>
          </div>
        </div>
        <section>
          <Link to={"/"}>
            <a>Home</a>
          </Link>
          <Link to={"/about"}>
            <a>About</a>
          </Link>
          <Link to={"/testimonials"}>
            <a>Testimonials</a>
          </Link>
          <Link to={"/team"}>
            <a>Our Team</a>
          </Link>
          <Link to={"/contact"}>
            <a>Contact</a>
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
