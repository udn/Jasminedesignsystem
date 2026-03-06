import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin, Phone, Mail, Clock, MessageCircle, Send,
  Instagram, ArrowRight,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/6285229552707';
const PHONE_1 = '081328846089';
const PHONE_2 = '085229552707';
const INSTAGRAM = '@jasminealmuflihun';
const ADDRESS = 'Jl. Grogolsari, Juwangen, Purwomartani, Kalasan, Sleman, Yogyakarta';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function PortfolioContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* ==================== HERO ==================== */}
      <section className="text-center space-y-6 py-4 lg:py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--color-neutral-900)] leading-tight"
        >
          Hubungi Kami
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-[var(--color-neutral-600)] max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Kami siap membantu menjawab pertanyaan Anda. Jangan ragu untuk menghubungi kami kapan saja!
        </motion.h2>
      </section>

      {/* ==================== CONTACT METHODS ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <motion.a
          href={`tel:+62${PHONE_1}`}
          variants={fadeUp}
          transition={{ duration: 0.3 }}
          className="group p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-surface)] border-2 border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] hover:shadow-lg transition-all text-center"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-primary-800)] to-[var(--color-accent-700)] flex items-center justify-center text-white mb-3 sm:mb-5 shadow-md group-hover:scale-110 transition-transform">
            <Phone size={24} />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-neutral-900)] mb-1">Telepon</h3>
          <p className="text-xs sm:text-sm text-[var(--color-primary-800)] font-semibold">{PHONE_1}</p>
          <p className="text-xs text-[var(--color-neutral-500)] mt-1 hidden sm:block">Senin–Jumat</p>
        </motion.a>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          transition={{ duration: 0.3 }}
          className="group p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-success-50)] to-[var(--color-surface)] border-2 border-[var(--color-success-200)] hover:border-[var(--color-success-400)] hover:shadow-lg transition-all text-center"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-[var(--color-success-700)] flex items-center justify-center text-white mb-3 sm:mb-5 shadow-md group-hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-neutral-900)] mb-1">WhatsApp</h3>
          <p className="text-xs sm:text-sm text-[var(--color-success-700)] font-semibold">Chat Langsung</p>
          <p className="text-xs text-[var(--color-neutral-500)] mt-1 hidden sm:block">Respon cepat</p>
        </motion.a>

        <motion.a
          href={`https://instagram.com/${INSTAGRAM.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          transition={{ duration: 0.3 }}
          className="group p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-accent-50)] to-[var(--color-surface)] border-2 border-[var(--color-accent-200)] hover:border-[var(--color-accent-400)] hover:shadow-lg transition-all text-center"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-accent-700)] to-[var(--color-secondary-700)] flex items-center justify-center text-white mb-3 sm:mb-5 shadow-md group-hover:scale-110 transition-transform">
            <Instagram size={24} />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-neutral-900)] mb-1">Instagram</h3>
          <p className="text-xs sm:text-sm text-[var(--color-accent-700)] font-semibold">{INSTAGRAM}</p>
          <p className="text-xs text-[var(--color-neutral-500)] mt-1 hidden sm:block">Follow kami</p>
        </motion.a>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.3 }}
          className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-surface)] border-2 border-[var(--color-secondary-200)] text-center"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-secondary-800)] to-[var(--color-primary-800)] flex items-center justify-center text-white mb-3 sm:mb-5 shadow-md">
            <MapPin size={24} />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-neutral-900)] mb-1">Lokasi</h3>
          <p className="text-xs sm:text-sm text-[var(--color-neutral-700)]">Kalasan, Sleman</p>
          <p className="text-xs text-[var(--color-neutral-500)] mt-1 hidden sm:block">Yogyakarta</p>
        </motion.div>
      </motion.section>

      {/* ==================== FORM + SIDEBAR ==================== */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-3"
        >
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[var(--color-surface)] border-2 border-[var(--color-neutral-200)] shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)] mb-2">Kirim Pesan</h2>
            <p className="text-sm text-[var(--color-neutral-600)] mb-6 sm:mb-8">
              Ada pertanyaan? Ingin jadwalkan kunjungan? Isi formulir dan kami akan merespons dalam 24 jam.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-success-700)] flex items-center justify-center text-white mb-4">
                  <Send size={28} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Pesan Terkirim!</h3>
                <p className="text-sm text-[var(--color-neutral-600)] mb-6">
                  Terima kasih! Kami akan merespons dalam 24 jam.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="text-sm text-[var(--color-primary-800)] font-semibold hover:underline"
                >
                  Kirim pesan lagi
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Nama Lengkap *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                    placeholder="Nama lengkap Anda"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                      placeholder="email@anda.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Nomor Telepon *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Subjek *</label>
                  <select required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                  >
                    <option value="">Pilih topik</option>
                    <option value="info">Informasi Umum</option>
                    <option value="pendaftaran">Pendaftaran</option>
                    <option value="kunjungan">Jadwal Kunjungan</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Pesan *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all resize-none text-sm"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary-800)] to-[var(--color-accent-700)] hover:shadow-xl text-white font-bold transition-all hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 text-base sm:text-lg"
                >
                  <span>Kirim Pesan</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Sidebar Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-2 space-y-5"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border-2 border-[var(--color-primary-200)]">
            <div className="flex items-center gap-2 mb-5">
              <Clock size={20} className="text-[var(--color-primary-800)]" />
              <h3 className="text-lg font-bold text-[var(--color-neutral-900)]">Jam Operasional</h3>
            </div>
            <div className="space-y-2.5 text-sm text-[var(--color-neutral-700)]">
              <div className="flex justify-between">
                <span>Senin – Jumat</span>
                <span className="font-semibold">07.00 – 16.00 WIB</span>
              </div>
              <div className="flex justify-between">
                <span>Sabtu</span>
                <span className="font-semibold">Dengan janji</span>
              </div>
              <div className="flex justify-between">
                <span>Minggu</span>
                <span className="font-semibold">Tutup</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-primary-50)] border-2 border-[var(--color-secondary-200)]">
            <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-3">Respon Cepat</h3>
            <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed mb-4">
              Kami memahami pentingnya memilih sekolah untuk buah hati. Tim kami merespons semua pertanyaan dengan cepat.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--color-neutral-700)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)] shrink-0">✓</span>
                <span>WhatsApp dibalas dalam 2 jam</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)] shrink-0">✓</span>
                <span>Telepon dijawab saat jam kerja</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-success-700)] shrink-0">✓</span>
                <span>Email direspons dalam 24 jam</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-dark)] text-white">
            <h3 className="text-lg font-bold mb-3">Lokasi Sekolah</h3>
            <p className="text-sm text-[#d6d3d1] mb-4">{ADDRESS}</p>
            <a
              href="https://maps.app.goo.gl/rH4ejSfiZ2QG3hFHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 font-semibold transition-all text-sm"
            >
              Buka di Google Maps
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ==================== MAP EMBED ==================== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)] mb-6 text-center">
          Temukan Kami
        </h2>
        <a
          href="https://maps.app.goo.gl/rH4ejSfiZ2QG3hFHA"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden border-2 border-[var(--color-neutral-200)] shadow-lg bg-[var(--color-neutral-100)] hover:border-[var(--color-primary-300)] transition-colors"
        >
          <div className="flex flex-col items-center justify-center gap-4 py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-50)]">
            <MapPin size={48} className="text-[var(--color-primary-800)]" />
            <span className="text-lg font-semibold text-[var(--color-neutral-800)]">Lihat lokasi di Google Maps</span>
            <span className="text-sm text-[var(--color-neutral-600)]">{ADDRESS}</span>
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary-800)] text-white font-semibold">
              Buka Peta
              <ArrowRight size={18} />
            </span>
          </div>
        </a>
        <p className="text-center text-sm text-[var(--color-neutral-600)] mt-4">
          {ADDRESS}
        </p>
      </motion.section>

      {/* ==================== WHATSAPP CTA ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="py-10 sm:py-14 px-6 sm:px-10 lg:px-16 rounded-3xl bg-[var(--color-success-700)] text-white text-center shadow-2xl"
      >
        <MessageCircle size={40} className="mx-auto mb-4 opacity-90" />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Chat Langsung via WhatsApp
        </h2>
        <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-95">
          Cara tercepat untuk menghubungi kami. Klik tombol di bawah untuk memulai percakapan.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-[var(--color-surface)] text-[var(--color-neutral-900)] font-bold hover:shadow-2xl hover:-translate-y-1 transition-all text-base sm:text-lg shadow-lg"
        >
          <MessageCircle size={22} />
          Mulai Chat WhatsApp
        </a>
      </motion.section>
    </div>
  );
}
