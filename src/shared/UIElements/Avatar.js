import React from 'react';
const Avatar = props => {
  return (
    <div style={props.style} className='mb-4 mt-3'>
      <img src={props.image} alt={props.alt} className={`${props.className}`} />
    </div>
  );
};

export default Avatar;
