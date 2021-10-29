import React from "react";
import "./ExtraItem.css";

const ExtraItem = (props) => {
  const { name, description, img } = props.ext;
  return (
    <div className='  p-4 border mx-1 rounded-3 text-center'>
      <div className='img'>
        <img src={img} alt='' width='100px' height='150px' className='' />
      </div>
      <div className='mt-2'>
        <h6 className=''>{name}</h6>
        <p className=''>{description}</p>
      </div>
    </div>
  );
};

export default ExtraItem;
