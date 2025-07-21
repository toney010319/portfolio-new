"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../libs/utils";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  sectionId: string; // Add sectionId to map tab to section
  isMobile: boolean;
}

interface NavTabsProps {
  tabs: { label: string; sectionId: string }[]; // Update tabs to include sectionId
  isMobile?: boolean;
}

export default function NavTabs({ tabs, isMobile = false }: NavTabsProps) {
  const [selected, setSelected] = useState<string>(tabs[0].label);

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md bg-[#10131A]",
        isMobile ? "flex-col space-y-2" : "flex-wrap gap-4"
      )}
    >
      {tabs.map((tab) => (
        <Tab
          text={tab.label}
          selected={selected === tab.label}
          setSelected={setSelected}
          sectionId={tab.sectionId}
          key={tab.label}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

const Tab = ({ text, selected, setSelected, sectionId, isMobile }: TabProps) => {
  const handleClick = () => {
    setSelected(text);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
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
          className={cn(
            "absolute inset-0 rounded-sm bg-gradient-to-t from-[#087796] to-[#0096ba]",
            isMobile ? "h-full w-1 left-0" : ""
          )}
        />
      )}
    </button>
  );
};