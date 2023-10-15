"use client"

import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const path = usePathname()
    console.log(path)
       
  return (
    <nav className="bg-slate-200  p-3 flex items-center justify-evenly px-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" font-bold text-xl">Your Logo</div>
        <div className="flex space-x-4 items-center">
          <a href="/" className={`${path === '/'? 'font-semibold':''} hover:text-purple-600 `}>Home</a>
          <a href="/statspage" className={`${path === '/statspage'? 'font-semibold':''} hover:text-purple-600`}>Stats</a>
          <a href="/downloadable/tp.java" download={'tp.java'} className='p-2 rounded bg-purple-500  text-slate-200 hover:bg-purple-700'>Download </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
