import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>AuctaMorph | Technology with Precision</title>
        <meta name="description" content="Digital Transformation, AI & Automations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}