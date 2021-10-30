import React from "react";

const ContactDescription = () => {
  const contacts = [
    {
      id: 1,
      name: "Call Us",
      details: 88151202152,
      icon: "fas fa-headset",
    },
    {
      id: 2,
      name: "Email Us",
      details: "contact@mail.com",
      icon: "fas fa-envelope-open-text",
    },
    {
      id: 3,
      name: "Location",
      details: "Dhaka,Bangladesh",
      icon: "fas fa-map-marker-alt",
    },
  ];
  return (
    <div className='container d-flex justify-content-evenly'>
      {contacts.map((contact) => (
        <div key={contact.id} className=''>
          <h1 className='fs-6'>
            <i className={contact.icon}></i>
          </h1>
          <h3 className=''>{contact.name}</h3>
          <h5 className=''>{contact.details}</h5>
        </div>
      ))}
    </div>
  );
};

export default ContactDescription;
