import "./Login.css";
import {useState} from "react";
export default function Login() {
  let [isLogin, setIsLogin] = useState(true);
  return (
    <div className="image">
      <div className="login-container">

        <div className="text">
          <h3 >Welcome to PingUp  </h3>
          <h1>Connect with people, share moments, and explore what matters to you.</h1>
          <h2>New here? Create an account and join the community.</h2>
        </div>
        <div className="box">
          <div className="signin">
            <div className="btn-row">
            <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>signIn</button>
            <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(false)}> logIN</button>
            </div>
            <div>
              {isLogin ?  <>
                <div className="login-form">
                  <h2>
                    Login Form</h2>
                  <input type="email" placeholder="enter the mail"></input>
                  <input type="passward" placeholder="enter passward"></input>
                  <a href="#">Forget passward ?</a>
                  <button>Login</button>
                  <p>Not a member?<a href="#" onClick={() => setIsLogin(false)}>Signup Now</a></p>
                </div>
                </> :<>
                <div className="sign-form">
                  <input type="email" placeholder="enter the mail"></input>
                  <input type="passward" placeholder="enter passward"></input>
                  <input type="passward" placeholder="conform passward"></input>
                  </div></>}
              </div>
              </div>
            </div>
          </div>
      </div>

      )
}
