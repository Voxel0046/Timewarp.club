import React from "react";
import { Navbar } from "../components/Navbar";

export function LegalLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <div className="max-w-[800px] mx-auto pt-32 pb-20 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-2">{title}</h1>
        {updated && <p className="text-xs text-text-muted mb-8">last updated: {updated}</p>}
        <div className="space-y-8 text-sm leading-relaxed text-text-muted/90">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Terms() {
  return (
    <LegalLayout title="terms of service" updated="October 11, 2026">
      <section>
        <h2 className="text-lg font-medium text-white mb-2">your license</h2>
        <p>30 days, 90 days, or lifetime. one account, one device, one active key. personal use only.</p>
      </section>
      <section>
        <h2 className="text-lg font-medium text-white mb-2">reselling & distribution</h2>
        <p>reselling, sharing, leaking, or reverse engineering any part of timewarp client will result in immediate termination without refund.</p>
      </section>
    </LegalLayout>
  );
}

export function Privacy() {
  return (
    <LegalLayout title="privacy policy" updated="October 11, 2026">
      <section>
        <h2 className="text-lg font-medium text-white mb-2">data collected</h2>
        <p>we store your username, hashed password, email, and anonymized hardware identifier for license validation.</p>
      </section>
    </LegalLayout>
  );
}

export function Refund() {
  return (
    <LegalLayout title="refund policy" updated="October 11, 2026">
      <section>
        <h2 className="text-lg font-medium text-white mb-2">digital goods</h2>
        <p>due to the nature of digital goods and license generation, all sales are strictly final once a key has been redeemed or activated.</p>
      </section>
    </LegalLayout>
  );
}