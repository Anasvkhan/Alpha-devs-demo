import Hero from '../components/Hero';
import Consultancy from './consultancy/page';
import Services from './services/page';
import AiAgents from './ai-agents/page';
import Products from './products/page';
import About from './about/page';
import Blog from './blog/page';
import Faq from './faq/page';
import Contact from './contact/page';

const sections = [
  ['consultancy', Consultancy],
  ['services', Services],
  ['ai-agents', AiAgents],
  ['products', Products],
  ['about', About],
  ['blog', Blog],
  ['faq', Faq],
  ['contact', Contact],
];

export default function Page() {
  return (
    <>
      <Hero />
      {sections.map(([id, Section]) => (
        <div key={id} id={id} className="embedded">
          <Section embedded />
        </div>
      ))}
    </>
  );
}
