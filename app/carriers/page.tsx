import { Cards, FinalCTA, Layout, PageHero, SectionHeader } from '@/components/marketing';

export default function Page() {
  return (
    <Layout>
      <PageHero
        title="Built for truckers by truckers."
        copy="Keep dispatch moving without drowning in broker emails, updates, and paperwork."
        cta="See carrier workflows"
      />

      <section className="section">
        <div className="container">
          <Cards
            items={[
              {
                title: 'Load offers',
                copy: 'Prioritize and respond to load offers faster without getting lost in thread volume.',
              },
              {
                title: 'Dispatch updates',
                copy: 'Keep broker communication clean, timely, and consistent for every driver.',
              },
              {
                title: 'POD submission',
                copy: 'Submit proof of delivery and required paperwork without manual back-and-forth.',
              },
            ]}
          />
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <SectionHeader title="Run dispatch without letting email run the operation." />
          <Cards
            items={[
              {
                title: 'Broker communication',
                copy: 'Maintain consistent response quality across all broker threads.',
              },
              {
                title: 'Appointment changes',
                copy: 'Catch and act on pickup and delivery updates before they become problems.',
              },
              {
                title: 'Detention and lumper receipts',
                copy: 'Track exceptions and file supporting documents for billing.',
              },
              {
                title: 'Driver updates',
                copy: 'Turn driver messages into clean, structured load status updates.',
              },
            ]}
          />
        </div>
      </section>

      <FinalCTA
        title="Keep dispatch moving."
        copy="Reduce inbox drag on carrier operations and keep your drivers moving."
      />
    </Layout>
  );
}
