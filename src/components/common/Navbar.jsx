import { IoIosNotifications } from "react-icons/io";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import {IoMenu} from "react-icons/io5";
import { useNavigate } from "react-router";

export default function Navbar({onMenuClick ,count}) {
  let navigate = useNavigate();
  return (
    
    <div className="navbar">
      <IoMenu className="menu"  onClick={onMenuClick} style={{ color: "black",fontSize:"35px" }} />
      <img src={logo} className="logo" />

      <div className="notification" onClick={() => navigate("./notifications")} ><IoIosNotifications />{count}</div>
    </div>
  );
}