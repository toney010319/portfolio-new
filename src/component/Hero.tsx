import CycleText from "./animata/container/cylce-text";
import WorkButton from "./animata/container/work-button";
import photo from "../assets/test1.png";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "lucide-react";

const Hero = () => {
  return (
    <div id="profile" className="pt-10 bg-gradient-to-r from-[#10131a] to-[#0f212c]">
      <div className="container mx-auto px-4 pt-28 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-2/3 pt-10 lg:pt-20">
            <CycleText />

            <p className="text-[#EFF0F2] sm:text-xl text-center lg:text-left max-w-[820px] mt-6">
              Greetings, fellow digital explorers! I am Anthony, A passionate and innovative developer dedicated to
              crafting immersive digital experiences. Welcome to my Online abode.
            </p>

            <div className="mt-10  gap-5 flex justify-center   items-center lg:justify-start mb-10">
              <WorkButton
                text="Download CV"
                className="bg-[#2EB2D3] px-7 py-2 text-xl  "
                href="/images/resume.pdf"
                download={true}
              />
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/d4ydr34mer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <FacebookIcon className="h-6 w-6 text-[#2EB2D3] hover:cursor-pointer hover:scale-150 ease-in-out duration-200" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Facebook
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/asbautista19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <LinkedinIcon className="h-6 w-6 text-[#2EB2D3] hover:cursor-pointer hover:scale-150 ease-in-out duration-200" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/toney010319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <GithubIcon className="h-6 w-6 text-[#2EB2D3] hover:cursor-pointer hover:scale-150 ease-in-out duration-200" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 hidden lg:block  ">
            <img
              src={photo}
              alt="photo"
              className="rounded-md w-full h-auto max-w-[300px] md:max-w-[600px] mx-auto   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
