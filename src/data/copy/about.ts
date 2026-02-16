import type { PageContent } from './types';

export const aboutContent: PageContent = {
  hero: {
    headline: {
      id: 'Cerita di Balik Jasmine',
      en: 'The Story Behind Jasmine',
    },
    subheadline: {
      id: 'Didirikan oleh orang tua yang percaya setiap anak berhak bersinar.',
      en: 'Founded by parents who believe every child deserves to shine.',
    },
    cta: {
      id: 'Kenali Kami Lebih Dekat',
      en: 'Get to Know Us',
    },
    microcopy: {
      id: 'Lebih dari 10 tahun mendampingi tumbuh kembang generasi masa depan Indonesia.',
      en: "Over 10 years nurturing the growth of Indonesia's next generation.",
    },
  },

  features: [
    {
      headline: {
        id: 'Visi Besar, Langkah Nyata',
        en: 'Big Vision, Real Action',
      },
      description: {
        id: 'Kami percaya pendidikan anak usia dini adalah investasi paling berharga. Setiap program kami dirancang untuk membangun pondasi karakter yang kuat.',
        en: 'We believe early childhood education is the most valuable investment. Every program builds a strong character foundation.',
      },
      bullets: [
        {
          id: 'Membentuk generasi yang kreatif, mandiri, dan berempati',
          en: 'Shaping creative, independent, and empathetic young minds',
        },
        {
          id: 'Menciptakan lingkungan di mana anak merasa dicintai dan dihargai',
          en: 'Creating an environment where children feel loved and valued',
        },
        {
          id: 'Menjadi mitra terpercaya orang tua dalam mendidik anak',
          en: 'Being a trusted partner for parents in educating children',
        },
      ],
      icon: 'Target',
    },
    {
      headline: {
        id: 'Belajar Sambil Bermain, Tumbuh Bersama',
        en: 'Learn Through Play, Grow Together',
      },
      description: {
        id: 'Menggabungkan metode Montessori dan Reggio Emilia dengan kearifan lokal Indonesia untuk pengalaman belajar yang relevan dan bermakna.',
        en: 'Blending Montessori and Reggio Emilia methods with Indonesian local wisdom for relevant, meaningful learning.',
      },
      bullets: [
        {
          id: 'Anak belajar melalui pengalaman langsung, bukan hafalan',
          en: 'Children learn through hands-on experience, not memorization',
        },
        {
          id: 'Kegiatan disesuaikan dengan minat dan kecepatan belajar masing-masing anak',
          en: "Activities adapted to each child's interests and learning pace",
        },
        {
          id: 'Nilai budaya Indonesia terintegrasi dalam aktivitas sehari-hari',
          en: 'Indonesian cultural values integrated into daily activities',
        },
      ],
      icon: 'Sparkles',
    },
    {
      headline: {
        id: 'Dipimpin oleh Ahli Pendidikan',
        en: 'Led by Education Experts',
      },
      description: {
        id: 'Tim pengajar dan manajemen kami terdiri dari profesional bersertifikat dengan dedikasi tinggi terhadap dunia pendidikan anak.',
        en: 'Our teaching and management team consists of certified professionals deeply dedicated to early childhood education.',
      },
      bullets: [
        {
          id: 'Kepala sekolah dengan gelar master pendidikan anak usia dini',
          en: "School principal with a master's degree in early childhood education",
        },
        {
          id: '25+ tenaga pengajar bersertifikat PAUD dan berpengalaman',
          en: '25+ certified and experienced PAUD educators',
        },
        {
          id: 'Program pelatihan guru berkala untuk menjaga kualitas pengajaran',
          en: 'Regular teacher training programs to maintain teaching quality',
        },
      ],
      icon: 'Users',
    },
  ],

  testimonials: [
    {
      quote: {
        id: 'Kami memilih Jasmine karena pendekatannya yang holistik. Anak kami tidak hanya pintar secara akademik, tapi juga tumbuh menjadi anak yang empati dan percaya diri. Jasmine bukan sekadar sekolah, tapi keluarga kedua.',
        en: "We chose Jasmine for its holistic approach. Our child isn't just academically smart — she's also growing into an empathetic, confident person. Jasmine isn't just a school, it's a second family.",
      },
      name: 'Maya',
      attribution: {
        id: 'Ibu Maya, orang tua murid sejak 2022',
        en: 'Maya, parent since 2022',
      },
      avatarInitials: 'M',
    },
    {
      quote: {
        id: 'Sebagai orang tua baru, kami sangat cemas memilih sekolah. Tim Jasmine dengan sabar menjawab semua pertanyaan kami. Sekarang, anak kami selalu bercerita seru tentang hari-harinya di sekolah.',
        en: "As first-time parents, we were anxious about choosing a school. The Jasmine team patiently answered all our questions. Now, our child excitedly tells us about his day at school.",
      },
      name: 'Rizky & Nita',
      attribution: {
        id: 'Bapak Rizky & Ibu Nita, orang tua murid (usia 3 tahun)',
        en: 'Rizky & Nita, parents (child age 3)',
      },
      childAge: '3',
      avatarInitials: 'RN',
    },
    {
      quote: {
        id: 'Guru-guru di Jasmine benar-benar mengenal setiap anak secara personal. Mereka tahu kelebihan, tantangan, dan cara terbaik mendukung anak kami. Itu yang membuat kami percaya penuh.',
        en: "The teachers at Jasmine truly know each child personally. They understand strengths, challenges, and the best way to support our child. That's what earns our full trust.",
      },
      name: 'Fiona',
      attribution: {
        id: 'Ibu Fiona, orang tua murid (usia 5 tahun)',
        en: 'Fiona, parent (child age 5)',
      },
      childAge: '5',
      avatarInitials: 'F',
    },
  ],

  trustSignals: [
    {
      label: { id: '10+ tahun berdiri', en: '10+ years established' },
      type: 'stat',
    },
    {
      label: { id: '25+ guru bersertifikat PAUD', en: '25+ certified PAUD teachers' },
      type: 'stat',
    },
    {
      label: { id: '4 program usia terstruktur', en: '4 structured age-based programs' },
      type: 'stat',
    },
    {
      label: { id: 'Mitra resmi Kemendikbud untuk PAUD', en: 'Official Ministry of Education PAUD partner' },
      type: 'credential',
    },
  ],

  faq: [
    {
      question: { id: 'Kapan Jasmine Kindergarten didirikan?', en: 'When was Jasmine Kindergarten established?' },
      answer: {
        id: 'Jasmine Kindergarten berdiri sejak tahun 2015 di Jakarta. Kami memulai dengan satu kelas kecil dan kini telah berkembang melayani lebih dari 500 keluarga dengan fasilitas lengkap dan tim profesional yang berdedikasi.',
        en: 'Jasmine Kindergarten was established in 2015 in Jakarta. We started with one small class and have grown to serve over 500 families with complete facilities and a dedicated professional team.',
      },
    },
    {
      question: { id: 'Apa yang membedakan Jasmine dari TK lain?', en: 'What makes Jasmine different from other kindergartens?' },
      answer: {
        id: 'Jasmine menggabungkan kurikulum berbasis bermain dengan pendekatan personal. Portofolio perkembangan bulanan, rasio guru-murid 1:6, dan akses CCTV real-time memberikan transparansi penuh kepada orang tua.',
        en: 'Jasmine combines a play-based curriculum with a personalized approach. Monthly developmental portfolios, a 1:6 teacher-student ratio, and real-time CCTV access give parents full transparency.',
      },
    },
    {
      question: { id: 'Bagaimana kualifikasi guru di Jasmine?', en: 'What are the teacher qualifications at Jasmine?' },
      answer: {
        id: 'Seluruh guru kami memiliki sertifikasi PAUD dari lembaga terakreditasi. Rata-rata pengalaman mengajar 8 tahun. Kami juga mewajibkan pelatihan berkala dalam metode Montessori, Reggio Emilia, dan penanganan kebutuhan khusus anak.',
        en: 'All our teachers hold PAUD certification from accredited institutions with an average of 8 years of teaching experience. We also require ongoing training in Montessori, Reggio Emilia methods, and special needs support.',
      },
    },
    {
      question: { id: 'Apakah Jasmine memiliki akreditasi resmi?', en: 'Does Jasmine have official accreditation?' },
      answer: {
        id: 'Ya, Jasmine memiliki akreditasi A dari BAN PAUD PNF. Kurikulum kami juga selaras dengan standar Kurikulum Merdeka Kemendikbud.',
        en: "Yes, Jasmine holds an A accreditation from BAN PAUD PNF. Our curriculum is also aligned with the Ministry's Kurikulum Merdeka standards.",
      },
    },
    {
      question: { id: 'Berapa kapasitas murid di setiap kelas?', en: 'What is the class capacity?' },
      answer: {
        id: 'Setiap kelas maksimal 12 murid dengan 2 guru pendamping, menjaga rasio 1:6. Jumlah ini kami tetapkan agar setiap anak mendapat perhatian optimal.',
        en: 'Each class has a maximum of 12 students with 2 teachers, maintaining a 1:6 ratio. This ensures every child receives optimal attention.',
      },
    },
    {
      question: { id: 'Apa filosofi pendidikan Jasmine?', en: "What is Jasmine's educational philosophy?" },
      answer: {
        id: 'Filosofi kami adalah "Setiap Anak Bersinar." Kami percaya setiap anak memiliki potensi unik yang perlu difasilitasi, bukan dipaksakan. Melalui bermain, eksplorasi, dan kasih sayang, kami membantu anak menemukan dan mengembangkan kelebihan mereka.',
        en: 'Our philosophy is "Every Child Shines." We believe each child has unique potential that should be facilitated, not forced. Through play, exploration, and care, we help children discover and develop their strengths.',
      },
    },
    {
      question: { id: 'Apakah ada program untuk anak berkebutuhan khusus?', en: 'Is there a program for children with special needs?' },
      answer: {
        id: 'Jasmine menerapkan pendidikan inklusif. Kami memiliki guru pendamping khusus dan bekerja sama dengan terapis anak. Setiap anak berkebutuhan khusus mendapat rencana pembelajaran individual.',
        en: 'Jasmine practices inclusive education. We have dedicated shadow teachers and collaborate with child therapists. Each special needs child receives an individual learning plan.',
      },
    },
    {
      question: { id: 'Bagaimana Jasmine melibatkan orang tua?', en: 'How does Jasmine involve parents?' },
      answer: {
        id: 'Kami memiliki program "Orang Tua Aktif" yang mencakup: pertemuan orang tua-guru setiap semester, workshop parenting berkala, akses portofolio digital anak, grup komunikasi khusus, dan kegiatan keluarga bersama setiap kuartal.',
        en: 'We have an "Active Parents" program including: semester parent-teacher meetings, regular parenting workshops, digital portfolio access, dedicated communication groups, and quarterly family activities.',
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
      id: 'Jasmine Kindergarten — Tempat setiap anak menemukan cahayanya sendiri sejak dini.',
      en: 'Jasmine Kindergarten — Where every child discovers their own light, early on.',
    },
    legal: {
      id: '© 2026 Jasmine Kindergarten. Terakreditasi A oleh BAN PAUD. Semua hak dilindungi.',
      en: '© 2026 Jasmine Kindergarten. A-Accredited by BAN PAUD. All rights reserved.',
    },
  },
};
