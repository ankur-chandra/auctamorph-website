export default function CaseStudyMetrics() {
  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-gray-800 p-6 md:p-8 bg-gradient-to-br from-[#0b0f1a] to-[#111827]">
        <h2 className="text-2xl font-bold text-primary mb-4">Proven Impact: Case Study Snapshot</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl p-5 bg-black/30 border border-gray-800">
            <div className="text-4xl font-extrabold text-white mb-1">60</div>
            <div className="text-gray-300 text-sm">Bots in production</div>
            <p className="text-gray-400 text-sm mt-3">Resilient, monitored, and change-controlled automations.</p>
          </div>
          <div className="rounded-xl p-5 bg-black/30 border border-gray-800">
            <div className="text-4xl font-extrabold text-white mb-1">5,000+</div>
            <div className="text-gray-300 text-sm">Hours saved per month</div>
            <p className="text-gray-400 text-sm mt-3">Compounded savings across Finance and Operations teams.</p>
          </div>
          <div className="rounded-xl p-5 bg-black/30 border border-gray-800">
            <div className="text-4xl font-extrabold text-white mb-1">80%</div>
            <div className="text-gray-300 text-sm">Accounting automated</div>
            <p className="text-gray-400 text-sm mt-3">Shorter monthly close cycles and fewer manual touchpoints.</p>
          </div>
        </div>
        <div className="mt-6 text-gray-200 text-sm leading-relaxed">
          Bots also streamline **audit readiness**—evidence is captured automatically, controls are consistent, and trails are complete.
          Plan ahead and be stress‑free for quarterly/annual audits with minimal human intervention.
        </div>
      </div>
    </section>
  );
}
