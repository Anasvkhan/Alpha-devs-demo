import Link from 'next/link';
import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';

export const metadata = { title: 'Services — Alpha Devs' };

const services = [
  ['AI Automation & Workflows', 'Intelligent automation that removes manual work and lifts operational efficiency.', ['RPA', 'Predictive Analytics', 'LLMs', 'Operational Efficiency']],
  ['Computer Vision & ML', 'Models that see, detect and learn from your visual data.', ['Image Recognition', 'Object Detection', 'Neural Networks', 'Anomaly Detection', 'Deep Learning']],
  ['Website Development', 'Fast, search-friendly web platforms with modern interfaces.', ['Next.js', 'React', 'Responsive Design', 'SEO', 'Modern UI/UX']],
];
const specialised = ['Cognitive LLM Pipelines', 'Multi-Cloud Orchestration', 'Real-time PPE Detection', 'AI Integration'];
const process = ['Discovery & Strategy', 'Architecture & Design', 'Engineering & DevOps', 'Launch & Scale'];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering that"
        em="thinks"
        lead="AI, computer vision and web development, delivered by one team from strategy to scale."
      />
      <section className="sec">
        <div className="grid">
          {services.map(([t, d, tags]) => (
            <article className="card" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
              <ul className="tags">{tags.map((x) => <li key={x}>{x}</li>)}</ul>
              <Link className="btn btn--ghost" href="/contact?type=booking">Explore Service <span aria-hidden="true">&rarr;</span></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="sec">
        <h2 className="sec__title">Specialised <em>services</em></h2>
        <ul className="tags">{specialised.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>
      <section className="sec">
        <h2 className="sec__title">Development <em>process</em></h2>
        <div className="grid">
          {process.map((p, i) => (
            <div className="card" key={p}><span className="card__num">0{i + 1}</span><h3>{p}</h3></div>
          ))}
        </div>
      </section>
      <section className="sec">
        <div className="stats">
          <div className="card"><strong>35+</strong><span>Projects</span></div>
          <div className="card"><strong>12+</strong><span>Domains</span></div>
        </div>
      </section>
      <section className="sec">
        <h2 className="sec__title">Built on a <em>solid</em> foundation</h2>
        <p className="sec__lead">Microservices and serverless infrastructure on AWS/Azure with auto-scaling and zero-downtime deployments. Stack: Next.js, React, Node.js, PostgreSQL. Security: SOC2-compliant practices, AES-256 encryption and penetration testing.</p>
        <div className="stats">
          <div className="card"><strong>&lt;50ms</strong><span>Response time</span></div>
          <div className="card"><strong>99.99%</strong><span>Uptime SLA</span></div>
          <div className="card"><strong>Zero-trust</strong><span>End-to-end encryption</span></div>
          <div className="card"><strong>Auto-scaling</strong><span>Cloud architecture</span></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
