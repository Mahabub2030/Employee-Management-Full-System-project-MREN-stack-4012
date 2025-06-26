import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";


const DashboardLaout  = () => {
    return <div className="relative min-h-screen md:flex">

        {/* sideBar */}
        <Sidebar />

        {/* out look */}
        <div className="flex-1 md:ml-64">
            <div className="p-5">
                <Outlet/>

            </div>

        </div>



    </div>;
};

export default DashboardLaout ;