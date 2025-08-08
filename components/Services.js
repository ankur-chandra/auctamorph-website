export default function Services() {
  const items = [
    'Agentic AI solutions',
    'Robotic Process Automation',
    'Managed Services',
    'Finance Process Automation',
    'ITSM Implementation'
  ];
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-3xl font-semibold text-center text-primary mb-8">Our Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((svc) => (
          <div key={svc} className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-white">{svc}</h3>
            <p className="mt-2 text-gray-400">Detailed description of {svc}...</p>
          </div>
        ))}
      </div>
    </section>
  );
}
