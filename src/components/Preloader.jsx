// src/components/Preloader.jsx

import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex justify-center items-center bg-brand-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
    >
      <motion.div
        className="text-3xl font-bold text-brand-text tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}
      >
        PHOTO STUDIO
      </motion.div>
    </motion.div>
  );
}