
export default function Home() {
  return (
    <main>
      <section style={{padding:'80px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:'48px',marginBottom:'20px'}}>
          Apex Build Co.
        </h1>
        <p style={{fontSize:'20px',opacity:0.8,maxWidth:'700px',margin:'0 auto'}}>
          Premium residential building & renovation delivered with precision, clarity and elite craftsmanship.
        </p>
      </section>

      <section style={{padding:'60px 20px',background:'#111'}}>
        <h2 style={{textAlign:'center',fontSize:'32px'}}>Services</h2>
        <div style={{display:'grid',gap:'30px',maxWidth:'1000px',margin:'40px auto',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))'}}>
          <div>
            <h3>Extensions</h3>
            <p>Design-build home extensions with structural precision.</p>
          </div>
          <div>
            <h3>Renovations</h3>
            <p>Full refurbishments from strip-out to showroom finish.</p>
          </div>
          <div>
            <h3>Project Management</h3>
            <p>Clear timelines, fixed scopes and professional oversight.</p>
          </div>
        </div>
      </section>

      <section style={{padding:'60px 20px'}}>
        <h2 style={{textAlign:'center',fontSize:'32px'}}>Testimonials</h2>
        <div style={{maxWidth:'900px',margin:'40px auto',display:'grid',gap:'20px'}}>
          <div style={{background:'#111',padding:'20px',borderRadius:'12px'}}>
            "Exceptional craftsmanship and flawless execution." — Sarah W.
          </div>
          <div style={{background:'#111',padding:'20px',borderRadius:'12px'}}>
            "Professional, reliable and transparent from start to finish." — James T.
          </div>
        </div>
      </section>

      <footer style={{padding:'40px 20px',background:'#000',fontSize:'14px',opacity:0.7}}>
        <p>
          This is a GuardX showroom example website (demo). No customer data is collected.
        </p>
      </footer>
    </main>
  );
}
