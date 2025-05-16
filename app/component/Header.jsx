'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 w-full z-50 text-white/80 font-sans font-semibold bg-black border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-40 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/customer">
          <h1 className="text-2xl font-semibold text-white">Linear</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-white/50">
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/customer">Product</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/customer">Resources</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/customer">Pricing</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/customer">Customers</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/customer">Blogs</Link>
          <Link className='p-2 hover:bg-white/10 hover:text-white rounded-lg' href="/customer">Contact</Link>
        </nav>

        {/* Auth Buttons (only on md+) */}
        <div className="md:flex items-center flex gap-2 text-sm">
          <Link href="/customer" className="p-2 hover:bg-white/10 hover:text-white rounded-lg">Login</Link>
          <Link href="/customer">
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
          <Link href="/customer">Product</Link>
          <Link href="/customer">Pricing</Link>
          <Link href="/customer">Contact</Link>
          <Link href="/customer">Resources</Link>
          <Link href="/customer">Customers</Link>
          <Link href="/customer">Blogs</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
