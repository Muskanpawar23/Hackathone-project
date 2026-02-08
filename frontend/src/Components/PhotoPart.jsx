import heroImg from "../assets/1.jpeg";

function PhotoPart() {
  return (
    <section
      id="home"
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
     
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-auto px-8 w-full">
          <div className="max-w-xl text-[#262220]">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              SUVIDHA- One Digital Desk <br /> for All Urban Services
            </h1>

            <p className="text-[#262220] mb-6">
              Electricity,Water,Municipal & Citizen Services-<br/>
              All at One Place
            </p>

            <div className="flex gap-4">
              <a
                className=" bg-[#a13c38]  px-6 py-3 rounded-md font-semibold">Get Started
              </a>

              <a
                className="bg-white text-[#262220]  px-6 py-3 rounded-md font-semibold">Lodge Complaint
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoPart;
