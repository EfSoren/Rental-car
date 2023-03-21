import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiPhone } from "react-icons/hi2";
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function Contact() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [waiting, setWaiting] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setWaiting("Sending Email...");
    if (user && email && message) {
      emailjs
        .sendForm(
          "service_cv7wda2",
          "template_n3k8kxf",
          form.current,
          "KEgy-wTRNGD0D2r4g"
        )
        .then(
          (result) => {
            console.log(form);

            setWaiting("Email Sent");
            setUser("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setWaiting("Missing required fields");
      console.log("Form not filled out correctly");
    }
  };

  return (
    <section className="contact-cont">
      <div className="contact-text">
        <div className="text-cont">
          <h1 className="topic">Need additional information?</h1>
          <p>
            Reach out to us for a quick response from one of our experience
            technicians for any of your needs
          </p>
          <p>
            <HiPhone /> (123)456-7890
          </p>
          <p>
            <MdEmail /> Carrental@mail.com
          </p>
          <p>
            <MdLocationPin /> 4567 W Car Rental Road,
          </p>
        </div>
        <div className="contact-form">
          <form className="email-box" ref={form} onSubmit={sendEmail}>
            <label>{waiting}</label>
            <label>Name</label>
            <input
              id="1"
              className="form-box"
              type="text"
              name="from_name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <label>Your Email Address</label>
            <input
              id="2"
              className="form-box"
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Message</label>
            <textarea
              id="3"
              className="message-box"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input className="send-box" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
}
