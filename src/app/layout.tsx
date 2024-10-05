"use client";
import './globals.css';
import { usePathname, useRouter } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();


  const handleLogout = () => {

    router.push('/');
  };

  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4 flex justify-between">

          <h1 className="text-xl">Server Status Dashboard</h1>


          {pathname === '/dashboard' && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          )}
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
