import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";

export const FOOTER_LINKS = [
  { label: "About", href: "#home" },
  { label: "Blog", href: "#home" },
  { label: "Why Accredian", href: "#edge" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
] as const;
