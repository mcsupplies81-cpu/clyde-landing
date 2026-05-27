import Link from "next/link";
import { Layout } from "@/components/marketing";

export default function NotFound() {
  return (
    <Layout>
      <section className="errorPage">
        <div>
          <p className="errorCode">404</p>
          <h1 className="errorTitle">Page not found.</h1>
          <p className="errorCopy">The page you're looking for doesn't exist or has moved.</p>
          <div className="errorActions">
            <Link href="/" className="btn btnSecondary">
              ← Back to home
            </Link>
            <Link href="/demo" className="btn btnPrimary">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
