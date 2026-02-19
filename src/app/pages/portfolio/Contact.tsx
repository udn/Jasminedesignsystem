import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-neutral-900)] leading-tight">
          We're Here to Help
        </h1>
        <h2 className="text-2xl lg:text-3xl text-[var(--color-neutral-600)] max-w-4xl mx-auto font-medium">
          Questions? Schedule a visit? Let's connect and start the conversation.
        </h2>
      </section>

      {/* Contact Methods */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <a 
          href="tel:+622112345678"
          className="group p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-white border-2 border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] hover:shadow-lg transition-all text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
            <Phone size={28} />
          </div>
          <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Call Us</h3>
          <p className="text-lg text-[var(--color-primary-600)] font-semibold">+62 21 1234 5678</p>
          <p className="text-sm text-[var(--color-neutral-600)] mt-2">Mon-Fri, 8 AM - 5 PM</p>
        </a>

        <a 
          href="https://wa.me/622112345678"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-2xl bg-gradient-to-br from-[var(--color-success-50)] to-white border-2 border-[var(--color-success-200)] hover:border-[var(--color-success-400)] hover:shadow-lg transition-all text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-success-500)] to-[var(--color-success-600)] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
            <MessageCircle size={28} />
          </div>
          <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">WhatsApp</h3>
          <p className="text-lg text-[var(--color-success-600)] font-semibold">+62 812 3456 7890</p>
          <p className="text-sm text-[var(--color-neutral-600)] mt-2">Fast response guaranteed</p>
        </a>

        <a 
          href="mailto:hello@jasminekindergarten.com"
          className="group p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-white border-2 border-[var(--color-secondary-200)] hover:border-[var(--color-secondary-400)] hover:shadow-lg transition-all text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-primary-500)] flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
            <Mail size={28} />
          </div>
          <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Email Us</h3>
          <p className="text-sm text-[var(--color-secondary-600)] font-semibold break-words">hello@jasmine<wbr />kindergarten.com</p>
          <p className="text-sm text-[var(--color-neutral-600)] mt-2">24-hour reply time</p>
        </a>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-accent-50)] to-white border-2 border-[var(--color-accent-200)] text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-secondary-500)] flex items-center justify-center text-white mb-6 shadow-md">
            <MapPin size={28} />
          </div>
          <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Visit Us</h3>
          <p className="text-sm text-[var(--color-neutral-700)]">Jl. Pendidikan No. 123</p>
          <p className="text-sm text-[var(--color-neutral-700)]">Menteng, Jakarta Pusat 10310</p>
          <p className="text-sm text-[var(--color-accent-600)] mt-2 font-semibold">Open for tours daily</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-10 rounded-3xl bg-white border-2 border-[var(--color-neutral-200)] shadow-lg">
              <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-3">Send Us a Message</h2>
              <p className="text-[var(--color-neutral-600)] mb-8">
                Have questions? Want to schedule a visit? Fill out the form and we'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
                    placeholder="Full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="tour">Schedule a campus tour</option>
                    <option value="enrollment">Enrollment inquiries</option>
                    <option value="programs">Questions about programs</option>
                    <option value="pricing">Pricing and payment options</option>
                    <option value="other">Other questions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hover:shadow-xl text-white font-bold transition-all hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-3 text-lg"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border-2 border-[var(--color-primary-200)]">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={24} className="text-[var(--color-primary-600)]" />
                <h3 className="text-xl font-bold text-[var(--color-neutral-900)]">Operating Hours</h3>
              </div>
              <div className="space-y-3 text-[var(--color-neutral-700)]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-primary-50)] border-2 border-[var(--color-secondary-200)]">
              <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-4">Quick Response Promise</h3>
              <p className="text-[var(--color-neutral-700)] leading-relaxed mb-4">
                We understand choosing a kindergarten is important. Our admissions team responds to all inquiries within 24 hours, usually sooner.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-neutral-700)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-success-600)]">✓</span>
                  <span>Phone calls answered during business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-success-600)]">✓</span>
                  <span>WhatsApp messages replied within 2 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-success-600)]">✓</span>
                  <span>Emails responded within 24 hours</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--color-neutral-900)] text-white">
              <h3 className="text-xl font-bold mb-4">Campus Location</h3>
              <p className="text-[var(--color-neutral-300)] mb-6">
                Conveniently located in Menteng with ample parking and easy access from major Jakarta roads.
              </p>
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border-2 border-white/30 font-semibold transition-all"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-12 px-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-secondary-50)] border-2 border-[var(--color-accent-200)]">
        <h2 className="text-3xl font-bold text-center text-[var(--color-neutral-900)] mb-10">
          Common Questions Answered
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl bg-white border border-[var(--color-neutral-200)]">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">What are your hours?</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              We're open Monday-Friday, 7 AM-6 PM with core learning from 8 AM-4 PM.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[var(--color-neutral-200)]">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">Can I visit unannounced?</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              Yes! Drop-ins are welcome Mon-Fri, 9 AM-3 PM. Scheduled tours get more time with educators.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[var(--color-neutral-200)]">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">How do I enroll?</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              Visit us, submit application, trial day, then confirm. Simple 4-step process.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[var(--color-neutral-200)]">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">What's the waiting list?</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              Varies by age group. Call for current availability—spots fill quickly for popular months.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[var(--color-neutral-200)]">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">Do you offer financial aid?</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              We offer sibling discounts and flexible payment plans. Contact us to discuss options.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[var(--color-neutral-200)]">
            <h3 className="font-bold text-[var(--color-neutral-900)] mb-2">Parent testimonials?</h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              98% parent satisfaction rate. Read reviews from real families on our homepage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
