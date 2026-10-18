import Link from 'next/link';
import './Page.css';

export default function CtaBand({ text = 'Get a free consultation' }) {
  return (
    <div className="cta-band">
      <h2>{text}</h2>
      <Link className="btn" href="/contact?type=booking">
        Book a Call <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
