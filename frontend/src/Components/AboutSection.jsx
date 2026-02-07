import aboutImg from "../assets/1.avif";

function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <div className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
            About Suvidha
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
            Homes that feel safe, smart, and truly affordable
          </h2>
          <p className="text-gray-600 mt-4">
            We build thoughtfully planned communities with modern amenities,
            strong infrastructure, and transparent pricing. Our goal is simple:
            make quality housing accessible for every family.
          </p>
          <div className="grid gap-4 grid-cols-2 mt-6 text-blue-900 font-semibold">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-sm text-gray-600">Completed Projects</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold">4,500+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold">25</div>
              <div className="text-sm text-gray-600">Acre Townships</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={aboutImg}
            alt="Suvidha housing project"
            className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-xl px-5 py-4 shadow-lg">
            <div className="text-sm uppercase tracking-widest">
              Since 2010
            </div>
            <div className="text-2xl font-bold">Trusted Builder</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
