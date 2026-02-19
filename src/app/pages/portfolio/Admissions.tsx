import { useState } from 'react';
import { Calendar, FileText, Users, CheckCircle, Clock, DollarSign } from 'lucide-react';

export default function PortfolioAdmissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    tourDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours to confirm your visit.');
  };

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-neutral-900)] leading-tight">
          Begin Your Child's Journey
        </h1>
        <h2 className="text-2xl lg:text-3xl text-[var(--color-neutral-600)] max-w-4xl mx-auto font-medium">
          Simple enrollment process. Transparent pricing. No pressure, just possibilities.
        </h2>
      </section>

      {/* Enrollment Steps */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[var(--color-neutral-900)] mb-16">
          How to Enroll in 4 Easy Steps
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Schedule a Tour</h3>
            <p className="text-[var(--color-neutral-700)]">
              Visit our campus, meet educators, see classrooms in action. Book online or call us.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-primary-500)] flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Submit Application</h3>
            <p className="text-[var(--color-neutral-700)]">
              Complete enrollment form and provide required documents. We review within 48 hours.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-secondary-500)] flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Trial Day</h3>
            <p className="text-[var(--color-neutral-700)]">
              Your child experiences a full day with us. See if it's the right fit—no obligation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--color-success-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
              4
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-3">Confirm & Start</h3>
            <p className="text-[var(--color-neutral-700)]">
              Finalize paperwork, pay enrollment fee, and choose your start date. Welcome to Jasmine!
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto">
        <div className="p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] border-2 border-[var(--color-primary-200)] shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-4">
              Schedule Your Campus Tour
            </h2>
            <p className="text-xl text-[var(--color-neutral-600)]">
              See why families choose Jasmine. Tours available Monday-Friday, 9 AM-3 PM.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                  Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                  Child's Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
                  placeholder="Child's full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                  Child's Age *
                </label>
                <select
                  required
                  value={formData.childAge}
                  onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
                >
                  <option value="">Select age</option>
                  <option value="2">2 years old</option>
                  <option value="3">3 years old</option>
                  <option value="4">4 years old</option>
                  <option value="5">5 years old</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                  Program Interest *
                </label>
                <select
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
                >
                  <option value="">Select program</option>
                  <option value="toddler">Toddler (Ages 2-3)</option>
                  <option value="prek">Pre-K (Ages 3-4)</option>
                  <option value="kindergarten">Kindergarten (Ages 4-5)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                Preferred Tour Date *
              </label>
              <input
                type="date"
                required
                value={formData.tourDate}
                onChange={(e) => setFormData({...formData, tourDate: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                Questions or Special Requests
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all resize-none"
                placeholder="Allergies, special needs, specific questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hover:shadow-2xl text-white font-bold transition-all hover:-translate-y-1 text-lg shadow-xl"
            >
              Confirm My Tour
            </button>

            <p className="text-sm text-center text-[var(--color-neutral-600)]">
              We'll call within 24 hours to confirm your visit. No commitment required.
            </p>
          </form>
        </div>
      </section>

      {/* Pricing Overview */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[var(--color-neutral-900)] mb-16">
          Transparent Pricing & Payment Options
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="p-10 rounded-3xl bg-white border-2 border-[var(--color-neutral-200)] shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-8">One-Time Fees</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-start pb-6 border-b border-[var(--color-neutral-200)]">
                <div>
                  <p className="font-semibold text-[var(--color-neutral-900)]">Registration Fee</p>
                  <p className="text-sm text-[var(--color-neutral-600)]">Paid once upon enrollment</p>
                </div>
                <p className="text-2xl font-bold text-[var(--color-primary-600)]">Rp 5,000,000</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-[var(--color-neutral-900)]">Trial Day (Optional)</p>
                  <p className="text-sm text-[var(--color-neutral-600)]">Credited if you enroll</p>
                </div>
                <p className="text-2xl font-bold text-[var(--color-secondary-600)]">Rp 500,000</p>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-white border-2 border-[var(--color-neutral-200)] shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-8">Monthly Tuition</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-start pb-6 border-b border-[var(--color-neutral-200)]">
                <div>
                  <p className="font-semibold text-[var(--color-neutral-900)]">Toddler Program (Ages 2-3)</p>
                </div>
                <p className="text-2xl font-bold text-[var(--color-primary-600)]">Rp 3,500,000</p>
              </div>
              <div className="flex justify-between items-start pb-6 border-b border-[var(--color-neutral-200)]">
                <div>
                  <p className="font-semibold text-[var(--color-neutral-900)]">Pre-K Program (Ages 3-4)</p>
                </div>
                <p className="text-2xl font-bold text-[var(--color-secondary-600)]">Rp 4,100,000</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-[var(--color-neutral-900)]">Kindergarten (Ages 4-5)</p>
                </div>
                <p className="text-2xl font-bold text-[var(--color-accent-600)]">Rp 4,800,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-[var(--color-success-50)] to-[var(--color-primary-50)] border-2 border-[var(--color-success-200)] max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-4">Payment Plans & Discounts</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-[var(--color-success-600)] shrink-0 mt-0.5" />
              <span className="text-[var(--color-neutral-700)]"><strong>10% sibling discount</strong> for second child</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-[var(--color-success-600)] shrink-0 mt-0.5" />
              <span className="text-[var(--color-neutral-700)]"><strong>5% annual payment</strong> discount if paid upfront</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-[var(--color-success-600)] shrink-0 mt-0.5" />
              <span className="text-[var(--color-neutral-700)]"><strong>Quarterly payment</strong> option available</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={20} className="text-[var(--color-success-600)] shrink-0 mt-0.5" />
              <span className="text-[var(--color-neutral-700)]"><strong>All meals & materials</strong> included—no hidden fees</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[var(--color-neutral-900)] mb-12">
          Required Documents for Enrollment
        </h2>
        
        <div className="p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <FileText size={24} className="text-[var(--color-primary-600)] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-[var(--color-neutral-900)]">Child's Birth Certificate (copy)</p>
                <p className="text-sm text-[var(--color-neutral-600)]">Official copy for age verification</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FileText size={24} className="text-[var(--color-primary-600)] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-[var(--color-neutral-900)]">Parent/Guardian ID (KTP or Passport)</p>
                <p className="text-sm text-[var(--color-neutral-600)]">Photo copy of valid identification</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FileText size={24} className="text-[var(--color-primary-600)] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-[var(--color-neutral-900)]">Immunization Records</p>
                <p className="text-sm text-[var(--color-neutral-600)]">Up-to-date vaccination history from healthcare provider</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FileText size={24} className="text-[var(--color-primary-600)] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-[var(--color-neutral-900)]">Recent Photo (3x4 cm)</p>
                <p className="text-sm text-[var(--color-neutral-600)]">2 photos of your child for student records</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FileText size={24} className="text-[var(--color-primary-600)] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-[var(--color-neutral-900)]">Medical History Form (Provided by us)</p>
                <p className="text-sm text-[var(--color-neutral-600)]">Allergies, medications, special needs, emergency contacts</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
