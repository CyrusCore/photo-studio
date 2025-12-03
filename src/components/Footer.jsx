import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-beige text-brand-text mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Photo STUDIO</h3>
            <p className="text-sm text-gray-600">
              Your story, captured beautifully.
              <br />
              Korean-look Self-Photo & Custom Studio.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/gallery" className="hover:text-brand-accent">Gallery</a></li>
              <li><a href="/services" className="hover:text-brand-accent">Packages</a></li>
              <li><a href="#booking" className="hover:text-brand-accent">How to Book</a></li>
              <li><a href="/contact" className="hover:text-brand-accent">Contact Us</a></li>
            </ul>
          </div>

          {/* Kolom 3: Sosial Media */}
          <div>
            <h4 className="font-semibold mb-3">Find Us On</h4>
            <div className="flex space-x-4">
              {/* Nanti bisa diisi link Instagram, TikTok, dll. */}
              <a href="#" className="text-gray-600 hover:text-brand-accent">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-brand-accent">TikTok</a>
              <a href="#" className="text-gray-600 hover:text-brand-accent">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-300 my-8" />
        
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PHOTO STUDIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}