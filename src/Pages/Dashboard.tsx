import DataTable from "../components/DataTable"
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
const recentWorkflowData = [
    {
      name: "Document Review",
      workflow: "Review Process",
      stage: "Pending",
      updated: "2024-03-15",
      action: "View"
    },
    // Add more sample data as needed
  ];
  
  const recentlyViewedData = [
    {
      name: "Project Proposal",
      uploaded: "2024-03-14",
      action: "View"
    },
    // Add more sample data as needed
  ];
  
const Dashboard=()=>{
    return <div className="flex min-h-screen">
    <Sidebar />
    
    <div className="flex-1">
      <Header />
      
      <main className="p-6 bg-[#ECECF1] md:ml-64">
        <div className="grid lg:grid-cols-2 gap-6">
          <DataTable
            title="Recent Workflows"
            columns={["Name", "Workflow", "Stage", "Updated at", "Action"]}
            data={recentWorkflowData}
          />
          
          <DataTable
            title="Recently Viewed"
            columns={["Name", "Uploaded at", "Action"]}
            data={recentlyViewedData}
          />
          
          <DataTable
            title="Recently Checked Out"
            columns={["Name", "Uploaded at", "Action"]}
            data={recentlyViewedData}
          />
          
          <DataTable
            title="Recently Uploaded"
            columns={["Name", "Uploaded at", "Action"]}
            data={recentlyViewedData}
          />
        </div>
      </main>
    </div>
  </div>
}

export default Dashboard