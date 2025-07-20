import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "./HeroGalleryScrollAnimation.jsx"
import { Button } from "@/components/ui/button"

const IMAGES = [
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
  "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34",
  "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
  "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
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
