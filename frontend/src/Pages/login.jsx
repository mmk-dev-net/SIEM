import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-400/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-1.5 0h12a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 014.5 19.5v-7.5A1.5 1.5 0 016 10.5z"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">
              MMNK SIEM
            </h1>

            <p className="text-slate-300 text-sm">
              Security Information & Event Management
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit} >
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="admin@mmnk.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="accent-cyan-500" />
                Remember me
              </label>

              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-400">
            Real-time Threat Monitoring • Log Analysis • Incident Response
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;
