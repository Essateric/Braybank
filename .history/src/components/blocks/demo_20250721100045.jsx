import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "./HeroGalleryScrollAnimation.jsx"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react";
import { ChevronDown } from 'lucide-react';

const IMAGES = [
  "/images/image-0-1024x1024.jpg",
  "/images/image-1-1024x1024.jpg",
  "/images/image-2-1024x1024.jpg",
  "/images/image-3-1024x1024.jpg",
  "/images/image-4-1024x1024.jpg",
  "/images/image-5-1024x1024.jpg",
  "/images/image-6-1024x1024.jpg",
  "/images/image-7-1024x1024.jpg",
  "/images/image-8-1024x1024.jpg",
  "/images/image-9-1024x1024.jpg",
  "/images/image-10-1024x1024.jpg",
  "/images/image-11-1024x1024.jpg",
  "/images/image-12-1024x1024.jpg",
  "/images/image-13-1024x1024.jpg",
  "/images/image-14-1024x1024.jpg",
  "/images/image-15-1024x1024.jpg",
  "/images/image-16-1024x1024.jpg",
  "/images/image-17-1024x1024.jpg",
  "/images/image-18-1024x1024.jpg",
  "/images/image-19-1024x1024.jpg",
];

function HeroDemo1() {
  const [index, setIndex] = useState(0);

  // Every 6 seconds, show the next 5 images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 5) % IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = IMAGES.slice(index, index + 5);

  return (
    <ContainerScroll className="h-[100vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {visibleImages.map((url, i) => (
          <BentoCell key={i} className="overflow-hidden rounded-xl shadow-xl">
            <img src={url} alt="" className="size-full object-cover object-center" />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
      <img src="/BraybankLogo.png" alt="Braybank Logo" className="w-300 mx-auto object-cover object-center" />
        <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
          Exclusive riverside living with private ownership
        </p>
      <div className="mt-6 text-center">
  <a
    href="?admin=true"
    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
  >
    Login to Admin
  </a>
  <div className="mt-10 flex flex-col items-center animate-bounce">
    <p className="text-sm text-slate-500">Scroll to explore</p>
    <ChevronDown className="h-6 w-6 text-blue-500" />
  </div>
</div>
      </ContainerScale>
    </ContainerScroll>
  );
}

export { HeroDemo1 };
