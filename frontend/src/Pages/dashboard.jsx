import { useState, useEffect } from "react";

const Dashboard = () => {
  const alerts = [
    {
      severity: 'Critical',
      message: 'Multiple Failed Login Attempts',
      source: '192.168.70.100',
      color: 'bg-red-500'
    },
    {
      severity: 'High',
      message: 'Port Scan Activity Detected',
      source: '191.168.80.213',
      color: 'bg-orange-500'
    },
    {
      severity: 'Medium',
      message: 'Suspicious DNS Traffic',
      source: '192.168.80.213',
      color: 'bg-yellow-500 text-black'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-cyan-400">
            IMPELSYS SIEM TOOL
          </h1>
          <p className="text-gray-400 mt-1">
            Real-Time Security Monitoring Dashboard
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl">
            Active Threats
          </button>

          <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-xl">
            Investigate
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
          <p className="text-gray-400">Critical Alerts</p>
          <h2 className="text-5xl font-bold text-red-500 mt-3">0</h2>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
          <p className="text-gray-400">Events Per Second</p>
          <h2 className="text-5xl font-bold text-cyan-400 mt-3">0</h2>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
          <p className="text-gray-400">Connected Devices</p>
          <h2 className="text-5xl font-bold text-green-400 mt-3">0</h2>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
          <p className="text-gray-400">Blocked Threats</p>
          <h2 className="text-5xl font-bold text-yellow-400 mt-3">0</h2>
        </div>

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Threat Feed */}
        <div className="lg:col-span-2 bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-cyan-400">
              Live Threat Feed
            </h2>

            <span className="bg-red-600 px-3 py-1 rounded-full text-sm animate-pulse">
              LIVE
            </span>
          </div>

          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="bg-[#0F172A] border border-gray-700 rounded-xl p-5 hover:border-cyan-500 transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold">
                      {alert.message}
                    </h3>

                    <p className="text-gray-400 mt-1">
                      Source IP: {alert.source}
                    </p>
                  </div>

                  <span className={`${alert.color} px-3 py-1 rounded-full text-sm font-bold`}>
                    {alert.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">

          {/* MITRE */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">
              MITRE ATT&CK
            </h2>

            <div className="space-y-3">
              <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-700">
                Initial Access
              </div>

              <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-700">
                Privilege Escalation
              </div>

              <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-700">
                Command & Control
              </div>
            </div>
          </div>

          {/* Attack Sources */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">
              Top Attacking IPs
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>45.12.85.20</span>
                <span className="text-red-500">542</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>185.44.20.11</span>
                <span className="text-orange-400">321</span>
              </div>

              <div className="flex justify-between">
                <span>92.11.77.12</span>
                <span className="text-yellow-400">205</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Dashboard;
