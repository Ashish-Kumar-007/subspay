import React from 'react';
import { RiPlayCircleFill } from 'react-icons/ri';

const HeroBanner = () => {
  return (
    <div className="relative">
      <div className="h-screen md:h-80 lg:h-screen xl:h-112 w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500">
        <div className="absolute inset-0 bg-opacity-75 bg-black"></div>
        <div className="relative h-full flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              Discover Your Next Favorite Content
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8">
              Stream thousands of movies, TV shows, and documentaries.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-bold text-lg">
              <RiPlayCircleFill className="mr-2 inline-block" />
              Start Watching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
