import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Calendar, FileText, CheckCircle, Gift, Users,
  ArrowRight, Phone, MessageCircle, ShieldCheck,
  GraduationCap, BookOpen, Sparkles,
} from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/app/components/ui/accordion';

const WHATSAPP_URL = 'https://wa.me/6285229552707';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function PortfolioAdmissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    preferredDate: '',
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-error-50)] text-[var(--color-error-700)] text-xs sm:text-sm font-semibold"
        >
          <Sparkles size={16} />
          <span>Kuota Terbatas — Tahun Ajaran 2026–2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--color-neutral-900)] leading-tight"
        >
          Bergabung Bersama Kami
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-[var(--color-neutral-600)] max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Proses pendaftaran mudah dan transparan. Free Trial Class &amp; Diskon Sibling 25%!
        </motion.h2>
      </section>

      {/* ==================== OFFERS ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border-2 border-[var(--color-primary-200)] shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white mb-4 shadow-md">
            <Gift size={28} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-neutral-900)] mb-2">Free Trial Class</h3>
          <p className="text-sm sm:text-base text-[var(--color-neutral-700)] leading-relaxed">
            Coba dulu, baru yakin! Biarkan anak Anda merasakan langsung suasana belajar di Jasmine tanpa biaya dan tanpa kewajiban mendaftar.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-primary-50)] border-2 border-[var(--color-secondary-200)] shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-primary-500)] flex items-center justify-center text-white mb-4 shadow-md">
            <Users size={28} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-neutral-900)] mb-2">Diskon Sibling 25%</h3>
          <p className="text-sm sm:text-base text-[var(--color-neutral-700)] leading-relaxed">
            Untuk pendaftar anak ke-2! Dapatkan potongan 25% untuk adik atau kakak yang mendaftar di tahun yang sama.
          </p>
        </motion.div>
      </motion.section>

      {/* ==================== ENROLLMENT STEPS ==================== */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-neutral-900)] mb-10 sm:mb-14"
        >
          4 Langkah Mudah Pendaftaran
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            { step: 1, icon: <Phone size={24} />, title: 'Hubungi Kami', desc: 'Via WhatsApp atau telepon untuk konsultasi dan jadwalkan kunjungan.', color: 'primary' },
            { step: 2, icon: <Calendar size={24} />, title: 'Kunjungan Sekolah', desc: 'Datang ke sekolah, kenali lingkungan, dan temui guru kami.', color: 'secondary' },
            { step: 3, icon: <GraduationCap size={24} />, title: 'Free Trial Class', desc: 'Anak Anda ikut belajar satu hari penuh — gratis, tanpa kewajiban.', color: 'accent' },
            { step: 4, icon: <CheckCircle size={24} />, title: 'Konfirmasi Daftar', desc: 'Lengkapi formulir dan dokumen. Selamat bergabung di Jasmine!', color: 'success' },
          ].map((s) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--color-${s.color}-500)] to-[var(--color-${s.color}-600)] flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4 shadow-lg`}>
                {s.step}
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-[var(--color-neutral-900)] mb-2">{s.title}</h3>
              <p className="text-xs sm:text-sm text-[var(--color-neutral-700)]">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================== BOOKING FORM + SIDEBAR ==================== */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-3"
        >
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] border-2 border-[var(--color-primary-200)] shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)] mb-2">
              Formulir Pendaftaran Kunjungan
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-neutral-600)] mb-6 sm:mb-8">
              Isi formulir di bawah dan kami akan menghubungi dalam 24 jam.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-success-500)] flex items-center justify-center text-white mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Terima Kasih!</h3>
                <p className="text-sm text-[var(--color-neutral-600)] mb-6">
                  Kami akan menghubungi Anda dalam 24 jam untuk konfirmasi jadwal kunjungan.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ parentName: '', email: '', phone: '', childName: '', childAge: '', program: '', preferredDate: '', message: '' }); }}
                  className="text-sm text-[var(--color-primary-600)] font-semibold hover:underline"
                >
                  Kirim formulir lagi
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Nama Orang Tua *</label>
                    <input type="text" required value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                      placeholder="Nama lengkap"
                    />
                  </div>
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
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Nama Anak *</label>
                    <input type="text" required value={formData.childName} onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                      placeholder="Nama lengkap anak"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Usia Anak *</label>
                    <select required value={formData.childAge} onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                    >
                      <option value="">Pilih usia</option>
                      <option value="0-1">0–1 tahun (Inden)</option>
                      <option value="2-3">2–3 tahun</option>
                      <option value="4-5">4–5 tahun</option>
                      <option value="5-6">5–6 tahun</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Program *</label>
                    <select required value={formData.program} onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                    >
                      <option value="">Pilih program</option>
                      <option value="kb">Kelompok Bermain (KB)</option>
                      <option value="tk-a">TK-A</option>
                      <option value="tk-b">TK-B</option>
                      <option value="tpa">TPA (Tempat Penitipan Anak)</option>
                      <option value="bilingual">Bilingual Class</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Tanggal Kunjungan Pilihan *</label>
                  <input type="date" required value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-neutral-900)] mb-1.5">Pertanyaan / Pesan Tambahan</label>
                  <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-neutral-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none transition-all resize-none text-sm"
                    placeholder="Alergi, kebutuhan khusus, pertanyaan..."
                  />
                </div>

                <button type="submit"
                  className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hover:shadow-2xl text-white font-bold transition-all hover:-translate-y-1 text-base sm:text-lg shadow-xl"
                >
                  Kirim Formulir
                </button>
                <p className="text-xs text-center text-[var(--color-neutral-500)]">
                  Kami akan menghubungi dalam 24 jam. Tanpa kewajiban mendaftar.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Sidebar - Trust Signals */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-2 space-y-5"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border-2 border-[var(--color-primary-200)]">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-neutral-900)] mb-5">Kenapa Jasmine?</h3>
            <ul className="space-y-3.5">
              {[
                { icon: <ShieldCheck size={18} />, text: 'Sekolah Islam swasta resmi' },
                { icon: <ShieldCheck size={18} />, text: 'CCTV 24 jam & ruang ber-AC' },
                { icon: <ShieldCheck size={18} />, text: 'Guru profesional & bersertifikat' },
                { icon: <ShieldCheck size={18} />, text: 'Metode Ummi Al-Qur\'an' },
                { icon: <ShieldCheck size={18} />, text: 'Play-based learning' },
                { icon: <ShieldCheck size={18} />, text: 'Coding & Robotic, English Class' },
                { icon: <ShieldCheck size={18} />, text: 'Free Trial Class' },
                { icon: <ShieldCheck size={18} />, text: 'Diskon Sibling 25%' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2.5 text-sm text-[var(--color-neutral-700)]">
                  <span className="text-[var(--color-primary-600)] shrink-0 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-neutral-900)] text-white">
            <h3 className="text-lg font-bold mb-3">Butuh bantuan langsung?</h3>
            <p className="text-sm text-[var(--color-neutral-300)] mb-5">
              Tim kami siap menjawab pertanyaan Anda.
            </p>
            <div className="space-y-3">
              <a href="tel:+6281328846089" className="flex items-center gap-2 text-sm font-medium hover:text-[var(--color-primary-400)] transition-colors">
                <Phone size={16} /> 081328846089
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[var(--color-success-400)] transition-colors">
                <MessageCircle size={16} /> Chat via WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==================== DOKUMEN ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-neutral-900)] mb-8 sm:mb-10">
          Dokumen Pendaftaran
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm">
          <ul className="space-y-4">
            {[
              { title: 'Akta Kelahiran Anak (fotokopi)', desc: 'Untuk verifikasi usia' },
              { title: 'KTP Orang Tua / Wali (fotokopi)', desc: 'Identitas resmi' },
              { title: 'Kartu Keluarga (fotokopi)', desc: 'Data keluarga' },
              { title: 'Pas Foto Anak (3x4, 2 lembar)', desc: 'Untuk arsip siswa' },
              { title: 'Surat Keterangan Sehat dari Dokter', desc: 'Riwayat kesehatan anak' },
            ].map((doc) => (
              <li key={doc.title} className="flex items-start gap-3">
                <FileText size={20} className="text-[var(--color-primary-600)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-neutral-900)]">{doc.title}</p>
                  <p className="text-xs text-[var(--color-neutral-600)]">{doc.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* ==================== FAQ ==================== */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-neutral-900)] mb-8 sm:mb-10"
        >
          Pertanyaan Seputar Pendaftaran
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: 'Apakah ada biaya pendaftaran?', a: 'Informasi lengkap mengenai biaya pendaftaran, SPP, dan biaya lainnya akan disampaikan saat kunjungan sekolah. Kami menyediakan pilihan pembayaran yang fleksibel.' },
              { q: 'Kapan tahun ajaran dimulai?', a: 'Tahun ajaran baru dimulai pada bulan Juli. Namun pendaftaran dibuka sepanjang tahun selama kuota masih tersedia. Kami menyarankan mendaftar lebih awal karena kuota terbatas.' },
              { q: 'Apakah bisa pindahan dari sekolah lain?', a: 'Ya, kami menerima siswa pindahan. Silakan hubungi kami untuk konsultasi mengenai prosedur dan ketersediaan tempat di kelas yang sesuai.' },
              { q: 'Bagaimana jika anak saya memiliki kebutuhan khusus?', a: 'Kami menyambut semua anak dan akan berdiskusi bersama orang tua untuk memahami kebutuhan anak. Guru kami terlatih untuk mendampingi anak dengan sabar dan penuh perhatian.' },
              { q: 'Berapa lama proses pendaftaran?', a: 'Dari kunjungan pertama hingga konfirmasi pendaftaran biasanya memakan waktu 1–2 minggu, tergantung ketersediaan jadwal trial class.' },
              { q: 'Apakah ada seragam sekolah?', a: 'Ya, seragam disediakan oleh sekolah. Informasi lengkap tentang seragam dan perlengkapan sekolah akan diberikan saat proses pendaftaran.' },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`adm-faq-${i}`}
                className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-sm sm:text-base font-bold text-[var(--color-neutral-900)] hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ==================== REASSURANCE BANNER ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 py-10 sm:py-14 px-6 sm:px-10 lg:px-16 rounded-3xl bg-gradient-to-br from-[var(--color-primary-500)] via-[var(--color-accent-500)] to-[var(--color-secondary-500)] text-white text-center shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Masih Ragu? Hubungi Kami Langsung
        </h2>
        <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-95">
          Kami siap menjawab semua pertanyaan Anda dan membantu menemukan program terbaik untuk buah hati.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-white text-[var(--color-success-700)] font-bold hover:shadow-2xl hover:-translate-y-1 transition-all text-base sm:text-lg shadow-lg"
          >
            <MessageCircle size={20} />
            Chat WhatsApp
          </a>
          <a
            href="tel:+6281328846089"
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-bold transition-all hover:bg-white/20 border-2 border-white/40 text-base sm:text-lg flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            081328846089
          </a>
        </div>
      </motion.section>
    </div>
  );
}
