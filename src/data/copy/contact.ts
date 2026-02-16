import type { PageContent } from './types';

export const contactContent: PageContent = {
  hero: {
    headline: {
      id: 'Kami Senang Mendengar dari Anda',
      en: "We'd Love to Hear from You",
    },
    subheadline: {
      id: 'Punya pertanyaan atau ingin berkunjung? Tim kami siap membantu kapan saja.',
      en: 'Have questions or want to visit? Our team is ready to help anytime.',
    },
    cta: {
      id: 'Hubungi via WhatsApp',
      en: 'Chat on WhatsApp',
    },
    microcopy: {
      id: 'Rata-rata waktu respons kami kurang dari 1 jam di hari kerja.',
      en: 'Our average response time is under 1 hour on business days.',
    },
  },

  features: [
    {
      headline: {
        id: 'Kunjungi Sekolah Kami Langsung',
        en: 'Visit Our School in Person',
      },
      description: {
        id: 'Datang dan lihat sendiri suasana belajar yang hangat dan menyenangkan di Jasmine. Kunjungan gratis tanpa janji — tapi kami sarankan untuk menjadwalkan terlebih dahulu.',
        en: 'Come see our warm, joyful learning atmosphere at Jasmine. Walk-ins welcome — but we recommend scheduling ahead.',
      },
      bullets: [
        {
          id: 'Alamat: Jl. Pendidikan No. 88, Kebayoran Baru, Jakarta Selatan 12160',
          en: 'Address: Jl. Pendidikan No. 88, Kebayoran Baru, South Jakarta 12160',
        },
        {
          id: 'Jam kunjungan: Senin–Jumat, 09.00–15.00 WIB',
          en: 'Visiting hours: Monday–Friday, 09:00–15:00 WIB',
        },
        {
          id: 'Parkir gratis tersedia untuk orang tua yang berkunjung',
          en: 'Free parking available for visiting parents',
        },
      ],
      icon: 'MapPin',
    },
    {
      headline: {
        id: 'Banyak Cara Menghubungi Kami',
        en: 'Many Ways to Reach Us',
      },
      description: {
        id: 'Pilih cara yang paling nyaman bagi Anda. Tim admisi kami siap menjawab pertanyaan tentang program, biaya, dan pendaftaran.',
        en: 'Choose the most convenient way for you. Our admissions team is ready to answer questions about programs, fees, and enrollment.',
      },
      bullets: [
        {
          id: 'WhatsApp: +62 812-3456-7890 (respons tercepat)',
          en: 'WhatsApp: +62 812-3456-7890 (fastest response)',
        },
        {
          id: 'Email: info@jasminekindergarten.id',
          en: 'Email: info@jasminekindergarten.id',
        },
        {
          id: 'Telepon: (021) 765-4321 (Senin–Jumat, 08.00–16.00 WIB)',
          en: 'Phone: (021) 765-4321 (Mon–Fri, 08:00–16:00 WIB)',
        },
      ],
      icon: 'MessageCircle',
    },
    {
      headline: {
        id: 'Jadwalkan Kunjungan Gratis Anda',
        en: 'Book Your Free Visit',
      },
      description: {
        id: 'Isi formulir singkat di bawah ini dan tim kami akan menghubungi Anda dalam 1 hari kerja untuk mengonfirmasi jadwal kunjungan.',
        en: 'Fill out the short form below and our team will contact you within 1 business day to confirm your visit.',
      },
      bullets: [
        {
          id: 'Tur sekolah lengkap bersama kepala sekolah selama 30–45 menit',
          en: 'Full 30–45 minute school tour with the principal',
        },
        {
          id: 'Kesempatan mengamati kelas yang sedang berlangsung',
          en: 'Opportunity to observe a live class in session',
        },
        {
          id: 'Konsultasi gratis tentang program terbaik untuk anak Anda',
          en: 'Free consultation on the best program for your child',
        },
      ],
      icon: 'CalendarCheck',
    },
  ],

  testimonials: [
    {
      quote: {
        id: 'Saya hanya mengirim pesan WhatsApp dan dalam 30 menit sudah mendapat jadwal kunjungan. Sangat responsif! Kunjungan sekolahnya juga sangat informatif dan tidak ada tekanan untuk langsung mendaftar.',
        en: 'I just sent a WhatsApp message and got a visit scheduled within 30 minutes. So responsive! The school visit was very informative with no pressure to enroll immediately.',
      },
      name: 'Dian',
      attribution: {
        id: 'Ibu Dian, calon orang tua murid',
        en: 'Dian, prospective parent',
      },
      avatarInitials: 'D',
    },
    {
      quote: {
        id: 'Kami datang tanpa janji dan tetap disambut dengan hangat. Kepala sekolah sendiri yang mengajak kami tur. Anak saya langsung tertarik dengan area bermain outdoornya.',
        en: 'We came without an appointment and were warmly welcomed. The principal personally gave us a tour. My child was immediately drawn to the outdoor play area.',
      },
      name: 'Fajar',
      attribution: {
        id: 'Bapak Fajar, orang tua murid baru',
        en: 'Fajar, new parent',
      },
      avatarInitials: 'F',
    },
    {
      quote: {
        id: 'Tim admisi Jasmine sangat sabar menjawab semua pertanyaan kami yang sangat banyak. Mereka bahkan mengirimkan ringkasan informasi via email setelah kunjungan. Profesional sekali!',
        en: "Jasmine's admissions team patiently answered all our many questions. They even sent an information summary via email after the visit. So professional!",
      },
      name: 'Wulan & Adi',
      attribution: {
        id: 'Ibu Wulan & Bapak Adi, mendaftar 2025',
        en: 'Wulan & Adi, enrolled 2025',
      },
      avatarInitials: 'WA',
    },
  ],

  trustSignals: [
    {
      label: { id: 'Respons WhatsApp < 1 jam', en: 'WhatsApp response < 1 hour' },
      type: 'stat',
    },
    {
      label: { id: '200+ kunjungan sekolah per tahun', en: '200+ school visits per year' },
      type: 'stat',
    },
    {
      label: { id: '4.9/5 rating kepuasan orang tua', en: '4.9/5 parent satisfaction rating' },
      type: 'stat',
    },
    {
      label: { id: 'Kunjungan gratis tanpa komitmen', en: 'Free visit with no commitment' },
      type: 'guarantee',
    },
  ],

  faq: [
    {
      question: { id: 'Bagaimana cara tercepat menghubungi Jasmine?', en: 'What is the fastest way to contact Jasmine?' },
      answer: {
        id: 'Cara tercepat adalah melalui WhatsApp di +62 812-3456-7890. Tim admisi kami biasanya merespons dalam waktu kurang dari 1 jam pada hari kerja.',
        en: 'The fastest way is via WhatsApp at +62 812-3456-7890. Our admissions team typically responds within 1 hour on business days.',
      },
    },
    {
      question: { id: 'Apakah saya harus membuat janji untuk kunjungan?', en: 'Do I need an appointment to visit?' },
      answer: {
        id: 'Kami menyambut kunjungan tanpa janji pada jam kunjungan (Senin–Jumat, 09.00–15.00). Namun, kami menyarankan menjadwalkan terlebih dahulu agar kepala sekolah bisa mendampingi tur Anda.',
        en: 'We welcome walk-in visits during visiting hours (Monday–Friday, 09:00–15:00). However, we recommend scheduling ahead so the principal can accompany your tour.',
      },
    },
    {
      question: { id: 'Bolehkah anak saya ikut saat kunjungan?', en: 'Can my child come along for the visit?' },
      answer: {
        id: 'Sangat dianjurkan! Kami ingin anak Anda merasakan suasana sekolah secara langsung. Anak-anak biasanya diajak bermain sebentar di area bermain sementara orang tua berdiskusi.',
        en: 'Absolutely encouraged! We want your child to experience the school atmosphere firsthand. Children are usually invited to play briefly in the play area while parents discuss.',
      },
    },
    {
      question: { id: 'Apakah ada biaya untuk kunjungan sekolah?', en: 'Is there a fee for school visits?' },
      answer: {
        id: 'Tidak, kunjungan sekolah sepenuhnya gratis dan tanpa komitmen. Ini adalah kesempatan bagi Anda untuk mengenal Jasmine dan memastikan sekolah kami cocok untuk keluarga Anda.',
        en: 'No, school visits are completely free with no commitment. It\'s an opportunity to get to know Jasmine and make sure we\'re the right fit for your family.',
      },
    },
    {
      question: { id: 'Berapa lama durasi kunjungan sekolah?', en: 'How long does a school visit take?' },
      answer: {
        id: 'Kunjungan biasanya berlangsung 30–45 menit. Anda akan diajak tur fasilitas, mengamati kelas yang sedang berlangsung, dan berdiskusi dengan kepala sekolah.',
        en: "Visits typically last 30–45 minutes. You'll tour the facilities, observe a class in session, and discuss programs with the principal.",
      },
    },
    {
      question: { id: 'Apakah Jasmine memiliki media sosial?', en: 'Does Jasmine have social media?' },
      answer: {
        id: 'Ya! Ikuti kami di Instagram @jasminekindergarten.id untuk melihat kegiatan sehari-hari, tips parenting, dan informasi program terbaru.',
        en: 'Yes! Follow us on Instagram @jasminekindergarten.id to see daily activities, parenting tips, and latest program information.',
      },
    },
    {
      question: { id: 'Bisakah saya menghubungi di akhir pekan?', en: 'Can I reach you on weekends?' },
      answer: {
        id: 'Tim admisi kami tersedia Senin–Sabtu. Pada hari Sabtu, kami melayani pesan WhatsApp dan email dari pukul 09.00–12.00 WIB.',
        en: 'Our admissions team is available Monday–Saturday. On Saturdays, we handle WhatsApp and email from 09:00–12:00 WIB.',
      },
    },
    {
      question: { id: 'Bagaimana cara menuju lokasi sekolah?', en: 'How do I get to the school?' },
      answer: {
        id: 'Jasmine berlokasi di Jl. Pendidikan No. 88, Kebayoran Baru, Jakarta Selatan. Mudah dijangkau dari Jl. Sudirman dan dekat dengan stasiun MRT Blok A. Parkir gratis tersedia.',
        en: 'Jasmine is located at Jl. Pendidikan No. 88, Kebayoran Baru, South Jakarta. Easily accessible from Jl. Sudirman and near Blok A MRT station. Free parking available.',
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
      id: 'Jasmine Kindergarten — Selalu siap membantu Anda. Hubungi kami kapan saja.',
      en: 'Jasmine Kindergarten — Always here to help. Reach out to us anytime.',
    },
    legal: {
      id: '© 2026 Jasmine Kindergarten. Terakreditasi A oleh BAN PAUD. Semua hak dilindungi.',
      en: '© 2026 Jasmine Kindergarten. A-Accredited by BAN PAUD. All rights reserved.',
    },
  },
};
