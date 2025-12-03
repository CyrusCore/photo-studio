import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- VARIAN ANIMASI BARU YANG LEBIH HIDUP ---

// 1. Untuk Hero Section (Text)
const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // delayChildren: 0.3, // Jeda sebelum anak-anaknya mulai
      staggerChildren: 0.15, // Jarak animasi antar elemen (lebih cepat)
    }
  }
};
const pageTransitionUpdated = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

// Varian untuk anak-anak Hero (H1, P, Button)
const dropIn = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Ini kuncinya! Animasi pegas
      stiffness: 120, // Kekakuan pegas
      damping: 10,    // Redaman (makin kecil makin membal)
    }
  }
};

// 2. Untuk About Section (Slide + Pop)
const popInFromLeft = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.5,
    }
  }
};

const popInFromRight = {
  hidden: { opacity: 0, x: 100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.5,
    }
  }
};

// 3. Untuk Services Section (Bounce Up)
const servicesStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda antar 2 kartu
    }
  }
};

const bounceUp = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    }
  }
};

const pageTransition = {
  initial: {
    opacity: 0,
    y: 20 // Sedikit slide dari bawah
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -20, // Sedikit slide ke atas
    transition: { duration: 0.3, ease: "easeIn" }
  }
};
const servicesStaggerUpdated = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const bounceUpUpdated = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
};


// --- Komponen HOME ---
const StarIcon = ({ filled = true }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971a1 1 0 00.95.69h4.182c.969 0 1.371 1.24.588 1.81l-3.383 2.456a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.383-2.456a1 1 0 00-1.175 0l-3.383 2.456c-.784.57-1.838-.197-1.54-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.28 9.398c-.783-.57-.38-1.81.588-1.81h4.182a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);
const testimonials = [
  {
    id: 1,
    name: "Amanda S.",
    rating: 5,
    quote: "Pengalaman self-photo terbaik! Studionya bersih, estetik banget, dan propertinya lucu-lucu. Hasilnya langsung jadi, kualitasnya jernih banget. 10/10!"
  },
  {
    id: 2,
    name: "Rizky & Fitri",
    rating: 5,
    quote: "Kami pakai jasa custom session untuk wisuda. Fotografernya sangat profesional dan jago mengarahkan gaya 'korean look' yang kami mau. Puas banget sama hasilnya."
  },
  {
    id: 3,
    name: "Geng 'K-Pop'",
    rating: 5,
    quote: "Seru banget foto grup di sini! Tempatnya private, jadi kita bebas gila-gilaan. Pilihan background-nya juga bagus-bagus. Pasti balik lagi!"
  },
];

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      {/* 1. HERO SECTION */}
      <section className="h-[90vh] min-h-[600px] flex items-center justify-center relative text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1599749293111-a590f0d24b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="NOTI Studio Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          className="z-20 text-center p-6"
          initial="hidden"
          animate="visible"
          variants={heroStagger} // Gunakan varian stagger
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold tracking-tight mb-4"
            variants={dropIn} // Gunakan varian dropIn
          >
            Capture Your Moment, <br />
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            variants={dropIn} // Gunakan varian dropIn
          >
            The ultimate self-photo studio experience.
            Modern, minimalist, and perfectly you.
          </motion.p>
          <motion.div variants={dropIn}> {/* Gunakan varian dropIn */}
            <motion.a
              href="#booking"
              className="bg-brand-accent text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }} // Tambahkan efek hover
              whileTap={{ scale: 0.95 }}   // Tambahkan efek klik
            >
              Book Your Session
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 bg-brand-beige">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar 'About' */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popInFromLeft} // Ganti ke popInFromLeft
            viewport={{ once: true, amount: 0.3 }} // Muncul saat 30% terlihat
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1520338801618-9f3b33362a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Interior NOTI Studio"
              className="rounded-lg shadow-xl object-cover w-full h-full max-h-[500px]"
            />
          </motion.div>

          {/* Teks 'About' */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popInFromRight} // Ganti ke popInFromRight
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-semibold">Welcome to PHOTO STUDIO</span>
            <h2 className="text-4xl font-bold text-brand-text my-4">
              Where Your Vision Comes to Life.
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              PHOTO STUDIO adalah studio foto berkonsep "Korean look" yang modern. Kami percaya setiap momen berharga.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami menawarkan dua layanan utama: **Self-Photo Studio** untuk sesi foto yang bebas, seru, dan privat, serta **Custom Session** untuk kebutuhan khusus seperti foto wisuda, keluarga, atau produk dengan arahan profesional.
            </p>
            <Link
              to="/gallery"
              className="text-brand-accent font-semibold hover:underline"
            >
              Lihat Galeri Kami →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES HIGHLIGHT */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-6 text-center">
          {/* Judul Section (animasi sendiri) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold text-brand-text mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
              Dari sesi seru tanpa fotografer hingga sesi kustom profesional.
            </p>
          </motion.div>

          {/* Kontainer Kartu Layanan (untuk stagger) */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={servicesStagger} // Gunakan stagger services
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Service 1: Self-Photo */}
            <motion.div
              className="bg-brand-beige p-8 rounded-lg shadow-lg text-left"
              variants={bounceUp} // Gunakan bounceUp
            >
              <h3 className="text-2xl font-bold text-brand-text mb-3">Self-Photo Studio</h3>
              <p className="text-gray-600 mb-6">
                Ekspresikan dirimu sebebas mungkin! Kamu adalah fotografernya. Dapatkan hasil foto instan berkualitas tinggi dalam sesi privat yang seru.
              </p>
              <Link
                to="/services"
                className="bg-brand-accent text-white py-2 px-5 rounded-full hover:bg-opacity-90 transition-all font-medium"
              >
                Lihat Paket Self-Photo
              </Link>
            </motion.div>

            {/* Service 2: Custom Session */}
            <motion.div
              className="bg-gray-700 text-white p-8 rounded-lg shadow-lg text-left"
              variants={bounceUp} // Gunakan bounceUp
            >
              <h3 className="text-2xl font-bold mb-3">Custom Session</h3>
              <p className="text-gray-200 mb-6">
                Untuk momen spesial. Sesi wisuda, keluarga, *pre-wedding*, atau *fashion*. Tim profesional kami akan mewujudkan konsep apa pun yang Anda inginkan.
              </p>
              <Link
                to="/services#custom"
                className="bg-white text-brand-text py-2 px-5 rounded-full hover:bg-opacity-90 transition-all font-medium"
              >
                Diskusi Konsep
              </Link>
            </motion.div>
          </motion.div>
          {/* Testimonials Section */}
          <section className="py-20 bg-brand-beige">
            <div className="container mx-auto px-6 text-center">

              {/* Judul Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
              >
                <h2 className="text-4xl font-bold text-brand-text mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
                  Cerita nyata dari mereka yang telah mengabadikan momen bersama kami.
                </p>
              </motion.div>

              {/* Kontainer Kartu Testimoni */}
              <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                variants={servicesStaggerUpdated} // Kita gunakan lagi varian stagger dari services
                viewport={{ once: true, amount: 0.3 }}
              >
                {testimonials.map((testi) => (
                  <motion.div
                    key={testi.id}
                    className="bg-brand-white p-8 rounded-lg shadow-lg text-left"
                    variants={bounceUpUpdated} // Dan varian bounceUp
                  >
                    {/* Rating Bintang */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < testi.rating} />
                      ))}
                    </div>

                    {/* Kutipan / Quote */}
                    <p className="text-gray-600 mb-6 italic">"{testi.quote}"</p>

                    {/* Nama Klien */}
                    <p className="font-bold text-brand-text">- {testi.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </section>

    </motion.div>
  );
}