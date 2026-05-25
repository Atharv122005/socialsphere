import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  return (
    <div className="sidebar-container">
      {isOpen && (
        <aside className="sidebar">
          <div className="sidebar-logo"></div>
          <nav className="sidebar-menu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-house"></i>
              <span> Home</span>
            </NavLink>

            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-compass"></i>
              <span> Explore</span>
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-compass"></i>
              <span> Search</span>
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> Services</span>
            </NavLink>
            <hr></hr>
            <div className="sidebar-divider"></div>

            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-comment-dots"></i>
              <span>Messages</span>
            </NavLink>

            <NavLink
              to="/notifications"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-bell"></i>
              <span>Notifications</span>
            </NavLink>

            <NavLink
              to="/saved"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-bookmark"></i>
              <span>Saved</span>
            </NavLink>
            <hr></hr>
            <div className="sidebar-divider"></div>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-gear"></i>
              <span>Settings</span>
            </NavLink>

            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-circle-question"></i>
              <span>Help</span>
            </NavLink>

            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </NavLink>
          </nav>
        </aside>
      )}
    </div>
  );
}
