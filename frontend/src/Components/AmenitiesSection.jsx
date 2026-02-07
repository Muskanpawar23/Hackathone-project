function AmenitiesSection() {
  const amenities = [
    "24x7 Security",
    "Children's Play Area",
    "Landscaped Garden",
    "Community Hall",
    "Rainwater Harvesting",
    "Ample Parking",
    "Retail Convenience",
    "Power Backup",
  ];

  return (
    <section id="amenities" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
          Amenities
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
          Everything you need, built in
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Thoughtfully selected amenities that make daily life comfortable,
          safe, and vibrant for the entire community.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="border border-blue-100 rounded-xl p-4 text-blue-900 font-semibold bg-blue-50/40"
            >
              {amenity}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
