import Link from 'next/link';
import services from '../data/services';

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-3xl font-semibold text-center text-primary mb-8">Our Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc) => (
          <Link key={svc.slug} href={`/services/${svc.slug}`} className="block p-6 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold text-white mb-2">{svc.title}</h3>
            <p className="text-gray-300">{svc.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}