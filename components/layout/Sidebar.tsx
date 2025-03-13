import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text, active }) => {
  return (
    <Link href={href}>
      <div className={`flex items-center py-3 px-4 rounded-md mb-1 cursor-pointer transition-colors ${
        active 
          ? 'bg-rbc-blue text-white' 
          : 'text-gray-700 hover:bg-rbc-gray'
      }`}>
        <span className="mr-3">{icon}</span>
        <span className="font-medium">{text}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const router = useRouter();
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      <div className="py-6 px-3">
        <div className="px-4 mb-6">
          <h2 className="text-sm uppercase font-bold text-gray-500">Main Menu</h2>
        </div>
        
        <nav>
          <NavItem 
            href="/"
            active={router.pathname === '/'}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            text="Dashboard"
          />
          
          <NavItem 
            href="/skills"
            active={router.pathname === '/skills'}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
            text="Skills Directory"
          />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;