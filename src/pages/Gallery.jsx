import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA FOTO (Nanti ganti dengan fotomu) ---
const allPhotos = [
  { id: 1, category: 'self-photo', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80', alt: 'Portrait korean look' },
  { id: 2, category: 'graduation', src: 'https://images.unsplash.com/photo-1596548404645-b8f10f8783e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', alt: 'Graduation photo' },
  { id: 3, category: 'group', src: 'https://images.unsplash.com/photo-1530291404176-6c61e88d3d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', alt: 'Group photo of friends' },
  { id: 4, category: 'concept', src: 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80', alt: 'Concept photo with props' },
  { id: 5, category: 'self-photo', src: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80', alt: 'Minimalist self-photo' },
  { id: 6, category: 'graduation', src: 'https://images.unsplash.com/photo-1517596001119-f0c2d54e8334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', alt: 'Graduation portrait' },
  { id: 7, category: 'group', src: 'https://images.unsplash.com/photo-1509241373950-8de668d4033e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', alt: 'Family photo' },
  { id: 8, category: 'self-photo', src: 'https://images.unsplash.com/photo-1618331835718-50d9c21b3a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', alt: 'Monochrome self-photo' },
  { id: 9, category: 'concept', src: 'https://images.unsplash.com/photo-1763713382836-e2263bff42b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Artistic concept' },
];

// --- Kategori untuk filter ---
const categories = [
  { key: 'all', name: 'All' },
  { key: 'self-photo', name: 'Self-Photo' },
  { key: 'graduation', name: 'Graduation' },
  { key: 'group', name: 'Group / Family' },
  { key: 'concept', name: 'Other Concepts' },
];

// --- Varian Animasi untuk Foto ---
const photoVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 150, damping: 15 } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    transition: { duration: 0.2 } 
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



export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Logika untuk memfilter foto
  const filteredPhotos = activeFilter === 'all'
    ? allPhotos
    : allPhotos.filter(photo => photo.category === activeFilter);

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
          Our Gallery
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 text-center max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
        >
          Lihat hasil karya kami. Dari *self-photo* yang seru hingga sesi wisuda yang berkesan.
        </motion.p>

        {/* --- TOMBOL FILTER --- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`
                py-2 px-5 rounded-full text-sm font-medium transition-all
                ${activeFilter === cat.key 
                  ? 'bg-brand-accent text-white shadow-md' 
                  : 'bg-brand-beige text-brand-text hover:bg-gray-200'
                }
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* --- GRID GALERI FOTO --- */}
        <motion.div 
          layout // Ini adalah properti "ajaib" yang menganimasi perpindahan posisi
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {/* AnimatePresence akan mendeteksi item mana yang 'exit'
              motion.div dengan prop 'layout' akan bergeser otomatis 
            */}
            {filteredPhotos.map(photo => (
<motion.div
      key={photo.id}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className="overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer group relative" // <-- 1. Tambah 'group' & 'relative'
      onClick={() => setSelectedImage(photo)}
      whileHover={{ scale: 1.03 }} // <-- 2. Kita scale container sedikit
    >
      <motion.img 
        layoutId={`photo-${photo.id}`}
        src={photo.src} 
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-300"
        // <-- 3. Hapus 'whileHover' dari gambar
      />

      {/* --- 4. TAMBAHKAN OVERLAY BARU INI --- */}
      <motion.div 
        className="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="text-center text-white">
          {/* Ikon Mata (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <p className="font-semibold mt-1">View</p>
        </div>
      </motion.div>
      {/* --- AKHIR OVERLAY --- */}

    </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            // Latar belakang gelap
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex justify-center items-center p-4"
            onClick={() => setSelectedImage(null)} // <-- BARU: Tutup modal saat klik latar
          >
            {/* Tombol Tutup (X) */}
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-4xl opacity-70 hover:opacity-100 z-[110]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              &times;
            </motion.button>
            
            {/* Kontainer Gambar (untuk mencegah klik gambar menutup modal) */}
            <motion.div
              className="relative"
              onClick={(e) => e.stopPropagation()} // <-- BARU: Mencegah klik gambar menutup modal
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <motion.img
                layoutId={`photo-${selectedImage.id}`} // <-- BARU: ID yang sama
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}