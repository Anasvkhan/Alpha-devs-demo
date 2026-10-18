import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__top">
        <div>
          <p className="foot__brand">Alpha Devs</p>
          <p className="foot__blurb">
            Empowering the next generation of enterprises with AI and Computer Vision.
          </p>
        </div>
        <div className="foot__col">
          <p>Contact</p>
          <a href="mailto:info@alpha-devs.cloud">info@alpha-devs.cloud</a>
          <a href="tel:+447882512086">+44 7882512086</a>
          <span>London, United Kingdom</span>
        </div>
        <div className="foot__col">
          <p>Follow</p>
          <a href="https://www.upwork.com/freelancers/~015bb35b01027c8cb7" target="_blank" rel="noreferrer">Upwork</a>
          <a href="https://www.linkedin.com/company/106025983" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link href="/contact?type=booking">Book a Call</Link>
        </div>
      </div>
      <p className="foot__copy">&copy; 2026 Alpha Devs. All rights reserved.</p>
    </footer>
  );
}
