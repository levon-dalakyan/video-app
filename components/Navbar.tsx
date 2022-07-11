import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleLogin } from '@react-oauth/google';

import { createOrGetUser } from '../utils';

export const Navbar = () => {
  const user = false;

  return (
    <div
      className="w-full flex justify-between items-center 
		border-b-2 border-gray-200 py-2 px-4 select-none"
    >
      <Link href="/">
        <a>
          <div className="flex gap-3 items-center cursor-pointer">
            <Image src="/images/logo.jpg" alt="OkTok" width={60} height={60} />
            <p className="text-[#F51997] text-5xl">OkTok</p>
          </div>
        </a>
      </Link>
      <div>Search</div>
      <div>
        {user ? (
          <div>Logged in</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response)}
            onError={() => console.log('error')}
          />
        )}
      </div>
    </div>
  );
};
