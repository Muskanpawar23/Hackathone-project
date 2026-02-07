function ContactSection() {
  return (
    <section id="contact" className="bg-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-8 grid gap-10 md:grid-cols-2">
        <div>
          <div className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let us help you find the right home
          </h2>
          <p className="text-blue-100 mt-4">
            Share your requirements and our team will connect with you for
            pricing, site visits, and loan guidance.
          </p>
          <div className="mt-6 space-y-3 text-blue-100">
            <div>+91 98765 43210</div>
            <div>hello@suvidha.in</div>
            <div>Indore, Madhya Pradesh</div>
          </div>
        </div>

        <form className="bg-white text-blue-900 rounded-2xl p-6 grid gap-4">
          <div>
            <label className="text-sm font-semibold">Full Name</label>
            <input
              className="mt-2 w-full border border-blue-200 rounded-md px-3 py-2"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              className="mt-2 w-full border border-blue-200 rounded-md px-3 py-2"
              placeholder="Your phone"
              type="tel"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Budget Range</label>
            <select className="mt-2 w-full border border-blue-200 rounded-md px-3 py-2">
              <option>Below 15L</option>
              <option>15L - 20L</option>
              <option>20L - 25L</option>
              <option>Above 25L</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              className="mt-2 w-full border border-blue-200 rounded-md px-3 py-2"
              rows={4}
              placeholder="Tell us about your requirement"
            ></textarea>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
