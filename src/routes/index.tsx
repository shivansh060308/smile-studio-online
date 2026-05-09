import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Smile, Baby, Wrench, Award, Heart, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import drBimal from "@/assets/dr-bimal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Bimal's Smile Studio — Gentle, World-Class Dentistry" },
      { name: "description", content: "Cosmetic, pediatric, orthodontic and implant dentistry led by Dr. Bimal D. Singh — 28+ years of trusted clinical care." },
    ],
  }),
  component: Home,
});

const stats = [
  { n: "28+", l: "Years of experience" },
  { n: "10,000+", l: "Smiling clients" },
  { n: "15", l: "Master certifications" },
  { n: "25", l: "Caring staff" },
];

const services = [
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Veneers, whitening and smile design tailored to you." },
  { icon: Smile, title: "Smile Makeover", desc: "A comprehensive plan blending art and science for your ideal smile." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Friendly, fear-free care for the youngest members of your family." },
  { icon: Wrench, title: "Orthodontics", desc: "Modern braces and clear aligners that quietly transform smiles." },
  { icon: ShieldCheck, title: "Root Canal Treatment", desc: "Painless, single-sitting endodontic care to save your natural teeth." },
  { icon: Heart, title: "Implants & Restorations", desc: "Crowns, bridges and implants that restore form and function." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-tight grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-16 lg:pt-24 pb-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-secondary-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Now welcoming new patients
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-balance">
              Dentistry that feels <em className="text-accent not-italic font-semibold">refreshingly</em> human.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              At Dr. Bimal's Smile Studio, every visit is unhurried, gentle and built around you — from your first cleaning to a complete smile transformation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition">
                Book an appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:bg-secondary transition">
                Explore services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] -rotate-2" aria-hidden />
            <img src={heroImg} alt="Modern dental clinic interior" width={1600} height={1024}
              className="relative rounded-[2rem] w-full h-[500px] object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 max-w-[220px] hidden md:block">
              <div className="flex items-center gap-2 text-accent"><Award className="w-5 h-5" /><span className="text-xs font-semibold uppercase tracking-wider">Trusted</span></div>
              <p className="mt-2 text-sm font-medium">Rated among the most loved dental clinics in the region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-tight py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-semibold text-accent">{s.n}</div>
              <div className="mt-2 text-sm text-primary-foreground/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTOR */}
      <section className="container-tight py-24 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-3 bg-secondary rounded-3xl rotate-3" aria-hidden />
            <img src={drBimal} alt="Dr. Bimal D. Singh" width={800} height={1024} loading="lazy"
              className="relative rounded-3xl w-full max-w-sm object-cover shadow-xl" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Meet your dentist</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">Dr. Bimal D. Singh</h2>
          <p className="mt-2 text-muted-foreground text-sm uppercase tracking-wider">M.D.S (PGI) · Pediatric & Preventive Dentistry · Cosmetic Dentistry, NYU New York</p>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Dr. Bimal completed his post-graduation and senior residency at PGIMER, Chandigarh in Pediatric and Preventive Dentistry, followed by an advanced course in Cosmetic Dentistry and Smile Designing from New York University.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            With special interest in pediatric care, cosmetic dentistry and implantology, he has authored research in international journals and mentored students at undergraduate and post-graduate levels.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all">
            Read full bio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream">
        <div className="container-tight py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we do</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium max-w-xl">A complete range of dental care, under one roof.</h2>
            </div>
            <Link to="/services" className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card rounded-2xl p-7 border border-border hover:border-accent/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary text-primary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-tight py-24">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent text-center">Happy clients</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium text-center max-w-2xl mx-auto text-balance">
          Kind words from people we've cared for.
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { q: "Dr. Bimal is a perfectionist who makes you feel more like a relative in his chair than just another patient. He explains exactly what you need.", n: "Surjit Singh" },
            { q: "Extremely professional, hygienic and state-of-the-art. My root canal was quick and painless — done in a single sitting. Sincerely recommend.", n: "Manpreet Singh" },
            { q: "Been bringing my distressed teeth here for 8 years. Most relaxing dental space I've ever seen, and the team is warm and confident.", n: "Gaurav Mehta" },
          ].map((t) => (
            <figure key={t.n} className="bg-card rounded-2xl p-7 border border-border">
              <div className="text-accent font-display text-5xl leading-none">"</div>
              <blockquote className="mt-2 text-foreground/80 leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 text-sm font-semibold">{t.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-balance">Ready for a smile you'll love?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">Book your consultation today — we'll take it from there, gently.</p>
          <a href="tel:+919815127575" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold mt-8 hover:opacity-90 transition">
            Call 98151 27575 <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
