import PageHero from '../../components/PageHero';
import CtaBand from '../../components/CtaBand';

export const metadata = { title: 'AI Agents — Alpha Devs' };

const functions = ['Sales', 'Finance', 'Operations', 'Customer Service', 'HR', 'IT', 'Knowledge Management', 'Product Management', 'Sustainability'];
const integrations = ['Microsoft Azure', 'Dynamics 365', 'SAP', 'SAP S/4HANA', 'Microsoft 365', 'SharePoint', 'Power Platform', 'Azure OpenAI', 'Teams', 'Oracle', 'Salesforce', 'Power BI', 'Qlik Sense', 'GitHub Copilot', 'Azure DevOps', 'Cosmos DB', 'Power Automate', 'Logic Apps'];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Agents"
        title="44+ proven agent"
        em="accelerators"
        lead="Ready-to-adapt AI agents across your business functions, wired into the tools you already use."
        cta={['Book a Discovery Call', '/contact?type=booking']}
      />
      <section className="sec">
        <h2 className="sec__title">Business <em>functions</em></h2>
        <div className="grid">
          {functions.map((f) => <div className="card" key={f}><h3>{f}</h3></div>)}
        </div>
      </section>
      <section className="sec">
        <h2 className="sec__title">Integrations</h2>
        <ul className="tags">{integrations.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>
      <CtaBand text="Book a Discovery Call" />
    </>
  );
}
