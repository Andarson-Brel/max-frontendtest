import { Files, FolderHeart, Home, ListChecks, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NavItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: <Home size={20} />, label: 'Dashboard', path: '/' },
  { icon: <Files size={20} />, label: 'Document Collection', path: '/documents' },
  { icon: <FolderHeart size={20} />, label: 'Favorite Files', path: '/favorites' },
  { icon: <ListChecks size={20} />, label: 'Assigned to Me', path: '/assigned' },
  { icon: <Upload size={20} />, label: 'Checked Out', path: '/checked-out' },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  // State to track screen width for responsive behavior
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ x: isLargeScreen ? 0 : '-100%' }}
      animate={{ x: isOpen || isLargeScreen ? 0 : '-100%' }} // Control visibility based on screen size
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 bg-[#333547] text-white w-64 min-h-screen p-4 z-20 shadow-lg ${
        isOpen || isLargeScreen ? 'block' : 'hidden'
      }`}
    >
      <button onClick={toggleSidebar} className="text-white text-2xl mb-6 md:hidden">
        ✕
      </button>
      <div className="text-2xl font-bold mb-8">
        <span className="text-blue-600">Max</span>
        <span>Files</span>
      </div>
      <nav>
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center gap-3 text-gray-300 hover:text-white py-2 px-4 rounded transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
