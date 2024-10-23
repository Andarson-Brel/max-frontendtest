import { useState } from 'react';
import { motion } from 'framer-motion';

interface Workflow {
  id: number;
  name: string;
}

interface WorkflowDropdownProps {
  isOpen: boolean;
  suggestedWorkflows: Workflow[];
}

export default function WorkflowDropdown({ isOpen, suggestedWorkflows }: WorkflowDropdownProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWorkflows, setFilteredWorkflows] = useState<Workflow[]>(suggestedWorkflows);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = suggestedWorkflows.filter((workflow) =>
      workflow.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredWorkflows(filtered);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="absolute border top-[66px] bg-white rounded-md py-4 mt-2 w-64 max-h-64 overflow-y-auto z-10"
        >
          <div className="flex items-center mb-2">
            <input
              type="text"
              placeholder="Search workflow..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-3  border rounded-lg mx-2"
            />
            
          </div>
          <ul>
            {filteredWorkflows.length > 0 ? (
              filteredWorkflows.map((workflow, index) => (
                <li
                  key={workflow.id}
                  className={`py-1 px-2  cursor-pointer ${
                    index % 2 === 0 ? 'bg-[#E6E6FF]' : 'bg-[#FFFFFF]'
                  } hover:bg-gray-200`}
                >
                  {workflow.name}
                </li>
              ))
            ) : (
              <li className="text-gray-500 py-1">No workflows found</li>
            )}
          </ul>
        </motion.div>
      )}
    </>
  );
}
