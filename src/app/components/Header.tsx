"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Krishi Aadhar
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-white hover:text-green-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-white hover:text-green-300 transition duration-300"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white hover:text-green-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-white hover:text-green-300 transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white hover:text-green-300 transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-condition"
              className="text-white hover:text-green-300 transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-300 transition duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="mt-4 md:hidden bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="block py-2 text-white hover:text-green-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block py-2 text-white hover:text-green-300 transition duration-300"
            >
              Features
            </Link>
            <Link
              href="#"
              className="block py-2 text-white hover:text-green-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="#"
              className="block py-2 text-white hover:text-green-300 transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="block py-2 text-white hover:text-green-300 transition duration-300"
            >
              Privacy Policy
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
