"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="hero-video-container">
        <div className="hero-video-overlay" />
        <div className="hero-video">
          <video
            loop
            muted
            autoPlay
            playsInline
            src="https://static.overfuel.com/dealers/autos-direct/video/Header_New.mp4"
            poster="https://static.overfuel.com/dealers/autos-direct/video/Header_New.mp4_poster.jpg"
            className="video"
          ></video>
        </div>
        <div className="hero-caption absolute text-center text-white">
          <div className="py-4">
            <h1 className="font-bold">
              500+ used cars, trucks, and SUVs in Fredericksburg and Manassas,
              VA
            </h1>
            <Link
              role="button"
              tabIndex={0}
              title="Browse Inventory"
              className="uppercase md:font-bold my-3 hidden sm:inline-block md:inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded no-underline btn-primary text-white py-3 px-4 leading-tight text-xl"
              href="/used-cars"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
