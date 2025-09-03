import Head from 'next/head';
import Link from 'next/link';
import services from '../../data/services';
import ServiceIcon from '../../components/ServiceIcon';
import { marked } from 'marked';
import CaseStudyMetrics from '../../components/CaseStudyMetrics';

export default function ServiceDetail({ service }) {
  if (!service) {
    return <div className="p-8">Service not found.</div>;
  }
  return (
    <div>
      <Head>
        <title>{service.title} | AuctaMorph</title>
        <meta name="description" content={service.summary} />
      </Head>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-primary">Home</Link> <span className="text-gray-500">/</span>{' '}
            <Link href="/#services" className="text-primary">Our Services</Link> <span className="text-gray-500">/</span>{' '}
            <span className="text-gray-300">{service.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <ServiceIcon slug={service.slug} className="w-14 h-14 drop-shadow-lg" />
            <h1 className="text-4xl font-bold text-primary">{service.title}</h1>
          </div>
          <p className="text-gray-300 mb-8">{service.summary}</p>

          <article className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: marked.parse(service.body) }} />
          </article>

          {service.bullets && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
              <ul className="list-disc list-inside text-gray-200">
                {service.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          )}

          <CaseStudyMetrics />

          <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
            <div className="text-gray-300 text-sm">
              We have run core operations teams—so our designs start with **real-world constraints** and end with **measurable cost savings**.
            </div>
            <Link href="/#contact" className="inline-block bg-primary text-black font-semibold px-5 py-3 rounded-lg">Talk to us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: services.map(s => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const service = services.find(s => s.slug === params.slug) || null;
  return { props: { service } };
}
