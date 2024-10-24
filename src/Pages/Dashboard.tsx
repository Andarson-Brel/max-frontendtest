import { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from "../components/DataTable";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

const Dashboard = () => {
  // State to hold fetched data
  const [recentWorkflows, setRecentWorkflows] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [recentlyCheckedOut, setRecentlyCheckedOut] = useState([]);
  const [recentlyUploaded, setRecentlyUploaded] = useState([]);

  // Fetch data from data.json on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        setRecentWorkflows(response.data.recentWorkflows);
        setRecentlyViewed(response.data.recentlyViewed);
        setRecentlyCheckedOut(response.data.recentlyCheckedOut);
        setRecentlyUploaded(response.data.recentlyUploaded);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6 bg-[#ECECF1] md:ml-64">
          <div className="grid lg:grid-cols-2 gap-6">
            <DataTable
              title="Recent Workflows"
              columns={["Name", "Workflow", "Stage", "Updated at", "Action"]}
              data={recentWorkflows}
            />

            <DataTable
              title="Recently Viewed"
              columns={["Name", "Uploaded at", "Action"]}
              data={recentlyViewed}
            />

            <DataTable
              title="Recently Checked Out"
              columns={["Name", "Uploaded at", "Action"]}
              data={recentlyCheckedOut}
            />

            <DataTable
              title="Recently Uploaded"
              columns={["Name", "Uploaded at", "Action"]}
              data={recentlyUploaded}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
