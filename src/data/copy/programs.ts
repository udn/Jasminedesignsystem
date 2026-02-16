import type { PageContent } from './types';

export const programsContent: PageContent = {
  hero: {
    headline: {
      id: 'Program untuk Setiap Tahap',
      en: 'Programs for Every Stage',
    },
    subheadline: {
      id: 'Kurikulum terstruktur yang tumbuh bersama anak Anda, dari balita hingga TK.',
      en: 'A structured curriculum that grows with your child, from toddler to kindergarten.',
    },
    cta: {
      id: 'Lihat Detail Program',
      en: 'View Program Details',
    },
    microcopy: {
      id: 'Setiap program dirancang oleh ahli sesuai tahap perkembangan anak Anda.',
      en: "Each program is designed by experts to match your child's developmental stage.",
    },
  },

  features: [
    {
      headline: {
        id: 'Toddler: Langkah Pertama Belajar',
        en: 'Toddler: First Steps to Learning',
      },
      description: {
        id: 'Memperkenalkan dunia belajar melalui bermain sensorik, musik, dan gerakan. Fokus pada kemandirian awal dan kenyamanan emosional.',
        en: 'Introducing learning through sensory play, music, and movement. Focus on early independence and emotional comfort.',
      },
      bullets: [
        {
          id: 'Stimulasi sensorik dan motorik halus melalui aktivitas bermain terarah',
          en: 'Sensory and fine motor stimulation through guided play activities',
        },
        {
          id: 'Pengenalan rutinitas sekolah yang lembut dan bertahap',
          en: 'Gentle, gradual introduction to school routines',
        },
        {
          id: 'Rasio guru-murid 1:4 untuk pendampingan maksimal di usia awal',
          en: '1:4 teacher-student ratio for maximum early-age support',
        },
      ],
      icon: 'Baby',
    },
    {
      headline: {
        id: 'Pre-K: Eksplorasi dan Penemuan',
        en: 'Pre-K: Explore and Discover',
      },
      description: {
        id: 'Mengembangkan rasa ingin tahu alami anak melalui proyek, cerita, dan eksperimen sederhana. Fondasi literasi dan numerasi dimulai di sini.',
        en: 'Nurturing natural curiosity through projects, stories, and simple experiments. Literacy and numeracy foundations start here.',
      },
      bullets: [
        {
          id: 'Pengenalan huruf, angka, dan konsep dasar melalui permainan interaktif',
          en: 'Introduction to letters, numbers, and basic concepts through interactive games',
        },
        {
          id: 'Proyek tematik bulanan yang merangsang kreativitas dan kerja sama',
          en: 'Monthly themed projects that spark creativity and teamwork',
        },
        {
          id: 'Pengembangan kemampuan bahasa dan komunikasi secara alami',
          en: 'Natural development of language and communication skills',
        },
      ],
      icon: 'Lightbulb',
    },
    {
      headline: {
        id: 'Kindergarten: Siap untuk Masa Depan',
        en: 'Kindergarten: Ready for the Future',
      },
      description: {
        id: 'Mempersiapkan anak memasuki jenjang SD dengan percaya diri. Fokus pada kesiapan akademik, kemandirian, dan keterampilan sosial.',
        en: 'Preparing children to enter primary school with confidence. Focus on academic readiness, independence, and social skills.',
      },
      bullets: [
        {
          id: 'Kesiapan membaca, menulis, dan berhitung sesuai standar SD',
          en: 'Reading, writing, and math readiness aligned with primary school standards',
        },
        {
          id: 'Program kepemimpinan cilik dan tanggung jawab diri',
          en: 'Junior leadership program and personal responsibility building',
        },
        {
          id: 'Pameran portofolio akhir tahun untuk merayakan pencapaian anak',
          en: "Year-end portfolio exhibition celebrating each child's achievements",
        },
      ],
      icon: 'Rocket',
    },
  ],

  testimonials: [
    {
      quote: {
        id: 'Anak saya mengikuti program Toddler sejak usia 2 tahun. Dalam 3 bulan, dia sudah bisa makan sendiri dan bermain bersama teman. Saya takjub dengan kemajuannya yang begitu cepat.',
        en: "My child joined the Toddler program at age 2. Within 3 months, she could eat independently and play with friends. I'm amazed at how quickly she's progressed.",
      },
      name: 'Linda',
      attribution: {
        id: 'Ibu Linda, orang tua murid Toddler',
        en: 'Linda, Toddler program parent',
      },
      avatarInitials: 'L',
    },
    {
      quote: {
        id: "Program Pre-K benar-benar menumbuhkan rasa ingin tahu anak kami. Sekarang dia selalu bertanya 'kenapa' dan 'bagaimana'. Proyek tematiknya sangat menarik dan edukatif.",
        en: "The Pre-K program truly nurtures our child's curiosity. Now he always asks 'why' and 'how.' The themed projects are engaging and educational.",
      },
      name: 'Hendra',
      attribution: {
        id: 'Bapak Hendra, orang tua murid Pre-K',
        en: 'Hendra, Pre-K program parent',
      },
      avatarInitials: 'H',
    },
    {
      quote: {
        id: 'Setelah lulus program Kindergarten Jasmine, anak saya masuk SD favorit tanpa kesulitan. Dia sudah lancar membaca dan sangat percaya diri berinteraksi dengan teman baru.',
        en: "After graduating from Jasmine's Kindergarten program, my child entered a top primary school with ease. He could already read fluently and confidently interacts with new friends.",
      },
      name: 'Kartika',
      attribution: {
        id: 'Ibu Kartika, alumni orang tua',
        en: 'Kartika, alumni parent',
      },
      avatarInitials: 'K',
    },
  ],

  trustSignals: [
    {
      label: { id: '3 program usia terstruktur', en: '3 structured age-based programs' },
      type: 'stat',
    },
    {
      label: { id: '95% alumni siap masuk SD', en: '95% of alumni are primary school ready' },
      type: 'stat',
    },
    {
      label: { id: 'Berbasis Montessori & Reggio Emilia', en: 'Montessori & Reggio Emilia based' },
      type: 'credential',
    },
    {
      label: { id: 'Portofolio perkembangan digital bulanan', en: 'Monthly digital developmental portfolio' },
      type: 'credential',
    },
  ],

  faq: [
    {
      question: { id: 'Apa perbedaan program Toddler, Pre-K, dan Kindergarten?', en: 'What is the difference between Toddler, Pre-K, and Kindergarten?' },
      answer: {
        id: 'Toddler (2–3 tahun) fokus pada pengenalan lingkungan dan kemandirian awal. Pre-K (3–4 tahun) mengembangkan rasa ingin tahu melalui eksplorasi dan fondasi akademik. Kindergarten (4–5 tahun) mempersiapkan kesiapan masuk SD secara holistik.',
        en: 'Toddler (2–3) focuses on environmental introduction and early independence. Pre-K (3–4) develops curiosity through exploration and academic foundations. Kindergarten (4–5) holistically prepares children for primary school readiness.',
      },
    },
    {
      question: { id: 'Apakah anak bisa naik program di tengah tahun?', en: 'Can a child move up to the next program mid-year?' },
      answer: {
        id: 'Ya, kami melakukan evaluasi perkembangan setiap 3 bulan. Jika anak menunjukkan kesiapan lebih awal, tim kami akan berdiskusi dengan orang tua tentang kemungkinan perpindahan program.',
        en: 'Yes, we conduct developmental evaluations every 3 months. If a child shows early readiness, our team will discuss a suitable program transition with parents.',
      },
    },
    {
      question: { id: 'Apa saja kegiatan enrichment yang tersedia?', en: 'What enrichment activities are available?' },
      answer: {
        id: 'Jasmine menawarkan kelas enrichment meliputi: bahasa Inggris, bahasa Mandarin, seni dan kerajinan, musik dan gerakan, olahraga motorik, serta kelas memasak cilik.',
        en: 'Jasmine offers enrichment classes including: English, Mandarin, arts and crafts, music and movement, motor sports, and kids\' cooking class.',
      },
    },
    {
      question: { id: 'Bagaimana kurikulum disesuaikan untuk setiap anak?', en: 'How is the curriculum adapted for each child?' },
      answer: {
        id: 'Setiap anak memiliki profil perkembangan individual. Guru menggunakan observasi harian untuk menyesuaikan tingkat kesulitan dan jenis aktivitas. Pendekatan diferensiasi memastikan setiap anak belajar sesuai kecepatan dan gaya belajarnya.',
        en: 'Each child has an individual developmental profile. Teachers use daily observations to adjust difficulty levels and activity types. Our differentiated approach ensures every child learns at their own pace and style.',
      },
    },
    {
      question: { id: 'Apakah ada program persiapan masuk SD?', en: 'Is there a primary school preparation program?' },
      answer: {
        id: 'Ya, program Kindergarten kami mencakup persiapan masuk SD yang komprehensif termasuk kesiapan membaca-menulis, konsep matematika dasar, kemandirian, dan keterampilan sosial.',
        en: 'Yes, our Kindergarten program includes comprehensive primary school preparation covering reading-writing readiness, basic math concepts, independence, and social skills.',
      },
    },
    {
      question: { id: 'Berapa jam belajar dalam sehari?', en: 'How many hours is the daily program?' },
      answer: {
        id: 'Program reguler berlangsung 4 jam (08.00–12.00 WIB). Kami juga menawarkan extended day hingga pukul 15.00 yang mencakup makan siang, istirahat, dan kegiatan enrichment tambahan.',
        en: 'The regular program runs 4 hours (08:00–12:00). We also offer an extended day until 15:00 that includes lunch, rest time, and additional enrichment activities.',
      },
    },
    {
      question: { id: 'Apakah ada laporan perkembangan anak?', en: 'Are there child development reports?' },
      answer: {
        id: 'Ya, kami menyediakan portofolio digital bulanan yang mencakup foto kegiatan, hasil karya, catatan observasi guru, dan penilaian perkembangan di 6 aspek: kognitif, bahasa, motorik, sosial-emosional, seni, dan moral-spiritual.',
        en: 'Yes, we provide monthly digital portfolios covering activity photos, work samples, teacher observations, and developmental assessments across 6 areas: cognitive, language, motor, social-emotional, arts, and moral-spiritual.',
      },
    },
    {
      question: { id: 'Bagaimana jika anak saya belum siap untuk programnya?', en: "What if my child isn't ready for their program?" },
      answer: {
        id: 'Tidak perlu khawatir. Kami melakukan asesmen awal untuk memahami tingkat kesiapan anak. Jika diperlukan, tim kami akan merekomendasikan program yang lebih sesuai atau menyediakan dukungan tambahan.',
        en: 'No need to worry. We conduct initial assessments to understand readiness levels. If needed, our team will recommend a more suitable program or provide additional support.',
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
      id: 'Jasmine Kindergarten — Kurikulum bermain terstruktur untuk setiap tahap tumbuh kembang.',
      en: 'Jasmine Kindergarten — Structured play-based curriculum for every developmental stage.',
    },
    legal: {
      id: '© 2026 Jasmine Kindergarten. Terakreditasi A oleh BAN PAUD. Semua hak dilindungi.',
      en: '© 2026 Jasmine Kindergarten. A-Accredited by BAN PAUD. All rights reserved.',
    },
  },
};
