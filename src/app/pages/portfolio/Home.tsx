import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight, Heart, Shield, Sparkles, Star, Quote,
  BookOpen, Cpu, Music, Globe, ShieldCheck, AirVent,
  Cctv, GraduationCap,
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

export default function PortfolioHome() {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* ==================== HERO ==================== */}
      <section className="text-center space-y-6 sm:space-y-8 py-4 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-xs sm:text-sm font-semibold shadow-sm"
        >
          <Sparkles size={16} />
          <span>Tahun Ajaran 2026–2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--color-neutral-900)] leading-tight"
        >
          Tumbuhkan Generasi Berakhlak Mulia
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-[var(--color-neutral-600)] max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Pendidikan Islami berbasis bermain untuk anak usia 0–6 tahun di lingkungan aman, modern, dan menyenangkan
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4"
        >
          <Link
            to="/portfolio/admissions"
            className="group px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hover:shadow-2xl text-white font-bold transition-all hover:-translate-y-1 shadow-xl text-base sm:text-lg flex items-center justify-center gap-3"
          >
            <span>Jadwalkan Kunjungan</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            to="/portfolio/programs"
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-[var(--color-surface)] hover:bg-[var(--color-neutral-50)] text-[var(--color-neutral-900)] font-bold transition-all border-2 border-[var(--color-neutral-300)] hover:border-[var(--color-neutral-400)] text-base sm:text-lg text-center"
          >
            Lihat Program
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.3 }}
          className="text-xs sm:text-sm text-[var(--color-neutral-500)] max-w-md mx-auto pt-2"
        >
          Free Trial Class tersedia &bull; Diskon Sibling 25%
        </motion.p>
      </section>

      {/* ==================== TRUST BADGES ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {[
          { icon: <Cctv size={18} />, label: 'CCTV 24 Jam' },
          { icon: <AirVent size={18} />, label: 'AC & Air Purifier' },
          { icon: <BookOpen size={18} />, label: 'Metode Ummi' },
          { icon: <Cpu size={18} />, label: 'Coding & Robotic' },
          { icon: <Globe size={18} />, label: 'Kelas Bilingual' },
          { icon: <Music size={18} />, label: 'Drumband & Angklung' },
        ].map((badge) => (
          <motion.div
            key={badge.label}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-neutral-200)] shadow-sm text-sm font-medium text-[var(--color-neutral-700)]"
          >
            <span className="text-[var(--color-primary-600)]">{badge.icon}</span>
            <span>{badge.label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* ==================== 3 FEATURE BLOCKS ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
      >
        {/* Block 1: Pendidikan Islami */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] via-[var(--color-surface)] to-[var(--color-accent-50)] border-2 border-[var(--color-primary-200)] shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white mb-5 shadow-md">
            <Heart size={28} />
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-neutral-900)] mb-3">
            Pendidikan Islami &amp; Karakter
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-neutral-600)] leading-relaxed mb-5">
            Membangun fondasi iman dan akhlak mulia sejak usia dini melalui Metode Ummi dan pembiasaan nilai-nilai Islam dalam keseharian.
          </p>
          <ul className="space-y-2.5">
            {[
              'Metode Ummi — belajar mencintai Al-Qur\'an',
              'Pembiasaan sholat, doa, & adab harian',
              'Karakter cerdas, mandiri, dan disiplin',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-neutral-700)]">
                <span className="text-[var(--color-primary-600)] shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Block 2: Fasilitas Aman */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-secondary-50)] via-[var(--color-surface)] to-[var(--color-primary-50)] border-2 border-[var(--color-secondary-200)] shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-primary-500)] flex items-center justify-center text-white mb-5 shadow-md">
            <Shield size={28} />
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-neutral-900)] mb-3">
            Fasilitas Aman &amp; Modern
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-neutral-600)] leading-relaxed mb-5">
            Lingkungan belajar bersih, aman, dan nyaman dengan fasilitas modern untuk mendukung tumbuh kembang optimal anak Anda.
          </p>
          <ul className="space-y-2.5">
            {[
              'CCTV 24 jam & ruang kelas ber-AC',
              'Indoor & outdoor playground yang aman',
              'Fogging disinfektan secara berkala',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-neutral-700)]">
                <span className="text-[var(--color-secondary-600)] shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Block 3: Ekstrakurikuler */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent-50)] via-[var(--color-surface)] to-[var(--color-secondary-50)] border-2 border-[var(--color-accent-200)] shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1"
        >
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-secondary-500)] flex items-center justify-center text-white mb-5 shadow-md">
            <Sparkles size={28} />
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-[var(--color-neutral-900)] mb-3">
            Ekstrakurikuler Unggulan
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-neutral-600)] leading-relaxed mb-5">
            Mengembangkan potensi anak melalui beragam kegiatan kreatif dan modern yang menyenangkan setiap hari.
          </p>
          <ul className="space-y-2.5">
            {[
              'Coding & Robotic by Jasmine Al Muflihuun',
              'English Class & Kelas Bilingual (4–6 thn)',
              'Drumband, Angklung, Menari & Seni',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-neutral-700)]">
                <span className="text-[var(--color-accent-600)] shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {/* ==================== BILINGUAL CLASS HIGHLIGHT ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        className="relative overflow-hidden p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-secondary-500)] via-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white shadow-2xl"
      >
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-4">
            <span>NEW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Open Bilingual Class
          </h2>
          <p className="text-base sm:text-lg opacity-95 mb-6 max-w-2xl">
            Untuk anak usia 4–6 tahun. Guru fasih dua bahasa, kurikulum dari ahli pendidikan, metode fun &amp; play-based.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
            {[
              'Fun Learning', 'Expert Curriculum', 'Professional Educators',
              'Play-Based', 'Bilingual Environment', 'Small Class Size',
            ].map((chip) => (
              <span key={chip} className="px-3 py-1.5 rounded-full bg-white/20 text-xs sm:text-sm font-medium backdrop-blur-sm">
                {chip}
              </span>
            ))}
          </div>
          <Link
            to="/portfolio/programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--color-surface)] text-[var(--color-neutral-900)] font-bold hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Pelajari Selengkapnya
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.section>

      {/* ==================== SOCIAL PROOF ==================== */}
      <section className="py-4 sm:py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-3">
            Kata Orang Tua Kami
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Cerita nyata dari keluarga yang mempercayakan buah hati mereka kepada kami
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {[
            {
              quote: 'Anak saya awalnya pendiam dan sulit berkomunikasi. Setelah 3 bulan di Jasmine, perkembangannya luar biasa — sekarang sudah percaya diri dan lancar berinteraksi. Guru-gurunya sangat sabar dan penuh perhatian.',
              name: 'Ibu Siti Aminah',
              child: 'Ibu dari Aisyah, TK-B',
              initials: 'SA',
              color: 'primary',
            },
            {
              quote: 'Saya senang anak saya belajar Al-Qur\'an dengan Metode Ummi. Belajarnya menyenangkan, tidak ada tekanan. Sekarang di rumah sering hafalan sendiri. Lingkungannya juga aman, ada CCTV dan AC.',
              name: 'Ibu Ratna Dewi',
              child: 'Ibu dari Muhammad Faris, KB',
              initials: 'RD',
              color: 'secondary',
            },
            {
              quote: 'Fasilitas sekolahnya lengkap dan bersih. Yang paling saya suka, anak-anak bisa ikut coding dan robotic. Ekstrakurikulernya beragam — anak saya jadi semangat sekolah setiap hari!',
              name: 'Bapak Ahmad Rizki',
              child: 'Ayah dari Zahra, TK-A',
              initials: 'AR',
              color: 'accent',
            },
          ].map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface)] border-2 border-[var(--color-neutral-200)] shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote size={32} className={`text-[var(--color-${t.color}-400)] mb-3`} />
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="text-[var(--color-warning-500)] fill-[var(--color-warning-500)]" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-[var(--color-neutral-700)] leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-${t.color}-400)] to-[var(--color-${t.color}-600)] flex items-center justify-center text-white text-sm font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-[var(--color-neutral-900)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-neutral-500)]">{t.child}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-secondary-50)] border-2 border-[var(--color-primary-200)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: 'Sejak 2015', label: 'Terpercaya di Sleman', color: 'primary' },
              { value: '4 Program', label: 'KB, TK-A, TK-B, TPA', color: 'secondary' },
              { value: '7 Ekskul', label: 'Coding, English, Seni', color: 'accent' },
              { value: 'Free Trial', label: 'Coba Dulu, Baru Yakin!', color: 'success' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-${stat.color}-600)] mb-1`}>
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-neutral-700)] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-4 sm:py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-3">
            Pertanyaan yang Sering Diajukan
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Jawaban jelas untuk membantu Anda membuat keputusan terbaik bagi buah hati
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: 'Apa yang membedakan PAUD Jasmine dari sekolah lain?',
                a: 'PAUD Jasmine menggabungkan pendidikan Islami dengan Metode Ummi, fasilitas modern (CCTV, AC, Air Purifier), dan ekstrakurikuler unggulan seperti Coding & Robotic. Kami membangun karakter cerdas, kreatif, mandiri, disiplin, dan berakhlakul karimah dengan pendekatan belajar sambil bermain yang menyenangkan.',
              },
              {
                q: 'Bagaimana keamanan anak di sekolah?',
                a: 'Keamanan adalah prioritas utama kami. Seluruh area sekolah dipantau CCTV 24 jam, ruang kelas dilengkapi AC dan Air Purifier, serta dilakukan fogging disinfektan secara berkala. Lingkungan indoor dan outdoor playground dirancang aman dan menyenangkan untuk anak-anak.',
              },
              {
                q: 'Usia berapa anak bisa mendaftar?',
                a: 'Kami menerima peserta didik baru dan inden mulai usia 0–6 tahun. Program Kelompok Bermain (KB) untuk usia 2–3 tahun, TK-A untuk 4–5 tahun, TK-B untuk 5–6 tahun, dan TPA (Tempat Penitipan Anak) untuk layanan penitipan anak.',
              },
              {
                q: 'Apakah ada trial class sebelum mendaftar?',
                a: 'Ya! Kami menyediakan Free Trial Class agar anak dan orang tua bisa merasakan langsung suasana belajar di Jasmine. Tidak ada kewajiban mendaftar setelah trial. Hubungi kami via WhatsApp untuk menjadwalkan.',
              },
              {
                q: 'Apa saja fasilitas yang tersedia?',
                a: 'Ruang kelas bersih dan nyaman dengan AC & Air Purifier, CCTV & TV Edukasi, Mushola Siswa, Perpustakaan, Indoor & Outdoor Playground yang aman, toilet bersih dengan closet duduk, serta fogging disinfektan secara berkala.',
              },
              {
                q: 'Bagaimana pendidikan nilai Islami diterapkan?',
                a: 'Kami menggunakan Metode Ummi untuk belajar membaca dan mencintai Al-Qur\'an. Selain itu, pembiasaan sholat, doa harian, adab, dan akhlak mulia diintegrasikan dalam seluruh kegiatan belajar mengajar sehari-hari.',
              },
              {
                q: 'Apakah anak akan siap masuk SD?',
                a: 'Tentu! Kurikulum kami dirancang untuk mempersiapkan anak secara akademis, sosial, dan emosional untuk jenjang SD. Anak-anak belajar membaca, menulis, berhitung, serta mengembangkan kemandirian dan kepercayaan diri melalui pendekatan bermain.',
              },
              {
                q: 'Bagaimana cara mendaftar?',
                a: 'Proses pendaftaran sangat mudah: (1) Hubungi kami via WhatsApp atau telepon, (2) Jadwalkan kunjungan sekolah, (3) Ikuti Free Trial Class, (4) Konfirmasi pendaftaran. Tersedia Diskon Sibling 25% untuk pendaftar anak ke-2!',
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
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

      {/* ==================== CTA BANNER ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        className="py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 rounded-3xl bg-gradient-to-br from-[var(--color-primary-500)] via-[var(--color-accent-500)] to-[var(--color-secondary-500)] text-white text-center shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Daftarkan Buah Hati Anda Sekarang
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
          Jadwalkan kunjungan dan rasakan langsung suasana belajar yang aman, menyenangkan, dan penuh nilai Islami.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/portfolio/admissions"
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-[var(--color-surface)] text-[var(--color-neutral-900)] font-bold transition-all hover:shadow-2xl hover:-translate-y-1 text-base sm:text-lg"
          >
            Jadwalkan Kunjungan
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-bold transition-all hover:bg-white/20 border-2 border-white/40 text-base sm:text-lg"
          >
            Chat via WhatsApp
          </a>
        </div>
        <p className="text-xs sm:text-sm mt-5 opacity-80">
          Free Trial Class &bull; Diskon Sibling 25% untuk pendaftar ke-2
        </p>
      </motion.section>
    </div>
  );
}
