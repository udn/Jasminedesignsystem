export default function Layout() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-3">Layout Patterns</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          Responsive layout patterns built on a mobile-first approach. Our grid system and breakpoints 
          ensure consistent, scalable layouts across all device sizes.
        </p>
      </div>

      {/* Breakpoints */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Responsive Breakpoints</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl">
            <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Mobile</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-2">0 - 639px</p>
            <p className="text-xs text-[var(--color-neutral-500)]">Default, mobile-first design</p>
          </div>

          <div className="p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl">
            <div className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📲</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Tablet</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-2">640px - 1023px</p>
            <p className="text-xs text-[var(--color-neutral-500)]">sm: and md: breakpoints</p>
          </div>

          <div className="p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl">
            <div className="w-12 h-12 bg-[var(--color-accent-100)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Desktop</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-2">1024px - 1279px</p>
            <p className="text-xs text-[var(--color-neutral-500)]">lg: breakpoint</p>
          </div>

          <div className="p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl">
            <div className="w-12 h-12 bg-[var(--color-success-100)] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🖥️</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Wide</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-2">1280px+</p>
            <p className="text-xs text-[var(--color-neutral-500)]">xl: and 2xl: breakpoints</p>
          </div>
        </div>
      </div>

      {/* Grid System */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Grid System</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">12-Column Grid</h3>
            <div className="grid grid-cols-12 gap-4 p-4 bg-[var(--color-neutral-100)] rounded-xl">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-16 bg-[var(--color-primary-400)] rounded flex items-center justify-center text-white text-sm font-medium">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">6-Column Layout</h3>
            <div className="grid grid-cols-6 gap-4 p-4 bg-[var(--color-neutral-100)] rounded-xl">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-16 bg-[var(--color-secondary-400)] rounded flex items-center justify-center text-white text-sm font-medium">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">4-Column Layout</h3>
            <div className="grid grid-cols-4 gap-4 p-4 bg-[var(--color-neutral-100)] rounded-xl">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-16 bg-[var(--color-accent-400)] rounded flex items-center justify-center text-white text-sm font-medium">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">3-Column Layout</h3>
            <div className="grid grid-cols-3 gap-6 p-4 bg-[var(--color-neutral-100)] rounded-xl">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-20 bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] rounded flex items-center justify-center text-white text-sm font-medium">
                  Col {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Container Widths */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Container Rules</h2>
        
        <div className="p-8 bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border border-[var(--color-primary-200)] rounded-2xl">
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Content Container</h3>
          <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success-500)]">•</span>
              <span><strong>Max width:</strong> 1280px (80rem) for optimal readability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success-500)]">•</span>
              <span><strong>Mobile padding:</strong> 16px (1rem) on each side</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success-500)]">•</span>
              <span><strong>Tablet padding:</strong> 24px (1.5rem) on each side</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success-500)]">•</span>
              <span><strong>Desktop padding:</strong> 32px (2rem) on each side</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success-500)]">•</span>
              <span><strong>Centering:</strong> Use mx-auto for horizontal centering</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Container Example</h3>
          <div className="bg-[var(--color-neutral-100)] p-4 rounded-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <p className="text-[var(--color-neutral-600)]">Content Container (max-width: 1280px)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Layout Patterns */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Common Page Layouts</h2>

        <div className="space-y-8">
          {/* Hero Section */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Hero Section</h3>
            <div className="p-8 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-2xl text-white">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">Welcome to Jasmine Kindergarten</h1>
                <p className="text-lg opacity-90">Where young minds grow through joyful learning</p>
                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  <button className="px-6 py-3 bg-white text-[var(--color-primary-600)] rounded-lg font-medium hover:shadow-lg transition-all">
                    Get Started
                  </button>
                  <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-all border border-white/40">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Feature Grid (Responsive)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl">
                  <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-xl mb-4 flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Feature {i + 1}</h4>
                  <p className="text-sm text-[var(--color-neutral-600)]">
                    Description of this amazing feature that helps parents and children.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Layout */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Sidebar Layout</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1 p-6 bg-[var(--color-neutral-100)] rounded-xl">
                <h4 className="font-semibold text-[var(--color-neutral-900)] mb-4">Sidebar</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-white rounded text-sm">Menu Item 1</div>
                  <div className="p-2 bg-white rounded text-sm">Menu Item 2</div>
                  <div className="p-2 bg-white rounded text-sm">Menu Item 3</div>
                </div>
              </div>
              <div className="md:col-span-3 p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl">
                <h4 className="font-semibold text-[var(--color-neutral-900)] mb-2">Main Content</h4>
                <p className="text-sm text-[var(--color-neutral-600)]">
                  Primary content area takes up 3/4 of the width on desktop, full width on mobile.
                </p>
              </div>
            </div>
          </div>

          {/* Card Grid */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Card Grid (Auto-fit)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-4 bg-white border border-[var(--color-neutral-200)] rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-[var(--color-primary-300)] to-[var(--color-accent-300)] rounded-lg mb-3" />
                  <p className="text-sm font-medium text-[var(--color-neutral-900)]">Card {i + 1}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Split Layout */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Split Layout (50/50)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] rounded-xl text-white">
                <h4 className="text-2xl font-bold mb-3">Left Side</h4>
                <p className="opacity-90">Equal-width columns on desktop, stacked on mobile</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-[var(--color-secondary-400)] to-[var(--color-primary-400)] rounded-xl text-white">
                <h4 className="text-2xl font-bold mb-3">Right Side</h4>
                <p className="opacity-90">Perfect for image/text combinations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing Guidelines */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-accent-50)] border border-[var(--color-secondary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-6">Layout Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Mobile-First Approach</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Design for mobile first, then enhance for larger screens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Stack elements vertically on mobile, use grid on desktop</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Test layouts at all breakpoints during development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Ensure touch targets are minimum 44x44px on mobile</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Layout Consistency</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Maintain consistent spacing using our 8px grid tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use the same container padding across pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Align elements to grid for visual harmony</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Group related content with appropriate whitespace</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Performance</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Optimize images for different screen sizes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use lazy loading for images below the fold</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Minimize layout shifts with proper sizing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Keep CSS bundle size optimized</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Accessibility</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Maintain logical reading order in markup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Ensure keyboard navigation follows visual flow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use semantic HTML for proper structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Test with screen readers and keyboard only</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
