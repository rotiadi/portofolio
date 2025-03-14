import React from "react";
import ContactItem from "../components/ContactItem";
import "../styles/css/contact.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h2>Contact informations</h2>
        <div className="contact-items">
          <ContactItem
            name="Phone"
            value={{ isLink: false, value: "+32472535754" }}
            icon="/assets/icons/phone.svg"
          />
          <ContactItem
            name="Email"
            value={{ isLink: false, value: "roti_adi@yahoo.com" }}
            icon="/assets/icons/email.svg"
          />
          <ContactItem
            name="Linkedin"
            value={{
              isLink: true,
              value: "https://www.linkedin.com/in/adrian-ionut-rotaru/",
            }}
            icon="/assets/icons/linkedin.svg"
          />
          <ContactItem
            name="Github"
            value={{ isLink: true, value: "https://github.com/rotiadi" }}
            icon="/assets/icons/github.svg"
          />
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
