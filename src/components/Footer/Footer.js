import React from "react";
import FooterItem1 from "./FooterItem1";
import FooterItem2 from "./FooterItem2";
import FooterItem3 from "./FooterItem3";

const Footer = () => {
  return (
    <div className='container d-flex flex-column justify-content-lg-between bg-color1 mt-5 pt-5'>
      <FooterItem1></FooterItem1>
      <FooterItem2></FooterItem2>
      <FooterItem3></FooterItem3>
    </div>
  );
};

export default Footer;
