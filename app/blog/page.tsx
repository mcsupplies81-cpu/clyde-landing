import Link from "next/link";

import { Layout, PageHero } from "@/components/marketing";

const posts = [
  {
    slug: "inbox-chaos-freight-brokers",
    title: "Why freight broker inboxes are impossible to manage (and what to do about it)",
    date: "May 20, 2025",
    readTime: "6 min read",
    excerpt:
      "The shared inbox was never designed for freight. Here's how brokers survive it — and how the best teams are leaving it behind.",
  },
  {
    slug: "pod-automation-guide",
    title: "The complete guide to automating POD collection for 3PLs",
    date: "May 14, 2025",
    readTime: "8 min read",
    excerpt:
      "Proof of delivery delays are the most common source of invoice disputes in freight. Here's how to automate the chase.",
  },
  {
    slug: "tms-email-gap",
    title: "The gap between your TMS and your inbox is costing you money",
    date: "May 8, 2025",
    readTime: "5 min read",
    excerpt:
      "Your TMS tracks loads. Your inbox manages relationships. Nothing connects them — and that gap is where freight ops teams lose hours every day.",
  },
] as const;

export default function BlogPage() {
  return (
    <Layout>
      <PageHero
        title="Freight operations, demystified."
        copy="Guides, tactics, and insights for brokers, 3PLs, and freight ops teams."
      />

      <section className="section light">
        <div className="container">
          <div className="blogGrid">
            {posts.map((post) => (
              <article key={post.slug} className="blogCard">
                <div className="blogMeta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="blogTitle">{post.title}</h2>
                <p className="blogExcerpt">{post.excerpt}</p>
                <Link className="blogReadMore" href={`/blog/${post.slug}`}>
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
