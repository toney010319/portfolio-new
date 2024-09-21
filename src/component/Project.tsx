import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import WorkButton from "./animata/container/work-button";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const projects = [
    {
      title: "SNAPGRAM",
      description: "This is a fullstack Project the technologies i used for this are nextjs, react for frontend and tailwind css for styling and appwrite for database, im also using react query/tanstack query for fetching data from the backend, and tailwind css for styling",
      image: "/images/snapgram.webp",
      link: "https://snapgram-jsm-o7n4.vercel.app/"
    },
    {
      title: "SNAPGRAM",
      description: "This is a fullstack Project the technologies i used for this are nextjs, react for frontend and tailwind css for styling and appwrite for database, im also using react query/tanstack query for fetching data from the backend, and tailwind css for styling",
      image: "/images/snapgram.webp",
      link: "https://snapgram-jsm-o7n4.vercel.app/"
    },
  ];

  return (
    <div className="py-10 bg-[#10131a]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-[#EFF0F2] text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          MY <span className="text-[#2EB2D3]">PROJECT</span>
        </h1>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className="w-full lg:w-2/3 xl:w-1/2 shadow-md border-2 border-[rgba(46,178,211,0.45)] rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[#2EB2D3] hover:bg-[#2eb2d315] hover:cursor-pointer hover:scale-105">
              {/* <div className="w-full md:w-2/3 lg:w-1/2 hover:shadow-[#2EB2D3] hover:bg-[#2eb2d315] hover:cursor-pointer shadow-md border-2 border-[rgba(46,178,211,0.45)] rounded-3xl overflow-hidden"> */}
                <div className="relative h-56 md:h-64">
                  <img
                    src={project.image}
                    alt={`${project.title} application`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="tracking-wide text-2xl md:text-3xl text-[#EFF0F2] font-extrabold text-left">
                    {project.title}
                  </h2>
                  <p className="text-[#EFF0F2] text-sm md:text-base text-left">
                    {project.description}
                  </p>
                  <WorkButton
                    text="View Project"
                    className="bg-[#2EB2D3] px-5 py-2 text-lg self-start"
                    href={project.link}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;