import React from "react";
import { Link } from "react-router-dom";

const FooterItem2 = () => {
  return (
    <div className='container text-center'>
      <h1 className=''>Department</h1>
      <div className='d-flex flex-column  text-dark'>
        <Link to='/plans' className='text-dark text-decoration-none'>
          Rome
        </Link>
        <Link to='/plans' className='text-dark text-decoration-none'>
          Indonasia
        </Link>
        <Link to='/plans' className='text-dark text-decoration-none'>
          Thanilan
        </Link>
        <Link to='/plans' className='text-dark text-decoration-none'>
          Dubai
        </Link>
        <Link to='/plans' className='text-dark text-decoration-none'>
          Malaysia
        </Link>
      </div>
    </div>
  );
};

export default FooterItem2;
