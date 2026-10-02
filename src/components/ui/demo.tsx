'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-transparent border-none shadow-none rounded-none relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#f59e0b"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-200 to-amber-500/20">
            3D Product Experience
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Showcase your product in a stunning 3D experience that reacts to user interaction — perfect for smart devices, wearables, and modern tech brands.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative [mask-image:radial-gradient(circle_at_center,black_30%,transparent_85%)]">
          {/* Subtle edge lighting glow */}
          <div className="absolute inset-0 bg-amber-500/[0.03] blur-3xl rounded-full pointer-events-none" />
          <SplineScene 
            scene="https://prod.spline.design/1Z4tqWkUtFwq2o8h/scene.splinecode"
            className="w-full h-full relative z-10"
          />
        </div>
      </div>
    </Card>
  )
}
