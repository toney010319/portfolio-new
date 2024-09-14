import CycleText from "./animata/container/cylce-text";
import WorkButton from "./animata/container/work-button";
import photo from "../assets/test1.png";

const Hero = () => {
  return (
    <div className="pt-10 bg-gradient-to-r from-[#10131a] to-[#0f212c]">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-2/3 pt-10 lg:pt-20">
            <CycleText />

            <p className="text-[#EFF0F2] sm:text-xl text-center lg:text-left max-w-[820px] mt-6">
              Greetings, fellow digital explorers! I am Anthony, A passionate and innovative developer dedicated to
              crafting immersive digital experiences. Welcome to my Online abode.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start mb-10">
              <WorkButton text="Hire Me" className="bg-[#2EB2D3] px-7 py-2 text-xl" />
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 hidden lg:block">
            <img src={photo} alt="photo" className="rounded-md w-full h-auto max-w-[300px] md:max-w-[600px] mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
