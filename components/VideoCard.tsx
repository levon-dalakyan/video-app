import React, { FC, useRef, useState } from 'react';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

import { IVideo } from '../types';
import Image from 'next/image';

interface IProps {
  post: IVideo;
}

export const VideoCard: FC<IProps> = ({ post }) => {
  const [isHover, setIsHover] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const isPlayingChangeHandler = () => {
    if (isPlaying) {
      videoRef?.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef?.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
        <div className="md:w-16 md:h-16 w-10 h-10">
          <Link href="/">
            <>
              <Image
                src={post?.postedBy?.image}
                width={62}
                height={62}
                alt={post.caption}
                layout="responsive"
              />
            </>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <Link href="/">
              <a>
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-primary">
                    {post.postedBy.userName}
                  </p>
                  <GoVerified className="text-blue-400" />
                  <p className="text-gray-500 capitalize font-medium text-xs hidden md:block">
                    {post.postedBy.userName}
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="text-gray-500">{post.caption}</div>
        </div>
      </div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="rounded-3xl"
        >
          <Link href="/">
            <a>
              <video
                loop
                ref={videoRef}
                onClick={() => isPlayingChangeHandler()}
                className="w-[200px] md:w-[400px] lg:w-[600px] h-[300px] 
								md:h-[400px] lg:h-[530px] rounded-2xl cursor-pointer bg-gray-100"
                src={post.video.asset.url}
              ></video>
            </a>
          </Link>

          {isHover && (
            <div
              className="absolute bottom-3 cursor-pointer left-8 md:left-14
						lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px]
						p-3 text-2xl lg:text-4xl text-white"
            >
              {isPlaying ? (
                <button
                  className="text-black bg-white"
                  onClick={() => isPlayingChangeHandler()}
                >
                  <BsFillPauseFill />
                </button>
              ) : (
                <button
                  className="text-black bg-white"
                  onClick={() => isPlayingChangeHandler()}
                >
                  <BsFillPlayFill />
                </button>
              )}
              {isVideoMuted ? (
                <button className="text-black bg-white">
                  <HiVolumeOff />
                </button>
              ) : (
                <button className="text-black bg-white">
                  <HiVolumeUp />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
