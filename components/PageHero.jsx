import Link from 'next/link';
import './Page.css';

export default function PageHero({ as: Tag = 'h1', eyebrow, title, em, lead, cta }) {
  return (
    <section className="phero">
      <p className="phero__eyebrow">{eyebrow}</p>
      <Tag className="phero__title">
        {title} {em && <em>{em}</em>}
      </Tag>
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
