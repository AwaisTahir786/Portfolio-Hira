"use client";
import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hira',
        1000, 
        'Brand Designer',
        1000,
        'UI/UX Designer',
        1000,
        'Web Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '0.8em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Animation;