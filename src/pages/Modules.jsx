import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const MODULE_CATEGORIES = [
  {
    category: "Combat",
    modules: ["AimAssist", "AutoClicker", "Reach", "Velocity", "HitBoxes", "W-Tap", "TriggerBot"],
  },
  {
    category: "Movement",
    modules: ["Sprint", "SafeWalk", "FastPlace", "BridgeAssist", "KeepSprint"],
  },
  {
    category: "Visuals",
    modules: ["ESP", "Chams", "Tracers", "Nametags", "Fullbright", "ChestESP", "Radar"],
  },
  {
    category: "Utility",
    modules: ["AutoTool", "Refill", "InventoryCleaner", "SelfDestruct", "ProfilesManager"],
  },
];

export function Modules() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <div className="max-w-[1200px] mx-auto pt-32 pb-20 px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
            client <span className="hero-advanced-pill">modules</span>
          </h1>
          <p className="text-text-muted max-w-xl mx-auto">
            engineered with precision for subtle ghost client pvp. undetectable and customizable down to every slider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULE_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            >
              <h2 className="text-lg font-semibold text-accent-pink mb-4">{cat.category}</h2>
              <ul className="space-y-2.5">
                {cat.modules.map((m) => (
                  <li key={m} className="text-sm text-text-muted hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-pink/50" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modules;