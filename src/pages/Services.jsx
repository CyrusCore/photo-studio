import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Varian Animasi (Kita pakai lagi dari Home) ---
const popInFromLeft = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

const popInFromRight = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
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

const pageTransitionUpdated = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};
const popInFromLeftUpdated = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
};
const popInFromRightUpdated = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
};
const fadeInUp = { // Kita akan pakai ini untuk FAQ
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.2 } }
};


// --- Ikon Checkmark (Komponen kecil di dalam file ini) ---
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-brand-accent mr-2 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
const faqData = [
  {
    question: "Berapa maksimal orang untuk Self-Photo?",
    answer: "Paket dasar kami adalah untuk 2 orang. Ada biaya tambahan Rp 20.000 per orang tambahan. Maksimal total 6 orang dalam satu sesi."
  },
  {
    question: "Apakah boleh bawa hewan peliharaan?",
    answer: "Tentu! Kami *pet friendly*. Mohon pastikan hewan peliharaan Anda tetap tenang dan tidak merusak properti. Ada biaya *cleaning fee* tambahan Rp 25.000."
  },
  {
    question: "Apakah saya dapat semua file fotonya (softcopy)?",
    answer: "Ya! Untuk paket Self-Photo, Anda akan mendapatkan *semua* file foto (softcopy) original tanpa *watermark* yang dikirim langsung ke email Anda setelah sesi selesai."
  },
  {
    question: "Berapa lama proses untuk Custom Session?",
    answer: "Untuk Custom Session (seperti wisuda), proses *editing* memakan waktu sekitar 3-7 hari kerja. Kami akan mengirimkan *link* Google Drive berisi hasil foto yang sudah di-edit."
  }
];
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-300"
      // Animasi untuk setiap item FAQ
      variants={fadeInUp}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-brand-text">{question}</span>
        {/* Ikon + / - */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </motion.div>
      </button>

      {/* Panel Jawaban yang bisa Buka-Tutup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Services() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="container mx-auto px-6 py-16">
        {/* --- JUDUL --- */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Layanan & Paket Kami
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 text-center max-w-lg mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
        >
          Temukan paket yang sempurna untuk mengabadikan momen Anda.
        </motion.p>

        {/* --- PAKET 1: SELF-PHOTO STUDIO --- */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          {/* Gambar Self-Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popInFromLeft}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1595152772106-a0f538760662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="Self-Photo Studio Session"
              className="rounded-lg shadow-xl object-cover w-full h-auto aspect-video md:h-[450px]"
            />
          </motion.div>

          {/* Detail Teks Self-Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popInFromRight}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-brand-accent font-semibold">Mulai dari Rp 80.000</span>
            <h2 className="text-4xl font-bold text-brand-text my-3">
              Self-Photo Studio
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sesi foto privat tanpa fotografer. Jadilah dirimu sendiri, berekspresi bebas, dan ciptakan kenangan seru. Sempurna untuk pasangan, sahabat, atau solo!
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckIcon /> 15 Menit Sesi Foto Privat</li>
              <li className="flex items-center"><CheckIcon /> 2 Lembar Foto Cetak (Strip/4R)</li>
              <li className="flex items-center"><CheckIcon /> Gratis Semua File Foto (Softcopy)</li>
              <li className="flex items-center"><CheckIcon /> Pilihan Background (Putih, Abu, Pink)</li>
              <li className="flex items-center"><CheckIcon /> Bebas Gunakan Properti Studio</li>
            </ul>
            <Link
              to="/contact"
              className="bg-brand-accent text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Book Self-Photo
            </Link>
          </motion.div>
        </div>

        {/* --- PAKET 2: CUSTOM SESSION --- */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-20 bg-brand-beige p-10 rounded-lg">
          {/* Detail Teks Custom (Muncul di KIRI) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popInFromLeft}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-brand-accent font-semibold">Harga Sesuai Konsep</span>
            <h2 className="text-4xl font-bold text-brand-text my-3">
              Custom Session
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Untuk momen yang lebih spesial. Tim fotografer profesional kami akan membantu mewujudkan konsep impian Anda, apa pun temanya.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckIcon /> Foto Wisuda (Sendiri / Grup)</li>
              <li className="flex items-center"><CheckIcon /> Foto Keluarga & Anak</li>
              <li className="flex items-center"><CheckIcon /> Foto Pre-Wedding / Maternity</li>
              <li className="flex items-center"><CheckIcon /> Foto Produk & Komersial</li>
              <li className="flex items-center"><CheckIcon /> Termasuk Konsultasi Konsep</li>
            </ul>
            <Link
              to="/contact"
              className="bg-brand-text text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all shadow-lg"
            >
              Diskusikan Konsep Anda
            </Link>
          </motion.div>

          {/* Gambar Custom (Muncul di KANAN) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popInFromRight}
            viewport={{ once: true, amount: 0.3 }}
            className="md:order-first" // PENTING: Ini memindah gambar ke KIRI di layout
          >
            <img
              src="https://images.unsplash.com/photo-1522069213448-46760b35e076?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="Custom Session (Graduation)"
              className="rounded-lg shadow-xl object-cover w-full h-auto aspect-video md:h-[450px]"
            />
          </motion.div>
        </div>
        {/* --- SECTION FAQ --- */}
        <section className="py-20 mt-16 max-w-3xl mx-auto">
          {/* Judul Section */}
          <motion.h2
            className="text-4xl font-bold text-center text-brand-text mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Kontainer Accordion */}
          <motion.div
            // Kita gunakan stagger untuk memunculkan pertanyaan satu per satu
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {faqData.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </section>

      </div>
    </motion.div>
  );
}