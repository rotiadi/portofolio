import React from "react";

const ContactItem = ({ icon, name, value }) => {
  return (
    <div className="contact-item">
      <div className="contact-item-info">
        <img src={icon} alt="icon" width="20rem" height="auto" />
        <p>{name}</p>
      </div>
      <div className="contact-item-value">
        {value.isLink ? (
          <a href={value.value} target="_blank">
            {value.value}
          </a>
        ) : (
          <>{value.value}</>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
