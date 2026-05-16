import { useState, useEffect } from "react";

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/alerts")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Failed to fetch alerts");
        }
        return res.json();
      })
      .then((data) => setAlerts(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 p-6">
      <h1 className="text-4xl font-bold mb-6">SIEM Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg border border-green-500"
          >
            <h2 className="text-xl font-bold">High Severity Alert</h2>
            <p>{alert._source.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
