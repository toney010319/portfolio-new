"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../libs/utils";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  isMobile: boolean;
}

export default function NavTabs({ tabs, isMobile = false }: { tabs: string[]; isMobile?: boolean }) {
  const [selected, setSelected] = useState<string>(tabs[0]);

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md bg-[#10131A]",
        isMobile ? "flex-col space-y-2" : "flex-wrap gap-4 "
      )}
    >
      {tabs.map((tab) => (
        <Tab text={tab} selected={selected === tab} setSelected={setSelected} key={tab} isMobile={isMobile} />
      ))}
    </div>
  );
}

const Tab = ({ text, selected, setSelected, isMobile }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative rounded-md p-2 text-sm transition-all hover:bg-[#2eb2d32a] hover:border-[#2EB2D3]",
        selected ? "text-white font-bold" : "text-[#EFF0F2] hover:font-black",
        isMobile ? "w-full text-left" : "min-w-20"
      )}
    >
      <p className="relative z-50">{text}</p>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className={cn("absolute inset-0 rounded-sm bg-[#2EB2D3]", isMobile ? "h-full w-1 left-0" : "")}
        />
      )}
    </button>
  );
};
