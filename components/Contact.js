export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">Get in Touch</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white" />
          <textarea placeholder="Message" rows={5} className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white"></textarea>
          <button type="submit" className="py-3 rounded-lg bg-primary text-black font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
}