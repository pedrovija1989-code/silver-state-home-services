'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AirVent, Flame, Siren, Waves, Wrench, Zap } from 'lucide-react';
const HouseScene = dynamic(() => import('./house-scene'), { ssr: false });

const services = [
  { icon:Wrench, name:'Plumbing', text:'Repairs, repipes, fixtures and complete plumbing care.', tag:'Most requested' },
  { icon:AirVent, name:'HVAC', text:'Cooling, heating, maintenance and energy-smart installations.' },
  { icon:Zap, name:'Electrical', text:'Safe repairs, panels, outlets and expert troubleshooting.' },
  { icon:Flame, name:'Water Heaters', text:'Reliable hot water repair, replacement and installation.' },
  { icon:Waves, name:'Drain Cleaning', text:'Fast, clean solutions for stubborn clogs and slow drains.' },
  { icon:Siren, name:'Emergency Service', text:'Urgent help when your home simply cannot wait.' },
];
const issues: Record<string,{service:string,detail:string}> = {
  'Leaking pipe':{service:'Plumbing Repair',detail:'A fast inspection can prevent water damage and costly repairs.'},
  'Clogged drain':{service:'Drain Cleaning',detail:'We clear the blockage and check the line for recurring problems.'},
  'No hot water':{service:'Water Heater Service',detail:'Our technicians diagnose traditional and tankless systems.'},
  'Low water pressure':{service:'Whole-Home Diagnosis',detail:'We trace pressure loss from fixtures to the main supply.'},
  'AC not cooling':{service:'HVAC Repair',detail:'Same-day cooling diagnostics for Las Vegas homes.'},
  'Electrical issue':{service:'Electrical Service',detail:'Licensed troubleshooting for safe, dependable power.'},
};

export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false); const [issue,setIssue]=useState('Leaking pipe');
  return <main>
    <section className="hero" id="home"><nav className="nav shell" aria-label="Main navigation"><a className="brand" href="#home" aria-label="Silver State Home Services home"><span className="brand-mark">S</span><span><b>SILVER STATE</b><small>HOME SERVICES</small></span></a><button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">☰</button><div className={`nav-links ${menuOpen?'open':''}`}><a href="#services">Services</a><a href="#why-us">Why Us</a><a href="#areas">Service Areas</a><a href="#reviews">Reviews</a></div><div className="nav-actions"><a className="phone" href="tel:+17025550147">(702) 555-0147</a><a className="button button-small" href="#book">Book Service</a></div></nav>
      <div className="hero-grid shell"><div className="hero-copy"><div className="eyebrow"><span/> LAS VEGAS&apos; TRUSTED HOME EXPERTS</div><h1>Your home runs better with the <em>right team.</em></h1><p>Professional plumbing, HVAC and electrical solutions from local technicians who treat your home like their own.</p><div className="hero-actions"><a className="button" href="#book">Book Service <span>→</span></a><a className="text-button" href="tel:+17025550147"><i>●</i> Call (702) 555-0147</a></div><div className="trust-row"><span>✓ Licensed &amp; Insured</span><span>✓ Same-Day Service</span><span>✓ Upfront Pricing</span></div></div><div className="scene-wrap"><HouseScene/><div className="scene-instruction"><span className="cursor-icon">↖</span><div><b>EXPLORE YOUR HOME</b><small>Move your cursor over the house</small></div></div></div></div><div className="hero-glow"/>
    </section>

    <section className="blueprint" id="services"><div className="pipe-line pipe-a"/><div className="pipe-line pipe-b"/><div className="shell section-head"><div><div className="eyebrow dark"><span/> COMPLETE HOME CARE</div><h2>Everything your home needs.<br/><em>One trusted team.</em></h2></div><p>From the pipes behind your walls to the air moving through every room, our local experts keep the systems you depend on working beautifully.</p></div><div className="services-grid shell">{services.map((s,i)=><article className="service-card" key={s.name}><span className="service-number">0{i+1}</span><span className="service-icon"><s.icon size={25} strokeWidth={1.7}/></span>{s.tag&&<small>{s.tag}</small>}<h3>{s.name}</h3><p>{s.text}</p><a href="#book">Explore service <b>→</b></a></article>)}</div></section>

    <section className="emergency"><div className="shell emergency-inner"><div className="emergency-mark">24<span>/7</span></div><div><div className="eyebrow"><span/> WHEN MINUTES MATTER</div><h2>Home emergency?<br/><em>We&apos;re ready.</em></h2><p>Water leak, AC failure or electrical concern? Our Las Vegas team is standing by to restore comfort and peace of mind.</p></div><a className="button light" href="tel:+17025550147">Call now <span>→</span></a></div></section>

    <section className="why" id="why-us"><div className="shell why-grid"><div className="fixture-art"><div className="faucet"><span/><i/><b/></div><div className="water-drop">●</div><div className="offer"><b>$49</b><span>Service call<br/><small>DEMO OFFER</small></span></div></div><div className="why-copy"><div className="eyebrow dark"><span/> THE SILVER STATE STANDARD</div><h2>Craftsmanship you can <em>feel.</em></h2><p className="lead">Straight answers. Respectful technicians. Work that&apos;s built to last.</p><div className="benefits"><div><b>01</b><span><strong>Upfront pricing</strong><small>Know the price before work begins.</small></span></div><div><b>02</b><span><strong>Local experts</strong><small>Technicians who know Las Vegas homes.</small></span></div><div><b>03</b><span><strong>Quality guaranteed</strong><small>We stand behind every repair.</small></span></div></div><a className="link-arrow" href="#book">Meet our team →</a></div></div></section>

    <section className="diagnostic"><div className="shell diagnostic-grid"><div><div className="eyebrow"><span/> START WITH THE SYMPTOM</div><h2>What&apos;s happening<br/>in your <em>home?</em></h2><p>Choose what you&apos;re experiencing. We&apos;ll point you toward the right expert.</p></div><div className="issue-panel"><div className="issue-buttons">{Object.keys(issues).map(x=><button key={x} onClick={()=>setIssue(x)} className={issue===x?'active':''}>{x}<span>→</span></button>)}</div><div className="diagnosis" aria-live="polite"><small>RECOMMENDED SERVICE</small><div className="pulse">⌁</div><h3>{issues[issue].service}</h3><p>{issues[issue].detail}</p><a className="button" href="#book">Schedule this service →</a></div></div></div></section>

    <section className="reviews" id="reviews"><div className="shell"><div className="review-summary"><div><span className="stars">★★★★★</span><b>4.9</b><small>AVERAGE DEMO RATING</small></div><h2>Trusted across the<br/><em>Las Vegas Valley.</em></h2></div><div className="review-grid">{[['“They explained everything, showed up when promised and left the workspace spotless.”','MARCUS T.','SUMMERLIN'],['“Our AC stopped during the hottest week of summer. Silver State had us cool again the same day.”','ELENA R.','HENDERSON'],['“The booking process was simple and the price matched the estimate. Exactly what you hope for.”','DAVID K.','LAS VEGAS']].map(r=><blockquote key={r[1]}><span>“</span><p>{r[0]}</p><footer><b>{r[1]}</b><small>{r[2]}</small></footer></blockquote>)}</div></div></section>

    <section className="areas" id="areas"><div className="shell areas-grid"><div><div className="eyebrow dark"><span/> PROUDLY LOCAL</div><h2>Serving the valley<br/>we call <em>home.</em></h2><p>Fast, dependable home service throughout Southern Nevada.</p></div><div className="area-list">{['Las Vegas','Henderson','Summerlin','North Las Vegas','Spring Valley','Enterprise'].map((a,i)=><span key={a}><small>0{i+1}</small>{a}</span>)}</div></div></section>

    <section className="book" id="book"><div className="shell book-grid"><div><div className="eyebrow"><span/> LET&apos;S GET IT FIXED</div><h2>Need help with<br/>your <em>home?</em></h2><p>Tell us how to reach you. This demo form shows the intended booking experience.</p><a className="book-phone" href="tel:+17025550147"><small>OR CALL ANYTIME</small>(702) 555-0147</a></div><form onSubmit={e=>e.preventDefault()}><label>Your name<input required placeholder="John Smith"/></label><label>Phone number<input required type="tel" placeholder="(702) 555-0000"/></label><label>How can we help?<select defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.name}>{s.name}</option>)}</select></label><button className="button" type="submit">Request service →</button><small>Demo form — no information is submitted.</small></form></div></section>
    <footer className="footer"><div className="shell"><a className="brand" href="#home"><span className="brand-mark">S</span><span><b>SILVER STATE</b><small>HOME SERVICES</small></span></a><p>Professional care for every system under your roof.</p><div className="footer-links"><a href="#services">Services</a><a href="#why-us">About</a><a href="#areas">Service Areas</a><a href="#reviews">Reviews</a></div><small>© 2026 Silver State Home Services. Portfolio demonstration website.</small></div></footer>
  </main>;
}
