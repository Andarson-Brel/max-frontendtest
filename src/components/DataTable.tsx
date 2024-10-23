interface DataTableProps {
  title: string;
  columns: string[];
  data: Record<string, string>[];
}

export default function DataTable({ title, columns, data }: DataTableProps) {
  return (
    <div className="bg-white border border-[#707070] px-2 shadow-sm overflow-hidden">
      <h2 className="text-md font-semibold p-4 border-b">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-[#707070] rounded-[20px]">
          <thead>
            <tr className="bg-gray-50 border border-[#707070] ">
              {columns.map((column) => (
                <th key={column} className="text-left px-4 font-medium text-gray-600">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-[#FFFFFF] text-[12px]' : 'bg-[#ECECF1]  text-[12px]'}
              >
                {columns.map((column) => (
                  <td key={column} className="p-4">
                    {column.toLowerCase() === 'action' && row[column.toLowerCase()] === 'View' ? (
                      <button className="bg-[#A7A7F3]  text-black px-4 rounded hover:bg-opacity-90 transition-colors">
                        View
                      </button>
                    ) : (
                      row[column.toLowerCase()]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t flex justify-end items-center">
        <button className="text-gray-600 border py-[3px] px-2">Previous</button>
        <div className="flex gap-0">
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 border ${
                page === 1 ? 'bg-[#A7A7F3] text-white' : 'text-gray-600'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="text-gray-600 border py-[3px] px-2">Next</button>
      </div>
    </div>
  );
}
