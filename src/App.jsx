import Navbar from "./components/common/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Layout from "./pages/Layout.jsx";
import Explore from "./pages/Explore.jsx";
import Search from "./pages/Search.jsx";
import Messages from "./pages/Messages.jsx";
import Saved from "./pages/Saved.jsx";
import Settings from "./pages/Settings.jsx";
import Notifications from "./pages/Notifications.jsx";
import Help from "./pages/Help.jsx";
import Services from "./pages/Services.jsx";
import { useState } from "react";
import CommentShow from "./components/comment-section/Commentshow";
import Logout from "./components/common/Logout.jsx";

import "./App.css"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(prev=>!prev);
  }

  const [notifications, setNotifications] = useState([
  { id:1, message:"Rahul liked your post", read:false },
  { id:2, message:"Sneha commented", read:false },
  { id:3, message:"Amit followed you", read:true }
]);

  const selectNoti = notifications.filter((n)=>!n.read);
  const count = selectNoti.length;

  return (
    <>
      <Navbar onMenuClick={toggleSidebar}  count={count}/>

      <Routes>
        <Route element={<Layout sidebarOpen={sidebarOpen} onMenuClick={toggleSidebar}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/comments" element={<CommentShow />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help/>} />
          <Route path="/notifications" element={<Notifications notifications={notifications} setNotifications={setNotifications}   />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/logout" element={<Logout/>}/>
        </Route>
        
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
