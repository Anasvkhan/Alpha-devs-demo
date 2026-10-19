import PageHero from '../../components/PageHero';

export const metadata = { title: 'Contact Us — Alpha Devs' };

export default function Page({ embedded = false }) {
  return (
    <>
      <PageHero
        as={embedded ? 'h2' : 'h1'}
        eyebrow="Contact Us"
        title="Let's build something"
        em="intelligent"
        lead="Book a discovery call to discuss your digital transformation today."
        cta={['Book a Call', 'mailto:info@alpha-devs.cloud?subject=Discovery%20call']}
      />
      <section className="sec">
        <div className="grid">
          <div className="card"><span className="card__meta">Email</span><h3><a href="mailto:info@alpha-devs.cloud">info@alpha-devs.cloud</a></h3></div>
          <div className="card"><span className="card__meta">Support 24/7</span><h3><a href="mailto:support@alpha-devs.cloud">support@alpha-devs.cloud</a></h3></div>
          <div className="card"><span className="card__meta">Phone</span><h3><a href="tel:+447882512086">+44 7882512086</a></h3></div>
          <div className="card"><span className="card__meta">Location</span><h3>London, UK</h3></div>
        </div>
      </section>
    </>
  );
}
