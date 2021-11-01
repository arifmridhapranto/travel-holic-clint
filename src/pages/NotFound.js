import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='container text-center'>
      <img
        src={"https://i.ibb.co/DkTTX02/228438-P2806-Z-180-ai.png"}
        alt=''
        className='img-thumbnail'
      />
      <Link to='/'>
        <Button variant='primary' size='lg'>
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
