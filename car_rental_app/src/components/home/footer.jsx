import { FaPhone, FaMailBulk } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <article className="footer-item">
        <h2>ROADRUNNERS</h2>
        <p>
          We offer a large range of vehicles for all your driving needs. We have
          the perfect car for you for any occasion.
        </p>
        <p>
          <FaPhone /> 123-456-7890
        </p>
        <p>
          <FaMailBulk /> Carrental@mail.com
        </p>
      </article>
      <article className="footer-item">
        <h2> COMPANY</h2>
        <a>New York</a>
        <a>Careers</a>
        <a> Mobile</a>
        <a> Blog</a>
        <a> How we work</a>
      </article>
      <article className="footer-item">
        <h2>WORKING HOURS</h2>
        <p>Mon - Fri: 9AM-7PM</p>
        <p>Sat: 9AM-5PM</p>
        <p>Sun: Closed</p>
      </article>
    </footer>
  );
}

export default Footer;
