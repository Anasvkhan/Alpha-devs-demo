'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const links = [
  ['Consultancy', '/consultancy'],
  ['Services', '/services'],
  ['AI Agents', '/ai-agents'],
  ['Products', '/products'],
  ['About Us', '/about'],
  ['Blog', '/blog'],
  ['FAQ', '/faq'],
  ['Contact Us', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="nav">
      <Link className="nav__logo" href="/" aria-label="Alpha Devs home">
        <span className="nav__mark" aria-hidden="true" />
        Alpha Devs
      </Link>

      <nav className={`nav__pill${open ? ' is-open' : ''}`} aria-label="Primary">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className={path === href ? 'is-active' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link className="nav__cta" href="/contact?type=booking">Book a Call</Link>

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
