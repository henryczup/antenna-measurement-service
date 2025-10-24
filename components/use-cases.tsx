"use client";

import { Smartphone, Wifi, Watch, Car, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Smartphone,
    title: "5G/6G Devices",
    description:
      "Schedule FR1/FR2 throughput, beam management, and RRM campaigns across MPAC chambers with integrated channel emulation and automated compliance packs.",
    tags: ["3GPP", "MPAC", "RRM"],
  },
  {
    icon: Wifi,
    title: "IoT Hardware",
    description:
      "Validate LPWAN, BLE, and proprietary radios in a single workflow. Pool hundreds of SKUs into shared queues and trend performance over each release.",
    tags: ["LPWAN", "BLE", "Regression"],
  },
  {
    icon: Watch,
    title: "Wearables & Compact Devices",
    description:
      "Request integrated SAR, coexistence, and proximity scenarios. Receive diagnostics flagging coupling and detuning issues across body postures.",
    tags: ["SAR", "Coexistence", "Detuning"],
  },
  {
    icon: Car,
    title: "Automotive Radar",
    description:
      "Reserve high-dynamic-range chambers for 77/79 GHz radar, V2X, and C-V2X verification with temperature and vibration fixtures orchestrated remotely.",
    tags: ["77 GHz", "V2X", "Validation"],
  },
  {
    icon: GraduationCap,
    title: "Academic Research",
    description:
      "Access enterprise-grade infrastructure for novel arrays, metasurfaces, and reconfigurable antennas. Export raw datasets for publications or AI training.",
    tags: ["Metasurfaces", "Reconfigurable", "Data"],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            Use Cases
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Serving diverse wireless applications across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-foreground/60 text-sm mb-4">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-md bg-muted text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
