import { Eye, Ear, Hand, Keyboard, MousePointer } from 'lucide-react';

export default function Accessibility() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-3">Accessibility</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          Accessibility is fundamental to the Jasmine Kindergarten design system. We strive for WCAG AA compliance 
          to ensure all families can access and enjoy our services.
        </p>
      </div>

      {/* WCAG Compliance */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border border-[var(--color-primary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-6">WCAG AA Standards</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[var(--color-surface)] rounded-xl">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Perceivable</h3>
            <p className="text-sm text-[var(--color-neutral-600)]">
              Information and UI components are presentable to users in ways they can perceive
            </p>
          </div>

          <div className="p-6 bg-[var(--color-surface)] rounded-xl">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Operable</h3>
            <p className="text-sm text-[var(--color-neutral-600)]">
              UI components and navigation are operable by various input methods
            </p>
          </div>

          <div className="p-6 bg-[var(--color-surface)] rounded-xl">
            <div className="text-4xl mb-3">📖</div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Understandable</h3>
            <p className="text-sm text-[var(--color-neutral-600)]">
              Information and UI operation are clear and easy to understand
            </p>
          </div>
        </div>
      </div>

      {/* Color Contrast */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Color Contrast Requirements</h2>
        
        <div className="space-y-4">
          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Text Contrast Ratios</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-[var(--color-neutral-900)] text-white rounded-lg">
                  <span className="text-lg">Normal Text</span>
                  <span className="px-3 py-1 bg-white/20 rounded text-sm">21:1</span>
                </div>
                <p className="text-sm text-[var(--color-neutral-600)] ml-4">
                  ✓ WCAG AAA - Minimum 4.5:1 required, we exceed with 21:1
                </p>

                <div className="flex items-center justify-between p-4 bg-[var(--color-neutral-700)] text-white rounded-lg">
                  <span className="text-lg">Large Text (18px+)</span>
                  <span className="px-3 py-1 bg-white/20 rounded text-sm">12:1</span>
                </div>
                <p className="text-sm text-[var(--color-neutral-600)] ml-4">
                  ✓ WCAG AAA - Minimum 3:1 required, we exceed with 12:1
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-[var(--color-primary-800)] text-white rounded-lg">
                  <span className="text-lg">Primary on White</span>
                  <span className="px-3 py-1 bg-white/20 rounded text-sm">4.7:1</span>
                </div>
                <p className="text-sm text-[var(--color-neutral-600)] ml-4">
                  ✓ WCAG AA compliant for normal text
                </p>

                <div className="flex items-center justify-between p-4 bg-[var(--color-surface)] border-2 border-[var(--color-primary-600)] rounded-lg">
                  <span className="text-lg text-[var(--color-primary-700)]">Primary Text</span>
                  <span className="px-3 py-1 bg-[var(--color-neutral-100)] rounded text-sm">5.2:1</span>
                </div>
                <p className="text-sm text-[var(--color-neutral-600)] ml-4">
                  ✓ WCAG AA compliant for normal text
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">UI Component Contrast</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-[var(--color-neutral-700)] mb-3">Minimum 3:1 ratio required for:</p>
                <ul className="space-y-2 text-sm text-[var(--color-neutral-600)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-success-700)]">•</span>
                    <span>Interactive component borders (buttons, inputs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-success-700)]">•</span>
                    <span>Focus indicators and outlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-success-700)]">•</span>
                    <span>Graphical objects (icons, charts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-success-700)]">•</span>
                    <span>States of UI components (active, hover)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-[var(--color-primary-500)] text-white rounded-lg border-2 border-transparent focus:border-[var(--color-primary-300)] focus:ring-2 focus:ring-[var(--color-primary-300)] focus:outline-none transition-all">
                  Accessible Button
                </button>
                <input
                  type="text"
                  placeholder="Accessible Input"
                  className="w-full px-4 py-3 border-2 border-[var(--color-neutral-300)] rounded-lg focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-300)] focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Keyboard Navigation</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[var(--color-secondary-100)] rounded-lg">
                <Keyboard size={24} className="text-[var(--color-secondary-600)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Focus Management</h3>
            </div>
            
            <ul className="space-y-3 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>All interactive elements must be keyboard accessible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Visible focus indicators with 2px outline minimum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Logical tab order following visual flow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Skip links for efficient navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>No keyboard traps - users can exit all elements</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[var(--color-primary-100)] rounded-lg">
                <Hand size={24} className="text-[var(--color-primary-600)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Touch Targets</h3>
            </div>
            
            <ul className="space-y-3 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Minimum 44x44px touch target size on mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Adequate spacing between clickable elements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Clear visual feedback on tap/click</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>No small clickable areas that are hard to target</span>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-[var(--color-neutral-200)]">
              <div className="flex items-center gap-3">
                <button className="w-11 h-11 flex items-center justify-center bg-[var(--color-primary-500)] text-white rounded-lg hover:bg-[var(--color-primary-600)] transition-colors">
                  ✓
                </button>
                <span className="text-xs text-[var(--color-neutral-600)]">44x44px minimum</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Keyboard Shortcuts</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-[var(--color-neutral-50)] rounded-lg">
              <kbd className="px-2 py-1 bg-[var(--color-surface)] border border-[var(--color-neutral-300)] rounded text-sm font-mono">Tab</kbd>
              <span className="text-sm text-[var(--color-neutral-700)]">Next element</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[var(--color-neutral-50)] rounded-lg">
              <kbd className="px-2 py-1 bg-[var(--color-surface)] border border-[var(--color-neutral-300)] rounded text-sm font-mono">Shift+Tab</kbd>
              <span className="text-sm text-[var(--color-neutral-700)]">Previous element</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[var(--color-neutral-50)] rounded-lg">
              <kbd className="px-2 py-1 bg-[var(--color-surface)] border border-[var(--color-neutral-300)] rounded text-sm font-mono">Enter</kbd>
              <span className="text-sm text-[var(--color-neutral-700)]">Activate button/link</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[var(--color-neutral-50)] rounded-lg">
              <kbd className="px-2 py-1 bg-[var(--color-surface)] border border-[var(--color-neutral-300)] rounded text-sm font-mono">Space</kbd>
              <span className="text-sm text-[var(--color-neutral-700)]">Activate button/checkbox</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[var(--color-neutral-50)] rounded-lg">
              <kbd className="px-2 py-1 bg-[var(--color-surface)] border border-[var(--color-neutral-300)] rounded text-sm font-mono">Esc</kbd>
              <span className="text-sm text-[var(--color-neutral-700)]">Close modal/dialog</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[var(--color-neutral-50)] rounded-lg">
              <kbd className="px-2 py-1 bg-[var(--color-surface)] border border-[var(--color-neutral-300)] rounded text-sm font-mono">↑↓</kbd>
              <span className="text-sm text-[var(--color-neutral-700)]">Navigate lists/menus</span>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Reader Support */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Screen Reader Support</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[var(--color-accent-100)] rounded-lg">
                <Ear size={24} className="text-[var(--color-accent-600)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Semantic HTML</h3>
            </div>
            
            <ul className="space-y-3 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Use proper heading hierarchy (h1, h2, h3, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Use &lt;button&gt; for actions, &lt;a&gt; for navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Use &lt;nav&gt;, &lt;main&gt;, &lt;aside&gt; landmarks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Use &lt;label&gt; for all form inputs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>Use &lt;table&gt; with proper headers for tabular data</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[var(--color-success-100)] rounded-lg">
                <Eye size={24} className="text-[var(--color-success-600)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">ARIA Attributes</h3>
            </div>
            
            <ul className="space-y-3 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>aria-label for icon-only buttons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>aria-describedby for additional context</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>aria-live for dynamic content updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>aria-expanded for collapsible sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">✓</span>
                <span>aria-hidden for decorative elements</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Alt Text Guidelines</h3>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-[var(--color-neutral-700)] mb-2">✓ Good Example</p>
                <div className="p-4 bg-[var(--color-success-50)] border border-[var(--color-success-200)] rounded-lg">
                  <code className="text-sm text-[var(--color-success-800)]">
                    &lt;img src="classroom.jpg" alt="Children playing with colorful building blocks in a bright classroom" /&gt;
                  </code>
                </div>
                <p className="text-xs text-[var(--color-neutral-600)] mt-2">Descriptive and contextual</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-neutral-700)] mb-2">✗ Bad Example</p>
                <div className="p-4 bg-[var(--color-error-50)] border border-[var(--color-error-200)] rounded-lg">
                  <code className="text-sm text-[var(--color-error-800)]">
                    &lt;img src="classroom.jpg" alt="image" /&gt;
                  </code>
                </div>
                <p className="text-xs text-[var(--color-neutral-600)] mt-2">Too generic, not helpful</p>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Describe the content and function of the image</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Keep it concise (under 125 characters when possible)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Use alt="" for purely decorative images</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)]">•</span>
                <span>Don't start with "image of" or "picture of"</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Considerations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Additional Accessibility Features</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Motion Sensitivity</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-3">
              Respect prefers-reduced-motion settings
            </p>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded">
              @media (prefers-reduced-motion)
            </code>
          </div>

          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Color Blindness</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-3">
              Don't rely solely on color to convey information
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-[var(--color-success-500)] rounded flex items-center justify-center text-white text-xs">✓</div>
              <div className="w-8 h-8 bg-[var(--color-error-500)] rounded flex items-center justify-center text-white text-xs">✗</div>
            </div>
          </div>

          <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Text Resize</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-3">
              Support text scaling up to 200%
            </p>
            <p className="text-xs text-[var(--color-neutral-500)]">
              Use relative units (rem, em) not pixels
            </p>
          </div>
        </div>
      </div>

      {/* Testing Checklist */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-accent-50)] border border-[var(--color-secondary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-6">Accessibility Testing Checklist</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Test with keyboard only (no mouse)</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Test with screen reader (NVDA, JAWS, VoiceOver)</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Verify color contrast ratios with tools</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Check focus indicators are visible</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Validate HTML semantics</span>
            </label>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Test with browser zoom at 200%</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Verify alt text for all images</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Test with prefers-reduced-motion enabled</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Check heading hierarchy is logical</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1" />
              <span className="text-sm text-[var(--color-neutral-700)]">Ensure forms have proper labels and errors</span>
            </label>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="p-6 rounded-xl bg-[var(--color-neutral-900)] text-white">
        <h3 className="text-xl font-semibold mb-4">Accessibility Resources</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-medium text-[var(--color-primary-300)] mb-2">Testing Tools</p>
            <ul className="space-y-1 text-[var(--color-neutral-300)]">
              <li>• axe DevTools (browser extension)</li>
              <li>• WAVE (Web Accessibility Evaluation Tool)</li>
              <li>• Lighthouse (Chrome DevTools)</li>
              <li>• Color Contrast Analyzer</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-[var(--color-accent-300)] mb-2">Guidelines & Standards</p>
            <ul className="space-y-1 text-[var(--color-neutral-300)]">
              <li>• WCAG 2.1 Level AA</li>
              <li>• WAI-ARIA Authoring Practices</li>
              <li>• A11y Project Checklist</li>
              <li>• Section 508 Standards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
