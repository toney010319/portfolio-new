 
import 'aos/dist/aos.css';

interface AnimatedElementProps {
    animation: string;
    placement: string;
    title: string;
    description: string;
  }
  
  export const AnimatedElement: React.FC<AnimatedElementProps> = ({ animation, placement, title, description }) => (
    <div 
      data-aos={animation}
      data-aos-anchor-placement={placement}
      className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );