import { createFileRoute } from "@tanstack/react-router";
import drBimal from "@/assets/dr-bimal.jpg";
import { GraduationCap, Award, Globe2, BookOpen } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dr. Bimal's Smile Studio" },
      { name: "description", content: "Meet Dr. Bimal D. Singh, M.D.S (PGI) Pediatric & Preventive Dentistry, with advanced training from NYU New York." },
      { property: "og:title", content: "About Dr. Bimal D. Singh" },
      { property: "og:description", content: "28+ years of clinical excellence in cosmetic, pediatric and implant dentistry." },
    ],
  }),
  component: About,
});

const credentials = [
  { icon: GraduationCap, title: "M.D.S (PGI)", desc: "Pediatric & Preventive Dentistry, PGIMER Chandigarh" },
  { icon: Globe2, title: "NYU, New York", desc: "Advanced course in Cosmetic Dentistry & Smile Designing" },
  { icon: BookOpen, title: "Published author", desc: "National & international journals of repute" },
  { icon: Award, title: "Academic mentor", desc: "Undergraduate & post-graduate teaching experience" },
];

function About() {
  return (
    <>
      <section className="container-tight pt-20 pb-12">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About us</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-medium max-w-3xl text-balance">
          A practice built on craft, kindness and trust.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Dr. Bimal's Smile Studio is a modern dental practice where clinical precision meets a genuinely warm bedside manner. We take time to listen, explain, and design treatment around the person — not just the tooth.
        </p>
      </section>

      <section className="container-tight pb-20 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <img src={drBimal} alt="Dr. Bimal D. Singh" width={800} height={1024} loading="lazy"
            className="rounded-3xl w-full object-cover shadow-xl" />
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-display text-4xl font-medium">Dr. Bimal D. Singh</h2>
          <p className="mt-2 text-muted-foreground text-sm uppercase tracking-wider">M.D.S (PGI) · Consultant Cosmetic Dentistry (NYU)</p>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Dr. Bimal D. Singh did his post-graduation and further senior residency from PGIMER, Chandigarh in Pediatric and Preventive Dentistry — one of the most respected programmes in the country.
            </p>
            <p>
              He went on to complete an advanced course in Cosmetic Dentistry and Smile Designing from New York University, USA, integrating world-class aesthetic protocols into his daily practice.
            </p>
            <p>
              His core areas of interest are pediatric dentistry, cosmetic dentistry and dental implantology. He has presented papers at national and international conferences and published in peer-reviewed journals. Alongside clinical work, he has been actively involved in academics at both undergraduate and post-graduate levels.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {credentials.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border p-5 bg-card">
                <c.icon className="w-6 h-6 text-accent" />
                <div className="mt-3 font-semibold">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-tight py-20 grid md:grid-cols-3 gap-10">
          {[
            { t: "Gentle by design", d: "From the air-conditioned waiting lounge to single-sitting procedures, every detail is built to keep you comfortable." },
            { t: "Modern equipment", d: "Digital imaging, laser tools and sterilisation systems on par with international standards." },
            { t: "Honest treatment", d: "We recommend only what you actually need — and explain why, in plain language." },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="font-display text-2xl font-semibold">{b.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
