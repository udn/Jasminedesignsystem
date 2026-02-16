import { CheckCircle, BookOpen, Shield, GraduationCap, Target, Sparkles, Users, Baby, Lightbulb, Rocket, ClipboardCheck, FileText, Wallet, MapPin, MessageCircle, CalendarCheck } from 'lucide-react';
import type { FeatureBlock, Language } from '@/data/copy/types';
import { t } from '@/data/copy/types';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Shield,
  GraduationCap,
  Target,
  Sparkles,
  Users,
  Baby,
  Lightbulb,
  Rocket,
  ClipboardCheck,
  FileText,
  Wallet,
  MapPin,
  MessageCircle,
  CalendarCheck,
};

interface FeatureSectionProps {
  features: FeatureBlock[];
  lang: Language;
}

export function FeatureSection({ features, lang }: FeatureSectionProps) {
  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon ? iconMap[feature.icon] : null;

          return (
            <div
              key={index}
              className="p-6 lg:p-8 rounded-2xl bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-shadow"
            >
              {IconComponent && (
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-600)] mb-5 mx-auto">
                  <IconComponent size={24} />
                </div>
              )}

              <h2 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3 break-words md:break-normal">
                {t(feature.headline, lang)}
              </h2>

              <p className="text-sm text-[var(--color-neutral-600)] mb-5 leading-relaxed break-words md:break-normal">
                {t(feature.description, lang)}
              </p>

              <ul className="space-y-3">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[var(--color-success-500)] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-[var(--color-neutral-700)] leading-relaxed break-words md:break-normal">
                      {t(bullet, lang)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
