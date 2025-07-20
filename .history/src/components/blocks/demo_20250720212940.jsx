import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "./HeroGalleryScrollAnimation.jsx"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react";

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
    <ContainerScroll className="h-[120vh]">
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
          Yet another hero section, this time with scroll trigger animations.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-indigo-500 px-4 py-2 font-medium hover:bg-indigo-400">
            Get Started
          </Button>
          <Button variant="link" className="bg-transparent px-4 py-2 font-medium">
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}

export { HeroDemo1 };
