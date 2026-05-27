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
    <header className="mainNavWrap">
      <nav className="container mainNav" aria-label="Primary">
        <Link href="/" className="brand">
          <span className="dogMark">◖◗</span>
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
          <Link href="/login" className="subtleLink">
            Log in
          </Link>
          <Link href="/demo" className="btn btnPrimary">
            Book a demo
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="stack-sm">
          <div className="brand">
            <span className="dogMark">◖◗</span>
            <span>CLYDE</span>
          </div>
          <p className="muted-light">Less inbox. More freight.</p>
          <p className="small muted-light">Built by logistics teams, for logistics teams.</p>
        </div>
        <div className="footerLinks">
          {[...nav, ["Demo", "/demo"], ["Login", "/login"]].map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function CinematicHero({ children }: { children: ReactNode }) {
  return <section className="hero">{children}</section>;
}

export function PageHero({ title, copy, cta = "Book a demo" }: { title: string; copy: string; cta?: string }) {
  return (
    <CinematicHero>
      <div className="container heroInner pageHeroInner">
        <div className="stack">
          <p className="eyebrow">Less inbox. More freight.</p>
          <h1 className="h2 noMargin">{title}</h1>
          <p className="lead noMargin max68">{copy}</p>
          <div>
            <Link href="/demo" className="btn btnPrimary">
              {cta}
            </Link>
          </div>
        </div>
        <div className="uiMock">
          <div className="uiCol">Inbox</div>
          <div className="uiCol">Email + context</div>
          <div className="uiCol">Next action</div>
        </div>
      </div>
    </CinematicHero>
  );
}

export function SectionHeader({ title, copy }: { title: string; copy?: string }) {
  return (
    <div className="sectionHeader">
      <h2 className="h2 noMargin">{title}</h2>
      {copy ? <p className="lead muted max72">{copy}</p> : null}
    </div>
  );
}

export function Cards({ items }: { items: { title: string; copy: string; cta?: string; href?: string }[] }) {
  return (
    <div className="grid3">
      {items.map((item) => (
        <article key={item.title} className="card">
          <h3>{item.title}</h3>
          <p className="muted">{item.copy}</p>
          {item.cta && item.href ? (
            <Link href={item.href} className="inlineCta">
              {item.cta}
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function FinalCTA({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="section hero ctaBand">
      <div className="container stack">
        <p className="eyebrow">Less inbox. More freight.</p>
        <h2 className="h2 noMargin">{title}</h2>
        <p className="lead noMargin max72">{copy}</p>
        <div>
          <Link href="/demo" className="btn btnPrimary">
            Book a demo
          </Link>
        </div>
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
