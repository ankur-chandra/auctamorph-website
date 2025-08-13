import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState({ sending: false, ok: null, error: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, error: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to send');
      setStatus({ sending: false, ok: true, error: '' });
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      setStatus({ sending: false, ok: false, error: err.message || 'Error' });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">Get in Touch</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white" required />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white" />
            <input name="company" value={form.company} onChange={onChange} placeholder="Company (optional)" className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white" />
          </div>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows={5} className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white" required></textarea>
          <button type="submit" className="py-3 rounded-lg bg-primary text-black font-semibold" disabled={status.sending}>
            {status.sending ? 'Sending…' : 'Send Message'}
          </button>
          {status.ok && <p className="text-green-400">Thanks! We’ll get back to you shortly.</p>}
          {status.ok === false && <p className="text-red-400">{status.error}</p>}
        </form>
      </div>
    </section>
  );
}
