// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-rbc-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <span className="text-rbc-yellow font-bold text-2xl mr-2">RBC</span>
              <span className="font-bold text-xl">SkillSync</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;