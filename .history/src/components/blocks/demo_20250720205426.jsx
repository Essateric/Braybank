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
]


function HeroDemo1() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((url, i) => (
          <BentoCell key={i} className="overflow-hidden rounded-xl shadow-xl">
            <img src={url} alt="" className="size-full object-cover object-center" />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800">
          Your Animated Hero
        </h1>
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
  )
}

export { HeroDemo1 }
