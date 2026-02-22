
export default function Home() {
  return (
    <div>

      <section className="hero">
        <img src="/images/hero.webp" alt="Architectural build" />
        <div className="minimal-header">
          <div>Apex Build Co.</div>
          <div>Menu</div>
        </div>
        <div className="hero-overlay">
          <h1 style={{fontSize:'64px',fontWeight:300,marginBottom:'20px'}}>
            Designed. Built. Enduring.
          </h1>
          <p style={{maxWidth:'700px',fontSize:'20px',opacity:0.85}}>
            A design-led construction studio delivering premium residential builds and architectural renovations.
          </p>
        </div>
      </section>

      <section className="section dark-section">
        <h2 style={{fontSize:'36px',fontWeight:400}}>Selected Projects</h2>
        <div className="projects">
          <div className="project-card">
            <img src="/images/hero.webp" alt="Project" />
            <h3 style={{marginTop:'20px'}}>Contemporary Extension</h3>
            <p style={{opacity:0.6}}>Brighton — Residential</p>
          </div>
          <div className="project-card">
            <img src="/images/hero.webp" alt="Project" />
            <h3 style={{marginTop:'20px'}}>Architectural Renovation</h3>
            <p style={{opacity:0.6}}>Horsham — Private Client</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="quote-block">
          “The finish is exceptional. Every detail considered, every stage professionally managed.”
          <div style={{marginTop:'20px',fontSize:'16px',opacity:0.6}}>— Client, West Sussex (Demo)</div>
        </div>
      </section>

      <section className="section dark-section">
        <h2 style={{fontSize:'36px',fontWeight:400}}>Studio Approach</h2>
        <p style={{maxWidth:'700px',marginTop:'30px',lineHeight:'1.6',opacity:0.8}}>
          We operate as a collaborative construction studio. Structured planning, disciplined site management,
          and meticulous finishing standards define every project. This demo layout intentionally avoids
          typical trade-site structures to showcase design range.
        </p>
      </section>

      <footer className="footer">
        <p>
          This is a GuardX showroom example website (demo). No customer data is collected.
          All projects, testimonials and details shown are illustrative only.
        </p>
      </footer>

    </div>
  )
}
