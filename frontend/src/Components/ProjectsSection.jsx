function ProjectsSection() {
  const projects = [
    {
      title: "Suvidha Greens",
      location: "Rau, Indore",
      price: "Starting at 18.5L",
    },
    {
      title: "Suvidha Heights",
      location: "Dewas Naka, Indore",
      price: "Starting at 22.9L",
    },
    {
      title: "Suvidha Residency",
      location: "Ujjain Road",
      price: "Starting at 16.2L",
    },
  ];

  return (
    <section id="projects" className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
              Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
              Explore our flagship communities
            </h2>
          </div>
          <a
            className="text-blue-900 font-semibold hover:text-orange-500"
            href="#contact"
          >
            Request brochure →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-32 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200"></div>
              <h3 className="text-xl font-bold text-blue-900 mt-5">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-1">{project.location}</p>
              <div className="mt-4 text-orange-500 font-semibold">
                {project.price}
              </div>
              <button className="mt-5 w-full bg-blue-900 hover:bg-blue-950 text-white py-2 rounded-md font-semibold">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
