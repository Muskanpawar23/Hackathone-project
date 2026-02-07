import { FaBuilding } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="bg-blue-900 text-white px-8 py-4 flex items-center justify-between">
      
      {/* Logo + Icon */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <div className="bg-orange-500 p-2 rounded">
          <FaBuilding className="text-white text-xl" />
        </div>
        <span>SUVIDHA</span>
      </div>
      
      {/* Menu */}
      <ul className="hidden md:flex space-x-8 font-medium">
        {/* ACTIVE */}
        <li className="cursor-pointer border-b-2 border-orange-400 pb-1">
          Home
        </li>

        {/* NORMAL */}
        <li className="hover:text-orange-400 cursor-pointer">About Us</li>
        <li className="hover:text-orange-400 cursor-pointer">Projects</li>
        <li className="hover:text-orange-400 cursor-pointer">Amenities</li>
        <li className="hover:text-orange-400 cursor-pointer">Contact</li>
      </ul>

      {/* Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold">
        Enquire Now
      </button>
    </nav>
  );
}

export default NavBar;
