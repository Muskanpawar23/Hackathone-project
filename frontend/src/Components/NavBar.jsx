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
          <a href="#home">Home</a>
        </li>

        {/* NORMAL */}
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#about">About Us</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#amenities">Amenities</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Button */}
      <a
        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold"
        href="#contact"
      >
        Enquire Now
      </a>
    </nav>
  );
}

export default NavBar;
