import './globals.css';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl">Server Status Dashboard</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
