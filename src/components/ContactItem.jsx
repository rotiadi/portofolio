import React from "react";

const ContactItem = ({ icon, name, value }) => {
  return (
    <div className="contact-item">
      <div className="contact-item-info">
        <img src={icon} alt="icon" width="20rem" height="auto" />
        <p>{name}</p>
      </div>
      <p>{value}</p>
    </div>
  );
};

export default ContactItem;
