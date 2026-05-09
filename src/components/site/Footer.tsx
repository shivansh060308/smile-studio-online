import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-tight py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-semibold">Dr. Bimal's Smile Studio</div>
          <p className="mt-3 text-primary-foreground/70 max-w-md text-sm leading-relaxed">
            Where gentle care meets precision dentistry. Bringing 28+ years of clinical excellence to every smile.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3 uppercase tracking-wider text-accent">Visit</div>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>[Clinic Address]</span></li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><a href="tel:+919815127575">+91 98151 27575</a></li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" /><span>Mon–Sat · By appointment</span></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3 uppercase tracking-wider text-accent">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-tight py-6 text-xs text-primary-foreground/60 flex flex-wrap gap-4 justify-between">
          <span>© {new Date().getFullYear()} Dr. Bimal's Smile Studio. All rights reserved.</span>
          <span>Crafted with care for healthier smiles.</span>
        </div>
      </div>
    </footer>
  );
}
