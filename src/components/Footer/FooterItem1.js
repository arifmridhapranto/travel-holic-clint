import React from "react";
import { NavLink } from "react-router-dom";

const FooterItem1 = () => {
  return (
    <div className='container '>
      <NavLink to='/' className='text-decoration-none'>
        <h1 className='text-dark'>TRAVELHOLIC</h1>
      </NavLink>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        tempora ipsam quis optio veniam repellat molestiae in necessitatibus aut
        quibusdam! Minima earum illo accusamus consequatur, voluptates quia
        laboriosam eum cum?
      </p>
    </div>
  );
};

export default FooterItem1;
