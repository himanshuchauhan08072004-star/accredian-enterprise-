import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/footer";
import { CONTACT_INFO } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-surface-border border-t bg-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-foreground/65 max-w-xs text-sm leading-relaxed">
              Enterprise learning solutions that cultivate high-performance teams through expert-led
              training.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="border-surface-border text-foreground/50 hover:border-brand-300 hover:text-brand-700 flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <p className="text-foreground text-sm font-bold">Accredian</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/65 hover:text-brand-700 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-foreground text-sm font-bold">Contact Us</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li className="text-foreground/65 flex items-start gap-2 text-sm">
                  <Mail size={16} className="text-brand-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-700">
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="text-foreground/65 flex items-start gap-2 text-sm">
                  <MapPin size={16} className="text-brand-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="max-w-[220px]">{CONTACT_INFO.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <Button href="#lead-form" size="md" className="hidden shrink-0 sm:inline-flex">
            Enquire Now
          </Button>
        </div>

        <div className="border-surface-border text-foreground/40 mt-12 border-t pt-6 text-center text-xs">
          © {new Date().getFullYear()} Accredian. A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved.
        </div>
      </Container>
    </footer>
  );
}
