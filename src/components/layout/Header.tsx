import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';
import WorkflowDropdown from '../WorkflowDropdown';
import Sidebar from './Sidebar';

interface Workflow {
  id: number;
  name: string;
}

const suggestedWorkflows: Workflow[] = [
  { id: 1, name: 'Workflow A' },
  { id: 2, name: 'Workflow B' },
  { id: 3, name: 'Workflow C' },
  { id: 4, name: 'Workflow D' },
];

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const [isAdmin, setIsAdmin] = useState(true); // State to toggle between Admin and User

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoleToggle = () => {
    setIsAdmin(!isAdmin);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white p-4 md:ml-64 flex flex-wrap items-center justify-between gap-4 shadow-sm relative">
      <button className="md:hidden" onClick={toggleSidebar}>
        ☰
      </button>

      <div className="flex items-center gap-4 flex-1">
        <button
          className="bg-[#A7A7F3] text-black flex items-center gap-2 px-4 py-2 rounded hover:bg-opacity-90 transition-colors relative"
          onClick={handleToggleDropdown}
        >
          Initiate Workflow
          {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        <WorkflowDropdown isOpen={isDropdownOpen} suggestedWorkflows={suggestedWorkflows} />

        {/* Search Section */}
        <div className="flex-1 max-w-2xl relative">
          {/* Desktop Search Input */}
          <input
            type="search"
            placeholder="Search for documents"
            className="w-full px-4 py-2 border rounded-lg pr-10 hidden md:block"
          />
          {/* Mobile Search Icon */}
          <button className="md:hidden">
            <Search size={24} className="text-gray-400" />
          </button>
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hidden md:block" size={20} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-[#A7A7F3] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
          Upload File
        </button>

        {/* Role Switch Toggle */}
        <div
          onClick={handleRoleToggle}
          className="w-36 h-10 hidden md:flex items-center justify-between bg-gray-300 rounded-full p-1 cursor-pointer relative"
        >
          <span className="text-sm font-medium px-2">Admin</span>
          <span className="text-sm font-medium px-2">User</span>
          <motion.div
            className="absolute top-1 w-16 h-8 bg-[#A7A7F3] rounded-full shadow-md"
            layout
            initial={false}
            animate={{ x: isAdmin ? 0 : 70 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Profile Icon */}
          <User className="md:hidden" size={24} />
          {/* Desktop Username */}
          <span className="hidden md:flex items-center">Damilola Odusola <ChevronDown></ChevronDown></span>
        </div>
      </div>
      
      {/* Sidebar Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleSidebar}></div>}
      
      {/* Slide-in Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}
