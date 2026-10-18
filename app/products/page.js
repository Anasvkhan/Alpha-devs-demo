import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';

export const metadata = { title: 'Products — Alpha Devs' };

const why = [
  ['Secure & Reliable', ''],
  ['Instant Integration', ''],
  ['Future-Ready AI', ''],
  ['End-to-End Ownership', ''],
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Products" title="Software built by" em="Alpha Devs" lead="Our own products, shaped by what we learn delivering for enterprises." />
      <section className="sec">
        <div className="grid">
          <article className="card">
            <span className="card__meta">v2.0.4</span>
            <h3>Alpha Intelligence</h3>
            <p>AI-powered ERP and computer vision monitoring.</p>
            <ul className="tags">{['AI', 'ERP', 'Computer Vision', 'SaaS', 'EdTech'].map((t) => <li key={t}>{t}</li>)}</ul>
            <ul className="tags">{['Basic', 'Standard', 'Enterprise'].map((t) => <li key={t}>{t}</li>)}</ul>
          </article>
          <article className="card">
            <h3>Alief Wellness</h3>
            <p>A health-tech solution.</p>
          </article>
        </div>
      </section>
      <section className="sec">
        <div className="stats">
          <div className="card"><strong>98.1%</strong><span>Accuracy</span></div>
          <div className="card"><strong>99.9%</strong><span>Uptime</span></div>
          <div className="card"><strong>35+</strong><span>Deployments</span></div>
        </div>
      </section>
      <section className="sec">
        <h2 className="sec__title">Why <em>Alpha Devs?</em></h2>
        <div className="grid">
          {why.map(([t]) => <div className="card" key={t}><h3>{t}</h3></div>)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
