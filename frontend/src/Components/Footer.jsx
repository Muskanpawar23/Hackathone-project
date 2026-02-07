function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-2xl font-bold tracking-wide">SUVIDHA</div>
          <p className="mt-3 text-gray-200">
            Affordable housing for a better future. Quality homes with smart
            planning and community-first design.
          </p>
        </div>

        <div>
          <div className="text-lg font-semibold mb-3">Quick Links</div>
          <div className="flex flex-col gap-2 text-gray-200">
            <a className="hover:text-orange-400" href="#home">
              Home
            </a>
            <a className="hover:text-orange-400" href="#about">
              About Us
            </a>
            <a className="hover:text-orange-400" href="#projects">
              Projects
            </a>
            <a className="hover:text-orange-400" href="#amenities">
              Amenities
            </a>
            <a className="hover:text-orange-400" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div>
          <div className="text-lg font-semibold mb-3">Contact</div>
          <div className="flex flex-col gap-2 text-gray-200">
            <span>+91 98765 43210</span>
            <span>hello@suvidha.in</span>
            <span>Indore, Madhya Pradesh</span>
          </div>
          <a
            className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-semibold"
            href="#contact"
          >
            Enquire Now
          </a>
        </div>
      </div>

      <div className="border-t border-blue-800 py-4 text-center text-sm text-gray-200">
        (c) 2026 Suvidha. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
