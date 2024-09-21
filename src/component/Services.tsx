import FlipCard from "./animata/container/flip-card";
import frontend from "../assets/front.jpg";

const Services = () => {
  return (
    <div className="py-10 bg-[#10131a]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="flex flex-col justify-center">
            <h1 className="text-[#EFF0F2] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              MY <span className="text-[#2EB2D3]">SERVICE</span>
            </h1>
            <div className="text-[#EFF0F2]">
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">
                As a versatile developer and designer, I offer a full spectrum of services to help businesses build,
                enhance, and optimize their digital presence. With expertise as a front-end and back-end developer, I
                create seamless full-stack web applications that are both powerful and efficient. My skills in UI/UX
                design ensure that these applications are not only functional but also intuitive and user-friendly.
                Additionally, I specialize in web optimization, improving site performance, speed, and overall user
                experience. I am committed to delivering high-quality, scalable solutions that meet the unique needs of
                each project.
              </p>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 lg:mt-0">
            <div className="w-full sm:w-1/2 space-y-4">
              <FlipCard
                description="I am a front-end web developer with expertise in JavaScript, focusing on the ReactJS framework, along with Tailwind CSS and Bootstrap. I also have foundational knowledge of Svelte and jQuery. My passion lies in creating responsive, efficient, and visually engaging web applications that provide outstanding user experiences."
                image={frontend}
                rotate="y"
                subtitle="Frontend Developer"
                title="Frontend Developer"
                className="w-full"
              />
              <FlipCard
                description="I am a full-stack developer with a passion for building beautiful and functional applications."
                image={frontend}
                rotate="y"
                subtitle="UI/UX Developer"
                title="UI/UX Developer"
                className="w-full "
              />
            </div>
            <div className="w-full sm:w-1/2 space-y-4 lg:mt-10">
              <FlipCard
                description="I am a backend developer skilled in Node.js with the Express.js framework, MongoDB, as well as Ruby and the Ruby on Rails framework with PostgreSQL. I am committed to developing robust, scalable, and secure server-side applications that seamlessly integrate with front-end technologies."
                image={frontend}
                rotate="y"
                subtitle="Backend Developer"
                title="Backend Developer"
                   className="w-full"
              />
              <FlipCard
                description="I am a full-stack developer with a passion for building beautiful and functional applications."
                image={frontend}
                rotate="y"
                subtitle="Web Optimization"
                title="Web Optimization"
                   className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
