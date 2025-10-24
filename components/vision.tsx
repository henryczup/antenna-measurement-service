"use client";

export function Vision() {
  return (
    <section id="vision" className="relative z-10 py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 md:p-16 shadow-[0_0_120px_-40px_rgba(255,199,0,0.6)]">
          <div className="absolute inset-0 -z-10 rounded-[32px] border border-white/10 opacity-60" />
          
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-sentient mb-6 text-white">
              Vision
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 font-mono">
              Just as cloud computing transformed how companies deploy software, scalable antenna testing can transform how we build wireless hardware — faster iteration, lower capital cost, and richer data feedback.
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-mono">
              Our goal is to make world-class RF validation accessible to every innovator.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
