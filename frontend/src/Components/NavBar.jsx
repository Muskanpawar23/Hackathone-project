import React from "react";
import { FaBuilding } from "react-icons/fa";
import { PiHandHeartFill } from "react-icons/pi";
export const NavBar=()=>{
  return (
    <>
      <nav className="p-3 bg-[#262220] fixed w-full z-20 flex">
          <div className="text-4xl text-[#C3A6A0] text-left flex">

                <h1 className="font-medium ">SUVIDHA</h1>
                <PiHandHeartFill />
            </div>

            
              <ul className="flex gap-5 p-3 text-[#C3A6A0] justify-end w-full">
                <li className="">Home</li>
                <li className="">Service</li>
                <li className=""> How it Works</li>
               <li className="">Track Compliaints</li>
            </ul>
            
      </nav>
    </>
  );
}

export default NavBar;
