import React from "react";
import ContactItem from "../components/ContactItem";
import "../styles/css/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h2>Contact informations</h2>
        <ContactItem
          name="Phone"
          value="+32472535754"
          icon="/public/assets/icons/phone.svg"
        />
        <ContactItem
          name="Email"
          value="roti_adi@yahoo.com"
          icon="/public/assets/icons/email.svg"
        />
        <ContactItem
          name="Linkedin"
          value="https://www.linkedin.com/in/adrian-ionut-rotaru/"
          icon="/public/assets/icons/linkedin.svg"
        />
        <ContactItem
          name="Github"
          value="https://github.com/rotiadi"
          icon="/public/assets/icons/github.svg"
        />
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
      </div>
    </div>
  );
};

export default Contact;
