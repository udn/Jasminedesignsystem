import { Heart, Award, Users, Target, Lightbulb, BookOpen } from 'lucide-react';

export default function PortfolioAbout() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-neutral-900)] leading-tight">
          Our Story, Your Child's Future
        </h1>
        <h2 className="text-2xl lg:text-3xl text-[var(--color-neutral-600)] max-w-4xl mx-auto leading-relaxed font-medium">
          Nine years of nurturing confident, curious, compassionate learners in the heart of Jakarta
        </h2>
      </section>

      {/* Our Mission & Vision */}
      <section className="grid lg:grid-cols-2 gap-12">
        <div className="p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] to-white border-2 border-[var(--color-primary-200)] shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white mb-6 shadow-md">
            <Target size={32} />
          </div>
          <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-6">Our Mission</h2>
          <p className="text-lg text-[var(--color-neutral-700)] leading-relaxed mb-6">
            To create a nurturing environment where every child feels valued, develops confidence through play-based discovery, and builds the foundation for lifelong learning.
          </p>
          <p className="text-[var(--color-neutral-600)] leading-relaxed">
            We believe childhood is precious. Our approach honors each child's unique pace while fostering curiosity, creativity, and social-emotional intelligence that extends far beyond academics.
          </p>
        </div>

        <div className="p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-secondary-50)] to-white border-2 border-[var(--color-secondary-200)] shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-primary-500)] flex items-center justify-center text-white mb-6 shadow-md">
            <Lightbulb size={32} />
          </div>
          <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-6">Our Vision</h2>
          <p className="text-lg text-[var(--color-neutral-700)] leading-relaxed mb-6">
            To be Indonesia's most trusted early education partner—where families find peace of mind and children discover their potential through joy, not pressure.
          </p>
          <p className="text-[var(--color-neutral-600)] leading-relaxed">
            By 2030, we envision expanding our model to serve 1,000+ families while maintaining the intimate, personalized care that defines Jasmine Kindergarten.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-[var(--color-neutral-600)] max-w-3xl mx-auto">
            The principles that guide everything we do, every single day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center text-3xl mb-4">
              💝
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Love & Care</h3>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              Every child deserves to feel loved, safe, and supported. We treat each student as our own, with patience, kindness, and genuine affection.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary-100)] flex items-center justify-center text-3xl mb-4">
              🌟
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Excellence</h3>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              We continuously improve our methods, train our educators, and invest in research-backed practices that deliver real developmental results.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-100)] flex items-center justify-center text-3xl mb-4">
              🤝
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Integrity</h3>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              Transparency, honesty, and accountability define our relationships with families. What we promise, we deliver—no hidden fees, no surprises.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-success-100)] flex items-center justify-center text-3xl mb-4">
              🎨
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Creativity</h3>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              We encourage imagination, experimentation, and self-expression. Learning happens through play, art, music, and hands-on exploration.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-warning-100)] flex items-center justify-center text-3xl mb-4">
              🌍
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Inclusivity</h3>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              We celebrate diversity and welcome children from all backgrounds. Every family, culture, and perspective enriches our community.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-info-100)] flex items-center justify-center text-3xl mb-4">
              🌱
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Growth Mindset</h3>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              We teach children that abilities develop through effort. Mistakes are learning opportunities. Challenges help us grow stronger together.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-4">
            Meet Our Dedicated Educators
          </h2>
          <p className="text-xl text-[var(--color-neutral-600)] max-w-3xl mx-auto">
            Experienced, certified professionals who make learning joyful every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg">
              MS
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-2">Maya Sari, M.Ed.</h3>
            <p className="text-[var(--color-primary-600)] font-semibold mb-4">Founder & Principal</p>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              15+ years in early childhood education. Master's degree from Columbia University. Former consultant to Indonesia's Ministry of Education.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--color-secondary-400)] to-[var(--color-primary-400)] flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg">
              LN
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-2">Linda Novita, S.Psi.</h3>
            <p className="text-[var(--color-secondary-600)] font-semibold mb-4">Head of Curriculum</p>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              Child psychology specialist with 12 years experience. Certified in Montessori and Reggio Emilia approaches. Parent of two Jasmine alumni.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--color-accent-400)] to-[var(--color-secondary-400)] flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg">
              AK
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-2">Andi Kurniawan, S.Pd.</h3>
            <p className="text-[var(--color-accent-600)] font-semibold mb-4">Lead Teacher, Age 4-5</p>
            <p className="text-[var(--color-neutral-700)] leading-relaxed">
              Bachelor's in Early Childhood Education. 10 years teaching experience. Specializes in bilingual literacy and STEAM activities.
            </p>
          </div>
        </div>

        <div className="mt-12 p-10 rounded-2xl bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border-2 border-[var(--color-primary-200)] text-center">
          <p className="text-lg text-[var(--color-neutral-700)] leading-relaxed">
            <strong>All educators</strong> hold certified degrees in early childhood education or child psychology, undergo annual training, and pass comprehensive background checks. Our teacher-to-student ratio of 1:8 ensures your child receives focused, individualized attention.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-4">
            Our Educational Philosophy
          </h2>
          <p className="text-xl text-[var(--color-neutral-600)] max-w-3xl mx-auto">
            Research-backed methods meet real-world care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center">
                <BookOpen size={24} className="text-[var(--color-primary-600)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-neutral-900)]">Play-Based Learning</h3>
            </div>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
              Children learn best through hands-on exploration, not rote memorization. Our curriculum integrates play with purpose—building cognitive, social, and motor skills naturally.
            </p>
            <ul className="space-y-2 text-[var(--color-neutral-600)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary-600)]">•</span>
                <span>Sensory play develops fine motor skills and creativity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary-600)]">•</span>
                <span>Group activities teach cooperation and communication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-primary-600)]">•</span>
                <span>Problem-solving games build critical thinking</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary-100)] flex items-center justify-center">
                <Heart size={24} className="text-[var(--color-secondary-600)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-neutral-900)]">Social-Emotional Focus</h3>
            </div>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
              Academic skills matter, but emotional intelligence is foundational. We teach empathy, self-regulation, and resilience through daily practice.
            </p>
            <ul className="space-y-2 text-[var(--color-neutral-600)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-secondary-600)]">•</span>
                <span>Emotion recognition and expression exercises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-secondary-600)]">•</span>
                <span>Conflict resolution guided by trained educators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-secondary-600)]">•</span>
                <span>Mindfulness and calming techniques for stress</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-100)] flex items-center justify-center">
                <Users size={24} className="text-[var(--color-accent-600)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-neutral-900)]">Parent Partnership</h3>
            </div>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
              You're not dropping off your child—you're joining our community. We maintain open communication and involve families in the learning journey.
            </p>
            <ul className="space-y-2 text-[var(--color-neutral-600)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-600)]">•</span>
                <span>Daily photo updates via secure app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-600)]">•</span>
                <span>Bi-monthly parent-teacher conferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-600)]">•</span>
                <span>Monthly family events and workshops</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-success-100)] flex items-center justify-center">
                <Award size={24} className="text-[var(--color-success-600)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-neutral-900)]">Bilingual Excellence</h3>
            </div>
            <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
              English and Bahasa Indonesia are used naturally throughout the day. Children absorb both languages through immersion, not forced instruction.
            </p>
            <ul className="space-y-2 text-[var(--color-neutral-600)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-600)]">•</span>
                <span>Native and fluent speakers in every classroom</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-600)]">•</span>
                <span>Stories, songs, and games in both languages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-600)]">•</span>
                <span>No pressure—learning happens through joy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accreditation & Recognition */}
      <section className="py-12 px-10 rounded-3xl bg-gradient-to-br from-[var(--color-neutral-900)] to-[var(--color-neutral-800)] text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Accreditation & Recognition</h2>
          <p className="text-xl text-[var(--color-neutral-300)]">
            Certified excellence you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-lg font-bold mb-2">ISO 9001 Certified</h3>
            <p className="text-sm text-[var(--color-neutral-400)]">Quality management & safety</p>
          </div>
          <div>
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-lg font-bold mb-2">Licensed by Kemendikbud</h3>
            <p className="text-sm text-[var(--color-neutral-400)]">Ministry of Education approved</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-lg font-bold mb-2">Top 10 in Jakarta</h3>
            <p className="text-sm text-[var(--color-neutral-400)]">Parents' Choice Awards 2025</p>
          </div>
          <div>
            <div className="text-5xl mb-4">💯</div>
            <h3 className="text-lg font-bold mb-2">Health Certified</h3>
            <p className="text-sm text-[var(--color-neutral-400)]">Dinkes Jakarta standards</p>
          </div>
        </div>
      </section>
    </div>
  );
}
