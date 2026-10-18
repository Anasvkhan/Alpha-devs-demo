import Link from 'next/link';
import './Page.css';

export default function PageHero({ eyebrow, title, em, lead, cta }) {
  return (
    <section className="phero">
      <p className="phero__eyebrow">{eyebrow}</p>
      <h1 className="phero__title">
        {title} {em && <em>{em}</em>}
      </h1>
      {lead && <p className="phero__lead">{lead}</p>}
      {cta && (
        <Link className="btn" href={cta[1]}>
          {cta[0]}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </section>
  );
}
