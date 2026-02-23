'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/constants';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/denning-logo.png"
              alt="Denning"
              width={160}
              height={40}
              className="h-9 w-auto"
              priority
            />
            <span className="text-[8px] font-semibold uppercase tracking-wider bg-foreground text-background px-2.5 py-1 rounded-full align-middle leading-none">Beta</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/60 hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="bg-foreground text-background text-sm font-semibold px-4 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200 rounded-xl">
              <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/60 hover:text-foreground transition-colors py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button asChild className="w-full bg-foreground text-background text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-200 rounded-xl">
                  <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
