import { useState } from "react";
import ShiftTabs from "./animata/container/shift-tabs";

const techstack = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Javascript",
  "Typescript",
  "ReactJs",
  "ExpressJs",
  "NodeJs",
  "MongoDB",
  "NextJs",
  "Svelte",
  "SQLite",
  "Ruby",
  "Ruby-on-Rails",
  "PostgreSQL",
  "Figma",
  "Appwrite",
  "Supabase",
  "Vite",
  "VScode",
  "Jquery",
  "Shadcn",
  "Claude-AI",
  "Chat-GPT",
];

const frontEnd = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Javascript",
  "Typescript",
  "ReactJs",
  "NextJs",
  "Svelte",
  "Jquery",
  "Shadcn",
  "Figma",
];

const backEnd = [
  "ExpressJs",
  "NodeJs",
  "MongoDB",
  "SQLite",
  "Ruby",
  "Ruby-on-Rails",
  "PostgreSQL",
  "Appwrite",
  "Supabase",
];

const toolsAndLibraries = ["Vite", "VScode", "Claude-AI", "Chat-GPT"];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const renderTechStack = () => {
    switch (activeTab) {
      case 0:
        return techstack;
      case 1:
        return frontEnd;
      case 2:
        return backEnd;
      case 3:
        return toolsAndLibraries;
      default:
        return techstack;
    }
  };

  return (
    <div className="py-10 bg-gradient-to-r from-[#10131a] to-[#0f212c]">
      <div className="container mx-auto px-4">
        <h1 className="text-[#EFF0F2] text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          More <span className="text-[#2EB2D3]">About</span> Me
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="text-[#EFF0F2] lg:w-1/2">
            <h2 className="text-[#EFF0F2] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">My Education</h2>
            <div className="mb-8">
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">2023 - 2024</p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Avion School
              </p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Software Engineer
              </p>
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio cupiditate ut deleniti aperiam et
                quibusdam quidem totam. Mollitia, ullam minima quis quaerat eos recusandae veniam in odit aperiam
                libero.
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">2018 - 2019</p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Talisay City College
              </p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Bachelor of Science in Industrial Technology
              </p>
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio cupiditate ut deleniti aperiam et
                quibusdam quidem totam. Mollitia, ullam minima quis quaerat eos recusandae veniam in odit aperiam
                libero.
              </p>
            </div>
          </div>
          <div className="text-center lg:w-1/2">
            <h2 className="text-[#EFF0F2] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Tech Stack</h2>
            
            <ShiftTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              items={["All", "Frontend", "Backend", "Tools"]}
              onTabClick={(tab: number | null) => setActiveTab(tab)}
            />
            <div className="flex flex-wrap justify-center items-center gap-2 p-4 md:p-6 lg:p-8">
              {renderTechStack().map((item, index) => (
                <p
                  key={index}
                  className="shadow-md hover:shadow-[#2EB2D3] p-2 hover:cursor-pointer bg-[#2eb2d344] text-[#EFF0F2] font-bold border-[#2EB2D3] border-2 rounded-md flex flex-row items-center gap-2 text-sm md:text-base"
                >
                  <img src={`/images/${item}.svg`} width={20} height={20} alt={`${item} LOGO`} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
