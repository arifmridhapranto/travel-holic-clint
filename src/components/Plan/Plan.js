import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Plan = (props) => {
  const { name, Description, img, price, _id } = props.plan;

  return (
    <div>
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
            <Link to=''>
              <Button variant='secondary'>Book Now</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Plan;
