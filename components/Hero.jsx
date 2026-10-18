'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import './Hero.css';

const partners = ['Ascend Development', 'Momentum Accounting', 'Construction Scenery', 'Cenrjy Pharmaceuticals', 'Art Prints & Apparel', 'Zippy Spares'];
const dots = [
  ['#ff8a1f', '#ff3d00'],
  ['#ffb347', '#ff6a1f'],
  ['#ff5a2b', '#b81d00'],
  ['#ffd08a', '#ff8a1f'],
];

export default function Hero() {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Some browsers ignore the autoplay attribute until the element is mounted;
  // nudge it once and swallow the rejection if the browser still refuses.
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className={`hero__video${ready ? ' is-ready' : ''}`}
        src="/hero-loop-small.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setReady(true)}
      />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__note">Beyond Software Engineering</p>
          <h1 className="hero__title">
            Revolutionizing<br />
            Enterprise with<br />
            <em>Intelligent Software</em>
          </h1>
          <p className="hero__sub">
            We build autonomous AI pipelines and scalable cloud architectures
            that drive business efficiency.
          </p>
          <Link className="hero__cta" href="/services">
            Explore Our Solutions
            <span className="hero__cta-arrow" aria-hidden="true">&rarr;</span>
          </Link>

          <div className="hero__proof">
            <div className="hero__dots" aria-hidden="true">
              {dots.map(([a, b], i) => (
                <i key={i} style={{ '--a': a, '--b': b }} />
              ))}
            </div>
            <p><strong>5.0 Client Rating</strong><span>Rated by real clients</span></p>
          </div>

          <div className="hero__stats">
            <div className="stat"><strong>99.99%</strong><span>SLA-guaranteed uptime</span></div>
            <div className="stat"><strong>&lt;50ms</strong><span>Response time</span></div>
          </div>
        </div>

        <aside className="ghost" aria-hidden="true">
          <p>Performance</p>
          <div className="ghost__bars">
            {[40, 65, 50, 80, 60, 90, 72].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </aside>
      </div>

      <div className="hero__foot">
        <span className="hero__mark" aria-hidden="true">ALPHA</span>
        <div className="hero__partners">
          <p>Trusted By</p>
          <ul>
            {partners.map((p) => (
              <li key={p}>
                <svg viewBox="0 0 200 24" height="20" role="img" aria-label={p}>
                  <text x="0" y="18" fill="currentColor" fontSize="18" fontWeight="600" fontFamily="Inter, sans-serif">{p}</text>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
