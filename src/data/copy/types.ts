export interface BilingualText {
  id: string;
  en: string;
}

export interface HeroContent {
  headline: BilingualText;
  subheadline: BilingualText;
  cta: BilingualText;
  microcopy: BilingualText;
}

export interface FeatureBlock {
  headline: BilingualText;
  description: BilingualText;
  bullets: BilingualText[];
  icon?: string;
}

export interface Testimonial {
  quote: BilingualText;
  name: string;
  attribution: BilingualText;
  childAge?: string;
  avatarInitials: string;
}

export interface TrustSignal {
  label: BilingualText;
  type: 'stat' | 'credential' | 'guarantee' | 'support' | 'availability';
  icon?: string;
}

export interface FAQItem {
  question: BilingualText;
  answer: BilingualText;
}

export interface FooterContent {
  navigation: { label: BilingualText; href: string }[];
  brandStatement: BilingualText;
  legal: BilingualText;
}

export interface PageContent {
  hero: HeroContent;
  features: FeatureBlock[];
  testimonials: Testimonial[];
  trustSignals: TrustSignal[];
  faq: FAQItem[];
  footer: FooterContent;
}

export type Language = 'id' | 'en';

export function t(text: BilingualText, lang: Language): string {
  return text[lang];
}
