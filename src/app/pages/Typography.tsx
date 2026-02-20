export default function Typography() {
  const typeScale = [
    {
      name: 'Display 1',
      cssVar: 'var(--font-size-display-1)',
      size: '64px',
      usage: 'Hero headlines, major page titles',
      example: 'Joyful Learning Starts Here',
      className: 'text-[4rem]',
    },
    {
      name: 'Display 2',
      cssVar: 'var(--font-size-display-2)',
      size: '48px',
      usage: 'Section headlines, feature titles',
      example: 'Welcome to Jasmine Kindergarten',
      className: 'text-[3rem]',
    },
    {
      name: 'Heading 1',
      cssVar: 'var(--font-size-heading-1)',
      size: '40px',
      usage: 'Page titles, main headings',
      example: 'Discover Our Programs',
      className: 'text-[2.5rem]',
    },
    {
      name: 'Heading 2',
      cssVar: 'var(--font-size-heading-2)',
      size: '32px',
      usage: 'Section headings, card titles',
      example: 'Early Learning Adventures',
      className: 'text-[2rem]',
    },
    {
      name: 'Heading 3',
      cssVar: 'var(--font-size-heading-3)',
      size: '24px',
      usage: 'Subsection headings, component titles',
      example: 'Daily Activities',
      className: 'text-[1.5rem]',
    },
    {
      name: 'Body Large',
      cssVar: 'var(--font-size-body-lg)',
      size: '18px',
      usage: 'Lead paragraphs, important content',
      example: 'We create a safe and nurturing environment where children thrive.',
      className: 'text-[1.125rem]',
    },
    {
      name: 'Body',
      cssVar: 'var(--font-size-body)',
      size: '16px',
      usage: 'Default body text, descriptions',
      example: 'Our curriculum focuses on play-based learning and social development.',
      className: 'text-[1rem]',
    },
    {
      name: 'Body Small',
      cssVar: 'var(--font-size-body-sm)',
      size: '14px',
      usage: 'Secondary text, form labels',
      example: 'Supporting children ages 2-5 in their learning journey.',
      className: 'text-[0.875rem]',
    },
    {
      name: 'Caption',
      cssVar: 'var(--font-size-caption)',
      size: '12px',
      usage: 'Captions, timestamps, metadata',
      example: 'Last updated: February 16, 2026',
      className: 'text-[0.75rem]',
    },
  ];

  const fontFamilies = [
    {
      name: 'Display Font',
      family: 'Quicksand',
      cssVar: 'var(--font-family-display)',
      fallback: 'Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      usage: 'Headings, titles, display text',
      characteristics: 'Friendly, rounded, playful yet professional',
    },
    {
      name: 'Body Font',
      family: 'System Font Stack',
      cssVar: 'var(--font-family-body)',
      fallback: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Roboto, Arial',
      usage: 'Body text, UI elements, forms',
      characteristics: 'Clean, legible, optimized for reading',
    },
    {
      name: 'Monospace',
      family: 'SF Mono',
      cssVar: 'var(--font-family-mono)',
      fallback: 'Monaco, Cascadia Code, Consolas, monospace',
      usage: 'Code snippets, technical content',
      characteristics: 'Fixed-width, technical documentation',
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-3">Typography System</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          Our typography system balances playfulness with professionalism. We use Quicksand for headings to add 
          warmth and approachability, paired with system fonts for optimal readability in body text.
        </p>
      </div>

      {/* Font Families */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Font Families</h2>
        
        <div className="grid gap-6">
          {fontFamilies.map((font) => (
            <div key={font.name} className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[var(--color-neutral-900)]">{font.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium text-[var(--color-neutral-700)]">Primary:</span>{' '}
                      <span className="text-[var(--color-neutral-600)]">{font.family}</span>
                    </p>
                    <p>
                      <span className="font-medium text-[var(--color-neutral-700)]">Fallback:</span>{' '}
                      <span className="text-[var(--color-neutral-600)] font-mono text-xs">{font.fallback}</span>
                    </p>
                    <p>
                      <span className="font-medium text-[var(--color-neutral-700)]">Usage:</span>{' '}
                      <span className="text-[var(--color-neutral-600)]">{font.usage}</span>
                    </p>
                    <p>
                      <span className="font-medium text-[var(--color-neutral-700)]">CSS Variable:</span>{' '}
                      <code className="text-xs bg-[var(--color-neutral-100)] px-2 py-1 rounded text-[var(--color-neutral-800)]">
                        {font.cssVar}
                      </code>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 bg-[var(--color-neutral-50)] rounded-lg">
                  <p 
                    className="text-3xl text-center"
                    style={{ fontFamily: font.cssVar.replace('var(', '').replace(')', '') === '--font-family-display' ? 'var(--font-family-display)' : font.family === 'System Font Stack' ? 'var(--font-family-body)' : 'var(--font-family-mono)' }}
                  >
                    {font.family === 'System Font Stack' ? 'The quick brown fox jumps over the lazy dog' : 
                     font.family === 'SF Mono' ? 'Code Example 123' :
                     'Playful Typography'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Type Scale */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Type Scale</h2>
          <p className="text-sm text-[var(--color-neutral-600)] mt-2">
            A harmonious 9-level scale designed for clarity and hierarchy
          </p>
        </div>

        <div className="space-y-6">
          {typeScale.map((type) => (
            <div key={type.name} className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)]">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">{type.name}</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-[var(--color-neutral-600)]">
                      <span className="font-medium">Size:</span> {type.size}
                    </p>
                    <p className="text-[var(--color-neutral-600)]">
                      <span className="font-medium">Usage:</span> {type.usage}
                    </p>
                    <p className="text-[var(--color-neutral-600)]">
                      <code className="text-xs bg-[var(--color-neutral-100)] px-2 py-1 rounded">
                        {type.cssVar}
                      </code>
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-2 flex items-center">
                  <p 
                    className={`${type.className} ${type.name.includes('Display') || type.name.includes('Heading') ? 'font-bold' : ''} text-[var(--color-neutral-900)]`}
                    style={{ 
                      fontFamily: type.name.includes('Display') || type.name.includes('Heading') ? 'var(--font-family-display)' : 'var(--font-family-body)'
                    }}
                  >
                    {type.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Line Heights */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Line Heights</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)]">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Tight (1.2)</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-4">For headings and display text</p>
            <p className="leading-[1.2] text-[var(--color-neutral-700)]" style={{ fontFamily: 'var(--font-family-display)' }}>
              <strong className="text-xl">Example Heading</strong><br />
              Line height creates visual density
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)]">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Normal (1.5)</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-4">For body text and UI elements</p>
            <p className="leading-[1.5] text-[var(--color-neutral-700)]">
              This is the standard line height for most body text, providing comfortable reading with balanced spacing.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)]">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Relaxed (1.7)</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-4">For long-form content</p>
            <p className="leading-[1.7] text-[var(--color-neutral-700)]">
              More generous spacing improves readability in paragraphs and extended reading scenarios.
            </p>
          </div>
        </div>
      </div>

      {/* Typography Best Practices */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-primary-50)] border border-[var(--color-secondary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-6">Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Hierarchy</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use only one Display or H1 per page for clear hierarchy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Maintain consistent heading levels (don't skip levels)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use font weight and size together to establish importance</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Readability</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Limit line length to 60-75 characters for optimal reading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use appropriate line height for text size and length</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Ensure sufficient color contrast (minimum 4.5:1 for body text)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Mobile Optimization</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Scale down display sizes by 25-30% on mobile devices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Maintain minimum 16px font size for body text on mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Increase line height slightly for smaller screens</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Accessibility</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use semantic HTML headings (h1, h2, etc.) for structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Allow users to resize text up to 200% without breaking layout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Avoid text in images; use live text when possible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Example Composition */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Typography in Context</h2>
        
        <div className="p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)]">
          <h1 className="text-[2.5rem] font-bold text-[var(--color-neutral-900)] mb-4" style={{ fontFamily: 'var(--font-family-display)' }}>
            Welcome to Jasmine Kindergarten
          </h1>
          <p className="text-[1.125rem] text-[var(--color-neutral-700)] leading-[1.7] mb-6">
            Where every child's potential blossoms through play, creativity, and joyful discovery. 
            Our nurturing environment supports children aged 2-5 as they develop essential skills for life.
          </p>
          
          <h2 className="text-[1.5rem] font-bold text-[var(--color-neutral-900)] mb-3 mt-8" style={{ fontFamily: 'var(--font-family-display)' }}>
            Our Approach to Learning
          </h2>
          <p className="text-[1rem] text-[var(--color-neutral-700)] leading-[1.5] mb-4">
            We believe in creating meaningful experiences that foster curiosity, confidence, and compassion. 
            Our play-based curriculum integrates:
          </p>
          
          <ul className="space-y-2 text-[1rem] text-[var(--color-neutral-700)] ml-6 mb-6">
            <li>• Social and emotional development</li>
            <li>• Creative expression through art and music</li>
            <li>• Early literacy and numeracy skills</li>
            <li>• Physical development and outdoor play</li>
          </ul>
          
          <p className="text-[0.875rem] text-[var(--color-neutral-500)]">
            <em>Established 2015 • Serving families in Jakarta, Indonesia</em>
          </p>
        </div>
      </div>
    </div>
  );
}
