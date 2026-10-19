import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';

export const metadata = { title: 'Blog — Alpha Devs' };

const posts = [
  ['Hugging Face and the SOP Detection System', '12 Feb 2026'],
  ['Computer vision for quality control', '26 Jan 2026'],
  ['The future of serverless enterprise cloud', '26 Jan 2026'],
  ['RAG and fact-based enterprise AI', '26 Jan 2026'],
  ['Multi-tenant SaaS architecture in 2026', '26 Jan 2026'],
  ['Next.js 14 and 100 Lighthouse scores', '24 Jan 2026'],
  ['Edge-AI vs Cloud-AI: sub-50ms latency for workplace safety', '24 Jan 2026'],
  ['Cognitive LLM pipelines replacing traditional RPA', '24 Jan 2026'],
];

export default function Page({ embedded = false }) {
  return (
    <>
      <PageHero as={embedded ? 'h2' : 'h1'} eyebrow="Blog" title="Notes from the" em="Alpha Team" lead="Engineering insights on AI, computer vision and cloud." />
      <section className="sec">
        <div className="grid">
          {posts.map(([t, d]) => (
            <article className="card" key={t}>
              <span className="card__meta">{d}</span>
              <h3>{t}</h3>
              <p>By Alpha Team</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
