import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Bimal's Smile Studio" },
      { name: "description", content: "Book an appointment or visit Dr. Bimal's Smile Studio. Call 98151 27575." },
      { property: "og:title", content: "Contact Dr. Bimal's Smile Studio" },
      { property: "og:description", content: "Get in touch to book your appointment." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="container-tight pt-20 pb-12">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact us</div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-medium max-w-3xl text-balance">
          Let's plan your next visit.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Reach out by phone or send us a message — we'll get back within the day.
        </p>
      </section>

      <section className="container-tight pb-24 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <InfoCard icon={MapPin} title="Our address" lines={["[Clinic Address]"]} />
          <InfoCard icon={Phone} title="Call us" lines={["+91 98151 27575"]} href="tel:+919815127575" />
          <InfoCard icon={Clock} title="Opening hours" lines={["Mon – Fri: 10:00 AM – 2:00 PM", "5:00 PM – 7:00 PM", "*With prior appointment*"]} />
          <InfoCard icon={Mail} title="Email" lines={["appointments@bimalsmilestudio.com"]} />
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card rounded-3xl border border-border p-8 md:p-10 space-y-5"
          >
            <h2 className="font-display text-3xl font-semibold">Book an appointment</h2>
            <p className="text-sm text-muted-foreground">Share a few details and we'll confirm a time that suits you.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Preferred date" name="date" type="date" />
            <div>
              <label className="block text-sm font-medium mb-1.5">How can we help?</label>
              <textarea name="message" rows={4} required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-primary/90 transition">
              {sent ? "Thank you — we'll be in touch!" : "Request appointment"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input type={type} name={name} required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const Wrapper: any = href ? "a" : "div";
  return (
    <Wrapper href={href} className="block rounded-2xl border border-border p-6 bg-card hover:border-accent/50 transition">
      <div className="w-11 h-11 rounded-lg bg-secondary text-primary grid place-items-center"><Icon className="w-5 h-5" /></div>
      <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
      <div className="mt-1 text-sm text-muted-foreground space-y-1">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </Wrapper>
  );
}
