import aboutImg from "../assets/1.avif";
import { BiSolidBoltCircle } from "react-icons/bi";
import { IoWaterOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";


function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className=" mx-auto px-8 grid gap-10 md:grid-cols-2 items-center">
        <div >
          <div className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
            About Suvidha
          </div>
          <div className="flex gap-9 w-full">
            <div className="items-center">
              <BiSolidBoltCircle />
              <p>Electricity Services</p>
            </div>
            <div>
              <IoWaterOutline />
              <p>Water Supply</p>
            </div>
            <div>
              <RiCommunityLine />
              <p>Municipal Services</p>
            </div>
            <div>
              <HiOutlineClipboardDocumentList />

              <p>Govt. Schemes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
