import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'SkillSync - Skills Management Platform' }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="RBC SkillSync: Organizational Skills Management Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <div className="flex flex-1">
          <Sidebar />
          
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;