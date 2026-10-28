import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col justify-center items-center px-4">
      <Navbar />
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] shadow-2xl">
        <h2 className="text-2xl font-semibold text-white tracking-tight mb-2 text-center">
          welcome <span className="hero-advanced-pill">back</span>
        </h2>
        <p className="text-sm text-text-muted text-center mb-6">sign in to manage your licenses and configs</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-pink transition-colors text-sm"
              placeholder="Username"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-accent-pink transition-colors text-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 cta-pill py-2.5 rounded-xl text-sm font-medium text-accent-pink hover:text-[#1e1e1e] transition-colors duration-500"
          >
            <span className="relative z-[1]">{loading ? "signing in..." : "sign in"}</span>
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-text-muted">
          don't have an account?{" "}
          <Link to="/register" className="text-accent-pink hover:underline">
            create one
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col justify-center items-center px-4">
      <Navbar />
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] shadow-2xl">
        <h2 className="text-2xl font-semibold text-white tracking-tight mb-2 text-center">
          get <span className="hero-advanced-pill">started</span>
        </h2>
        <p className="text-sm text-text-muted text-center mb-6">redeem your license key to activate your account</p>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-text-muted mb-1.5">license key</label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value.toUpperCase())}
              placeholder="TW-XXXX-XXXX-XXXX"
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm font-mono"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 cta-pill py-2.5 rounded-xl text-sm font-medium text-accent-pink hover:text-[#1e1e1e] transition-colors duration-500"
          >
            <span className="relative z-[1]">redeem & create account</span>
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-text-muted">
          already have an account?{" "}
          <Link to="/login" className="text-accent-pink hover:underline">
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
}