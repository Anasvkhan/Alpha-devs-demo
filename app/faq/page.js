import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';

export const metadata = { title: 'FAQ — Alpha Devs' };

export default function Page({ embedded = false }) {
  return (
    <>
      <PageHero
        as={embedded ? 'h2' : 'h1'}
        eyebrow="FAQ"
        title="How can we"
        em="help?"
        lead="Have a question about our services, process or timelines? Talk to us directly."
        cta={['Get a free consultation', '/#contact']}
      />
      <CtaBand />
    </>
  );
}
