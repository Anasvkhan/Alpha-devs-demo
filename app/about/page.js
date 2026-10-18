import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';

export const metadata = { title: 'About Us — Alpha Devs' };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="From a passion project to a"
        em="global software firm"
        lead="Alpha Development started as a passion project of two FAST alumni. Today it is a global software firm of 15+ specialists."
      />
      <section className="sec">
        <div className="stats">
          <div className="card"><strong>15+</strong><span>Specialists</span></div>
          <div className="card"><strong>15+</strong><span>Industries served</span></div>
          <div className="card"><strong>3</strong><span>Regions: USA, Europe, South Asia</span></div>
        </div>
      </section>
      <section className="sec">
        <h2 className="sec__title">Our <em>mission</em></h2>
        <p className="sec__lead">To bring machine intelligence to every industry through expert engineering.</p>
      </section>
      <section className="sec">
        <h2 className="sec__title">The Alpha <em>Standard</em></h2>
        <div className="grid">
          {['Precision', 'Innovation', 'Confidentiality'].map((v) => <div className="card" key={v}><h3>{v}</h3></div>)}
        </div>
        <p className="sec__lead" style={{ marginTop: 24 }}>Backed by a relentless focus on security and performance.</p>
      </section>
      <CtaBand />
    </>
  );
}
