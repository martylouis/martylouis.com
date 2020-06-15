import React from 'react';

const nums = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const ColorGallery = ({ color }) => (
  <div className="grid grid-cols-9 pt-2">
    {nums.map((val = 1, i) => {
      return (
        <div className={`w-12 h-12 bg-${color}-${val} rounded`} key={i}></div>
      );
    })}
  </div>
);

export default ColorGallery;

// ColorGallery.defaultProps = {
//   color: `gray`,
// };
