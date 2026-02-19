import { Link } from 'react-router';
import { ArrowRight, Heart, Shield, Sparkles, Users, Calendar, Award, Star, Quote } from 'lucide-react';

export default function PortfolioHome() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12 lg:py-20">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-semibold shadow-sm">
          <Sparkles size={18} />
          <span>Enrolling for 2026–2027 Academic Year</span>
        </div>
        
        {/* H1: Headline - max 6 words */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-neutral-900)] leading-tight">
          Where Little Minds Flourish
        </h1>
        
        {/* H2: Subheadline - max 15 words */}
        <h2 className="text-2xl lg:text-3xl text-[var(--color-neutral-600)] max-w-4xl mx-auto leading-relaxed font-medium">
          Nurturing joyful learners through play, discovery, and personalized care since 2015
        </h2>
        
        {/* Primary CTA - 2-4 words */}
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <Link 
            to="/portfolio/admissions" 
            className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hover:shadow-2xl text-white font-bold transition-all hover:-translate-y-1 shadow-xl text-lg flex items-center gap-3"
          >
            <span>Schedule a Visit</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </Link>
          <Link 
            to="/portfolio/programs" 
            className="px-10 py-5 rounded-2xl bg-white hover:bg-[var(--color-neutral-50)] text-[var(--color-neutral-900)] font-bold transition-all border-2 border-[var(--color-neutral-300)] hover:border-[var(--color-neutral-400)] text-lg"
          >
            Explore Programs
          </Link>
        </div>
        
        {/* Supporting microcopy - max 90 characters */}
        <p className="text-sm text-[var(--color-neutral-500)] max-w-md mx-auto pt-4">
          Limited spaces available. Join 200+ families who trust us with their child's first steps.
        </p>
      </section>

      {/* Feature/Value Sections - 3 blocks */}
      <section className="grid lg:grid-cols-3 gap-10">
        {/* Block 1 */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-accent-50)] border-2 border-[var(--color-primary-200)] shadow-lg hover:shadow-xl transition-all">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white mb-6 shadow-md">
            <Heart size={32} />
          </div>
          
          {/* H2: Section headline - max 6 words */}
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
            Personalized Growth for Every Child
          </h2>
          
          {/* Short description - max 180 characters */}
          <p className="text-[var(--color-neutral-600)] leading-relaxed mb-6">
            We see each child as unique. Our educators adapt to individual learning styles, ensuring your child thrives at their own pace.
          </p>
          
          {/* Benefit-focused bullet points - 3 items */}
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">1:8 teacher-to-student ratio for focused attention</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">Monthly progress reports with photos and milestones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">Parent-teacher conferences every 8 weeks</span>
            </li>
          </ul>
        </div>

        {/* Block 2 */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--color-secondary-50)] via-white to-[var(--color-primary-50)] border-2 border-[var(--color-secondary-200)] shadow-lg hover:shadow-xl transition-all">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-primary-500)] flex items-center justify-center text-white mb-6 shadow-md">
            <Shield size={32} />
          </div>
          
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
            Safety You Can See and Feel
          </h2>
          
          <p className="text-[var(--color-neutral-600)] leading-relaxed mb-6">
            Your peace of mind matters. Our campus features 24/7 security, live monitoring, and certified health protocols parents can verify anytime.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-secondary-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">Real-time camera access via parent app</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-secondary-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">ISO 9001 certified safety and hygiene standards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-secondary-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">On-site nurse and emergency response team</span>
            </li>
          </ul>
        </div>

        {/* Block 3 */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent-50)] via-white to-[var(--color-secondary-50)] border-2 border-[var(--color-accent-200)] shadow-lg hover:shadow-xl transition-all">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-secondary-500)] flex items-center justify-center text-white mb-6 shadow-md">
            <Sparkles size={32} />
          </div>
          
          <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">
            Play-Based Learning That Prepares for Life
          </h2>
          
          <p className="text-[var(--color-neutral-600)] leading-relaxed mb-6">
            Children learn best through joy. Our bilingual curriculum builds confidence, creativity, and critical thinking—naturally.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">English & Bahasa Indonesia immersion daily</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">STEAM activities tailored for ages 2-5</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent-600)] text-xl shrink-0">✓</span>
              <span className="text-[var(--color-neutral-700)]">Art, music, and outdoor play every single day</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-xl text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Real stories from families who've seen their children thrive
          </p>
        </div>

        {/* 3 Example Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-lg hover:shadow-xl transition-all">
            <Quote size={40} className="text-[var(--color-primary-400)] mb-4" />
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6 italic">
              "My daughter was shy and hesitant at first. Within 3 months at Jasmine, she's now confident, curious, and asks questions about everything. The teachers truly care."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] flex items-center justify-center text-white font-bold">
                SA
              </div>
              <div>
                <p className="font-bold text-[var(--color-neutral-900)]">Sarah Ahmad</p>
                <p className="text-sm text-[var(--color-neutral-500)]">Parent of Aisha, Age 4</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-lg hover:shadow-xl transition-all">
            <Quote size={40} className="text-[var(--color-secondary-400)] mb-4" />
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6 italic">
              "As a first-time parent, I was nervous about childcare. The daily photo updates and transparent communication gave me complete peace of mind. Best decision we made."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-secondary-400)] to-[var(--color-primary-400)] flex items-center justify-center text-white font-bold">
                RW
              </div>
              <div>
                <p className="font-bold text-[var(--color-neutral-900)]">Rina Wijaya</p>
                <p className="text-sm text-[var(--color-neutral-500)]">Parent of Lucas, Age 3</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-lg hover:shadow-xl transition-all">
            <Quote size={40} className="text-[var(--color-accent-400)] mb-4" />
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-6 italic">
              "My son transitioned from home to Jasmine seamlessly. The small class sizes mean he gets the attention he needs. He's learning English naturally while having fun."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent-400)] to-[var(--color-secondary-400)] flex items-center justify-center text-white font-bold">
                DT
              </div>
              <div>
                <p className="font-bold text-[var(--color-neutral-900)]">Dimas Tan</p>
                <p className="text-sm text-[var(--color-neutral-500)]">Parent of Nathan, Age 5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border-2 border-[var(--color-primary-200)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary-600)] mb-2">9+ Years</div>
              <p className="text-[var(--color-neutral-700)] font-medium">Trusted in Jakarta</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-secondary-600)] mb-2">200+</div>
              <p className="text-[var(--color-neutral-700)] font-medium">Happy Families</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-accent-600)] mb-2">1:8</div>
              <p className="text-[var(--color-neutral-700)] font-medium">Teacher-Student Ratio</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-success-600)] mb-2">98%</div>
              <p className="text-[var(--color-neutral-700)] font-medium">Parent Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - 8 high-intent questions */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Clear answers to help you make the right choice for your child
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {/* FAQ 1 */}
          <details className="group p-6 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[var(--color-neutral-900)] text-lg">
              <span>What makes Jasmine different from other kindergartens?</span>
              <span className="text-[var(--color-primary-600)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[var(--color-neutral-700)] leading-relaxed">
              We combine personalized attention (1:8 ratio) with research-backed play-based learning and full transparency. Parents get live camera access, daily photo updates, and detailed progress reports every month. Our bilingual curriculum prepares children for Indonesian and international schools while keeping learning joyful.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="group p-6 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[var(--color-neutral-900)] text-lg">
              <span>How do I know my child will be safe?</span>
              <span className="text-[var(--color-primary-600)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[var(--color-neutral-700)] leading-relaxed">
              Security is our top priority. We provide 24/7 CCTV monitoring accessible via our parent app, ISO 9001 certified safety protocols, fingerprint access control, an on-site nurse, and regular health screenings. Every staff member undergoes background checks and child safety training. You're welcome to visit unannounced anytime.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="group p-6 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[var(--color-neutral-900)] text-lg">
              <span>What are the enrollment fees and payment options?</span>
              <span className="text-[var(--color-primary-600)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[var(--color-neutral-700)] leading-relaxed">
              Registration fee is Rp 5,000,000 (one-time). Monthly tuition ranges from Rp 3,500,000 to Rp 4,800,000 depending on program and age group. We offer flexible payment plans (monthly, quarterly, or annual with discounts) and sibling discounts of 10%. All meals, snacks, learning materials, and activities are included—no hidden fees.
            </p>
          </details>

          {/* FAQ 4 */}
          <details className="group p-6 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[var(--color-neutral-900)] text-lg">
              <span>Can I visit the school before enrolling?</span>
              <span className="text-[var(--color-primary-600)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[var(--color-neutral-700)] leading-relaxed">
              Absolutely! We encourage it. Schedule a personalized campus tour where you'll meet our educators, see classrooms in action, and ask any questions. Most parents visit 2-3 times before enrolling. We also offer trial days (Rp 500,000 credited toward enrollment) so your child can experience a full day with us. Book online or call +62 21 1234 5678.
            </p>
          </details>

          {/* FAQ 5 */}
          <details className="group p-6 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[var(--color-neutral-900)] text-lg">
              <span>What if my child has special needs or allergies?</span>
              <span className="text-[var(--color-primary-600)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[var(--color-neutral-700)] leading-relaxed">
              We welcome all children and work closely with parents to create individualized support plans. Our teachers are trained in inclusive education and dietary management. We accommodate food allergies, sensory sensitivities, and developmental needs. During enrollment, we conduct a comprehensive intake to ensure we can meet your child's specific requirements effectively.
            </p>
          </details>

          {/* FAQ 6 */}
          <details className="group p-6 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[var(--color-neutral-900)] text-lg">
              <span>How do you handle children who don't speak English yet?</span>
              <span className="text-[var(--color-primary-600)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[var(--color-neutral-700)] leading-relaxed">
              Most of our students start with little to no English—that's normal! Our bilingual approach means teachers use both English and Bahasa Indonesia naturally throughout the day. Children learn through immersion, songs, stories, and play. Within 6 months, most children understand and use basic English confidently. We never force; we make it fun.
            </p>
          </details>

          {/* FAQ 7 */}
          <details className="group p-6 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[var(--color-neutral-900)] text-lg">
              <span>What are the operating hours and holiday schedules?</span>
              <span className="text-[var(--color-primary-600)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[var(--color-neutral-700)] leading-relaxed">
              We're open Monday to Friday, 7:00 AM to 6:00 PM. Half-day programs run 8:00 AM to 12:00 PM; full-day is 8:00 AM to 4:00 PM. Extended care is available before and after core hours. We follow the Indonesian school calendar with breaks for national holidays, Lebaran, and year-end. A detailed calendar is provided at enrollment.
            </p>
          </details>

          {/* FAQ 8 */}
          <details className="group p-6 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-all">
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[var(--color-neutral-900)] text-lg">
              <span>How quickly can my child start after enrollment?</span>
              <span className="text-[var(--color-primary-600)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-[var(--color-neutral-700)] leading-relaxed">
              Once enrollment is complete, children can typically start within 1-2 weeks. We schedule a gradual orientation (2-3 shorter days) to help your child adjust comfortably. Due to limited spots and high demand, we recommend applying at least 1 month before your desired start date. Current wait times vary by age group—contact us for availability.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-8 lg:px-16 rounded-3xl bg-gradient-to-br from-[var(--color-primary-500)] via-[var(--color-accent-500)] to-[var(--color-secondary-500)] text-white text-center shadow-2xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to See the Difference?
        </h2>
        <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
          Join us for a campus tour and meet the educators who will nurture your child's potential.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            to="/portfolio/admissions" 
            className="px-10 py-5 rounded-2xl bg-white text-[var(--color-primary-600)] font-bold transition-all hover:shadow-2xl hover:-translate-y-1 text-lg"
          >
            Book Your Visit Today
          </Link>
          <a 
            href="tel:+622112345678" 
            className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-bold transition-all hover:bg-white/20 border-2 border-white/40 text-lg"
          >
            Call +62 21 1234 5678
          </a>
        </div>
        <p className="text-sm mt-6 opacity-80">
          Limited spots available for 2026-2027. Early enrollment discounts end March 31.
        </p>
      </section>
    </div>
  );
}
