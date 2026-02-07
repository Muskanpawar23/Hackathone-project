import heroImg from "../assets/1.jpg";

function PhotoPart() {
  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* LIGHT OVERLAY – NO BLUR */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="max-w-xl text-white">

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Affordable Housing <br /> for a Better Future
            </h1>

            <p className="text-gray-200 mb-6">
              Providing quality homes at affordable prices.
            </p>

            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold">
                Get Started
              </button>

              <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold">
                View Projects
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoPart;
