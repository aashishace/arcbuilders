import type { Metadata } from "next";
import { Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Temporarily Offline",
  },
  description: "Temporarily offline. Please check back soon.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function MaintenancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#17130f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,168,125,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(163,127,82,0.18),transparent_32%),linear-gradient(135deg,#18130e_0%,#221b14_48%,#120f0c_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-16">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:h-28 sm:w-28">
            <Settings2 className="h-11 w-11 animate-[spin_8s_linear_infinite] text-accent sm:h-12 sm:w-12" />
          </div>
          <h1 className="mt-8 text-4xl font-light tracking-tight text-white sm:text-5xl">
            Temporarily Offline
          </h1>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/64 sm:text-base">
            We&apos;re making a few final refinements. Please check back soon.
          </p>
        </div>
      </div>
    </main>
  );
}
