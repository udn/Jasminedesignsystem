export default function Spacing() {
  const spacingTokens = [
    { name: 'spacing-0', value: '0px', rem: '0', usage: 'No spacing' },
    { name: 'spacing-1', value: '2px', rem: '0.125rem', usage: 'Minimal spacing, borders' },
    { name: 'spacing-2', value: '4px', rem: '0.25rem', usage: 'Tight spacing, small gaps' },
    { name: 'spacing-3', value: '8px', rem: '0.5rem', usage: 'Base unit, compact spacing' },
    { name: 'spacing-4', value: '12px', rem: '0.75rem', usage: 'Small padding, gaps' },
    { name: 'spacing-5', value: '16px', rem: '1rem', usage: 'Standard spacing, default padding' },
    { name: 'spacing-6', value: '24px', rem: '1.5rem', usage: 'Medium spacing, card padding' },
    { name: 'spacing-7', value: '32px', rem: '2rem', usage: 'Large spacing, section padding' },
    { name: 'spacing-8', value: '40px', rem: '2.5rem', usage: 'Extra large spacing' },
    { name: 'spacing-9', value: '48px', rem: '3rem', usage: 'Component spacing, large gaps' },
    { name: 'spacing-10', value: '64px', rem: '4rem', usage: 'Section spacing' },
    { name: 'spacing-11', value: '80px', rem: '5rem', usage: 'Large section spacing' },
    { name: 'spacing-12', value: '96px', rem: '6rem', usage: 'Maximum spacing, hero sections' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-3">Spacing & Sizing</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          Our spacing system is built on an 8px base grid, creating consistent rhythm and alignment throughout 
          the interface. This systematic approach ensures visual harmony and makes layouts predictable for developers.
        </p>
      </div>

      {/* 8px Grid Principle */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border border-[var(--color-primary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">8px Base Grid System</h2>
        <p className="text-[var(--color-neutral-700)] mb-6">
          All spacing values are multiples of 8px (with exceptions at 2px and 4px for fine-tuning). 
          This creates a consistent vertical and horizontal rhythm that works across all screen sizes.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-[var(--color-surface)] rounded-lg">
            <h3 className="font-semibold text-[var(--color-neutral-900)] mb-2">Why 8px?</h3>
            <p className="text-sm text-[var(--color-neutral-600)]">
              Most screen resolutions are divisible by 8, preventing sub-pixel rendering issues and ensuring crisp edges.
            </p>
          </div>
          <div className="p-4 bg-[var(--color-surface)] rounded-lg">
            <h3 className="font-semibold text-[var(--color-neutral-900)] mb-2">Flexibility</h3>
            <p className="text-sm text-[var(--color-neutral-600)]">
              2px and 4px tokens provide flexibility for borders and tight spacing when needed.
            </p>
          </div>
          <div className="p-4 bg-[var(--color-surface)] rounded-lg">
            <h3 className="font-semibold text-[var(--color-neutral-900)] mb-2">Scalability</h3>
            <p className="text-sm text-[var(--color-neutral-600)]">
              The system scales elegantly from mobile to desktop without awkward gaps or crowding.
            </p>
          </div>
        </div>
      </div>

      {/* Spacing Tokens */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Spacing Tokens</h2>
        
        <div className="space-y-4">
          {spacingTokens.map((token) => (
            <div key={token.name} className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)]">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="space-y-1">
                  <h3 className="font-semibold text-[var(--color-neutral-900)]">
                    {token.value}
                  </h3>
                  <p className="text-sm text-[var(--color-neutral-600)]">{token.rem}</p>
                  <code className="text-xs bg-[var(--color-neutral-100)] px-2 py-1 rounded text-[var(--color-neutral-800)]">
                    --{token.name}
                  </code>
                </div>
                
                <div className="text-sm text-[var(--color-neutral-600)]">
                  {token.usage}
                </div>
                
                <div className="flex items-center justify-end">
                  <div 
                    className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded"
                    style={{ 
                      width: token.value,
                      height: '32px',
                      minWidth: '2px'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Layout Rhythm Examples</h2>
        
        {/* Card with Spacing */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Card Component Spacing</h3>
          <div className="p-6 rounded-xl bg-[var(--color-surface)] border-2 border-[var(--color-primary-300)] relative">
            <div className="absolute top-0 left-0 text-xs text-[var(--color-primary-800)] bg-[var(--color-primary-100)] px-2 py-1 rounded-br">
              24px padding
            </div>
            
            <div className="mt-4 space-y-4">
              <h4 className="text-xl font-bold text-[var(--color-neutral-900)]">
                Example Card Title
              </h4>
              <div className="absolute right-6 top-20 text-xs text-[var(--color-primary-800)] bg-[var(--color-primary-100)] px-2 py-1 rounded">
                16px gap
              </div>
              <p className="text-[var(--color-neutral-700)]">
                This card demonstrates consistent spacing using our tokens. Notice the 24px padding 
                around the edges and 16px gaps between elements.
              </p>
              
              <div className="flex gap-3 pt-2">
                <div className="absolute left-6 bottom-16 text-xs text-[var(--color-primary-800)] bg-[var(--color-primary-100)] px-2 py-1 rounded">
                  12px gap
                </div>
                <button className="px-4 py-2 bg-[var(--color-primary-800)] text-white rounded-lg">
                  Primary
                </button>
                <button className="px-4 py-2 border border-[var(--color-neutral-300)] text-[var(--color-neutral-700)] rounded-lg">
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stack Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Vertical Stack (16px gaps)</h3>
          <div className="space-y-4 p-6 rounded-xl bg-[var(--color-neutral-100)]">
            <div className="p-4 bg-[var(--color-surface)] rounded-lg shadow-sm">Stack Item 1</div>
            <div className="p-4 bg-[var(--color-surface)] rounded-lg shadow-sm">Stack Item 2</div>
            <div className="p-4 bg-[var(--color-surface)] rounded-lg shadow-sm">Stack Item 3</div>
          </div>
        </div>

        {/* Grid Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Grid Layout (24px gaps)</h3>
          <div className="grid grid-cols-3 gap-6 p-6 rounded-xl bg-[var(--color-neutral-100)]">
            <div className="p-4 bg-[var(--color-surface)] rounded-lg shadow-sm text-center">Grid 1</div>
            <div className="p-4 bg-[var(--color-surface)] rounded-lg shadow-sm text-center">Grid 2</div>
            <div className="p-4 bg-[var(--color-surface)] rounded-lg shadow-sm text-center">Grid 3</div>
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Border Radius</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'sm', value: '4px', var: '--radius-sm' },
            { name: 'md', value: '8px', var: '--radius-md' },
            { name: 'lg', value: '12px', var: '--radius-lg' },
            { name: 'xl', value: '16px', var: '--radius-xl' },
            { name: '2xl', value: '24px', var: '--radius-2xl' },
            { name: 'full', value: '9999px', var: '--radius-full' },
          ].map((radius) => (
            <div key={radius.name} className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)] text-center">
              <div 
                className="w-full h-20 bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] mb-3"
                style={{ borderRadius: radius.value }}
              />
              <p className="font-semibold text-[var(--color-neutral-900)]">{radius.value}</p>
              <code className="text-xs text-[var(--color-neutral-600)]">{radius.var}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-accent-50)] border border-[var(--color-secondary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-6">Spacing Guidelines</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Component Spacing</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Button padding:</strong> 12px vertical, 16-24px horizontal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Card padding:</strong> 24px for standard cards, 32px for hero cards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Form fields:</strong> 16px between labels and inputs, 24px between field groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>List items:</strong> 12-16px vertical spacing between items</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Layout Spacing</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Section spacing:</strong> 64-96px between major sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Container padding:</strong> 16px mobile, 24px tablet, 32px desktop</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Grid gaps:</strong> 16px mobile, 24px tablet, 32px desktop</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Content width:</strong> Max 1280px with 16-32px side padding</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Mobile Adjustments</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Reduce large spacing values by 25-40% on mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Maintain touch target minimum of 44x44px</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Use 16px minimum for container edge padding</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Border Radius Usage</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Buttons & inputs:</strong> 8px (md) for standard, 12px (lg) for prominent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Cards:</strong> 12px (lg) for small cards, 16px (xl) for large cards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span><strong>Avatars & badges:</strong> 9999px (full) for circular elements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
