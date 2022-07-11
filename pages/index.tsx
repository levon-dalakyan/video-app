import type { NextPage } from 'next';
import axios from 'axios';

import { IVideo } from '../types';
import { VideoCard } from '../components/VideoCard';
import { NoResults } from '../components/NoResults';

interface IProps {
  videos: IVideo[];
}

const Home: NextPage<IProps> = ({ videos }) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video) => <VideoCard key={video._id} post={video} />)
      ) : (
        <NoResults text="No Videos" />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/post');

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
