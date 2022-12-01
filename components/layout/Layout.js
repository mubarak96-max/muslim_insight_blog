import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';

function Layout({ children }) {
  const year = new Date().getFullYear();
  return (
    <div className='min-w-full'>
      <nav className='flex flex-row items-center justify-between bg-slate-100 shadow-lg px-3 py-1 md:px-5 py-3 lg:px-24'>
        <div>
          <Link href='/' className='flex flex-row items-center'>
            <Image src={logo} width='50' height='10' alt='Muslim Insight' />
            <h3 className='text-blue-600 font-semibold text-xl'>
              Muslim Insight
            </h3>
          </Link>
        </div>
        <div>
          <Link href='/' className='text-blue-600 font-semibold text-xl'>
            Home
          </Link>
        </div>
      </nav>
      <div className='font-sans'>{children}</div>

      <footer>
        <div className='bg-black text-white text-center md:py-7 py-2'>
          <p>@{year} Muslim Insight</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
