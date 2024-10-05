"use client";

const DashboardPage = () => {
   
    const servers = [
        { name: "Server 1", status: "Up", ip: "192.168.1.1", responseTime: "123 ms", uptime: "99.9%" },
        { name: "Server 2", status: "Down", ip: "192.168.1.2", responseTime: "N/A", uptime: "N/A" },
        { name: "Server 3", status: "Degraded", ip: "192.168.1.3", responseTime: "456 ms", uptime: "95.5%" },
    ];
  
    return (
      <div className="p-6">
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
            {servers.map((server) => (
              <tr key={server.name}>
                <td className="border border-gray-300 p-2">{server.name}</td>
                <td className={`border border-gray-300 p-2 ${server.status === "Up" ? "text-green-500" : "text-red-500"}`}>
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
  