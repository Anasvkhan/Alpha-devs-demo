'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const links = [
  ['Consultancy', 'consultancy'],
  ['Services', 'services'],
  ['AI Agents', 'ai-agents'],
  ['Products', 'products'],
  ['About Us', 'about'],
  ['Blog', 'blog'],
  ['FAQ', 'faq'],
  ['Contact Us', 'contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const [active, setActive] = useState('');

  // Highlight the link of the section currently in view.
  useEffect(() => {
    if (path !== '/') return;
    const els = links.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  return (
    <header className="nav">
      <Link className="nav__logo" href="/" aria-label="Alpha Devs home">
        <span className="nav__mark" aria-hidden="true" />
        Alpha Devs
      </Link>

      <nav className={`nav__pill${open ? ' is-open' : ''}`} aria-label="Primary">
        {links.map(([label, id]) => (
          <Link
            key={id}
            href={`/#${id}`}
            className={active === id ? 'is-active' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link className="nav__cta" href="/#contact">Book a Call</Link>

      <button
        className="nav__burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span />
      </button>
    </header>
  );
}
