import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  ["Product", "/product"],
  ["Brokers", "/brokers"],
  ["3PLs", "/three-pls"],
  ["Carriers", "/carriers"],
  ["Integrations", "/integrations"],
  ["Pricing", "/pricing"],
] as const;

export function MarketingHeader() {
  return (
    <header className="navWrap">
      <nav className="container navRow" aria-label="Primary">
        <Link href="/" className="brandMark">
          <span className="dog">◖◗</span>
          <span>CLYDE</span>
        </Link>
        <div className="navLinks">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="navCtas">
          <Link href="/login" className="navLogin">Log in</Link>
          <Link href="/demo" className="btn btnPrimary">Book a demo</Link>
        </div>
      </nav>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="footer">
      <div className="container footerRow">
        <div>
          <div className="brandMark">
            <span className="dog">◖◗</span>
            <span>CLYDE</span>
          </div>
          <p className="footerTag">Less inbox. More freight.</p>
          <p className="footerNote">Built by logistics teams, for logistics teams.</p>
        </div>
        <div className="footerLinks">
          {[...nav, ["Demo", "/demo"], ["Login", "/login"]].map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SectionHeader({ title, copy }: { title: string; copy?: string }) {
  return (
    <div className="sectionHeader">
      <h2 className="h2">{title}</h2>
      {copy ? <p className="lead muted narrow">{copy}</p> : null}
    </div>
  );
}

export function FinalCTA({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="section hero ctaShell">
      <div className="container stack">
        <p className="eyebrow">Less inbox. More freight.</p>
        <h2 className="h2">{title}</h2>
        <p className="lead narrow">{copy}</p>
        <div><Link href="/demo" className="btn btnPrimary">Book a demo</Link></div>
      </div>
    </section>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </>
  );
}
