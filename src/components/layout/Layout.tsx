import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1">
        <Header toggleSidebar={toggleSidebar} />

        <main className="p-6 bg-[#ECECF1] md:ml-64">
          <Outlet /> {/* This renders nested routes */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
