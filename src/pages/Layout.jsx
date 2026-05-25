import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

export default function Layout({ sidebarOpen ,onMenuClick}){
  return (
    <div style={{ display: "flex", width: "100%" }}>
   
      <Sidebar isOpen={sidebarOpen} />


      <div 

      onClick={sidebarOpen  && onMenuClick}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center"
      }}> 
      <Outlet />
      </div>
    </div>
  );
}