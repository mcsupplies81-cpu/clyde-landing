import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCTA, Layout } from "@/components/marketing";

type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

const posts: Post[] = [
  {
    slug: "inbox-chaos-freight-brokers",
    title: "Why freight broker inboxes are impossible to manage (and what to do about it)",
    date: "May 20, 2025",
    readTime: "6 min read",
    excerpt:
      "The shared inbox was never designed for freight. Here's how brokers survive it — and how the best teams are leaving it behind.",
    body: [
      "Most broker inboxes become command centers by accident. A single thread can contain dispatch notes, detention disputes, revised delivery windows, and missing document follow-ups, all mixed together with no consistent structure.",
      "Because the inbox is organized by conversation instead of workflow, reps spend their day scanning subject lines for urgency. The result is predictable: priority updates are buried, handoffs are fragile, and teams rely on memory instead of process.",
      "The fastest broker teams introduce clear operating lanes for communication. They separate customer updates from carrier coordination, define who owns each exception type, and force every inbound message into a known next action.",
      "From there, they automate the repetitive middle: triage, categorization, and context matching. Instead of asking people to read everything, they ask systems to pre-sort what matters and route work to the right desk.",
      "That shift doesn't remove humans from freight operations. It gives them leverage. When reps can focus on decisions rather than inbox archaeology, service levels improve and margin leakage from missed details starts to shrink.",
    ],
  },
  {
    slug: "pod-automation-guide",
    title: "The complete guide to automating POD collection for 3PLs",
    date: "May 14, 2025",
    readTime: "8 min read",
    excerpt:
      "Proof of delivery delays are the most common source of invoice disputes in freight. Here's how to automate the chase.",
    body: [
      "POD collection usually breaks down at the exact moment a load should close. Drivers move on to the next run, dispatchers are overloaded, and customer billing teams are waiting on paperwork before they can release invoices.",
      "A strong automation strategy starts with clear trigger points. Every delivered load should immediately enter a document workflow with timed follow-ups, ownership rules, and escalation paths when nothing arrives.",
      "Next, teams need reliable document detection. PODs arrive as scans, phone photos, and forwarded attachments, so your process has to capture files across formats and associate each one with the right shipment context.",
      "Once a POD is found, validation matters as much as collection. Confirm legibility, delivery signatures, and key reference fields before marking a load complete, otherwise disputes simply move downstream into AR.",
      "The final step is closed-loop visibility. Ops, accounting, and customer teams should share the same status view so nobody chases the same document twice and invoicing can move the minute a verified POD lands.",
    ],
  },
  {
    slug: "tms-email-gap",
    title: "The gap between your TMS and your inbox is costing you money",
    date: "May 8, 2025",
    readTime: "5 min read",
    excerpt:
      "Your TMS tracks loads. Your inbox manages relationships. Nothing connects them — and that gap is where freight ops teams lose hours every day.",
    body: [
      "Most freight teams assume the TMS is the single source of truth, but real operational intent still lives in email. Accessorial approvals, ETA exceptions, and customer commitments often never make it back into system notes.",
      "That disconnect creates silent rework. Reps answer the same questions repeatedly, teams miss billable events, and managers can't see where execution risk is building until it shows up as margin compression.",
      "The highest-performing teams treat inbox activity as operational data, not just communication. They map threads to loads, extract key decisions, and ensure updates flow back into the systems where planning and billing happen.",
      "Bridging the gap also improves accountability. When every message has load context and owner visibility, handoffs become cleaner and exception handling speeds up across shifts and offices.",
      "The payoff compounds quickly: fewer missed details, faster invoicing, and more time for teams to focus on revenue-driving work instead of chasing context across disconnected tools.",
    ],
  },
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((entry) => entry.slug !== post.slug);

  return (
    <Layout>
      <section className="section hero">
        <div className="container stack">
          <p className="eyebrow">
            {post.date} · {post.readTime}
          </p>
          <h1 className="h2 noMargin max68">{post.title}</h1>
          <p className="lead noMargin max68">{post.excerpt}</p>
        </div>
      </section>

      <section className="section light">
        <div className="container postBody">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <h2 className="h2 noMargin">More from Clyde</h2>
          <div className="relatedPosts">
            {relatedPosts.map((item) => (
              <article className="blogCard" key={item.slug}>
                <div className="blogMeta">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="blogTitle">{item.title}</h3>
                <p className="blogExcerpt">{item.excerpt}</p>
                <Link className="blogReadMore" href={`/blog/${item.slug}`}>
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to turn inbox noise into freight workflows?"
        copy="See how Clyde helps your team triage messages, collect documents, and move faster without adding headcount."
      />
    </Layout>
  );
}
