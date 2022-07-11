import React, { useState } from 'react';
import Link from 'next/link';
import { GoogleLogin } from '@react-oauth/google';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

import { Discover } from './Discover';
import { SuggestedAccounts } from './SuggestedAccounts';
import { Footer } from './Footer/Footer';

export const normalLink =
  'flex gap-3 items-center hover:bg-gray-200 p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        <div>{showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}</div>
      </div>
      {showSidebar && (
        <div
          className="xl:w-[400px] w-20 flex flex-col justify-start
					mb-10 border-r-2 border-gray-100 xl:border-0 p-3"
        >
          <div className="xl:border-b-2 border-gray-200 xl:pb-2">
            <Link href="/">
              <a>
                <div className={normalLink}>
                  <p className="text-xl">
                    <AiFillHome />
                  </p>
                  <span className="text-lg hidden xl:block">For You</span>
                </div>
              </a>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400 mb-3">
                Log in to like and comment on videos
              </p>
              <div className="pr-2">
                {/* <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="transition w-full py-3 rounded-md border-[1px] 
											border-[#F51997] text-[#F51997] hover:text-white
											bg-white hover:bg-[#F51997] cursor-pointer font-semibold
											outline-none"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log in
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy="single_host_origin"
                /> */}
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};
