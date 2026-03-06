import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Baby, Smile, GraduationCap, BookOpen, ArrowRight,
  CheckCircle, Globe, Cpu, Music, Palette, Waves,
  Drum, PenTool, Brain, Hand, MessageCircle, Users, Sparkles, Heart,
} from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/app/components/ui/accordion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function PortfolioPrograms() {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* ==================== HERO ==================== */}
      <section className="text-center space-y-6 py-4 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] text-xs sm:text-sm font-semibold"
        >
          <GraduationCap size={16} />
          <span>Usia 0–6 Tahun</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--color-neutral-900)] leading-tight"
        >
          Kurikulum yang Menyenangkan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-[var(--color-neutral-600)] max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Program pendidikan Islami berbasis bermain yang disesuaikan dengan tahap perkembangan anak
        </motion.h2>
      </section>

      {/* ==================== PROGRAM CARDS ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {[
          {
            icon: <Baby size={36} />,
            name: 'Kelompok Bermain (KB)',
            age: 'Usia 2–3 tahun',
            desc: 'Pengenalan awal dunia belajar melalui bermain sensorik, musik, gerakan, dan interaksi sosial pertama.',
            highlights: ['Stimulasi motorik halus & kasar', 'Pengenalan huruf hijaiyah & doa', 'Bermain kelompok & berbagi', 'Seni, lagu, dan cerita'],
            color: 'primary',
            btnClass: 'bg-gradient-to-r from-[var(--color-primary-800)] to-[var(--color-primary-900)]',
          },
          {
            icon: <Smile size={36} />,
            name: 'TK-A',
            age: 'Usia 4–5 tahun',
            desc: 'Mengembangkan rasa ingin tahu melalui eksplorasi, literasi awal, konsep angka, dan kemandirian.',
            highlights: ['Metode Ummi — belajar Al-Qur\'an', 'Mengenal huruf, angka & bentuk', 'Percobaan sains sederhana', 'English Class pengenalan'],
            color: 'secondary',
            btnClass: 'bg-gradient-to-r from-[var(--color-secondary-800)] to-[var(--color-secondary-900)]',
          },
          {
            icon: <GraduationCap size={36} />,
            name: 'TK-B',
            age: 'Usia 5–6 tahun',
            desc: 'Persiapan masuk SD — membaca, menulis, berhitung, dan membangun kepercayaan diri serta kemandirian.',
            highlights: ['Membaca, menulis & berhitung', 'Persiapan akademis masuk SD', 'Coding & Robotic dasar', 'Leadership & kerja tim'],
            color: 'accent',
            btnClass: 'bg-gradient-to-r from-[var(--color-accent-800)] to-[var(--color-accent-900)]',
          },
          {
            icon: <Baby size={36} />,
            name: 'TPA',
            age: 'Tempat Penitipan Anak',
            desc: 'Layanan penitipan anak yang aman dan nyaman dengan pengasuhan berkualitas, aktivitas bermain, serta lingkungan yang mendukung tumbuh kembang anak.',
            highlights: ['Pengasuhan oleh pengasuh berpengalaman', 'Aktivitas bermain & stimulasi usia dini', 'Lingkungan aman dengan CCTV & AC', 'Fleksibel sesuai kebutuhan orang tua'],
            color: 'success',
            btnClass: 'bg-[var(--color-success-700)]',
          },
        ].map((program) => (
          <motion.div
            key={program.name}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--color-${program.color}-50)] via-[var(--color-surface)] to-[var(--color-surface)] border-2 border-[var(--color-${program.color}-200)] shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-${program.color}-700)] to-[var(--color-${program.color}-800)] flex items-center justify-center text-white mb-5 shadow-md`}>
              {program.icon}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-neutral-900)] mb-1">{program.name}</h2>
            <p className={`text-sm font-semibold text-[var(--color-${program.color}-700)] mb-4`}>{program.age}</p>
            <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed mb-5">{program.desc}</p>
            <ul className="space-y-2.5 mb-6">
              {program.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-neutral-700)]">
                  <CheckCircle size={16} className={`text-[var(--color-${program.color}-700)] shrink-0 mt-0.5`} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/portfolio/admissions"
              className={`block text-center px-6 py-3 rounded-xl ${program.btnClass} text-white font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm`}
            >
              Daftar Sekarang
            </Link>
          </motion.div>
        ))}
      </motion.section>

      {/* ==================== BILINGUAL CLASS ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        className="relative overflow-hidden p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-secondary-800)] via-[var(--color-primary-800)] to-[var(--color-accent-700)] text-white shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-4">
          <Globe size={14} />
          <span>NEW — Bilingual Class</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
          Open Bilingual Class
        </h2>
        <p className="text-base sm:text-lg opacity-95 mb-6 max-w-3xl">
          Untuk anak usia 4–6 tahun. Guru fasih dua bahasa, kurikulum dari ahli pendidikan, metode fun &amp; play-based learning.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {[
            'Fun Learning', 'Expert Curriculum', 'Professional Educators',
            'Play-Based Method', 'Bilingual Environment', 'Small Class Size',
          ].map((chip) => (
            <span key={chip} className="px-3 py-1.5 rounded-full bg-white/20 text-xs sm:text-sm font-medium backdrop-blur-sm">
              {chip}
            </span>
          ))}
        </div>
        <Link
          to="/portfolio/admissions"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--color-surface)] text-[var(--color-neutral-900)] font-bold hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base"
        >
          Daftar Kelas Bilingual
          <ArrowRight size={18} />
        </Link>
      </motion.section>

      {/* ==================== METODE UMMI ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-800)] text-xs font-semibold mb-4">
            <BookOpen size={14} />
            <span>Program Unggulan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-neutral-900)] mb-4">
            Metode Ummi
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-neutral-700)] leading-relaxed mb-5">
            Metode Ummi adalah metode pembelajaran Al-Qur'an yang mudah, menyenangkan, dan menyentuh hati.
            Anak-anak belajar membaca Al-Qur'an dengan tartil melalui pendekatan bertahap yang penuh kasih sayang,
            tanpa tekanan — sehingga tumbuh kecintaan terhadap Al-Qur'an secara alami.
          </p>
          <ul className="space-y-3">
            {[
              'Pembelajaran berjenjang sesuai kemampuan anak',
              'Guru bersertifikat Metode Ummi',
              'Hafalan surat-surat pendek & doa harian',
              'Membangun kecintaan Al-Qur\'an sejak dini',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-neutral-700)]">
                <CheckCircle size={16} className="text-[var(--color-primary-800)] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border-2 border-[var(--color-primary-200)] shadow-lg"
        >
          <div className="text-center">
            <div className="text-6xl sm:text-7xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Belajar Membaca &amp; Mencintai Al-Qur'an</h3>
            <p className="text-sm text-[var(--color-neutral-600)]">Mudah &bull; Menyenangkan &bull; Menyentuh Hati</p>
          </div>
        </motion.div>
      </motion.section>

      {/* ==================== EKSTRAKURIKULER ==================== */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-3">
            Ekstrakurikuler
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Beragam kegiatan menyenangkan untuk mengembangkan bakat dan minat anak
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { icon: <Cpu size={24} />, name: 'Coding & Robotic', desc: 'Pengenalan teknologi dan logika berpikir', color: 'primary' },
            { icon: <Globe size={24} />, name: 'English Class', desc: 'Belajar bahasa Inggris dengan fun', color: 'secondary' },
            { icon: <Waves size={24} />, name: 'Berenang', desc: 'Olahraga air untuk motorik & keberanian', color: 'info' },
            { icon: <Drum size={24} />, name: 'Drumband', desc: 'Melatih koordinasi dan kerjasama tim', color: 'accent' },
            { icon: <Music size={24} />, name: 'Angklung', desc: 'Mengenal alat musik tradisional Indonesia', color: 'warning' },
            { icon: <Sparkles size={24} />, name: 'Menari', desc: 'Ekspresi gerak dan seni tari nusantara', color: 'accent' },
            { icon: <Palette size={24} />, name: 'Menggambar & Mewarnai', desc: 'Kreativitas seni visual dan imajinasi', color: 'primary' },
          ].map((ekskul) => (
            <motion.div
              key={ekskul.name}
              variants={fadeUp}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-[var(--color-${ekskul.color}-100)] flex items-center justify-center text-[var(--color-${ekskul.color}-800)] mb-3`}>
                {ekskul.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--color-neutral-900)] mb-1">{ekskul.name}</h3>
              <p className="text-xs text-[var(--color-neutral-600)]">{ekskul.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================== TUMBUH KEMBANG ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-3">
            Stimulasi Tumbuh Kembang
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-3xl mx-auto">
            Kami mendukung perkembangan anak secara holistik sesuai tahapan usia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Hand size={24} />, label: 'Motorik', desc: 'Halus & kasar', color: 'primary' },
            { icon: <Brain size={24} />, label: 'Sensorik', desc: 'Panca indera', color: 'secondary' },
            { icon: <MessageCircle size={24} />, label: 'Komunikasi', desc: 'Bicara & bahasa', color: 'accent' },
            { icon: <Users size={24} />, label: 'Sosial', desc: 'Berinteraksi & berbagi', color: 'info' },
            { icon: <Sparkles size={24} />, label: 'Kemandirian', desc: 'Percaya diri', color: 'warning' },
            { icon: <Heart size={24} />, label: 'Karakter', desc: 'Akhlak mulia', color: 'success' },
          ].map((dev) => (
            <motion.div
              key={dev.label}
              variants={fadeUp}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)] shadow-sm text-center"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-[var(--color-${dev.color}-100)] flex items-center justify-center text-[var(--color-${dev.color}-800)] mb-3`}>
                {dev.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--color-neutral-900)] mb-0.5">{dev.label}</h3>
              <p className="text-xs text-[var(--color-neutral-600)]">{dev.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          className="text-center text-sm text-[var(--color-neutral-600)] mt-6 max-w-2xl mx-auto"
        >
          Kami memahami kekhawatiran orang tua tentang speech delay dan anak yang lambat beradaptasi.
          Guru kami terlatih untuk mendampingi setiap anak dengan sabar dan penuh perhatian.
        </motion.p>
      </motion.section>

      {/* ==================== BILINGUAL FAQ ==================== */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-[var(--color-neutral-900)] mb-3">
            FAQ Kelas Bilingual
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Pertanyaan umum seputar program bilingual kami
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: 'Apa target kelas bilingual di Jasmine?', a: 'Target utama adalah memberikan eksposur bahasa Inggris sejak dini melalui lingkungan bilingual yang alami. Anak-anak akan terbiasa mendengar dan menggunakan bahasa Inggris dalam konteks bermain dan belajar sehari-hari.' },
              { q: 'Bagaimana metode pengajaran bilingual?', a: 'Kami menggunakan metode fun & play-based learning. Guru menggunakan dua bahasa secara natural sepanjang hari — melalui lagu, cerita, permainan, dan percakapan. Tidak ada tekanan, yang ada hanya kesenangan belajar.' },
              { q: 'Apakah guru kelas bilingual berpengalaman?', a: 'Ya, guru kelas bilingual kami fasih berbahasa Indonesia dan Inggris, dengan kurikulum yang dirancang oleh ahli pendidikan bilingual berpengalaman.' },
              { q: 'Bagaimana progress anak dipantau?', a: 'Kami memberikan laporan perkembangan berkala kepada orang tua, termasuk perkembangan bahasa Inggris dan bahasa Indonesia anak, serta aspek sosial dan akademis lainnya.' },
              { q: 'Apakah anak yang belum bisa bahasa Inggris bisa ikut?', a: 'Tentu! Sebagian besar anak memulai tanpa kemampuan bahasa Inggris — itu normal. Metode immersion kami membuat anak menyerap bahasa secara alami melalui kegiatan sehari-hari.' },
              { q: 'Berapa usia yang tepat untuk kelas bilingual?', a: 'Kelas bilingual kami dirancang untuk anak usia 4–6 tahun, saat otak anak sangat reseptif terhadap bahasa baru. Ini adalah golden age untuk pengenalan bahasa kedua.' },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`bil-faq-${i}`}
                className="p-4 sm:p-5 rounded-2xl bg-[var(--color-surface)] border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-shadow"
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

      {/* ==================== CTA ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 rounded-3xl bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface-dark-muted)] text-white text-center shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Coba Free Trial Class
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-95">
          Biarkan anak Anda merasakan langsung serunya belajar di Jasmine. Gratis, tanpa kewajiban mendaftar!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/portfolio/admissions"
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary-800)] to-[var(--color-accent-700)] text-white font-bold transition-all hover:shadow-2xl hover:-translate-y-1 text-base sm:text-lg"
          >
            Daftar Trial Class
          </Link>
          <a
            href="https://wa.me/6285229552707"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-bold transition-all hover:bg-white/20 border-2 border-white/40 text-base sm:text-lg"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </motion.section>
    </div>
  );
}
