import type { PageContent } from './types';

export const admissionsContent: PageContent = {
  hero: {
    headline: {
      id: 'Mulai Perjalanan Anak Anda',
      en: "Start Your Child's Journey",
    },
    subheadline: {
      id: 'Pendaftaran mudah dan cepat — kami siap memandu Anda di setiap langkah.',
      en: "Easy, fast enrollment — we're here to guide you every step of the way.",
    },
    cta: {
      id: 'Daftar Sekarang',
      en: 'Enroll Now',
    },
    microcopy: {
      id: 'Kuota terbatas untuk tahun ajaran 2026/2027. Amankan tempat anak Anda hari ini.',
      en: "Limited spots for the 2026/2027 school year. Secure your child's place today.",
    },
  },

  features: [
    {
      headline: {
        id: 'Tiga Langkah Mudah Mendaftar',
        en: 'Three Easy Steps to Enroll',
      },
      description: {
        id: 'Proses pendaftaran kami dirancang sederhana agar Anda bisa fokus pada hal yang paling penting: mempersiapkan anak untuk pengalaman belajar terbaik.',
        en: 'Our enrollment process is designed to be simple so you can focus on what matters most: preparing your child for the best learning experience.',
      },
      bullets: [
        {
          id: 'Langkah 1: Jadwalkan kunjungan sekolah gratis dan tanpa komitmen',
          en: 'Step 1: Schedule a free, no-commitment school visit',
        },
        {
          id: 'Langkah 2: Isi formulir pendaftaran online dalam 10 menit',
          en: 'Step 2: Complete the online registration form in 10 minutes',
        },
        {
          id: 'Langkah 3: Terima konfirmasi dan mulai program orientasi',
          en: 'Step 3: Receive confirmation and begin the orientation program',
        },
      ],
      icon: 'ClipboardCheck',
    },
    {
      headline: {
        id: 'Persiapkan Dokumen Ini Saja',
        en: 'Just Prepare These Documents',
      },
      description: {
        id: 'Kami meminimalkan administrasi agar pendaftaran tidak menjadi beban. Berikut dokumen yang perlu disiapkan.',
        en: "We minimize paperwork so enrollment isn't a burden. Here's what you need to prepare.",
      },
      bullets: [
        {
          id: 'Akta kelahiran dan kartu keluarga (fotokopi)',
          en: 'Birth certificate and family card (photocopy)',
        },
        {
          id: 'Pas foto anak ukuran 3x4 (4 lembar)',
          en: "Child's 3x4 passport photos (4 copies)",
        },
        {
          id: 'Surat keterangan sehat dari dokter anak',
          en: 'Health certificate from a pediatrician',
        },
      ],
      icon: 'FileText',
    },
    {
      headline: {
        id: 'Investasi untuk Masa Depannya',
        en: 'Invest in Their Future',
      },
      description: {
        id: 'Biaya pendidikan transparan tanpa biaya tersembunyi. Kami menyediakan opsi pembayaran fleksibel untuk kenyamanan keluarga Anda.',
        en: "Transparent tuition with no hidden fees. We offer flexible payment options for your family's convenience.",
      },
      bullets: [
        {
          id: 'Cicilan bulanan tersedia hingga 6 bulan tanpa bunga',
          en: 'Interest-free monthly installments up to 6 months',
        },
        {
          id: 'Diskon 10% untuk pendaftaran early bird (sebelum 31 Maret)',
          en: '10% early bird discount (before March 31)',
        },
        {
          id: 'Potongan khusus untuk adik dari murid aktif Jasmine',
          en: 'Special sibling discount for current Jasmine students',
        },
      ],
      icon: 'Wallet',
    },
  ],

  testimonials: [
    {
      quote: {
        id: 'Proses pendaftarannya sangat mudah dan cepat. Tim admisi Jasmine sangat responsif menjawab semua pertanyaan kami. Dalam seminggu, anak kami sudah mulai program orientasi.',
        en: "The enrollment process was very easy and fast. Jasmine's admissions team was very responsive to all our questions. Within a week, our child started the orientation program.",
      },
      name: 'Ratna',
      attribution: {
        id: 'Ibu Ratna, mendaftar tahun 2025',
        en: 'Ratna, enrolled in 2025',
      },
      avatarInitials: 'R',
    },
    {
      quote: {
        id: 'Awalnya kami ragu karena ini pengalaman pertama kami menyekolahkan anak. Tapi setelah kunjungan sekolah, semua keraguan hilang. Fasilitasnya luar biasa dan guru-gurunya ramah sekali.',
        en: "We were initially hesitant as first-time parents choosing a school. But after the school visit, all doubts disappeared. The facilities are amazing and the teachers are so welcoming.",
      },
      name: 'Yusuf & Amira',
      attribution: {
        id: 'Bapak Yusuf & Ibu Amira, orang tua murid baru',
        en: 'Yusuf & Amira, new parents',
      },
      avatarInitials: 'YA',
    },
    {
      quote: {
        id: 'Opsi cicilan sangat membantu kami. Tidak ada biaya tersembunyi — semua jelas dari awal. Kami merasa dihargai sebagai orang tua, bukan sekadar pembayar.',
        en: 'The installment option really helped us. No hidden fees — everything was clear from the start. We felt valued as parents, not just as payers.',
      },
      name: 'Sari',
      attribution: {
        id: 'Ibu Sari, orang tua murid Pre-K',
        en: 'Sari, Pre-K parent',
      },
      avatarInitials: 'S',
    },
  ],

  trustSignals: [
    {
      label: { id: '150+ pendaftaran baru per tahun', en: '150+ new enrollments per year' },
      type: 'stat',
    },
    {
      label: { id: '3 hari kerja konfirmasi', en: '3 business days confirmation' },
      type: 'stat',
    },
    {
      label: { id: '90% kuota terisi sebelum Juni', en: '90% of spots filled before June' },
      type: 'stat',
    },
    {
      label: { id: 'Garansi uang kembali 14 hari', en: '14-day money-back guarantee' },
      type: 'guarantee',
    },
  ],

  faq: [
    {
      question: { id: 'Kapan periode pendaftaran dibuka?', en: 'When is the enrollment period?' },
      answer: {
        id: 'Pendaftaran untuk tahun ajaran 2026/2027 dibuka mulai Januari 2026. Kami merekomendasikan mendaftar lebih awal karena kuota terbatas dan program early bird berlaku hingga 31 Maret 2026.',
        en: 'Enrollment for the 2026/2027 school year opens in January 2026. We recommend early registration as spots are limited and the early bird discount applies until March 31, 2026.',
      },
    },
    {
      question: { id: 'Apakah ada tes masuk untuk anak?', en: 'Is there an entrance test for children?' },
      answer: {
        id: 'Tidak ada tes masuk formal. Kami melakukan sesi observasi bermain selama 30 menit untuk mengenal anak dan memahami tahap perkembangannya. Ini bukan ujian, melainkan cara kami menentukan program yang paling sesuai.',
        en: "There is no formal entrance test. We conduct a 30-minute play observation session to get to know the child and understand their developmental stage. This isn't an exam — it's how we determine the most suitable program.",
      },
    },
    {
      question: { id: 'Bisakah saya mengunjungi sekolah sebelum mendaftar?', en: 'Can I visit the school before enrolling?' },
      answer: {
        id: 'Tentu! Kami sangat menyarankan kunjungan sekolah sebelum mendaftar. Kunjungan gratis dan bisa dijadwalkan Senin–Jumat. Anda akan bertemu kepala sekolah, melihat fasilitas, dan mengamati kegiatan belajar secara langsung.',
        en: "Absolutely! We strongly encourage school visits before enrolling. Visits are free and can be scheduled Monday–Friday. You'll meet the principal, see the facilities, and observe learning activities firsthand.",
      },
    },
    {
      question: { id: 'Berapa total biaya pendaftaran?', en: 'What is the total enrollment cost?' },
      answer: {
        id: 'Biaya terdiri dari uang pangkal (satu kali), SPP bulanan, dan biaya kegiatan tahunan. Rincian lengkap akan diberikan saat kunjungan sekolah atau bisa diminta via WhatsApp.',
        en: 'Costs include a one-time registration fee, monthly tuition, and annual activity fee. A full breakdown is provided during the school visit or can be requested via WhatsApp.',
      },
    },
    {
      question: { id: 'Apakah ada opsi pembayaran cicilan?', en: 'Are installment payment options available?' },
      answer: {
        id: 'Ya, kami menawarkan cicilan bulanan tanpa bunga hingga 6 bulan untuk uang pangkal. SPP dibayarkan setiap bulan. Kami juga bekerja sama dengan beberapa bank untuk opsi cicilan kartu kredit 0% hingga 12 bulan.',
        en: 'Yes, we offer interest-free monthly installments up to 6 months for the registration fee. Tuition is paid monthly. We also partner with several banks for 0% credit card installments up to 12 months.',
      },
    },
    {
      question: { id: 'Apa yang terjadi setelah saya mendaftar?', en: 'What happens after I enroll?' },
      answer: {
        id: 'Setelah pendaftaran dikonfirmasi, Anda akan menerima paket selamat datang berisi jadwal orientasi, daftar perlengkapan, dan panduan orang tua. Program orientasi berlangsung 2 minggu sebelum kelas reguler dimulai.',
        en: "After enrollment is confirmed, you'll receive a welcome package with the orientation schedule, supply list, and parent guide. The 2-week orientation runs before regular classes begin.",
      },
    },
    {
      question: { id: 'Bagaimana jika anak saya tidak cocok setelah mendaftar?', en: "What if my child doesn't adjust after enrolling?" },
      answer: {
        id: 'Kami memberikan garansi uang kembali 100% dalam 14 hari pertama jika anak tidak cocok. Selama masa orientasi, tim kami akan bekerja sama dengan Anda untuk memastikan proses adaptasi berjalan lancar.',
        en: "We offer a 100% money-back guarantee within the first 14 days if it's not the right fit. During orientation, our team works with you to ensure a smooth adaptation.",
      },
    },
    {
      question: { id: 'Apakah saya bisa mendaftarkan anak di tengah tahun ajaran?', en: 'Can I enroll my child in the middle of the school year?' },
      answer: {
        id: 'Ya, selama masih ada kuota tersedia. Anak yang masuk di tengah tahun akan mendapat program penyesuaian khusus selama 1–2 minggu untuk membantu mereka beradaptasi.',
        en: 'Yes, as long as spots are available. Mid-year enrollees receive a special 1–2 week adjustment program to help them adapt.',
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
      id: 'Jasmine Kindergarten — Pendaftaran mudah, masa depan cerah untuk anak Anda.',
      en: 'Jasmine Kindergarten — Easy enrollment, bright future for your child.',
    },
    legal: {
      id: '© 2026 Jasmine Kindergarten. Terakreditasi A oleh BAN PAUD. Semua hak dilindungi.',
      en: '© 2026 Jasmine Kindergarten. A-Accredited by BAN PAUD. All rights reserved.',
    },
  },
};
