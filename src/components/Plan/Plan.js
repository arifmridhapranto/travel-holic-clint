import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useSinglePlan from "../../hooks/useSinglePlan";

const Plan = (props) => {
  const [singlePlan, setSinglePlan] = useState({});
  const { user } = useAuth();
  const { name, Description, img, price, _id } = props.plan;
  // const { index } = props;

  const HandleBooking = (id) => {
    console.log(id);
    fetch(`https://vast-beach-32401.herokuapp.com/singleplan/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.email = user.email;
        data.status = "pending";
        setSinglePlan(data);
      });

    fetch("https://vast-beach-32401.herokuapp.com/addbooking", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(singlePlan),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(
            "your Booking is done. Please check my Bookings Tab. thank you"
          );
        }
      });
  };

  return (
    <div className='col-lg-4 col-12'>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>{name}</Card.Title>
            <Card.Title className='bg-color2 p-1 border rounded'>
              {price}
            </Card.Title>
          </div>
          <Card.Text>{Description.slice(0, 100)}</Card.Text>
          <div className='d-flex justify-content-around'>
            <Link to={`/singleplan/${_id}`}>
              <Button variant='primary'>Go For Full details</Button>
            </Link>
            <Button variant='secondary' onClick={() => HandleBooking(_id)}>
              Book Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Plan;
