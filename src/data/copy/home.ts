import type { PageContent } from './types';

export const homeContent: PageContent = {
  hero: {
    headline: {
      id: 'Awal Terbaik untuk Si Kecil',
      en: 'The Best Start for Them',
    },
    subheadline: {
      id: 'Tempat anak Anda tumbuh, belajar, dan bersinar dengan percaya diri.',
      en: 'Where your child grows, learns, and shines with confidence.',
    },
    cta: {
      id: 'Jadwalkan Kunjungan',
      en: 'Book a Visit',
    },
    microcopy: {
      id: 'Gratis & tanpa komitmen. Lihat sendiri suasana belajar yang menyenangkan.',
      en: 'Free & no commitment. See our joyful learning environment for yourself.',
    },
  },

  features: [
    {
      headline: {
        id: 'Kurikulum Bermain yang Teruji',
        en: 'A Proven Play-Based Curriculum',
      },
      description: {
        id: 'Didesain oleh ahli pendidikan anak usia dini dan selaras dengan standar nasional PAUD Indonesia.',
        en: "Designed by early childhood experts and aligned with Indonesia's national PAUD standards.",
      },
      bullets: [
        {
          id: 'Merangsang kreativitas melalui kegiatan seni, musik, dan eksplorasi alam',
          en: 'Stimulates creativity through art, music, and nature exploration',
        },
        {
          id: 'Membangun fondasi literasi dan numerasi sejak dini',
          en: 'Builds early literacy and numeracy foundations',
        },
        {
          id: 'Portofolio perkembangan anak diperbarui setiap bulan untuk orang tua',
          en: 'Monthly growth portfolios keep parents informed',
        },
      ],
      icon: 'BookOpen',
    },
    {
      headline: {
        id: 'Aman, Bersih, dan Menyenangkan',
        en: 'Safe, Clean, and Joyful',
      },
      description: {
        id: 'Ruang kelas dirancang ramah anak dengan standar keamanan tinggi dan fasilitas bermain modern.',
        en: 'Child-friendly classrooms with high safety standards and modern play facilities.',
      },
      bullets: [
        {
          id: 'CCTV 24 jam yang dapat diakses orang tua secara real-time',
          en: '24/7 CCTV with real-time parent access',
        },
        {
          id: 'Rasio guru dan murid 1:6 untuk perhatian optimal',
          en: '1:6 teacher-to-student ratio for focused attention',
        },
        {
          id: 'Ruang bermain indoor dan outdoor yang terawat dan higienis',
          en: 'Well-maintained, hygienic indoor and outdoor play areas',
        },
      ],
      icon: 'Shield',
    },
    {
      headline: {
        id: 'Guru Bersertifikat dan Berpengalaman',
        en: 'Certified, Experienced Teachers',
      },
      description: {
        id: 'Tim pengajar kami memiliki sertifikasi PAUD dan pengalaman rata-rata 8 tahun di pendidikan anak.',
        en: 'Our teaching team holds PAUD certifications with an average of 8 years in early education.',
      },
      bullets: [
        {
          id: 'Pelatihan berkelanjutan dalam metode Montessori dan Reggio Emilia',
          en: 'Ongoing training in Montessori and Reggio Emilia methods',
        },
        {
          id: 'Pendekatan personal yang menghargai keunikan setiap anak',
          en: "Personalized approach honoring each child's uniqueness",
        },
        {
          id: 'Komunikasi rutin dengan orang tua melalui aplikasi dan pertemuan tatap muka',
          en: 'Regular parent communication via app and face-to-face meetings',
        },
      ],
      icon: 'GraduationCap',
    },
  ],

  testimonials: [
    {
      quote: {
        id: 'Anak saya dulu pemalu, sekarang berani tampil di depan kelas. Jasmine benar-benar mengubah kepercayaan dirinya. Saya sangat merekomendasikan untuk orang tua yang ingin melihat anaknya berkembang.',
        en: "My child used to be shy, now she confidently presents in front of class. Jasmine truly transformed her confidence. I highly recommend it for parents who want to see real growth.",
      },
      name: 'Sarah',
      attribution: {
        id: 'Ibu Sarah, orang tua murid (usia 4 tahun)',
        en: 'Sarah, parent (child age 4)',
      },
      childAge: '4',
      avatarInitials: 'S',
    },
    {
      quote: {
        id: 'Portofolio bulanan membuat kami selalu tahu perkembangan anak. Guru-gurunya sangat perhatian dan sabar. Kami merasa tenang menitipkan anak di sini.',
        en: "The monthly portfolio keeps us updated on our child's progress. The teachers are attentive and patient. We feel at ease leaving our child here.",
      },
      name: 'Andi & Rina',
      attribution: {
        id: 'Bapak Andi & Ibu Rina, orang tua murid (usia 3 tahun)',
        en: 'Andi & Rina, parents (child age 3)',
      },
      childAge: '3',
      avatarInitials: 'AR',
    },
    {
      quote: {
        id: 'Fasilitas lengkap dan bersih. Anak saya selalu semangat berangkat sekolah setiap pagi. Terima kasih Jasmine sudah menjadi rumah kedua bagi anak kami.',
        en: "Complete and clean facilities. My child is always excited to go to school every morning. Thank you Jasmine for being a second home for our child.",
      },
      name: 'Dewi',
      attribution: {
        id: 'Ibu Dewi, orang tua murid (usia 5 tahun)',
        en: 'Dewi, parent (child age 5)',
      },
      childAge: '5',
      avatarInitials: 'D',
    },
  ],

  trustSignals: [
    {
      label: { id: '500+ keluarga mempercayakan anak mereka', en: '500+ families have trusted us' },
      type: 'stat',
    },
    {
      label: { id: 'Berdiri sejak 2015 — 10+ tahun', en: 'Est. 2015 — 10+ years' },
      type: 'stat',
    },
    {
      label: { id: '98% orang tua merekomendasikan', en: '98% of parents recommend us' },
      type: 'stat',
    },
    {
      label: { id: 'Terakreditasi A oleh BAN PAUD', en: 'A-Accredited by BAN PAUD' },
      type: 'credential',
    },
  ],

  faq: [
    {
      question: {
        id: 'Berapa usia minimal untuk mendaftarkan anak?',
        en: 'What is the minimum age for enrollment?',
      },
      answer: {
        id: 'Jasmine menerima anak mulai usia 2 tahun. Kami memiliki program Toddler (2–3 tahun), Pre-K (3–4 tahun), dan Kindergarten (4–5 tahun) yang masing-masing dirancang sesuai tahap perkembangan anak.',
        en: 'Jasmine accepts children from age 2. We offer Toddler (2–3), Pre-K (3–4), and Kindergarten (4–5) programs, each designed for the appropriate developmental stage.',
      },
    },
    {
      question: {
        id: 'Apa kurikulum yang digunakan di Jasmine?',
        en: 'What curriculum does Jasmine use?',
      },
      answer: {
        id: 'Kami menerapkan kurikulum berbasis bermain yang menggabungkan pendekatan Montessori dan Reggio Emilia, selaras dengan standar Kurikulum Merdeka PAUD dari Kemendikbud. Fokus kami pada perkembangan kognitif, sosial-emosional, dan motorik secara holistik.',
        en: "We use a play-based curriculum combining Montessori and Reggio Emilia approaches, aligned with the Ministry of Education's Kurikulum Merdeka for PAUD. We focus on holistic cognitive, social-emotional, and motor development.",
      },
    },
    {
      question: {
        id: 'Bagaimana saya bisa memantau perkembangan anak saya?',
        en: "How can I track my child's development?",
      },
      answer: {
        id: 'Setiap bulan orang tua menerima portofolio digital berisi foto kegiatan, catatan observasi guru, dan penilaian perkembangan. Selain itu, kami mengadakan pertemuan orang tua-guru setiap semester dan menyediakan akses CCTV real-time.',
        en: 'Parents receive a monthly digital portfolio with activity photos, teacher observations, and developmental assessments. We also hold parent-teacher meetings each semester and provide real-time CCTV access.',
      },
    },
    {
      question: {
        id: 'Berapa biaya pendidikan di Jasmine?',
        en: 'How much does tuition cost?',
      },
      answer: {
        id: 'Biaya bervariasi sesuai program. Kami menawarkan paket yang transparan tanpa biaya tersembunyi. Hubungi tim admisi kami untuk mendapatkan rincian biaya lengkap dan informasi tentang opsi cicilan yang tersedia.',
        en: 'Tuition varies by program. We offer transparent packages with no hidden fees. Contact our admissions team for a full fee breakdown and information about available installment options.',
      },
    },
    {
      question: {
        id: 'Apakah Jasmine menyediakan makan siang?',
        en: 'Does Jasmine provide lunch?',
      },
      answer: {
        id: 'Ya, kami menyediakan makan siang dan dua kali snack sehat setiap hari. Menu dirancang oleh ahli gizi anak dan bisa disesuaikan untuk anak dengan alergi atau kebutuhan diet khusus.',
        en: 'Yes, we provide lunch and two healthy snacks daily. Menus are designed by a child nutritionist and can be adapted for allergies or special dietary needs.',
      },
    },
    {
      question: {
        id: 'Bagaimana proses adaptasi untuk anak baru?',
        en: 'How does the adaptation process work for new students?',
      },
      answer: {
        id: 'Kami memiliki program orientasi selama 2 minggu. Minggu pertama, orang tua boleh mendampingi. Minggu kedua, anak mulai mandiri dengan bimbingan guru pendamping. Tim kami akan berkomunikasi aktif dengan orang tua selama masa transisi ini.',
        en: 'We have a 2-week orientation program. During the first week, parents may accompany their child. In the second week, children start independently with a dedicated teacher. Our team actively communicates with parents throughout this transition.',
      },
    },
    {
      question: {
        id: 'Apa jam operasional sekolah?',
        en: "What are the school's operating hours?",
      },
      answer: {
        id: 'Program reguler berlangsung Senin–Jumat, pukul 08.00–12.00 WIB. Kami juga menawarkan program extended day hingga pukul 15.00 WIB bagi orang tua yang membutuhkan waktu tambahan.',
        en: 'Regular programs run Monday–Friday, 08:00–12:00 WIB. We also offer an extended day program until 15:00 WIB for parents who need extra time.',
      },
    },
    {
      question: {
        id: 'Bagaimana cara mendaftar?',
        en: 'How do I enroll my child?',
      },
      answer: {
        id: 'Proses pendaftaran dimulai dengan kunjungan sekolah. Setelah itu, Anda bisa mengisi formulir pendaftaran online dan melengkapi dokumen yang diperlukan. Tim admisi kami akan memandu Anda di setiap langkah. Jadwalkan kunjungan hari ini untuk memulai.',
        en: 'Enrollment starts with a school visit. After that, you can fill out the online registration form and submit the required documents. Our admissions team will guide you every step of the way. Schedule a visit today to get started.',
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
      id: 'Jasmine Kindergarten — Membangun fondasi cerah untuk masa depan anak Indonesia.',
      en: "Jasmine Kindergarten — Building bright foundations for Indonesia's children.",
    },
    legal: {
      id: '© 2026 Jasmine Kindergarten. Terakreditasi A oleh BAN PAUD. Semua hak dilindungi.',
      en: '© 2026 Jasmine Kindergarten. A-Accredited by BAN PAUD. All rights reserved.',
    },
  },
};
