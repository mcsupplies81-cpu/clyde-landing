import Link from 'next/link';
import { Cards, FinalCTA, Layout, SectionHeader } from '@/components/marketing';

export default function Home(){
  return <Layout>
    <section className='hero'>
      <div className='container heroInner'>
        <div className='stack'>
          <h1 className='h1' style={{margin:0}}>Less inbox.<br/>More freight.</h1>
          <p className='lead' style={{maxWidth:660,margin:0}}>Clyde automates freight email, paperwork, and load actions so brokers and 3PLs can spend less time checking email and more time moving freight.</p>
          <p className='lead' style={{margin:0}}>Built by logistics teams, for logistics teams.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}><Link href='/demo' className='btn btnPrimary'>Book a demo</Link><Link href='/product' className='btn btnSecondary'>See how it works</Link></div>
        </div>
        <div className='stack'>
          <div className='darkCard'><strong>POD received</strong><p>POD attached for load HFB-3429</p><span>Inbox · Needs Review</span></div>
          <div className='darkCard'><strong>Load matched — HFB-3429</strong><p>Seattle, WA → Denver, CO</p><span>92% match</span></div>
          <div className='darkCard'><strong>Draft reply generated</strong><p>Ready to review</p></div>
        </div>
      </div>
    </section>
    <section className='section'><div className='container'><SectionHeader title='Freight work still starts in email.' copy='Your team should not have to live there.'/><Cards items={[{title:'Paperwork gets buried.',copy:'Rate confirmations, PODs, BOLs, invoices, and carrier replies all land in the same inbox.'},{title:'Updates get missed.',copy:'Load context lives across email threads, TMS notes, spreadsheets, tracking links, and tribal knowledge.'},{title:'Brokers lose selling time.',copy:'Every hour spent chasing paperwork is an hour not spent quoting, covering, or growing the book.'}]}/></div></section>
    <section className='section light'><div className='container'><SectionHeader title='From freight email to completed load action.'/><Cards items={[{title:'Read',copy:'Clyde reads incoming freight emails, attachments, and threads.'},{title:'Match',copy:'Clyde matches messages to loads, documents, customers, carriers, and lanes.'},{title:'Act',copy:'Clyde drafts replies, files paperwork, and prepares the next step.'},{title:'Sync',copy:'Your team reviews and Clyde syncs approved actions into existing workflows and systems.'}]}/></div></section>
    <section className='section'><div className='container'><SectionHeader title='Built for the teams moving freight.'/><Cards items={[{title:'Brokers',copy:'Built for brokers by brokers. Less inbox checking. More quoting, covering, and selling.',cta:'Explore brokers',href:'/brokers'},{title:'3PLs',copy:'Modern email coordination for 3PL teams.',cta:'Explore 3PLs',href:'/three-pls'},{title:'Carriers',copy:'Built for truckers by truckers.',cta:'Explore carriers',href:'/carriers'}]}/></div></section>
    <section className='section light'><div className='container'><SectionHeader title='Works with the systems you already use.' copy='Clyde connects your inbox, load data, documents, tracking updates, and existing workflows without replacing your TMS.'/><div className='card'>Inbox → Load data → Documents → Tracking → TMS</div></div></section>
    <section className='section'><div className='container'><SectionHeader title='AI that shows its work.'/><Cards items={['Verified context','Human review','Confidence scoring','Audit trail'].map(t=>({title:t,copy:'Transparent automation with operator control.'}))}/></div></section>
    <FinalCTA title='Give your team their inbox back.' copy='See how Clyde turns freight email, paperwork, and load actions into a calmer operating system for brokers and 3PLs.'/>
  </Layout>
}
