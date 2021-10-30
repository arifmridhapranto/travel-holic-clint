import React from "react";

const ExtraSection2 = () => {
  const extras = [
    {
      id: 1,
      name: "Happy Customers",
      amount: 1258,
    },
    {
      id: 2,
      name: "Total Destination",
      amount: 700,
    },
    {
      id: 3,
      name: "Total Country",
      amount: 40,
    },
  ];
  return (
    <div className='container d-flex justify-content-evenly bg-color2 mt-5 py-3 text-center'>
      {extras.map((extra) => (
        <div className='p-2' key={extra.id}>
          <h3>{extra.name}</h3>
          <h1>{extra.amount}</h1>
        </div>
      ))}
    </div>
  );
};

export default ExtraSection2;
