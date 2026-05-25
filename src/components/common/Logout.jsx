import "./Logout.css"
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const navigate = useNavigate();

    function handlelogout(){
        alert("Are you sure you want to logout?");
        navigate("/login")
    }
  return (
    <div>
        
        <div className="logout">
            <div className="box">
                <h1>Log out of account</h1>
                <h2>You can log back in</h2>
                <div className="buttons">
                    <button onClick={handlelogout}> Log Out</button>
                    <button>Cancel</button>

                </div>
                



            </div>
        </div>
      
    </div>
  )
}
