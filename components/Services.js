import Link from 'next/link';
import services from '../data/services';
import IconAgenticAI from './icons/IconAgenticAI';
import IconRPA from './icons/IconRPA';
import IconManaged from './icons/IconManaged';
import IconITSM from './icons/IconITSM';
import IconFinance from './icons/IconFinance';
import IconSupply from './icons/IconSupply';
import IconAnalytics from './icons/IconAnalytics';

const ICONS = {
  'agentic-ai': IconAgenticAI,
  'rpa': IconRPA,
  'managed-automation': IconManaged,
  'itsm-freshservice': IconITSM,
  'finance-process-consulting': IconFinance,
  'supply-chain-automation': IconSupply,
  'data-analytics-solutions': IconAnalytics,
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-8">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = ICONS[s.slug] || IconAgenticAI;
            return (
              <article key={s.slug} className="group rounded-2xl border border-gray-800 p-6 shadow-sm hover:shadow-xl transition relative overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-transparent via-[#007fff22] to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition" />
                <div className="relative">
                  <Icon className="w-12 h-12 mb-4 drop-shadow-lg" />
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href={`/services/${s.slug}`} className="hover:underline">{s.title}</Link>
                  </h3>
                  <p className="text-gray-300 mb-3">{s.summary}</p>
                  {s.bullets && (
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-200 mb-4">
                      {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                  <Link href={`/services/${s.slug}`} className="inline-block mt-2 text-primary font-semibold">Learn more →</Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}