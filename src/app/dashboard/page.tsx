"use client";
import { useState } from "react";

const DashboardPage = () => {
  const [sortField, setSortField] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const servers = [
    { name: "Server 1", status: "Up", ip: "192.168.1.1", responseTime: "123 ms", uptime: "99.9%" },
    { name: "Server 2", status: "Down", ip: "192.168.1.2", responseTime: "N/A", uptime: "N/A" },
    { name: "Server 3", status: "Degraded", ip: "192.168.1.3", responseTime: "456 ms", uptime: "95.5%" },
  ];

  const sortedServers = [...servers].sort((a, b) => {
    if (!sortField) return 0;
    if (sortField === "name") return a.name.localeCompare(b.name);
    if (sortField === "status") return a.status.localeCompare(b.status);
    if (sortField === "responseTime") return parseInt(a.responseTime) - parseInt(b.responseTime);
    if (sortField === "uptime") return parseFloat(a.uptime) - parseFloat(b.uptime);
    return 0;
  });

  
  const filteredServers = sortedServers.filter((server) => {
    if (!filterStatus) return true;
    return server.status === filterStatus;
  });

  return (
    <div className="p-6">
      
      <div className=" flex justify-between">
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2">Filter by Status:</label>
        <select
          id="filter"
          value={filterStatus || ""}
          onChange={(e) => setFilterStatus(e.target.value || null)}
        >
          <option value="">All</option>
          <option value="Up">Up</option>
          <option value="Down">Down</option>
          <option value="Degraded">Degraded</option>
        </select>
      </div>

      
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2">Sort by:</label>
        <select
          id="sort"
          value={sortField || ""}
          onChange={(e) => setSortField(e.target.value || null)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
          <option value="responseTime">Response Time</option>
          <option value="uptime">Uptime</option>
        </select>
      </div>
      </div>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">IP Address</th>
            <th className="border border-gray-300 p-2">Response Time</th>
            <th className="border border-gray-300 p-2">Uptime</th>
          </tr>
        </thead>
        <tbody>
          {filteredServers.map((server) => (
            <tr key={server.name}>
              <td className="border border-gray-300 p-2">{server.name}</td>
              <td
                className={`border border-gray-300 p-2 ${server.status === "Up"
                  ? "text-green-500"
                  : server.status === "Down"
                    ? "text-red-500"
                    : "text-yellow-500"
                  }`}
              >
                {server.status}
              </td>
              <td className="border border-gray-300 p-2">{server.ip}</td>
              <td className="border border-gray-300 p-2">{server.responseTime}</td>
              <td className="border border-gray-300 p-2">{server.uptime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
