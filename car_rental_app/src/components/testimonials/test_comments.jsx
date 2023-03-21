import { FaQuoteRight } from "react-icons/fa";
import img1 from "../../assets/testprof1.jpeg";

function TestCards() {
  return (
    <section className="testimonial-wrapper">
      <div>
        <article>
          <p>
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </p>
          <div>
            <img src={img1} className="testimonial-image" />
            <FaQuoteRight style={{ color: "#ff4d30" }} />
          </div>
        </article>
        <article>
          <p>
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website!"
          </p>
          <div>
            <img src={img1} className="testimonial-image" />
            <FaQuoteRight style={{ color: "#ff4d30" }} />
          </div>
        </article>
      </div>
    </section>
  );
}

export default TestCards;
