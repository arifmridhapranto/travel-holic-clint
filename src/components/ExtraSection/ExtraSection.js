import React from "react";
import ExtraItem from "./ExtraItem";

const ExtraSection = () => {
  const extra = [
    {
      id: 1,
      img: "https://i.ibb.co/dLKmfHp/asset-3.webp",
      name: "Hotel Booking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minus iste ex quaerat ratione id quisquam quo vel vero aspernatur non,",
    },
    {
      id: 2,
      img: "https://i.ibb.co/6PDh1Wj/asset-4.webp",
      name: "Destination Booking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minus iste ex quaerat ratione id quisquam quo vel vero aspernatur non,",
    },
    {
      id: 3,
      img: "https://i.ibb.co/bW3RB6j/asset-5.webp",
      name: "Flight Booking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minus iste ex quaerat ratione id quisquam quo vel vero aspernatur non,.",
    },
  ];

  return (
    <div className='container d-flex flex-column flex-lg-row justify-content-lg-between mt-5'>
      {extra.map((ext) => (
        <ExtraItem key={ext.id} ext={ext}></ExtraItem>
      ))}
    </div>
  );
};

export default ExtraSection;
