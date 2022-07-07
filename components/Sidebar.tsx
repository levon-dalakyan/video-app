import React, { useState } from 'react';
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';

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
          className="xl:w-400 w-21 flex flex-col justify-start
					mb-10 border-r-2 border-gray-100 xl:border-0 p-3"
        >
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400 mb-3">
                Log in to like and comment on videos
              </p>
              <div className="pr-2">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="w-full py-3 rounded-md border-[1px] 
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
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
