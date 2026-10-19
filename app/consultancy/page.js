import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';

export const metadata = { title: 'Consultancy — Alpha Devs' };

const offers = ['AI roadmaps', 'Cloud cost optimization', 'Scalable SaaS architecture design', 'Technical audits', 'CTO advisory'];
const phases = ['Strategic Discovery', 'Concept Engineering', 'Design Thinking', 'Architectural Engineering', 'Rigorous QA', 'Deployment & Launch', 'Continuous Evolution'];

export default function Page({ embedded = false }) {
  return (
    <>
      <PageHero
        as={embedded ? 'h2' : 'h1'}
        eyebrow="Strategic Product Consultancy"
        title="We don't just build features; we architect"
        em="business models."
        lead="Free consultation to map your idea to a technical strategy."
        cta={['Get a free consultation', '/#contact']}
      />
      <section className="sec">
        <h2 className="sec__title">What we <em>advise</em> on</h2>
        <div className="grid">
          {offers.map((o) => <div className="card" key={o}><h3>{o}</h3></div>)}
        </div>
      </section>
      <section className="sec">
        <h2 className="sec__title">Our seven-phase <em>process</em></h2>
        <div className="grid">
          {phases.map((p, i) => (
            <div className="card" key={p}><span className="card__num">0{i + 1}</span><h3>{p}</h3></div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
