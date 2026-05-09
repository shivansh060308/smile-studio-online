import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Smile, Baby, Wrench, ShieldCheck, Heart, Scissors, Droplet } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dr. Bimal's Smile Studio" },
      { name: "description", content: "Root canals, restorations, implants, orthodontics, smile makeovers, pediatric dentistry, whitening and more." },
      { property: "og:title", content: "Our Dental Services" },
      { property: "og:description", content: "Comprehensive dental care from a multi-disciplinary team." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: ShieldCheck,
    title: "Root Canal Treatment",
    desc: "Also called endodontic treatment, this procedure saves a damaged or infected tooth by removing the inflamed pulp and sealing the canal with a biocompatible material to prevent further infection.",
  },
  {
    icon: Heart,
    title: "Restorative Dentistry",
    desc: "Repair and restore damaged or missing teeth through fillings, crowns, bridges, dentures and dental implants — ideal after decay, trauma or long-standing dental issues.",
  },
  {
    icon: Scissors,
    title: "Extractions",
    desc: "The careful removal of a tooth when needed — for advanced decay, impacted wisdom teeth, orthodontic preparation or periodontal disease — performed with comfort and precision.",
  },
  {
    icon: Sparkles,
    title: "Smile Makeover",
    desc: "A bespoke treatment plan built around your appearance goals, often combining whitening, bonding, veneers and orthodontics to deliver a balanced, natural-looking smile.",
  },
  {
    icon: Wrench,
    title: "Orthodontics",
    desc: "Correct the alignment of teeth and jaws using braces, clear aligners and retainers — improving function, appearance and long-term oral health through gentle, gradual movement.",
  },
  {
    icon: Droplet,
    title: "Teeth Whitening",
    desc: "A safe cosmetic procedure that lifts staining and discoloration using a professional whitening gel, activated to break down pigments for a brighter, fresher smile.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    desc: "Fear-free, child-friendly dentistry from a PGI-trained pediatric specialist — preventive care, sealants, fluoride and gentle treatment for little smiles.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    desc: "Veneers, bonding, contouring and smile design grounded in NYU-trained aesthetic principles to create harmonious, photogenic results.",
  },
];

function Services() {
  return (
    <>
      <section className="container-tight pt-20 pb-12">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our services</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-medium max-w-3xl text-balance">
          Thoughtful dental care for every stage of life.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          From a routine cleaning to a full smile transformation — here's how we can help you feel at home in your own smile.
        </p>
      </section>

      <section className="container-tight pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group bg-card rounded-2xl border border-border p-8 hover:border-accent/50 hover:shadow-lg transition-all">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-secondary text-primary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <s.icon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-tight pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-medium">Not sure what you need?</h2>
            <p className="mt-2 text-primary-foreground/70 max-w-md">Book a consultation — we'll examine, explain options and recommend only what's right for you.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
