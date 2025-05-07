'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white/80 font-sans font-semibold bg-white/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-40 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold text-white">Linear</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-white/50">
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/">Product</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/">Resources</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/">Pricing</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/">Customers</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/">Blogs</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/">Contact</Link>
        </nav>

        {/* Auth Buttons (only on md+) */}
        <div className="md:flex items-center flex gap-2 text-sm">
          <Link href="/" className="p-2 hover:bg-white/10 hover:text-white rounded-lg">Login</Link>
          <Link href="/">
            <button className="bg-white text-black px-4 py-1 rounded-lg font-medium hover:bg-white/90 transition">
              Signup
            </button>
          </Link>
        </div>

        {/* Hamburger Icon (only on small screens) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (only links, no auth buttons) */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-3 text-sm">
          <Link href="/">Product</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Resources</Link>
          <Link href="/">Customers</Link>
          <Link href="/">Blogs</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
