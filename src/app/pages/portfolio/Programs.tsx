import { Link } from 'react-router';
import { Baby, Smile, Zap, Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export default function PortfolioPrograms() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-neutral-900)] leading-tight">
          Programs That Grow With Your Child
        </h1>
        <h2 className="text-2xl lg:text-3xl text-[var(--color-neutral-600)] max-w-4xl mx-auto leading-relaxed font-medium">
          Age-appropriate curricula designed for development, discovery, and delight
        </h2>
      </section>

      {/* Program Overview */}
      <section className="grid lg:grid-cols-3 gap-10">
        {/* Toddler Program */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-accent-50)] border-2 border-[var(--color-primary-300)] shadow-lg hover:shadow-2xl transition-all">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white mb-8 shadow-md">
            <Baby size={40} />
          </div>
          
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-2">Toddler Program</h2>
            <p className="text-xl text-[var(--color-primary-600)] font-semibold">Ages 2-3 years</p>
          </div>
          
          <p className="text-[var(--color-neutral-700)] leading-relaxed mb-8">
            Gentle introduction to structured learning through sensory play, music, movement, and social interaction. Building confidence one smile at a time.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-[var(--color-primary-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Hours:</strong> Half-day (8AM-12PM) or Full-day (8AM-4PM)</span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={20} className="text-[var(--color-primary-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Class Size:</strong> Maximum 8 students, 1 teacher</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-[var(--color-primary-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Days:</strong> Monday to Friday</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-4">Program Highlights:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-primary-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Potty training support with patience and positivity</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-primary-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Sensory bins, water play, and tactile exploration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-primary-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Circle time with songs, stories, and movement</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-primary-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Introduction to sharing, taking turns, and routines</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-white border-2 border-[var(--color-primary-200)] mb-6">
            <p className="text-2xl font-bold text-[var(--color-primary-600)] mb-1">Rp 3,500,000</p>
            <p className="text-sm text-[var(--color-neutral-600)]">per month • All meals included</p>
          </div>
          
          <Link 
            to="/portfolio/admissions" 
            className="block text-center px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hover:shadow-xl text-white font-bold transition-all hover:-translate-y-0.5"
          >
            Enroll Now
          </Link>
        </div>

        {/* Pre-K Program */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--color-secondary-50)] via-white to-[var(--color-primary-50)] border-2 border-[var(--color-secondary-300)] shadow-lg hover:shadow-2xl transition-all">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-primary-500)] flex items-center justify-center text-white mb-8 shadow-md">
            <Smile size={40} />
          </div>
          
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-2">Pre-K Program</h2>
            <p className="text-xl text-[var(--color-secondary-600)] font-semibold">Ages 3-4 years</p>
          </div>
          
          <p className="text-[var(--color-neutral-700)] leading-relaxed mb-8">
            Expanding curiosity through hands-on projects, early literacy, basic math concepts, and cooperative play. Watch independence bloom.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-[var(--color-secondary-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Hours:</strong> Half-day (8AM-12PM) or Full-day (8AM-4PM)</span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={20} className="text-[var(--color-secondary-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Class Size:</strong> Maximum 10 students, 1 teacher</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-[var(--color-secondary-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Days:</strong> Monday to Friday</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-4">Program Highlights:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-secondary-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Letter recognition and phonics through play</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-secondary-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Counting, shapes, patterns, and sorting games</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-secondary-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Art projects, dramatic play, and storytelling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-secondary-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Introduction to science experiments and nature study</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-white border-2 border-[var(--color-secondary-200)] mb-6">
            <p className="text-2xl font-bold text-[var(--color-secondary-600)] mb-1">Rp 4,100,000</p>
            <p className="text-sm text-[var(--color-neutral-600)]">per month • All meals included</p>
          </div>
          
          <Link 
            to="/portfolio/admissions" 
            className="block text-center px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-secondary-500)] to-[var(--color-primary-500)] hover:shadow-xl text-white font-bold transition-all hover:-translate-y-0.5"
          >
            Enroll Now
          </Link>
        </div>

        {/* Kindergarten Program */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent-50)] via-white to-[var(--color-secondary-50)] border-2 border-[var(--color-accent-300)] shadow-lg hover:shadow-2xl transition-all">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-secondary-500)] flex items-center justify-center text-white mb-8 shadow-md">
            <Zap size={40} />
          </div>
          
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-2">Kindergarten Program</h2>
            <p className="text-xl text-[var(--color-accent-600)] font-semibold">Ages 4-5 years</p>
          </div>
          
          <p className="text-[var(--color-neutral-700)] leading-relaxed mb-8">
            School-readiness focus with reading, writing, problem-solving, and social skills. Preparing confident, capable learners for primary school success.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-[var(--color-accent-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Hours:</strong> Half-day (8AM-12PM) or Full-day (8AM-4PM)</span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={20} className="text-[var(--color-accent-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Class Size:</strong> Maximum 12 students, 1 teacher</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-[var(--color-accent-600)] shrink-0" />
              <span className="text-[var(--color-neutral-700)]"><strong>Days:</strong> Monday to Friday</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-4">Program Highlights:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-accent-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Reading fluency and writing practice daily</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-accent-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Math skills: addition, subtraction, and logic puzzles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-accent-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">STEAM projects and critical thinking challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[var(--color-accent-600)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-neutral-700)]">Leadership skills, presentations, and teamwork</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-white border-2 border-[var(--color-accent-200)] mb-6">
            <p className="text-2xl font-bold text-[var(--color-accent-600)] mb-1">Rp 4,800,000</p>
            <p className="text-sm text-[var(--color-neutral-600)]">per month • All meals included</p>
          </div>
          
          <Link 
            to="/portfolio/admissions" 
            className="block text-center px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-secondary-500)] hover:shadow-xl text-white font-bold transition-all hover:-translate-y-0.5"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 px-10 lg:px-16 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] border-2 border-[var(--color-primary-200)] shadow-lg">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-12 text-center">
          What's Included in Every Program
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center shrink-0 text-2xl">
              🍎
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">Healthy Meals & Snacks</h3>
              <p className="text-sm text-[var(--color-neutral-700)]">Nutritious breakfast, lunch, and 2 snacks daily. Accommodates allergies and dietary preferences.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary-100)] flex items-center justify-center shrink-0 text-2xl">
              📚
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">All Learning Materials</h3>
              <p className="text-sm text-[var(--color-neutral-700)]">Books, art supplies, STEAM kits, and educational toys. No extra costs for activities.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-100)] flex items-center justify-center shrink-0 text-2xl">
              📱
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">Parent App Access</h3>
              <p className="text-sm text-[var(--color-neutral-700)]">Real-time photos, daily reports, and live camera feeds. Stay connected anytime.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-success-100)] flex items-center justify-center shrink-0 text-2xl">
              👕
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">Uniforms & Supplies</h3>
              <p className="text-sm text-[var(--color-neutral-700)]">2 sets of uniforms, bags, and water bottles included in first month's fee.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-warning-100)] flex items-center justify-center shrink-0 text-2xl">
              🎨
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">Enrichment Activities</h3>
              <p className="text-sm text-[var(--color-neutral-700)]">Weekly music, art, yoga, and outdoor nature walks at no additional charge.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-info-100)] flex items-center justify-center shrink-0 text-2xl">
              💬
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">Progress Tracking</h3>
              <p className="text-sm text-[var(--color-neutral-700)]">Monthly reports, portfolio photos, and bi-monthly parent-teacher conferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Options */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-4">
            Flexible Scheduling Options
          </h2>
          <p className="text-xl text-[var(--color-neutral-600)] max-w-3xl mx-auto">
            We adapt to your family's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm">
            <h3 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">Extended Care</h3>
            <p className="text-[var(--color-neutral-700)] mb-6">
              Need drop-off before 8 AM or pickup after 4 PM? Our extended care runs from 7 AM to 6 PM for working parents.
            </p>
            <p className="text-lg font-bold text-[var(--color-primary-600)]">Rp 300,000/month</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm">
            <h3 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">Summer Camp</h3>
            <p className="text-[var(--color-neutral-700)] mb-6">
              June-July special programs with field trips, water play, and themed weeks. Keep learning fun during school breaks!
            </p>
            <p className="text-lg font-bold text-[var(--color-secondary-600)]">Rp 2,500,000/month</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 lg:px-16 rounded-3xl bg-gradient-to-br from-[var(--color-neutral-900)] to-[var(--color-neutral-800)] text-white text-center shadow-2xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Find the Perfect Program for Your Child
        </h2>
        <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95">
          Still deciding? Schedule a tour to see our programs in action and meet our educators.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            to="/portfolio/admissions" 
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white font-bold transition-all hover:shadow-2xl hover:-translate-y-1 text-lg"
          >
            Schedule a Tour
          </Link>
          <a 
            href="tel:+622112345678" 
            className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-bold transition-all hover:bg-white/20 border-2 border-white/40 text-lg"
          >
            Call Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
