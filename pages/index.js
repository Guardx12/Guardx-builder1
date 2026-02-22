
export default function Home() {
  return (
    <div style={{fontFamily:'Inter, Arial',margin:0,background:'#0b0f14',color:'#fff'}}>

      {/* HERO */}
      <section style={{position:'relative',height:'90vh',overflow:'hidden'}}>
        <img src="/images/hero.webp" style={{width:'100%',height:'100%',objectFit:'cover',filter:'brightness(70%)'}}/>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',textAlign:'center'}}>
          <h1 style={{fontSize:'60px',marginBottom:'20px'}}>Apex Build Co.</h1>
          <p style={{fontSize:'22px',maxWidth:'700px',margin:'0 auto 30px'}}>
            Elite residential building & renovation delivered with precision craftsmanship and structured project management.
          </p>
          <button style={{padding:'15px 30px',fontSize:'16px',background:'#c9a227',border:'none',cursor:'pointer'}}>Request a Quote</button>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{padding:'100px 20px',background:'#11161d',textAlign:'center'}}>
        <h2 style={{fontSize:'36px'}}>Our Services</h2>
        <div style={{display:'grid',gap:'50px',maxWidth:'1100px',margin:'60px auto',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))'}}>
          <div>
            <h3>Luxury Extensions</h3>
            <p>Structural rear & side extensions finished to showroom standard.</p>
          </div>
          <div>
            <h3>Full Renovations</h3>
            <p>Complete refurbishments managed with precision timelines.</p>
          </div>
          <div>
            <h3>Project Management</h3>
            <p>Weekly reporting, fixed scopes and professional oversight.</p>
          </div>
        </div>
      </section>

      {/* IMAGE FEATURE */}
      <section style={{display:'grid',gridTemplateColumns:'1fr 1fr',minHeight:'500px'}}>
        <img src="/images/brick.webp" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        <div style={{padding:'80px',background:'#0f141b'}}>
          <h2 style={{fontSize:'32px'}}>Detail-Driven Craftsmanship</h2>
          <p style={{marginTop:'20px',opacity:0.8,lineHeight:'1.6'}}>
            From structural brickwork to interior finishes, every element is built with accuracy and pride.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:'100px 20px',background:'#11161d'}}>
        <h2 style={{textAlign:'center',fontSize:'36px'}}>Client Testimonials</h2>
        <div style={{maxWidth:'900px',margin:'60px auto',display:'grid',gap:'30px'}}>
          <div style={{background:'#0f141b',padding:'40px',borderLeft:'4px solid #c9a227'}}>
            “Exceptional craftsmanship and flawless execution.” — Sarah W.
          </div>
          <div style={{background:'#0f141b',padding:'40px',borderLeft:'4px solid #c9a227'}}>
            “Professional, reliable and transparent from start to finish.” — James T.
          </div>
          <div style={{background:'#0f141b',padding:'40px',borderLeft:'4px solid #c9a227'}}>
            “The finish exceeded our expectations in every way.” — Amelia R.
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section style={{padding:'60px 20px',background:'#0b0f14',textAlign:'center'}}>
        <h3>Accreditations (Demo)</h3>
        <p style={{opacity:0.6}}>TrustMark • FMB • CSCS • CHAS • NHBC</p>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'60px 20px',background:'#000',fontSize:'14px',opacity:0.6,textAlign:'center'}}>
        <p>This is a GuardX showroom example website (demo). No customer data is collected.</p>
      </footer>

    </div>
  )
}
