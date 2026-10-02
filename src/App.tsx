/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SplineSceneBasic } from "@/components/ui/demo";
import { Navbar } from "@/components/ui/navbar";
import DemoOne from "@/components/ui/feature-demo";
import { Footer } from "@/components/ui/footer-section";

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-4 relative pt-24 overflow-x-hidden">
      {/* Subtle background glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(245,158,11,0.05),transparent_70%)]" />
      <Navbar />
      <div className="w-full max-w-6xl">
        <SplineSceneBasic />
      </div>
      <DemoOne />
      <Footer />
    </div>
  );
}
