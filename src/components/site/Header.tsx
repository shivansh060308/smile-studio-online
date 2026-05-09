import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-tight flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-semibold">B</div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold">Dr. Bimal's Smile Studio</div>
            <div className="text-xs text-muted-foreground tracking-wide uppercase">Cosmetic · Pediatric · Implants</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors data-[status=active]:text-primary data-[status=active]:font-semibold">
              {l.label}
            </Link>
          ))}
          <a href="tel:+919815127575" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition">
            <Phone className="w-4 h-4" /> 98151 27575
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-tight py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-base font-medium">
                {l.label}
              </Link>
            ))}
            <a href="tel:+919815127575" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium">
              <Phone className="w-4 h-4" /> Call 98151 27575
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
