import LogoPill from "@/components/LogoPill";
import ReviewCard from "@/components/ReviewCard";
import StarRow from "@/components/StarRow";

const reviews = [
  {
    name: "Sarah W.",
    role: "Extension — West Sussex",
    quote: "Clear quote, clean site, and the finish is genuinely premium. Weekly updates made the whole process calm.",
  },
  {
    name: "James T.",
    role: "Renovation — Brighton",
    quote: "Top workmanship. They solved issues fast and kept everything tidy. Would recommend without hesitation.",
  },
  {
    name: "Amelia R.",
    role: "Kitchen refurb — Horsham",
    quote: "Proper professionals. Transparent pricing, on-time, and a snag-free handover.",
  },
];

const faqs = [
  {
    q: "Do you provide fixed quotes?",
    a: "Yes. We scope properly and provide a clear fixed-price quote with inclusions. Variations are agreed in writing (demo copy).",
  },
  {
    q: "Are you insured and accredited?",
    a: "This demo lists typical UK accreditations. A real business would provide certificates on request.",
  },
  {
    q: "How do you keep projects tidy?",
    a: "Floor protection, daily clean-downs, and waste management. We run your site like a showroom (demo copy).",
  },
  {
    q: "Do you handle building control and planning?",
    a: "We can coordinate drawings, structural calcs, and inspections end-to-end (demo copy).",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top utility bar */}
      <div className="border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-xs sm:px-6 lg:px-8">
          <a href="#" className="text-zinc-300 hover:text-white no-underline">← Back to examples</a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-zinc-400">Call:</span>
            <a className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-100 no-underline hover:bg-white/10" href="tel:+447000000000">
              07000 000000
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 font-semibold">
              AB
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Apex Build Co.</div>
              <div className="text-xs text-zinc-400">Design • Build • Renovate</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-zinc-200 hover:text-white no-underline" href="#services">Services</a>
            <a className="text-zinc-200 hover:text-white no-underline" href="#work">Our work</a>
            <a className="text-zinc-200 hover:text-white no-underline" href="#areas">Areas</a>
            <a className="text-zinc-200 hover:text-white no-underline" href="#reviews">Reviews</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#quote" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm no-underline hover:bg-white/10">
              Get a quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(245,158,11,0.18),transparent_60%),radial-gradient(50%_40%_at_85%_15%,rgba(59,130,246,0.14),transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Fully insured • Workmanship guaranteed • Fixed quotes
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              Premium building & renovations — tidy, transparent, and guaranteed.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Agency-grade service for homeowners: clear scopes, predictable timelines, clean sites, and a finish that looks intentional.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="no-underline">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-soft hover:bg-amber-200 sm:w-auto">
                  Get a fixed quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
              <a href="#services" className="no-underline">
                <span className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 sm:w-auto">
                  View services
                </span>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl">
              {[
                { k: "4.9", v: "Average rating (demo)" },
                { k: "250+", v: "Projects delivered (demo)" },
                { k: "12+", v: "Years trading (demo)" },
                { k: "Fast", v: "Response times" },
              ].map((s) => (
                <div key={s.v} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">{s.k}</div>
                  <div className="mt-1 text-xs text-zinc-400">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <LogoPill title="Google" subtitle="4.9/5 (demo)" />
              <LogoPill title="Checkatrade" subtitle="Vetted & approved (demo)" />
              <LogoPill title="Trustpilot" subtitle="Excellent (demo)" />
              <LogoPill title="Facebook" subtitle="Highly rated (demo)" />
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Demo website: buttons are placeholders. No forms collect data.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-soft">
              <div className="relative overflow-hidden rounded-[1.9rem]">
                <img src="/images/hero.webp" alt="Modern home project" className="h-[460px] w-full object-cover sm:h-[560px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur px-4 py-3">
                    <div className="text-sm font-medium">Same-week site visit</div>
                    <div className="text-xs text-zinc-400">Typical lead times (demo)</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur px-4 py-3 flex items-center gap-2">
                    <StarRow />
                    <div className="text-sm font-medium">4.9 average</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-10 h-40 w-40 rounded-full bg-blue-500/15 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Quote CTA strip */}
      <section id="quote" className="border-y border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <div>
              <div className="text-xs text-zinc-400">Free, no-pressure quote</div>
              <h2 className="mt-2 text-2xl font-semibold">Tell us what you need — we’ll call back quickly.</h2>
              <p className="mt-3 text-sm text-zinc-300">No forms on this demo. Real sites would use privacy-friendly forms or call scheduling.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-medium">Extensions</div>
              <p className="mt-2 text-sm text-zinc-400">Rear/side extensions, structural openings, steels, and finishes.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-medium">Renovations</div>
              <p className="mt-2 text-sm text-zinc-400">Full refurbishments, kitchens, bathrooms, and internal reconfigurations.</p>
            </div>
            <div className="lg:col-span-3 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+447000000000" className="no-underline">
                <span className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-200 sm:w-auto">
                  Call now
                </span>
              </a>
              <a href="#pricing" className="no-underline">
                <span className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 sm:w-auto">
                  Get pricing
                </span>
              </a>
            </div>
            <p className="text-xs text-zinc-400 lg:col-span-3">Demo website: buttons are placeholders. No forms collect data.</p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs text-zinc-400">Trusted, qualified & insured</div>
              <h2 className="mt-2 text-2xl font-semibold">Accreditations & assurances</h2>
              <p className="mt-2 text-sm text-zinc-300 max-w-2xl">
                These are realistic examples for a demo build company site. Replace with verified memberships and documents for real client work.
              </p>
            </div>
            <div className="text-xs text-zinc-400">Badges (demo)</div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["TrustMark", "FMB", "CSCS", "CHAS", "Public Liability", "Employers’ Liability", "Workmanship Guarantee", "Building Control-ready"].map((x) => (
              <div key={x} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-zinc-950/40 px-4 py-3">
                <div className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-sm text-zinc-200">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-white/10 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Services
            </div>
            <h2 className="mt-5 text-3xl font-semibold">Everything you need — done properly.</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              High-quality building work with tidy finishes and clear communication from start to finish.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Extensions & structural work", d: "Rear/side extensions, steels, knock-throughs, foundations, and making good." },
              { t: "Full refurbishments", d: "End-to-end renovation: electrics, plumbing, plaster, paint, joinery, flooring." },
              { t: "Kitchens & bathrooms", d: "High-spec installations with coordinated trades and crisp detailing." },
              { t: "Brickwork & masonry", d: "Repairs, re-pointing, feature walls, and premium exterior finishes." },
              { t: "Carpentry & bespoke", d: "Built-ins, storage, stair details, doors, skirting, and custom trim work." },
              { t: "Project management", d: "Weekly updates, clean sites, fixed scopes and accountable delivery." },
            ].map((s) => (
              <div key={s.t} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                <div className="text-lg font-medium">{s.t}</div>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{s.d}</p>
                <div className="mt-4 text-xs text-zinc-400">Learn more → (demo)</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img src="/images/brick.webp" alt="Bricklaying detail" className="h-80 w-full object-cover" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-xs text-zinc-400">Why homeowners choose us (demo)</div>
              <h3 className="mt-2 text-2xl font-semibold">Detail-led workmanship with a tidy process.</h3>
              <ul className="mt-5 grid gap-3 text-sm text-zinc-200">
                {[
                  "Protective coverings & daily clean-downs",
                  "Upfront pricing and clear milestones",
                  "Parts & labour warranty on work completed",
                  "One point of contact throughout",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-300" />
                    <span className="text-zinc-300">{x}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex gap-3">
                <a href="#work" className="no-underline">
                  <span className="inline-flex items-center justify-center rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-200">
                    View work
                  </span>
                </a>
                <a href="tel:+447000000000" className="no-underline">
                  <span className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                    Call now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Our work
          </div>
          <h2 className="mt-5 text-3xl font-semibold">Clean builds. Neat finishes.</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            A few examples of the type of imagery and presentation you’d expect on an agency-level homepage. Images are for demo purposes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { src: "/images/project-site.avif", cap: "Residential site works (demo)" },
            { src: "/images/project-office.avif", cap: "Modern fit-out / build (demo)" },
            { src: "/images/project-steel.avif", cap: "Steel & structural works (demo)" },
          ].map((i) => (
            <div key={i.src} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img src={i.src} alt={i.cap} className="h-64 w-full object-cover" />
              <div className="p-4 text-xs text-zinc-400">{i.cap}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-xs text-zinc-500">Images provided for demo purposes.</div>
      </section>

      {/* Areas */}
      <section id="areas" className="border-y border-white/10 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Areas served
            </div>
            <h2 className="mt-5 text-3xl font-semibold">Local builders across Sussex (demo)</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Based locally with quick response times for site visits and quotations.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Worthing", "Brighton", "Shoreham-by-Sea", "Horsham", "Chichester", "Haywards Heath"].map((x) => (
              <div key={x} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200">
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Reviews
            </div>
            <h2 className="mt-5 text-3xl font-semibold">What customers say</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Demo review presentation with star ratings, customer cards, and platform badges — like your plumbing example.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium">5.0 (demo rating)</div>
            <div className="mt-2"><StarRow /></div>
            <div className="mt-2 text-xs text-zinc-400">Based on 138 reviews across platforms (demo)</div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-medium">Ready to price your project?</div>
              <p className="mt-1 text-sm text-zinc-400">Call now for a quick chat — or get a fixed quote (demo CTA).</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:+447000000000" className="no-underline">
                <span className="inline-flex items-center justify-center rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-200">
                  Call 07000 000000
                </span>
              </a>
              <a href="#quote" className="no-underline">
                <span className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                  Get a quote
                </span>
              </a>
            </div>
          </div>
          <div className="mt-3 text-xs text-zinc-500">Demo site — buttons are placeholders.</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="pricing" className="border-t border-white/10 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              FAQ
            </div>
            <h2 className="mt-5 text-3xl font-semibold">Answers up front</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              The agency feel comes from clarity: scope, timeline, standards, and how you manage the work.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-medium">{f.q}</div>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div>
              <div className="font-semibold">Apex Build Co.</div>
              <p className="mt-3 max-w-md text-sm text-zinc-400 leading-relaxed">
                Premium building & renovation. Clean workmanship, clear communication, dependable results. (Demo brand copy.)
              </p>
              <p className="mt-4 text-xs text-zinc-500">© {new Date().getFullYear()} Apex Build Co.</p>
            </div>

            <div className="text-sm text-zinc-400 max-w-xl">
              <p>
                This is a <span className="text-zinc-200">GuardX showroom example website (demo)</span>. No customer data is collected.
                Any phone numbers, addresses, reviews, accreditations, and testimonials shown are illustrative only.
              </p>
              <p className="mt-3 text-xs text-zinc-500">Built as a modern, performance-first demo suitable for Vercel deployment.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
