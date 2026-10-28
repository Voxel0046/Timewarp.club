import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const FAQS = [
  {
    q: "how do i get started?",
    a: (
      <>
        purchase a license{" "}
        <Link to="/purchase" className="text-accent-pink hover:underline">
          here
        </Link>
        , create an account, and download the loader directly from your dashboard.
      </>
    ),
  },
  {
    q: "which minecraft versions are supported?",
    a: "timewarp is built specifically for 1.7.10 and 1.8.9 Forge.",
  },
  {
    q: "can i use it on multiple devices?",
    a: "each license is hardware-bound to one device at a time. you can request a hardware reset from the dashboard if you switch PCs.",
  },
  {
    q: "what payment methods do you accept?",
    a: "we accept cards via Stripe and major cryptocurrencies (BTC, ETH, LTC, SOL, XMR, USDT).",
  },
  {
    q: "where do i get help or configs?",
    a: (
      <>
        join our official{" "}
        <a
          href="https://discord.com/invite/shW3eNaEMz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-pink hover:underline"
        >
          Discord community
        </a>{" "}
        for user configs, server bypass settings, and ticket support.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <div className="max-w-[900px] mx-auto pt-32 pb-20 px-4 sm:px-6">
        <h1 className="text-4xl font-semibold text-white tracking-tight text-center mb-4">
          frequently asked <span className="hero-advanced-pill">questions</span>
        </h1>
        <p className="text-center text-text-muted mb-12">
          everything you need to know about timewarp client and licenses
        </p>

        <div className="space-y-6">
          {FAQS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <h3 className="text-lg font-medium text-white mb-2">{item.q}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;