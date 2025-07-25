import "aos/dist/aos.css";
import WorkButton from "./animata/container/work-button";

const Project = () => {
  const projects = [
    {
      title: "Employee Portal",
      description:
        "A full-stack application with MongoDb ExpressJs NodeJs and ReactJs (MERN) Technology, with a feature of Time tracker, Ticketing Support and HR Support Request, with admin access.",
      image: "/images/dms.jpg",
      link: "https://csv-portal-online.vercel.app/sign-in",
      Technologies: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs", "Tailwind", "Shadcn", "Typescript", "Vite"],
    },

    {
      title: "E-Commerce Website",
      description:
        "My main responsibility was converting Figma prototypes into fully functional, responsive code using a mobile-first approach, ensuring compatibility across all devices. The website allows users to add items to their cart, place multiple orders with subscription options, and complete payments via PayPal and debit cards.",
      image: "/images/ecommerce.jpg",
      link: "https://shop.esaverwatt.com",
      Technologies: ["HTML", "Bootstrap", "CSS", "Jquery", ".NET"],
    },
    {
      title: "SNAPGRAM",
      description:
        "Snapgram is a full-stack social media clone where users can create an account, log in, create posts, share them publicly, comment, and like other posts. The project features a serverless backend powered by Appwrite, providing a streamlined and scalable architecture.",
      image: "/images/snapgram.webp",
      link: "https://snapgram-jsm-o7n4.vercel.app/",
      Technologies: ["NextJs", "Tailwind", "TanstackQuery", "Typescript", "Appwrite", "Vite"],
    },
  ];

  return (
    <div id="project" className="py-10 bg-[#10131a]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-[#EFF0F2] text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          MY <span className="text-[#2EB2D3]">PROJECT</span>
        </h1>
        <div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="mt-8 shadow-md border-2 border-[rgba(46,178,211,0.45)] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[#2EB2D3] hover:bg-[#2eb2d315] hover:cursor-pointer"
            >
              <div className=" grou-hover w-full hover:scale-105 transition-transform duration-300 ease-in-out   ">
                <div className="relative h-56 md:h-64">
                  <img
                    src={project.image}
                    alt={`${project.title} application`}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h2 className="tracking-wide text-xl md:text-xl text-[#EFF0F2] font-extrabold text-left">
                    {project.title}
                  </h2>
                  <p className="text-[#EFF0F2] text-sm  text-left">{project.description}</p>
                  <div>
                    <p className="text-[#EFF0F2] text-sm   text-left">
                      {project.Technologies.map((tech, index) => {
                        return (
                          <span
                            key={index}
                            className="inline-flex items-center gap-2 border-2 border-[#2EB2D3] text-white rounded-full px-3 py-1 text-xs font-semibold mx-2 mb-2"
                          >
                            <img src={`/images/${tech}.svg`} alt="" width={20} height={20} />
                            {tech}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <WorkButton
                  text="View Project"
                  className="bg-[#2EB2D3] px-5 py-2 text-lg self-start"
                  href={project.link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
