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
      title: "TRADING APP",
      description: "This is a Group fullstack project in a bootcamp, the technologies we use for this are ruby on rails for backend and react for frontend tailwind css for styling and postgresql for database, if you want to try it just click on the button.",
      image: "/images/tradingapp.webp",
      link: "https://g2-trading-app.vercel.app/"
    },
    {
      title: "SNAPGRAM",
      description: "Snapgram is a full-stack social media clone where users can create an account, log in, create posts, share them publicly, comment, and like other posts. The project features a serverless backend powered by Appwrite, providing a streamlined and scalable architecture.",
      image: "/images/snapgram.webp",
      link: "https://snapgram-jsm-o7n4.vercel.app/",
      Technologies: "Nextjs, Tailwindcss, TanstackQuery, Typescript, Appwrite"
    },
    {
      title: "E-Commerce Website",
      description: "My main responsibility was converting Figma prototypes into fully functional, responsive code using a mobile-first approach, ensuring compatibility across all devices. The website allows users to add items to their cart, place multiple orders with subscription options, and complete payments via PayPal and debit cards.",
      image: "/images/ecommerce.jpg",
      link: "shop.esaverwatt.com",
      Technologies: "HTML, Bootstrap, jQuery, .NET"
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
              <div className="w-full lg:w-2/3 xl:w-1/2 shadow-md border-2 border-[rgba(46,178,211,0.45)] rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[#2EB2D3] hover:bg-[#2eb2d315] hover:cursor-pointer  ">
             
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
                  <div>
                    <p className="text-[#EFF0F2] text-sm md:text-base text-left">
                        Technologies: {project.Technologies}
                      </p>
                  </div>
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