export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden hero-bg">
      <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
        <source src="/mach42-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img src="/logo.png" alt="AuctaMorph Logo" className="mx-auto mb-6" style={{ width: '250px' }} />
        <h1 className="text-7xl md:text-8xl font-bold text-primary">AuctaMorph</h1>
        <p className="mt-4 text-2xl">Technology with Precision</p>
      </div>
    </section>
  );
}