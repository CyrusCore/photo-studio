import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { InlineWidget } from "react-calendly";

// --- Varian Animasi ---
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

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.2 }
  }
};
const popInFromLeftUpdated = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};
const popInFromRightUpdated = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};
const fadeInUpUpdated = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.2 }
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


export default function Contact() {

  const [state, handleSubmit] = useForm("mgvgwvao");  // Nanti kita akan hubungkan ke EmailJS atau Formspree


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
          Book Your Session
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 text-center max-w-lg mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
        >
          Kami siap mengabadikan momen Anda. Pesan sesi Anda sekarang!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={popInFromLeft}
          >
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              1. Book Self-Photo (Instan)
            </h2>
            <p className="text-gray-600 mb-6">
              Untuk sesi Self-Photo, Anda bisa langsung melihat jadwal kami yang tersedia dan melakukan booking instan melalui kalender di bawah ini.
            </p>
            {/* <div className="calendly-inline-widget" data-url="https://calendly.com/abramsatria7/new-meeting" style={{ minWidth: '320px', height: '700px' }}></div> */}
            <div className="rounded-lg overflow-hidden shadow-xl min-h-[700px]">
              <InlineWidget
                url="https://calendly.com/abramsatria7/new-meeting"
                styles={{
                  height: '700px',
                  minWidth: '320px'
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={popInFromRightUpdated}
          >
            <h2 className="text-3xl font-bold text-brand-text mb-4">
              2. Request Custom Session
            </h2>

            {state.succeeded ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-md">
                <h3 className="font-bold">Terima kasih!</h3>
                <p>Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.</p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  Untuk sesi Custom (Wisuda, Grup, Konsep Lain), silakan isi formulir di bawah ini. Tim kami akan segera menghubungi Anda untuk konsultasi.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Anda</label>
                    <input type="text" id="name" name="name" required
                      className="mt-1 block w-full bg-brand-beige border-gray-300 rounded-md p-3 shadow-sm focus:ring-brand-accent focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required
                      className="mt-1 block w-full bg-brand-beige border-gray-300 rounded-md p-3 shadow-sm focus:ring-brand-accent focus:border-brand-accent"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">No. WhatsApp</label>
                    <input type="tel" id="phone" name="phone" required
                      className="mt-1 block w-full bg-brand-beige border-gray-300 rounded-md p-3 shadow-sm focus:ring-brand-accent focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan (Konsep Anda)</label>
                    <textarea id="message" name="message" rows="4" required
                      className="mt-1 block w-full bg-brand-beige border-gray-300 rounded-md p-3 shadow-sm focus:ring-brand-accent focus:border-brand-accent"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-brand-text text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all shadow-lg disabled:bg-gray-400"
                    >
                      {state.submitting ? 'Mengirim...' : 'Kirim Request'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-brand-text mb-8">
            Temukan Kami di Sini
          </h2>
          {/* TODO: Ganti 'src' di bawah dengan link embed Google Maps studio Anda
            Buka Google Maps -> Cari lokasi Anda -> Share -> Embed a map -> Copy HTML
          */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.1339855907904!2d112.59306391511223!3d-7.965334808762677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883002954c577%3A0xa357b10bdba8c004!2sNoti%20Studio!5e0!3m2!1sid!2sid!4v1764773404215!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-xl"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
}