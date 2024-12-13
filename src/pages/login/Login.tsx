import "~/pages/login/Login.css"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <h1 className="logo">VolunCenter</h1>
      <div className="login-box">
        <h2 className="login-title">LOGIN</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <button type="submit" className="login-button" onClick={() => navigate('/voluncenter_react_vite_deploy/voluncenter')}>
            LOGIN
          </button>
        </form>
        <a href="#" className="signup-link">
          SIGN UP
        </a>
      </div>
    </div>
  );
}