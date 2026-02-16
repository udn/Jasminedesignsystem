import { Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Tokens() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const designTokens = {
    colors: {
      primary: {
        50: '#fff8f0',
        100: '#ffefd9',
        200: '#ffddb3',
        300: '#ffc88d',
        400: '#ffb366',
        500: '#ff9940',
        600: '#ff7e1a',
        700: '#e56500',
        800: '#b34f00',
        900: '#803900',
      },
      secondary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      accent: {
        50: '#fff1f7',
        100: '#ffe4f0',
        200: '#ffc9e1',
        300: '#ffa3ce',
        400: '#ff6bae',
        500: '#ff3d94',
        600: '#f01b75',
        700: '#d10d5e',
        800: '#a80d4d',
        900: '#8d0f44',
      },
      neutral: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
      },
      semantic: {
        success: { 50: '#f0fdf4', 100: '#dcfce7', 300: '#86efac', 500: '#22c55e', 700: '#15803d' },
        warning: { 50: '#fffbeb', 100: '#fef3c7', 300: '#fcd34d', 500: '#f59e0b', 700: '#b45309' },
        error: { 50: '#fef2f2', 100: '#fee2e2', 300: '#fca5a5', 500: '#ef4444', 700: '#b91c1c' },
        info: { 50: '#eff6ff', 100: '#dbeafe', 300: '#93c5fd', 500: '#3b82f6', 700: '#1d4ed8' },
      },
    },
    typography: {
      fontFamily: {
        display: 'Quicksand, Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        body: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Roboto, Arial, sans-serif',
        mono: 'SF Mono, Monaco, Cascadia Code, Consolas, monospace',
      },
      fontSize: {
        display1: '4rem',
        display2: '3rem',
        heading1: '2.5rem',
        heading2: '2rem',
        heading3: '1.5rem',
        bodyLg: '1.125rem',
        body: '1rem',
        bodySm: '0.875rem',
        caption: '0.75rem',
      },
      lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.7,
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '1.5rem',
      5: '2rem',
      6: '3rem',
      7: '4rem',
      8: '5rem',
      9: '6rem',
      10: '7rem',
      11: '8rem',
      12: '9rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    animation: {
      duration: {
        instant: '100ms',
        fast: '200ms',
        normal: '300ms',
        slow: '500ms',
      },
      easing: {
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
    breakpoints: {
      mobile: '0px',
      tablet: '640px',
      desktop: '1024px',
      wide: '1280px',
    },
  };

  const cssVariables = `/* Jasmine Kindergarten Design System - CSS Variables
   Full reference: see tokens/design-tokens.css for copy-paste usage. */

:root {
  /* Colors - Primary */
  --color-primary-50: #fff8f0;
  --color-primary-100: #ffefd9;
  --color-primary-200: #ffddb3;
  --color-primary-300: #ffc88d;
  --color-primary-400: #ffb366;
  --color-primary-500: #ff9940;
  --color-primary-600: #ff7e1a;
  --color-primary-700: #e56500;
  --color-primary-800: #b34f00;
  --color-primary-900: #803900;

  /* Colors - Secondary */
  --color-secondary-50: #f0f9ff;
  --color-secondary-100: #e0f2fe;
  --color-secondary-200: #bae6fd;
  --color-secondary-300: #7dd3fc;
  --color-secondary-400: #38bdf8;
  --color-secondary-500: #0ea5e9;
  --color-secondary-600: #0284c7;
  --color-secondary-700: #0369a1;
  --color-secondary-800: #075985;
  --color-secondary-900: #0c4a6e;

  /* Colors - Accent */
  --color-accent-50: #fff1f7;
  --color-accent-100: #ffe4f0;
  --color-accent-200: #ffc9e1;
  --color-accent-300: #ffa3ce;
  --color-accent-400: #ff6bae;
  --color-accent-500: #ff3d94;
  --color-accent-600: #f01b75;
  --color-accent-700: #d10d5e;
  --color-accent-800: #a80d4d;
  --color-accent-900: #8d0f44;

  /* Colors - Neutral */
  --color-neutral-50: #fafaf9;
  --color-neutral-100: #f5f5f4;
  --color-neutral-200: #e7e5e4;
  --color-neutral-300: #d6d3d1;
  --color-neutral-400: #a8a29e;
  --color-neutral-500: #78716c;
  --color-neutral-600: #57534e;
  --color-neutral-700: #44403c;
  --color-neutral-800: #292524;
  --color-neutral-900: #1c1917;

  /* Colors - Semantic */
  --color-success-50: #f0fdf4;
  --color-success-100: #dcfce7;
  --color-success-300: #86efac;
  --color-success-500: #22c55e;
  --color-success-700: #15803d;
  --color-warning-50: #fffbeb;
  --color-warning-100: #fef3c7;
  --color-warning-300: #fcd34d;
  --color-warning-500: #f59e0b;
  --color-warning-700: #b45309;
  --color-error-50: #fef2f2;
  --color-error-100: #fee2e2;
  --color-error-300: #fca5a5;
  --color-error-500: #ef4444;
  --color-error-700: #b91c1c;
  --color-info-50: #eff6ff;
  --color-info-100: #dbeafe;
  --color-info-300: #93c5fd;
  --color-info-500: #3b82f6;
  --color-info-700: #1d4ed8;

  /* Spacing (8px grid) */
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 1rem;
  --spacing-4: 1.5rem;
  --spacing-5: 2rem;
  --spacing-6: 3rem;
  --spacing-7: 4rem;
  --spacing-8: 5rem;
  --spacing-9: 6rem;
  --spacing-10: 7rem;
  --spacing-11: 8rem;
  --spacing-12: 9rem;

  /* Typography */
  --font-family-display: 'Quicksand', 'Nunito', sans-serif;
  --font-family-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', Consolas, monospace;
  --font-size-display-1: clamp(2.75rem, 6vw, 4rem);
  --font-size-display-2: clamp(2.25rem, 5vw, 3rem);
  --font-size-heading-1: clamp(2rem, 4vw, 2.5rem);
  --font-size-heading-2: clamp(1.5rem, 3vw, 2rem);
  --font-size-heading-3: clamp(1.25rem, 2.5vw, 1.5rem);
  --font-size-body-lg: 1.125rem;
  --font-size-body: 1rem;
  --font-size-body-sm: 0.875rem;
  --font-size-caption: 0.75rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);

  /* Animation */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
`;

  const downloadJSON = () => {
    const dataStr = JSON.stringify(designTokens, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'jasmine-kindergarten-tokens.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const downloadCSS = () => {
    const dataStr = cssVariables;
    const dataUri = 'data:text/css;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'jasmine-kindergarten-tokens.css';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="space-y-16 lg:space-y-20">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-4 sm:mb-6">Design Tokens</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          Download the complete design system tokens in JSON or CSS format for easy integration 
          into your development workflow.
        </p>
      </div>

      {/* Download Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border-2 border-[var(--color-primary-300)] rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white dark:bg-[var(--color-neutral-100)] rounded-xl shadow-sm">
              <span className="text-2xl">📦</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">JSON Tokens</h2>
              <p className="text-sm text-[var(--color-neutral-600)]">Complete design system data</p>
            </div>
          </div>
          <p className="text-sm text-[var(--color-neutral-700)] mb-6">
            Structured JSON format perfect for design tools like Figma, or for importing into 
            JavaScript/TypeScript projects. Includes colors, typography, spacing, and animation tokens.
          </p>
          <button
            onClick={downloadJSON}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span>Download JSON</span>
          </button>
        </div>

        <div className="p-8 bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-primary-50)] border-2 border-[var(--color-secondary-300)] rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white dark:bg-[var(--color-neutral-100)] rounded-xl shadow-sm">
              <span className="text-2xl">🎨</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">CSS Variables</h2>
              <p className="text-sm text-[var(--color-neutral-600)]">Ready-to-use CSS custom properties</p>
            </div>
          </div>
          <p className="text-sm text-[var(--color-neutral-700)] mb-6">
            CSS custom properties (CSS variables) ready to be imported into your stylesheets. 
            Works with any CSS framework or vanilla CSS. Simply import and start using.
          </p>
          <button
            onClick={downloadCSS}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-secondary-600)] hover:bg-[var(--color-secondary-700)] text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            <span>Download CSS</span>
          </button>
        </div>
      </div>

      {/* Token Preview - Colors */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Color Tokens</h2>
          <button
            onClick={() => copyToClipboard(JSON.stringify(designTokens.colors, null, 2), 'colors')}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-200)] text-[var(--color-neutral-700)] rounded-lg transition-colors text-sm"
          >
            {copiedSection === 'colors' ? <Check size={16} /> : <Copy size={16} />}
            <span>{copiedSection === 'colors' ? 'Copied!' : 'Copy JSON'}</span>
          </button>
        </div>

        <div className="p-6 bg-[var(--color-neutral-900)] rounded-xl overflow-x-auto">
          <pre className="text-sm text-[var(--color-neutral-100)]">
            <code>{JSON.stringify(designTokens.colors, null, 2)}</code>
          </pre>
        </div>
      </div>

      {/* Token Preview - Typography */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Typography Tokens</h2>
          <button
            onClick={() => copyToClipboard(JSON.stringify(designTokens.typography, null, 2), 'typography')}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-200)] text-[var(--color-neutral-700)] rounded-lg transition-colors text-sm"
          >
            {copiedSection === 'typography' ? <Check size={16} /> : <Copy size={16} />}
            <span>{copiedSection === 'typography' ? 'Copied!' : 'Copy JSON'}</span>
          </button>
        </div>

        <div className="p-6 bg-[var(--color-neutral-900)] rounded-xl overflow-x-auto">
          <pre className="text-sm text-[var(--color-neutral-100)]">
            <code>{JSON.stringify(designTokens.typography, null, 2)}</code>
          </pre>
        </div>
      </div>

      {/* Token Preview - Spacing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Spacing Tokens</h2>
          <button
            onClick={() => copyToClipboard(JSON.stringify(designTokens.spacing, null, 2), 'spacing')}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-200)] text-[var(--color-neutral-700)] rounded-lg transition-colors text-sm"
          >
            {copiedSection === 'spacing' ? <Check size={16} /> : <Copy size={16} />}
            <span>{copiedSection === 'spacing' ? 'Copied!' : 'Copy JSON'}</span>
          </button>
        </div>

        <div className="p-6 bg-[var(--color-neutral-900)] rounded-xl overflow-x-auto">
          <pre className="text-sm text-[var(--color-neutral-100)]">
            <code>{JSON.stringify(designTokens.spacing, null, 2)}</code>
          </pre>
        </div>
      </div>

      {/* Token Preview - Animation */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Animation Tokens</h2>
          <button
            onClick={() => copyToClipboard(JSON.stringify(designTokens.animation, null, 2), 'animation')}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-200)] text-[var(--color-neutral-700)] rounded-lg transition-colors text-sm"
          >
            {copiedSection === 'animation' ? <Check size={16} /> : <Copy size={16} />}
            <span>{copiedSection === 'animation' ? 'Copied!' : 'Copy JSON'}</span>
          </button>
        </div>

        <div className="p-6 bg-[var(--color-neutral-900)] rounded-xl overflow-x-auto">
          <pre className="text-sm text-[var(--color-neutral-100)]">
            <code>{JSON.stringify(designTokens.animation, null, 2)}</code>
          </pre>
        </div>
      </div>

      {/* CSS Variables Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">CSS Variables</h2>
          <button
            onClick={() => copyToClipboard(cssVariables, 'css')}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-200)] text-[var(--color-neutral-700)] rounded-lg transition-colors text-sm"
          >
            {copiedSection === 'css' ? <Check size={16} /> : <Copy size={16} />}
            <span>{copiedSection === 'css' ? 'Copied!' : 'Copy CSS'}</span>
          </button>
        </div>

        <div className="p-6 bg-[var(--color-neutral-900)] rounded-xl overflow-x-auto">
          <pre className="text-sm text-[var(--color-neutral-100)]">
            <code>{cssVariables}</code>
          </pre>
        </div>
      </div>

      {/* Usage Guide */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-secondary-50)] border border-[var(--color-accent-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-6">Integration Guide</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Using JSON Tokens</h3>
            <div className="space-y-3 text-sm text-[var(--color-neutral-700)]">
              <div>
                <p className="font-medium mb-1">1. Import the JSON file</p>
                <code className="block bg-[var(--color-neutral-900)] text-[var(--color-neutral-100)] px-3 py-2 rounded text-xs">
                  import tokens from './tokens.json'
                </code>
              </div>
              <div>
                <p className="font-medium mb-1">2. Use in your application</p>
                <code className="block bg-[var(--color-neutral-900)] text-[var(--color-neutral-100)] px-3 py-2 rounded text-xs">
                  color: tokens.colors.primary[500]
                </code>
              </div>
              <div>
                <p className="font-medium mb-1">3. Or configure with style-dictionary</p>
                <code className="block bg-[var(--color-neutral-900)] text-[var(--color-neutral-100)] px-3 py-2 rounded text-xs">
                  npx style-dictionary build
                </code>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">Using CSS Variables</h3>
            <div className="space-y-3 text-sm text-[var(--color-neutral-700)]">
              <div>
                <p className="font-medium mb-1">1. Import the CSS file</p>
                <code className="block bg-[var(--color-neutral-900)] text-[var(--color-neutral-100)] px-3 py-2 rounded text-xs">
                  @import './tokens.css';
                </code>
              </div>
              <div>
                <p className="font-medium mb-1">2. Reference in your styles</p>
                <code className="block bg-[var(--color-neutral-900)] text-[var(--color-neutral-100)] px-3 py-2 rounded text-xs">
                  color: var(--color-primary-500);
                </code>
              </div>
              <div>
                <p className="font-medium mb-1">3. Works with any framework</p>
                <code className="block bg-[var(--color-neutral-900)] text-[var(--color-neutral-100)] px-3 py-2 rounded text-xs">
                  Compatible with React, Vue, Angular, etc.
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white dark:bg-[var(--color-neutral-100)] rounded-xl">
          <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Figma Integration</h3>
          <p className="text-sm text-[var(--color-neutral-700)] mb-3">
            Import the JSON tokens into Figma using the Tokens Studio plugin for seamless design-to-development handoff.
          </p>
          <ol className="space-y-2 text-sm text-[var(--color-neutral-700)]">
            <li className="flex items-start gap-2">
              <span className="font-medium text-[var(--color-primary-600)]">1.</span>
              <span>Install the Tokens Studio (Figma Tokens) plugin in Figma</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-[var(--color-primary-600)]">2.</span>
              <span>Import the downloaded JSON file into the plugin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-[var(--color-primary-600)]">3.</span>
              <span>Apply tokens to your Figma components and styles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-[var(--color-primary-600)]">4.</span>
              <span>Keep design and code in sync with a single source of truth</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Standalone Token Files */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border border-[var(--color-primary-200)]">
        <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Standalone Token Files</h3>
        <p className="text-sm text-[var(--color-neutral-700)] mb-4">
          Pre-built token bundles are available in the <code className="bg-white/70 px-1.5 py-0.5 rounded text-xs">tokens/</code> directory:
        </p>
        <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
          <li className="flex items-start gap-2">
            <span className="font-mono text-[var(--color-primary-600)]">tokens/design-tokens.json</span> — W3C Design Token format; import into Figma Tokens / Style Dictionary
          </li>
          <li className="flex items-start gap-2">
            <span className="font-mono text-[var(--color-primary-600)]">tokens/design-tokens.css</span> — Complete CSS custom properties with <code className="bg-white/70 px-1 py-0.5 rounded text-xs">:root</code> and <code className="bg-white/70 px-1 py-0.5 rounded text-xs">.dark</code> blocks
          </li>
        </ul>
      </div>

      {/* Version Info */}
      <div className="p-6 rounded-xl bg-[var(--color-neutral-100)] border border-[var(--color-neutral-300)]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-1">Design System Version</h3>
            <p className="text-sm text-[var(--color-neutral-600)]">
              Last updated: February 16, 2026
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block px-4 py-2 bg-[var(--color-primary-500)] text-white rounded-lg font-bold">
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
