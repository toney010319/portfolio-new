import { useState } from "react";
import NavTabs from "./animata/container/nav-tabs";
import WorkButton from "./animata/container/work-button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#10131A]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-[#EFF0F2] text-xl md:text-2xl font-bold">
              {"<"}
              <span className="text-[#2EB2D3]">A</span>nthony{"/>"}
            </h1>
          </div>
          <div className="hidden md:block">
            <NavTabs tabs={["Profile", "Search", "About Us", "Contact Us", "Settings"]} />
          </div>
          <div className="hidden md:block">
            <WorkButton text="Contact" className="bg-[#2EB2D3] px-5 py-2 text-sm md:text-base" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#EFF0F2] hover:text-[#2EB2D3] focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavTabs tabs={["Profile", "Search", "About Us", "Contact Us", "Settings"]} />
          </div>
          <div className="px-2 py-3">
            <WorkButton text="Contact" className="bg-[#2EB2D3] px-5 py-2 text-sm w-full" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
