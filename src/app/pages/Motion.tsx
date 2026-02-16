import { motion } from 'motion/react';
import { useState } from 'react';
import { Heart, Star, Bell } from 'lucide-react';

export default function Motion() {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="space-y-16 lg:space-y-20">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-4 sm:mb-6">Motion Guidelines</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          Motion brings our interfaces to life, creating delightful experiences that feel responsive and playful. 
          Our motion system balances performance with personality.
        </p>
      </div>

      {/* Easing Functions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Easing Curves</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Ease Out</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-4">
              cubic-bezier(0, 0, 0.2, 1) • Most common, elements entering the screen
            </p>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded mb-4">
              transition: all 300ms var(--ease-out);
            </code>
            <div className="h-2 bg-[var(--color-neutral-100)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-full"
                animate={{ width: isAnimating ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
              />
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Ease In</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-4">
              cubic-bezier(0.4, 0, 1, 1) • Elements leaving the screen
            </p>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded mb-4">
              transition: all 300ms var(--ease-in);
            </code>
            <div className="h-2 bg-[var(--color-neutral-100)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-secondary-500)] to-[var(--color-primary-500)] rounded-full"
                animate={{ width: isAnimating ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: [0.4, 0, 1, 1] }}
              />
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Ease In-Out</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-4">
              cubic-bezier(0.4, 0, 0.2, 1) • Smooth transitions between states
            </p>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded mb-4">
              transition: all 300ms var(--ease-in-out);
            </code>
            <div className="h-2 bg-[var(--color-neutral-100)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-secondary-500)] rounded-full"
                animate={{ width: isAnimating ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-3">Spring</h3>
            <p className="text-sm text-[var(--color-neutral-600)] mb-4">
              cubic-bezier(0.34, 1.56, 0.64, 1) • Playful bounce for special moments
            </p>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded mb-4">
              transition: all 300ms var(--ease-spring);
            </code>
            <div className="h-2 bg-[var(--color-neutral-100)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-full"
                animate={{ width: isAnimating ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={triggerAnimation}
            className="px-6 py-3 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white rounded-lg font-medium transition-colors"
          >
            Trigger Animations
          </button>
        </div>
      </div>

      {/* Duration Ranges */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Duration Ranges</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Instant</h3>
            <p className="text-2xl font-bold text-[var(--color-primary-600)] mb-2">100ms</p>
            <p className="text-sm text-[var(--color-neutral-600)] mb-3">Color changes, small state updates</p>
            <code className="text-xs bg-[var(--color-neutral-100)] px-2 py-1 rounded">--duration-instant</code>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Fast</h3>
            <p className="text-2xl font-bold text-[var(--color-secondary-600)] mb-2">200ms</p>
            <p className="text-sm text-[var(--color-neutral-600)] mb-3">Hover states, tooltips, small movements</p>
            <code className="text-xs bg-[var(--color-neutral-100)] px-2 py-1 rounded">--duration-fast</code>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Normal</h3>
            <p className="text-2xl font-bold text-[var(--color-accent-600)] mb-2">300ms</p>
            <p className="text-sm text-[var(--color-neutral-600)] mb-3">Most transitions, modals, dropdowns</p>
            <code className="text-xs bg-[var(--color-neutral-100)] px-2 py-1 rounded">--duration-normal</code>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">Slow</h3>
            <p className="text-2xl font-bold text-[var(--color-success-600)] mb-2">500ms</p>
            <p className="text-sm text-[var(--color-neutral-600)] mb-3">Page transitions, large movements</p>
            <code className="text-xs bg-[var(--color-neutral-100)] px-2 py-1 rounded">--duration-slow</code>
          </div>
        </div>
      </div>

      {/* Microinteractions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Microinteraction Principles</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Button Press</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white rounded-lg font-medium shadow-lg"
            >
              Press Me
            </motion.button>
            <p className="text-xs text-[var(--color-neutral-500)] mt-3">Scale down on press for tactile feedback</p>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Icon Interaction</h3>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-lg"
              >
                <Heart size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-[var(--color-accent-100)] text-[var(--color-accent-600)] rounded-lg"
              >
                <Star size={24} />
              </motion.button>
            </div>
            <p className="text-xs text-[var(--color-neutral-500)] mt-3">Subtle rotation and scale on hover</p>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Notification</h3>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, -10, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="mx-auto w-fit p-3 bg-[var(--color-error-100)] text-[var(--color-error-600)] rounded-lg relative"
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-error-500)] rounded-full" />
            </motion.div>
            <p className="text-xs text-[var(--color-neutral-500)] mt-3">Attention-grabbing wiggle animation</p>
          </div>
        </div>
      </div>

      {/* Animation Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Common Animation Patterns</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Fade In</h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-accent-100)] rounded-lg text-center"
            >
              Fades in smoothly
            </motion.div>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded mt-3">
              opacity: 0 → 1
            </code>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Slide Up</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-gradient-to-br from-[var(--color-secondary-100)] to-[var(--color-primary-100)] rounded-lg text-center"
            >
              Slides up with fade
            </motion.div>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded mt-3">
              y: 20px → 0, opacity: 0 → 1
            </code>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Scale In</h3>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="p-4 bg-gradient-to-br from-[var(--color-accent-100)] to-[var(--color-secondary-100)] rounded-lg text-center"
            >
              Scales in with bounce
            </motion.div>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded mt-3">
              scale: 0.8 → 1, ease: spring
            </code>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Stagger</h3>
            <div className="space-y-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="p-3 bg-gradient-to-r from-[var(--color-primary-400)] to-[var(--color-accent-400)] rounded-lg text-white text-sm"
                >
                  Item {i + 1}
                </motion.div>
              ))}
            </div>
            <code className="block text-xs bg-[var(--color-neutral-100)] px-3 py-2 rounded mt-3">
              delay: index * 100ms
            </code>
          </div>
        </div>
      </div>

      {/* Loading States */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)]">Loading Animations</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl text-center">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Spinner</h3>
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 border-4 border-[var(--color-neutral-200)] border-t-[var(--color-primary-500)] rounded-full animate-spin" />
            </div>
            <p className="text-xs text-[var(--color-neutral-500)]">Classic loading indicator</p>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl text-center">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Pulse</h3>
            <div className="flex justify-center mb-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-10 h-10 bg-[var(--color-primary-400)] rounded-full"
              />
            </div>
            <p className="text-xs text-[var(--color-neutral-500)]">Breathing effect</p>
          </div>

          <div className="p-6 bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-xl text-center">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-4">Dots</h3>
            <div className="flex justify-center gap-2 mb-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  className="w-3 h-3 bg-[var(--color-primary-500)] rounded-full"
                />
              ))}
            </div>
            <p className="text-xs text-[var(--color-neutral-500)]">Bouncing dots</p>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border border-[var(--color-primary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-6">Motion Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">✓ Do</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use motion to guide attention and provide feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Keep animations under 500ms for most interactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use ease-out for entering elements, ease-in for exiting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Respect user preferences (prefers-reduced-motion)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Test animations on lower-end devices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-500)]">•</span>
                <span>Use subtle animations for professional contexts</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)]">✗ Don't</h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-500)]">•</span>
                <span>Overuse animations - they can be distracting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-500)]">•</span>
                <span>Make animations longer than necessary</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-500)]">•</span>
                <span>Use animation for purely decorative purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-500)]">•</span>
                <span>Ignore accessibility concerns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-500)]">•</span>
                <span>Animate layout-triggering properties (use transform instead)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-error-500)]">•</span>
                <span>Create motion that could trigger vestibular issues</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reduced Motion */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-accent-50)] border border-[var(--color-secondary-200)]">
        <h3 className="text-xl font-semibold text-[var(--color-neutral-900)] mb-3">Reduced Motion Support</h3>
        <p className="text-sm text-[var(--color-neutral-700)] mb-4">
          Always respect the <code className="bg-white/70 px-1.5 py-0.5 rounded text-xs">prefers-reduced-motion</code> media query.
          When a user enables reduced motion, disable non-essential animations and replace them with instant transitions.
        </p>
        <pre className="bg-[var(--color-neutral-900)] text-[var(--color-neutral-100)] p-4 rounded-lg text-xs overflow-x-auto mb-4">
          <code>{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}`}</code>
        </pre>
        <p className="text-xs text-[var(--color-neutral-600)]">
          Essential motion (progress indicators, loading spinners) should use a subtle fade rather than full animation when reduced motion is enabled.
        </p>
      </div>

      {/* Performance Tips */}
      <div className="p-6 rounded-xl bg-[var(--color-neutral-900)] text-white">
        <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-medium text-[var(--color-primary-300)] mb-2">Preferred Properties</p>
            <ul className="space-y-1 text-[var(--color-neutral-300)]">
              <li>• transform (translate, scale, rotate)</li>
              <li>• opacity</li>
              <li>• filter (use sparingly)</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-[var(--color-error-300)] mb-2">Avoid Animating</p>
            <ul className="space-y-1 text-[var(--color-neutral-300)]">
              <li>• width/height (causes reflow)</li>
              <li>• top/left (use transform instead)</li>
              <li>• box-shadow (use filter: drop-shadow)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
