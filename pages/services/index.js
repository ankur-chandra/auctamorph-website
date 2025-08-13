import Head from 'next/head';
import Services from '../../components/Services';

export default function ServicesIndex() {
  return (
    <div>
      <Head>
        <title>Our Services | AuctaMorph</title>
        <meta name="description" content="Explore AuctaMorph's services across AI, RPA, ITSM, Finance and Supply Chain automation." />
      </Head>
      <Services />
    </div>
  );
}
