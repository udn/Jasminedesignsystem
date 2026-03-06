import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Colors() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colorPalettes = {
    primary: {
      name: 'Primary',
      description: 'Warm, approachable orange palette for main brand elements',
      usage: 'Primary buttons, links, brand accents, active states',
      colors: [
        { shade: '50', hex: '#fff8f0', cssVar: 'var(--color-primary-50)' },
        { shade: '100', hex: '#ffefd9', cssVar: 'var(--color-primary-100)' },
        { shade: '200', hex: '#ffddb3', cssVar: 'var(--color-primary-200)' },
        { shade: '300', hex: '#ffc88d', cssVar: 'var(--color-primary-300)' },
        { shade: '400', hex: '#ffb366', cssVar: 'var(--color-primary-400)' },
        { shade: '500', hex: '#ff9940', cssVar: 'var(--color-primary-500)' },
        { shade: '600', hex: '#ff7e1a', cssVar: 'var(--color-primary-600)' },
        { shade: '700', hex: '#e56500', cssVar: 'var(--color-primary-700)' },
        { shade: '800', hex: '#b34f00', cssVar: 'var(--color-primary-800)' },
        { shade: '900', hex: '#803900', cssVar: 'var(--color-primary-900)' },
      ],
    },
    secondary: {
      name: 'Secondary',
      description: 'Playful, joyful blue palette for supporting elements',
      usage: 'Secondary actions, informational elements, illustrations',
      colors: [
        { shade: '50', hex: '#f0f9ff', cssVar: 'var(--color-secondary-50)' },
        { shade: '100', hex: '#e0f2fe', cssVar: 'var(--color-secondary-100)' },
        { shade: '200', hex: '#bae6fd', cssVar: 'var(--color-secondary-200)' },
        { shade: '300', hex: '#7dd3fc', cssVar: 'var(--color-secondary-300)' },
        { shade: '400', hex: '#38bdf8', cssVar: 'var(--color-secondary-400)' },
        { shade: '500', hex: '#0ea5e9', cssVar: 'var(--color-secondary-500)' },
        { shade: '600', hex: '#0284c7', cssVar: 'var(--color-secondary-600)' },
        { shade: '700', hex: '#0369a1', cssVar: 'var(--color-secondary-700)' },
        { shade: '800', hex: '#075985', cssVar: 'var(--color-secondary-800)' },
        { shade: '900', hex: '#0c4a6e', cssVar: 'var(--color-secondary-900)' },
      ],
    },
    accent: {
      name: 'Accent',
      description: 'Warm pink palette for highlights and special moments',
      usage: 'Highlights, badges, special announcements, celebrations',
      colors: [
        { shade: '50', hex: '#fff1f7', cssVar: 'var(--color-accent-50)' },
        { shade: '100', hex: '#ffe4f0', cssVar: 'var(--color-accent-100)' },
        { shade: '200', hex: '#ffc9e1', cssVar: 'var(--color-accent-200)' },
        { shade: '300', hex: '#ffa3ce', cssVar: 'var(--color-accent-300)' },
        { shade: '400', hex: '#ff6bae', cssVar: 'var(--color-accent-400)' },
        { shade: '500', hex: '#ff3d94', cssVar: 'var(--color-accent-500)' },
        { shade: '600', hex: '#f01b75', cssVar: 'var(--color-accent-600)' },
        { shade: '700', hex: '#d10d5e', cssVar: 'var(--color-accent-700)' },
        { shade: '800', hex: '#a80d4d', cssVar: 'var(--color-accent-800)' },
        { shade: '900', hex: '#8d0f44', cssVar: 'var(--color-accent-900)' },
      ],
    },
    neutral: {
      name: 'Neutral',
      description: 'Neutral stone palette for text, backgrounds, and borders',
      usage: 'Text, backgrounds, borders, surfaces, disabled states',
      colors: [
        { shade: '50', hex: '#fafaf9', cssVar: 'var(--color-neutral-50)' },
        { shade: '100', hex: '#f5f5f4', cssVar: 'var(--color-neutral-100)' },
        { shade: '200', hex: '#e7e5e4', cssVar: 'var(--color-neutral-200)' },
        { shade: '300', hex: '#d6d3d1', cssVar: 'var(--color-neutral-300)' },
        { shade: '400', hex: '#a8a29e', cssVar: 'var(--color-neutral-400)' },
        { shade: '500', hex: '#78716c', cssVar: 'var(--color-neutral-500)' },
        { shade: '600', hex: '#57534e', cssVar: 'var(--color-neutral-600)' },
        { shade: '700', hex: '#44403c', cssVar: 'var(--color-neutral-700)' },
        { shade: '800', hex: '#292524', cssVar: 'var(--color-neutral-800)' },
        { shade: '900', hex: '#1c1917', cssVar: 'var(--color-neutral-900)' },
      ],
    },
  };

  const semanticColors = [
    {
      name: 'Success',
      description: 'Positive actions and success states',
      colors: [
        { shade: '50', hex: '#f0fdf4', cssVar: 'var(--color-success-50)' },
        { shade: '500', hex: '#22c55e', cssVar: 'var(--color-success-500)' },
        { shade: '700', hex: '#15803d', cssVar: 'var(--color-success-700)' },
      ],
    },
    {
      name: 'Warning',
      description: 'Warning messages and cautionary states',
      colors: [
        { shade: '50', hex: '#fffbeb', cssVar: 'var(--color-warning-50)' },
        { shade: '500', hex: '#f59e0b', cssVar: 'var(--color-warning-500)' },
        { shade: '700', hex: '#b45309', cssVar: 'var(--color-warning-700)' },
      ],
    },
    {
      name: 'Error',
      description: 'Error states and destructive actions',
      colors: [
        { shade: '50', hex: '#fef2f2', cssVar: 'var(--color-error-50)' },
        { shade: '500', hex: '#ef4444', cssVar: 'var(--color-error-500)' },
        { shade: '700', hex: '#b91c1c', cssVar: 'var(--color-error-700)' },
      ],
    },
    {
      name: 'Info',
      description: 'Informational messages and hints',
      colors: [
        { shade: '50', hex: '#eff6ff', cssVar: 'var(--color-info-50)' },
        { shade: '500', hex: '#3b82f6', cssVar: 'var(--color-info-500)' },
        { shade: '700', hex: '#1d4ed8', cssVar: 'var(--color-info-700)' },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-3">Color System</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          Our color palette is designed to be playful yet professional, with warm tones that create a welcoming 
          environment for children and parents alike. All colors meet WCAG AA contrast requirements.
        </p>
      </div>

      {/* Brand Palettes */}
      <div className="space-y-10">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Brand Palettes</h2>
        
        {Object.entries(colorPalettes).map(([key, palette]) => (
          <div key={key} className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-neutral-900)]">{palette.name}</h3>
              <p className="text-sm text-[var(--color-neutral-600)] mt-1">{palette.description}</p>
              <p className="text-sm text-[var(--color-neutral-500)] mt-1">
                <span className="font-medium">Usage:</span> {palette.usage}
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
              {palette.colors.map((color) => (
                <div key={color.shade} className="space-y-2">
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="relative group w-full aspect-square rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
                    style={{ backgroundColor: color.hex }}
                    title={`Click to copy ${color.hex}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {copiedColor === color.hex ? (
                        <div className="bg-white/90 p-2 rounded-lg">
                          <Check size={16} className="text-green-600" />
                        </div>
                      ) : (
                        <div className="bg-white/90 p-2 rounded-lg">
                          <Copy size={16} className="text-[var(--color-neutral-700)]" />
                        </div>
                      )}
                    </div>
                  </button>
                  <div className="text-center">
                    <p className="text-xs font-medium text-[var(--color-neutral-900)]">{color.shade}</p>
                    <p className="text-xs text-[var(--color-neutral-500)] font-mono">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Semantic Colors */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Semantic Colors</h2>
          <p className="text-sm text-[var(--color-neutral-600)] mt-2">
            Functional colors for communicating status, feedback, and intent
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {semanticColors.map((semantic) => (
            <div key={semantic.name} className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)]">
              <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">{semantic.name}</h3>
              <p className="text-sm text-[var(--color-neutral-600)] mb-4">{semantic.description}</p>
              
              <div className="flex gap-3">
                {semantic.colors.map((color) => (
                  <div key={color.shade} className="flex-1 space-y-2">
                    <button
                      onClick={() => copyToClipboard(color.hex)}
                      className="relative group w-full h-20 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105"
                      style={{ backgroundColor: color.hex }}
                      title={`Click to copy ${color.hex}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {copiedColor === color.hex ? (
                          <div className="bg-white/90 p-2 rounded-lg">
                            <Check size={16} className="text-green-600" />
                          </div>
                        ) : (
                          <div className="bg-white/90 p-2 rounded-lg">
                            <Copy size={16} className="text-[var(--color-neutral-700)]" />
                          </div>
                        )}
                      </div>
                    </button>
                    <div className="text-center">
                      <p className="text-xs font-medium text-[var(--color-neutral-900)]">{color.shade}</p>
                      <p className="text-xs text-[var(--color-neutral-500)] font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border border-[var(--color-primary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-6">Color Usage Guidelines</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">✓ Do</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Use primary colors for main actions and brand elements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Ensure minimum 4.5:1 contrast ratio for text</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Use semantic colors consistently for status messages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Maintain color meaning across light and dark modes</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">✗ Don't</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-700)]">•</span>
                <span>Use too many colors in a single interface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-700)]">•</span>
                <span>Rely solely on color to convey information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-700)]">•</span>
                <span>Use low-contrast color combinations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-700)]">•</span>
                <span>Override semantic colors for aesthetic purposes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dark Mode Note */}
      <div className="p-6 rounded-xl bg-[var(--color-neutral-900)] text-white">
        <h3 className="text-lg font-semibold mb-2">Dark Mode Support</h3>
        <p className="text-[var(--color-neutral-300)] text-sm">
          All colors automatically adapt for dark mode using CSS media queries. The neutral palette inverts, 
          while brand colors maintain their vibrancy with adjusted values for optimal contrast and readability 
          in low-light conditions.
        </p>
      </div>
    </div>
  );
}
