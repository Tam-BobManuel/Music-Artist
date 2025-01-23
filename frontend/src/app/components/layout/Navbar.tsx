'use client';

import Image from "next/image";
import Logo from "@/../public/Images/logo.svg";
import Link from "next/link";
import newsBtn from "@/../public/Icons/Newsletter.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NewsletterModal from "../newsletter-modal";

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/Merch', label: 'Merch' },
  { href: '/Music', label: 'Music' },
  { href: '/Tour', label: 'Tour' },
  { href: '/About', label: 'About' },
];

export default function NavBar() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); 
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="z-10 absolute top-[40px] container w-full text-white overflow-hidden">
      <nav className="relative justify-between flex mx-auto w-10/12 items-center ">
        <div>
          <Image src={Logo} alt="Logo" priority className="w-5/12 lg:w-full" />
        </div>
        {/* Mobile View: Menu Icon */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="text-white text-2xl focus:outline-none">☰</button>
            </SheetTrigger>
            <SheetContent side="left" className="w-11/12 border-none text-white bg-black/20 p-8 backdrop-blur-xl">
              <SheetHeader>
                <h1 className="text-xl mt-12">Click any of the texts below to navigate</h1>
                <ul className="flex flex-col gap-6 py-4 px-8">
                  {navItems.map((item) => (
                    <li key={item.href} className="text-center font-bold">
                      <Link
                        href={item.href}
                        className={`block py-2 text-lg hover:text-black transition-colors ${
                          item.href === pathname
                            ? 'underline underline-offset-8 decoration-8 decoration-white '
                            : ''
                        }`}
                      >
                        <span className={`${item.href === pathname ? 'hidden': ''}`}> ={">  "}</span> {item.label}
                      </Link>
                    </li>
                  ))}
                  <SheetClose className="mt-4 mx-auto">
                    <Image
                      src={newsBtn}
                      alt="NewsLetter"
                      className="cursor-pointer"
                      onClick={handleOpenModal}
                      priority
                    />
                  </SheetClose>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        {/* Desktop View: Full Navbar */}
        <div className="hidden lg:flex relative w-full left-1/2 transform -translate-x-1/2">
          <ul className="flex flex-row gap-12 py-4 px-8 relative z-10">
            {navItems.map((item) => (
              <li key={item.href} className="text-center font-bold">
                <Link
                  href={item.href}
                  className={`block py-2 text-lg hover:text-black transition-colors ${
                    item.href === pathname
                      ? 'underline underline-offset-8 decoration-8 decoration-white '
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="ml-8">
              <Image
                src={newsBtn}
                alt="NewsLetter"
                className="cursor-pointer"
                onClick={handleOpenModal}
                priority
              />
            </div>
          </ul>
          <div
            className="shadow-lg shadow-black absolute inset-0  -skew-x-12 z-0 opacity-10 bg-gradient-to-r from-black to-white"
            aria-hidden="true"
          />
        </div>
        {showModal && <NewsletterModal onClose={handleCloseModal} />}
      </nav>
    </div>
  );
}
