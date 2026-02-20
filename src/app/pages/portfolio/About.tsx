import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Target, Lightbulb, Heart, BookOpen, ShieldCheck, Users,
  ArrowRight, Star, Smile, Award, Shield, Thermometer, GraduationCap, Gamepad2,
} from 'lucide-react';
import { PhotoGalleryGrid } from '../../components/ui/photo-gallery-grid';

const facilityCategories = [
  {
    key: 'keamanan',
    label: 'Keamanan',
    icon: <Shield size={16} />,
    items: [
      { alt: 'Sistem CCTV 24 jam memantau seluruh area sekolah', label: '🎥 CCTV 24 Jam' },
      { alt: 'Proses fogging disinfektan rutin untuk kebersihan', label: '🧴 Fogging Disinfektan' },
    ],
  },
  {
    key: 'kenyamanan',
    label: 'Kenyamanan',
    icon: <Thermometer size={16} />,
    items: [
      { alt: 'Ruang kelas ber-AC sejuk dan nyaman', label: '❄️ AC & Air Purifier' },
      { alt: 'Toilet bersih ramah anak dengan closet duduk', label: '🚿 Toilet Bersih' },
    ],
  },
  {
    key: 'edukasi',
    label: 'Edukasi',
    icon: <GraduationCap size={16} />,
    items: [
      { alt: 'Perpustakaan dengan koleksi buku cerita anak', label: '📚 Perpustakaan' },
      { alt: 'TV edukasi untuk pembelajaran interaktif', label: '📺 TV Edukasi' },
    ],
  },
  {
    key: 'bermain',
    label: 'Bermain',
    icon: <Gamepad2 size={16} />,
    items: [
      { alt: 'Indoor playground dengan perosotan warna-warni dan matras empuk', label: '🎪 Indoor Playground' },
      { alt: 'Area outdoor luas dengan alat bermain aman', label: '🌳 Outdoor Playground' },
    ],
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function PortfolioAbout() {
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
          Kenali Kami Lebih Dekat
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-[var(--color-neutral-600)] max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Sekolah Islam terpercaya yang mendidik anak dengan cinta, membangun karakter mulia sejak usia dini
        </motion.h2>
      </section>

      {/* ==================== BRAND STORY ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] via-[var(--color-surface)] to-[var(--color-accent-50)] border-2 border-[var(--color-primary-200)] shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)] mb-4">
          Cerita Kami
        </h2>
        <p className="text-sm sm:text-base text-[var(--color-neutral-700)] leading-relaxed mb-4">
          PAUD Jasmine Al Muflihuun hadir di Kalasan, Sleman, Yogyakarta dengan satu tujuan: memberikan pendidikan terbaik
          untuk anak usia dini yang memadukan nilai-nilai Islami, metode bermain, dan fasilitas modern. Kami percaya bahwa
          masa keemasan anak (golden age) adalah waktu paling berharga untuk membangun fondasi iman, karakter, dan kecerdasan.
        </p>
        <p className="text-sm sm:text-base text-[var(--color-neutral-700)] leading-relaxed">
          Dengan tagline <strong>&ldquo;Pendidikan Investasi Masa Depan&rdquo;</strong>, kami berkomitmen menyiapkan generasi
          yang cerdas, kreatif, mandiri, disiplin, dan berakhlakul karimah — siap menghadapi tantangan dunia dengan bekal
          iman yang kuat dan keterampilan modern.
        </p>
      </motion.section>

      {/* ==================== VISI & MISI ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-surface)] border-2 border-[var(--color-primary-200)] shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white mb-5 shadow-md">
            <Target size={28} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)] mb-4">Visi</h2>
          <p className="text-base sm:text-lg text-[var(--color-neutral-700)] leading-relaxed font-medium">
            Mempersiapkan Generasi Cerdas, Kreatif, Mandiri, Disiplin, dan Berakhlakul Karimah
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-secondary-50)] to-[var(--color-surface)] border-2 border-[var(--color-secondary-200)] shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-primary-500)] flex items-center justify-center text-white mb-5 shadow-md">
            <Lightbulb size={28} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)] mb-4">Misi</h2>
          <ul className="space-y-3 text-sm sm:text-base text-[var(--color-neutral-700)] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[var(--color-secondary-600)] shrink-0 mt-0.5">✓</span>
              <span>Menanamkan nilai-nilai Islam dan akhlakul karimah sejak usia dini</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[var(--color-secondary-600)] shrink-0 mt-0.5">✓</span>
              <span>Mengembangkan kecerdasan melalui metode belajar sambil bermain</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[var(--color-secondary-600)] shrink-0 mt-0.5">✓</span>
              <span>Menyediakan lingkungan yang aman, nyaman, dan menyenangkan</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[var(--color-secondary-600)] shrink-0 mt-0.5">✓</span>
              <span>Membangun kemandirian, kreativitas, dan kedisiplinan anak</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[var(--color-secondary-600)] shrink-0 mt-0.5">✓</span>
              <span>Mempersiapkan anak untuk jenjang pendidikan berikutnya</span>
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* ==================== NILAI-NILAI (VALUES) ==================== */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-3">
            Nilai-Nilai Kami
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-3xl mx-auto">
            Prinsip yang menjadi landasan dalam setiap aktivitas pendidikan kami
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8"
        >
          {[
            { icon: <BookOpen size={24} />, title: 'Islami', desc: 'Menanamkan cinta Al-Qur\'an dan nilai-nilai Islam dalam setiap aspek pembelajaran dan pembiasaan sehari-hari.', bg: 'primary' },
            { icon: <ShieldCheck size={24} />, title: 'Aman', desc: 'Lingkungan belajar yang terjaga dengan CCTV, AC, dan standar kebersihan tinggi untuk kenyamanan anak.', bg: 'secondary' },
            { icon: <Star size={24} />, title: 'Kreatif', desc: 'Mendorong imajinasi dan kreativitas melalui seni, musik, coding, dan eksplorasi hands-on setiap hari.', bg: 'accent' },
            { icon: <Award size={24} />, title: 'Mandiri', desc: 'Membangun kemandirian anak melalui kegiatan terstruktur yang melatih tanggung jawab dan percaya diri.', bg: 'success' },
            { icon: <Target size={24} />, title: 'Disiplin', desc: 'Pembiasaan kedisiplinan positif yang membantu anak memahami aturan dan menghargai waktu.', bg: 'warning' },
            { icon: <Smile size={24} />, title: 'Menyenangkan', desc: 'Belajar sambil bermain — setiap hari di Jasmine adalah hari yang menyenangkan bagi anak-anak.', bg: 'info' },
          ].map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-[var(--color-surface)] border-2 border-[var(--color-neutral-200)] shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl bg-[var(--color-${value.bg}-100)] flex items-center justify-center text-[var(--color-${value.bg}-600)] mb-4`}>
                {value.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-neutral-900)] mb-2">{value.title}</h3>
              <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================== KENAPA JASMINE? ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-3">
            Kenapa Memilih Jasmine?
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-3xl mx-auto">
            Kami memahami kekhawatiran orang tua — dan menjawabnya dengan tindakan nyata
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 max-w-5xl mx-auto">
          {[
            { icon: <Heart size={20} />, title: 'Guru Profesional & Sabar', desc: 'Pendidik berpengalaman yang memahami kebutuhan setiap anak, termasuk anak yang pendiam atau lambat beradaptasi.' },
            { icon: <ShieldCheck size={20} />, title: 'Lingkungan Aman & Terpercaya', desc: 'CCTV 24 jam, ruang ber-AC, fogging berkala — keamanan dan kenyamanan anak adalah prioritas utama kami.' },
            { icon: <BookOpen size={20} />, title: 'Belajar Tanpa Tekanan', desc: 'Metode bermain yang menyenangkan agar anak senang sekolah dan tahu bahwa belajar itu menyenangkan.' },
            { icon: <Users size={20} />, title: 'Kualitas Premium, Harga Terjangkau', desc: 'Program unggulan setara sekolah internasional — Metode Ummi, Coding, Bilingual — dengan biaya yang terjangkau.' },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-neutral-200)] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-100)] flex items-center justify-center text-[var(--color-primary-600)] shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-neutral-900)] mb-1.5">{item.title}</h3>
                <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ==================== FASILITAS ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-8 sm:py-10 px-6 sm:px-10 rounded-3xl bg-gradient-to-br from-[var(--color-surface-dark)] to-[var(--color-surface-dark-muted)] text-white"
      >
        <motion.div variants={fadeUp} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Fasilitas Kami</h2>
          <p className="text-base sm:text-lg text-[#d6d3d1]">
            Dirancang untuk kenyamanan dan keamanan anak Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { emoji: '🎥', label: 'CCTV 24 Jam' },
            { emoji: '❄️', label: 'AC & Air Purifier' },
            { emoji: '📺', label: 'TV Edukasi' },
            { emoji: '🕌', label: 'Mushola Siswa' },
            { emoji: '📚', label: 'Perpustakaan' },
            { emoji: '🎪', label: 'Indoor Playground' },
            { emoji: '🌳', label: 'Outdoor Playground' },
            { emoji: '🚿', label: 'Toilet Bersih' },
          ].map((f) => (
            <motion.div
              key={f.label}
              variants={fadeUp}
              transition={{ duration: 0.3 }}
              className="text-center p-4 sm:p-5 rounded-xl bg-white/5"
            >
              <div className="text-3xl sm:text-4xl mb-2">{f.emoji}</div>
              <p className="text-xs sm:text-sm font-medium text-[#e7e5e4]">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ==================== FACILITY TOUR (Tabbed Photo Grid) ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-neutral-900)] mb-3">
            Lihat Fasilitas Kami
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-3xl mx-auto">
            Lingkungan belajar yang aman, nyaman, dan menyenangkan untuk si kecil
          </p>
        </motion.div>

        <FacilityTour />
      </motion.section>

      {/* ==================== CTA ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="py-10 sm:py-14 px-6 sm:px-10 lg:px-16 rounded-3xl bg-gradient-to-br from-[var(--color-primary-500)] via-[var(--color-accent-500)] to-[var(--color-secondary-500)] text-white text-center shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Jadwalkan Kunjungan Sekolah
        </h2>
        <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-95">
          Datang dan lihat langsung bagaimana kami mendidik anak-anak dengan cinta dan profesionalisme.
        </p>
        <Link
          to="/portfolio/admissions"
          className="inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-[var(--color-surface)] text-[var(--color-neutral-900)] font-bold hover:shadow-2xl hover:-translate-y-1 transition-all text-base sm:text-lg"
        >
          Jadwalkan Sekarang
          <ArrowRight size={20} />
        </Link>
      </motion.section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Facility Tour — tabbed category gallery                           */
/* ------------------------------------------------------------------ */
function FacilityTour() {
  const [active, setActive] = useState(facilityCategories[0].key);
  const current = facilityCategories.find((c) => c.key === active) ?? facilityCategories[0];

  return (
    <div className="space-y-6">
      {/* category tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {facilityCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
              active === cat.key
                ? 'bg-[var(--color-primary-500)] text-white shadow-md scale-[1.02]'
                : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-200)]'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* animated gallery panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
        >
          <PhotoGalleryGrid items={current.items} animated />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
