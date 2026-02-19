import { Sparkles, Shield, Heart, Zap } from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-medium">
          <Sparkles size={16} />
          <span>Version 1.0.0</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-[var(--color-neutral-900)]">
          Jasmine Kindergarten
          <br />
          <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">
            Design System
          </span>
        </h1>
        <p className="text-xl text-[var(--color-neutral-600)] max-w-2xl mx-auto">
          A scalable, accessible design system crafted for early childhood education. 
          Built with playfulness, warmth, and trust at its core.
        </p>
      </div>

      {/* Brand Attributes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-[var(--color-neutral-200)] shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-600)] mb-4">
            <Sparkles size={24} />
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Playful</h3>
          <p className="text-sm text-[var(--color-neutral-600)]">
            Joyful colors and delightful interactions that spark curiosity and engagement.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[var(--color-neutral-200)] shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-secondary-100)] text-[var(--color-secondary-600)] mb-4">
            <Heart size={24} />
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Warm</h3>
          <p className="text-sm text-[var(--color-neutral-600)]">
            Approachable design that makes parents and children feel welcomed and comfortable.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[var(--color-neutral-200)] shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-100)] text-[var(--color-accent-600)] mb-4">
            <Shield size={24} />
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Trustworthy</h3>
          <p className="text-sm text-[var(--color-neutral-600)]">
            Professional, accessible, and secure design patterns that build confidence.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[var(--color-neutral-200)] shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-success-100)] text-[var(--color-success-600)] mb-4">
            <Zap size={24} />
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Minimal</h3>
          <p className="text-sm text-[var(--color-neutral-600)]">
            Clean, focused interfaces that prioritize clarity and ease of use.
          </p>
        </div>
      </div>

      {/* Target Audience */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border border-[var(--color-primary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">Target Audience</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-[var(--color-neutral-900)] mb-2">Demographics</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              First-time parents with children aged 2–5 years old in Indonesia
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-neutral-900)] mb-2">Income Level</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              Middle to high income families seeking quality early education
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-neutral-900)] mb-2">Values</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              Safety, professionalism, and joyful learning experiences
            </p>
          </div>
        </div>
      </div>

      {/* System Features */}
      <div>
        <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-6">What's Included</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-[var(--color-neutral-200)]">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Design Tokens</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">✓</span>
                <span>Comprehensive color system with light & dark mode</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">✓</span>
                <span>9-level typography scale with semantic sizing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">✓</span>
                <span>8px base grid spacing system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">✓</span>
                <span>Motion curves and duration guidelines</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[var(--color-neutral-200)]">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Components & Patterns</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">✓</span>
                <span>30+ production-ready components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">✓</span>
                <span>Complete state variations (hover, active, disabled, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">✓</span>
                <span>Responsive layout patterns and grid system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">✓</span>
                <span>WCAG AA accessibility compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="p-8 rounded-2xl bg-[var(--color-neutral-900)] text-white">
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <p className="text-[var(--color-neutral-300)] mb-6">
          Navigate through the sections above to explore colors, typography, spacing, components, and more. 
          Download the complete design tokens from the Tokens page.
        </p>
        <div className="flex flex-wrap gap-3">
          <a 
            href="/colors" 
            className="px-6 py-3 rounded-lg bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-medium transition-colors"
          >
            Explore Colors
          </a>
          <a 
            href="/components" 
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors backdrop-blur-sm border border-white/20"
          >
            View Components
          </a>
          <a 
            href="/tokens" 
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors backdrop-blur-sm border border-white/20"
          >
            Download Tokens
          </a>
          <a 
            href="/portfolio" 
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-secondary-500)] hover:shadow-lg text-white font-medium transition-all"
          >
            View Portfolio Example →
          </a>
        </div>
      </div>
    </div>
  );
}