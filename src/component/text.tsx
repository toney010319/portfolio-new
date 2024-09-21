import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimatedElementProps {
  animation: string;
  placement: string;
  title: string;
  description: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ animation, placement, title, description }) => (
  <div 
    data-aos={animation}
    data-aos-anchor-placement={placement}
    className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w-md"
  >
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

const AnimatedComponent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <AnimatedElement 
        animation="fade-up"
        placement="top-bottom"
        title="Fade Up Animation"
        description="This element fades up from the bottom of the viewport."
      />
      <AnimatedElement 
        animation="fade-up"
        placement="center-bottom"
        title="Another Animation"
        description="This element fades up from the center of the viewport."
      />
    </div>
  );
};

export default AnimatedComponent;