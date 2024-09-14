import React from "react";
import NavTabs from "./animata/container/nav-tabs";
import WorkButton from "./animata/container/work-button";

const Navbar = () => {
  return (
    <div className="bg-[#10131A]">
      <div className="container m-auto">
        <div className="flex  items-center justify-between   text-[#EFF0F2]">
          <div>
            <h1 className="text-[#EFF0F2] text-xl md:text-1xl lg:text-2xl font-bold">
              {"<"}
              <span className="text-[#2EB2D3]">A</span>nthony{"/>"}
            </h1>
          </div>
          <div>
            <NavTabs tabs={["Profile", "Search", "About Us", "Contact Us", "Settings"]} />
          </div>
          <div>
            <WorkButton text="Contact" className="bg-[#2EB2D3] px-7 py-2 text-xl  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
