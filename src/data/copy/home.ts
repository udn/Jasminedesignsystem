import type { PageContent } from './types';

export const homeContent: PageContent = {
  hero: {
    headline: {
      id: 'Pendidikan Hangat, Masa Depan Cerah',
      en: 'Warm Learning, Bright Future',
    },
    subheadline: {
      id: 'PAUD & TK Islam di Sleman yang mendampingi tumbuh kembang anak usia 2–6 tahun.',
      en: 'Islamic early years school in Sleman nurturing children aged 2–6.',
    },
    cta: {
      id: 'Jadwalkan Kunjungan',
      en: 'Schedule a Visit',
    },
    microcopy: {
      id: 'Gratis trial class dan tur sekolah untuk orang tua baru.',
      en: 'Free trial class and school tour for new parents.',
    },
  },

  features: [
    {
      headline: {
        id: 'Fokus pada Karakter dan Iman',
        en: 'Focused on Faith and Character',
      },
      description: {
        id: 'Program harian yang menanamkan akhlak mulia, kecintaan pada Al-Qur’an, dan kemandirian sejak dini.',
        en: 'Daily routines building good character, love for the Qur’an, and early independence.',
      },
      bullets: [
        {
          id: 'Anak percaya diri: terbiasa menyapa, berbagi, dan memimpin doa.',
          en: 'Confident children: used to greeting, sharing, and leading prayers.',
        },
        {
          id: 'Nilai Islami kuat melalui pembiasaan doa, shalat, dan adab sederhana.',
          en: 'Strong Islamic values through daily prayers and simple manners.',
        },
        {
          id: 'Orang tua tenang karena aktivitas selaras dengan nilai keluarga Muslim.',
          en: 'Parents feel at ease as activities align with Muslim family values.',
        },
      ],
      icon: 'Sparkles',
    },
    {
      headline: {
        id: 'Belajar Aktif Melalui Bermain',
        en: 'Active Play-Based Learning',
      },
      description: {
        id: 'Setiap sudut kelas dan playground dirancang agar anak belajar sambil bermain, bereksplorasi, dan bereksperimen.',
        en: 'Classrooms and playgrounds are designed for learning through play, exploration, and experiments.',
      },
      bullets: [
        {
          id: 'Motorik terstimulasi lewat panjat, seluncur, dan permainan keseimbangan.',
          en: 'Motor skills stimulated through climbing, slides, and balance games.',
        },
        {
          id: 'Kreativitas tumbuh lewat menggambar, seni, dan eksperimen sains sederhana.',
          en: 'Creativity grows through drawing, art, and simple science activities.',
        },
        {
          id: 'Bahasa berkembang lewat story telling, role play, dan circle time harian.',
          en: 'Language develops with storytelling, role play, and daily circle time.',
        },
      ],
      icon: 'Puzzle',
    },
    {
      headline: {
        id: 'Komunikasi Terbuka dengan Orang Tua',
        en: 'Open Communication with Parents',
      },
      description: {
        id: 'Laporan perkembangan berkala, dokumentasi foto, dan konsultasi rutin agar orang tua selalu terhubung.',
        en: 'Regular progress reports, photos, and consultations keep parents closely involved.',
      },
      bullets: [
        {
          id: 'Update rutin: laporan bulanan motorik, sosial, bahasa, dan kemandirian.',
          en: 'Regular updates: monthly reports on motor, social, language and independence.',
        },
        {
          id: 'Grup komunikasi resmi untuk informasi kegiatan dan dokumentasi harian.',
          en: 'Official chat groups for activity info and daily documentation.',
        },
        {
          id: 'Jadwal khusus konsultasi dengan guru untuk membahas kebutuhan anak.',
          en: 'Dedicated consultation slots with teachers to discuss your child’s needs.',
        },
      ],
      icon: 'MessagesSquare',
    },
  ],

  testimonials: [
    {
      quote: {
        id: 'Sebagai orang tua baru, saya sempat khawatir anak saya pemalu dan sulit beradaptasi. Setelah tiga bulan di PAUD Jasmine, ia mulai berani bercerita, menyapa tetangga, dan memimpin doa makan di rumah.',
        en: 'As a first-time parent I worried my child was shy and would struggle to adapt. After three months at PAUD Jasmine she now loves to share stories, greet neighbours, and lead our mealtime prayers.',
      },
      name: 'Rina',
      attribution: {
        id: 'Ibu Rina, orang tua murid KB',
        en: 'Rina, parent of a Playgroup student',
      },
      childAge: '3',
      avatarInitials: 'R',
    },
    {
      quote: {
        id: 'Kami memilih PAUD Jasmine karena ingin lingkungan Islami yang tetap ceria. Anak kami sangat menyukai kegiatan membaca Al-Qur’an dengan metode UMMI dan bermain di playground yang aman.',
        en: 'We chose PAUD Jasmine for its joyful Islamic environment. Our child loves Qur’an time with the UMMI method and the safe, colourful playground.',
      },
      name: 'Andi',
      attribution: {
        id: 'Bapak Andi, orang tua murid TK A',
        en: 'Andi, parent of a Kindergarten A student',
      },
      childAge: '5',
      avatarInitials: 'A',
    },
    {
      quote: {
        id: 'Yang paling kami hargai adalah komunikasi sekolah dengan orang tua. Setiap bulan kami mendapat laporan detail perkembangan anak dan bisa konsultasi langsung dengan wali kelas.',
        en: 'We value the strong communication with parents most. Every month we receive detailed reports and can speak directly with the homeroom teacher.',
      },
      name: 'Sari',
      attribution: {
        id: 'Ibu Sari, orang tua murid TK B',
        en: 'Sari, parent of a Kindergarten B student',
      },
      childAge: '6',
      avatarInitials: 'S',
    },
  ],

  trustSignals: [
    {
      label: {
        id: 'Berpengalaman mendampingi anak usia dini di Sleman',
        en: 'Experienced in early childhood education in Sleman',
      },
      type: 'stat',
    },
    {
      label: {
        id: 'Rasio guru–anak kecil untuk perhatian optimal',
        en: 'Low teacher–child ratio for focused attention',
      },
      type: 'stat',
    },
    {
      label: {
        id: 'Lingkungan Islami dengan pembiasaan doa dan tilawah',
        en: 'Islamic environment with daily prayers and Qur’an recitation',
      },
      type: 'credential',
    },
    {
      label: {
        id: 'Kelas ber-AC, CCTV, dan area bermain aman',
        en: 'Air-conditioned classes, CCTV, and safe play areas',
      },
      type: 'credential',
    },
  ],

  faq: [
    {
      question: {
        id: 'Mulai usia berapa anak bisa mendaftar di PAUD Jasmine?',
        en: 'From what age can children enroll at PAUD Jasmine?',
      },
      answer: {
        id: 'Anak dapat mulai bergabung sejak usia 2 tahun untuk Kelompok Bermain (KB) dan 4–6 tahun untuk Taman Kanak-Kanak (TK). Kami membantu orang tua menentukan kelas yang paling sesuai berdasarkan usia dan kesiapan anak, dengan masa adaptasi bertahap di awal.',
        en: 'Children can join from age 2 for Playgroup and 4–6 for Kindergarten. We help parents choose the right class based on age and readiness, with a gentle phased adaptation period at the start.',
      },
    },
    {
      question: {
        id: 'Apakah PAUD Jasmine berbasis Islam?',
        en: 'Is PAUD Jasmine an Islamic school?',
      },
      answer: {
        id: 'Ya. PAUD Jasmine Al Muflihuun menerapkan nilai-nilai Islami dalam kegiatan harian: doa, shalat, dan pengenalan Al-Qur’an dengan metode UMMI yang ramah anak. Suasana tetap ceria dan penuh pelukan, tanpa pendekatan yang menakutkan.',
        en: 'Yes. PAUD Jasmine Al Muflihuun applies Islamic values in daily activities: prayers, worship, and Qur’an learning using the child-friendly UMMI method. The atmosphere stays cheerful and loving, never frightening.',
      },
    },
    {
      question: {
        id: 'Bagaimana keamanan dan kebersihan lingkungan sekolah?',
        en: 'How safe and clean is the school environment?',
      },
      answer: {
        id: 'Area belajar dan playground berpagar, diawasi petugas, serta dipantau CCTV. Ruang kelas ber-AC dibersihkan setiap hari, dengan jadwal fogging desinfektan berkala. Toilet menggunakan kloset duduk yang ramah anak.',
        en: 'Classrooms and playgrounds are fenced, monitored by staff, and covered by CCTV. Air-conditioned rooms are cleaned daily with regular disinfection, and toilets use child-friendly seated fixtures.',
      },
    },
    {
      question: {
        id: 'Seperti apa metode belajar yang digunakan?',
        en: 'What learning approach do you use?',
      },
      answer: {
        id: 'Kami menggabungkan belajar aktif berbasis bermain dengan kegiatan terstruktur sederhana. Anak diajak bergerak, bereksplorasi, dan mencoba sendiri melalui permainan, seni, musik, dan aktivitas luar ruang, serta belajar Al-Qur’an dengan metode UMMI.',
        en: 'We combine active play-based learning with simple structured activities. Children move, explore, and experiment through games, art, music, outdoor play, and child-friendly Qur’an learning with the UMMI method.',
      },
    },
    {
      question: {
        id: 'Apakah orang tua bisa memantau perkembangan anak?',
        en: 'Can parents monitor their child’s development?',
      },
      answer: {
        id: 'Bisa. Orang tua menerima laporan perkembangan berkala yang mencakup aspek motorik, bahasa, sosial-emosi, dan kemandirian. Kami juga membagikan dokumentasi foto kegiatan tertentu dan menyediakan jadwal konsultasi rutin dengan wali kelas.',
        en: 'Yes. Parents receive regular progress reports covering motor, language, social-emotional, and independence skills. We also share activity photos and offer regular consultation slots with the homeroom teacher.',
      },
    },
    {
      question: {
        id: 'Berapa jam belajar setiap hari dan apakah ada layanan full day?',
        en: 'How long is the daily schedule and is there a full-day option?',
      },
      answer: {
        id: 'Kegiatan reguler berlangsung sekitar 3–4 jam di pagi hari. Untuk orang tua yang membutuhkan, tersedia opsi waktu perpanjangan dengan kegiatan tambahan yang tetap edukatif dan menyenangkan, tanpa membuat anak kelelahan.',
        en: 'Regular sessions run around 3–4 hours in the morning. For families who need more time we offer extended hours with   , age-appropriate activities that keep children engaged without exhausting them.',
      },
    },
    {
      question: {
        id: 'Bagaimana proses pendaftaran singkatnya?',
        en: 'What are the basic steps to enroll?',
      },
      answer: {
        id: 'Orang tua mengisi formulir minat, lalu kami jadwalkan kunjungan dan trial class. Setelah merasa cocok, orang tua melengkapi administrasi sederhana tanpa tes akademik, karena fokus kami adalah kenyamanan dan kesiapan emosi anak.',
        en: 'Parents fill in an interest form, then we arrange a visit and trial class. Once you feel confident, you complete simple paperwork—no academic tests—because we focus on comfort and emotional readiness.',
      },
    },
    {
      question: {
        id: 'Apakah tersedia diskon atau promo pendaftaran?',
        en: 'Do you offer registration discounts or promos?',
      },
      answer: {
        id: 'Secara berkala kami memberikan promo seperti free trial class, potongan biaya untuk saudara kandung, atau diskon pendaftar awal. Informasi lengkap akan disampaikan saat kunjungan atau melalui kontak resmi kami.',
        en: 'We periodically offer promos such as free trial classes, sibling discounts, and early-bird offers. Full details are shared during your visit or via our official contact channels.',
      },
    },
  ],

  footer: {
    navigation: [
      { label: { id: 'Beranda', en: 'Home' }, href: '/website' },
      { label: { id: 'Tentang Kami', en: 'About Us' }, href: '/website/about' },
      { label: { id: 'Program', en: 'Programs' }, href: '/website/programs' },
      { label: { id: 'Pendaftaran', en: 'Admissions' }, href: '/website/admissions' },
      { label: { id: 'Hubungi Kami', en: 'Contact' }, href: '/website/contact' },
    ],
    brandStatement: {
      id: 'PAUD & TK Islam yang hangat, aman, dan menyenangkan di Kalasan, Sleman.',
      en: 'A warm, safe Islamic early childhood school in Kalasan, Sleman.',
    },
    legal: {
      id: '© 2026 PAUD Jasmine Al Muflihuun. Semua hak dilindungi.',
      en: '© 2026 PAUD Jasmine Al Muflihuun. All rights reserved.',
    },
  },
};
