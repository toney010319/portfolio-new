import { cn } from "../../../libs/utils";

interface ButtonProps {
  item: string;
  index?: number;
  activeIndex: number | null;
  onTabClick: () => void;
}

const Button = ({ item, index, activeIndex, onTabClick }: ButtonProps) => {
  return (
    <div
      className={cn("rounded-lg bg-[#2EB2D3]", {
        "border-b-2 border-b-[#2EB2D3]": index === activeIndex,
      })}
      onClick={onTabClick}
    >
      <div
        className={cn(
          "flex h-10 cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 transition-all",
          {
            "border-2 border-[#2EB2D3] text-[#2EB2D3]": index === activeIndex,
            "origin-top-right ease-in hover:rotate-6": index !== activeIndex,
          }
        )}
      >
        <p className="p-2 text-center font-mono">{item}</p>
      </div>
    </div>
  );
};

interface ShiftTabsProps {
  setActiveTab: (tab: number | null) => void;
  activeTab: number | null;
  items: string[];
  onTabClick: (tab: number | null) => void;
}

export default function ShiftTabs({ setActiveTab, activeTab, items, onTabClick }: ShiftTabsProps) {
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabClick(index);
  };

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {items.map((item, index) => (
        <Button
          onTabClick={() => handleTabClick(index)}
          item={item}
          activeIndex={activeTab}
          index={index}
          key={`shift_tab_${index}`}
        />
      ))}
    </div>
  );
}
