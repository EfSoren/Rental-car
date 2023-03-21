import { IoCarSport } from "react-icons/io5";
import { NavLink } from "react-router-dom";
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
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/about"}>
            <p>About</p>
          </NavLink>
          <NavLink to={"/testimonials"}>
            <p>Testimonials</p>
          </NavLink>
          <NavLink to={"/team"}>
            <p>Our Team</p>
          </NavLink>
          <NavLink to={"/contact"}>
            <p>Contact</p>
          </NavLink>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
