import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div
      className="w-full flex justify-between items-center 
		border-b-2 border-gray-200 py-2 px-4"
    >
      <Link href="/">
        <div className="flex gap-3 items-center cursor-pointer">
          <Image
            src="/images/logo.jpg"
            alt="Video App"
            width={60}
            height={60}
          />
          <p className="text-[#F51997] text-5xl">OkTok</p>
        </div>
      </Link>
    </div>
  );
};
