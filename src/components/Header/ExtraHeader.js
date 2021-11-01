import React from "react";

const ExtraHeader = ({ children }) => {
  return (
    <div>
      <div className=''>
        <div className='row'>
          <div className='col-lg-6 col-12 d-flex flex-column justify-content-center'>
            {children}
          </div>
          <div className='col-lg-6 col-12 d-flex justify-content-end'>
            <img
              src={"https://i.ibb.co/s1HpdwW/asset-1.webp"}
              alt=''
              width='300'
              height='400'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraHeader;
