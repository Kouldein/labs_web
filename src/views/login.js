import { useState } from "react";
import "./login.css";
import userAPI from '../api/userAPI'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {

  const navigate = useHistory();

  const handleSubmit = async (reg) => {
    reg.preventDefault();
    await userAPI.login({username, password})
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', 'Bearer ' + res.data)
        navigate.push("/")
      });
  };
  
  const [userLoginData, setUserLoginData] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className="materialContainer">
        <div className="box">
          <div className="title">
            <br />
            <p>Login</p>
          </div>

          <div className="main">
            <form className="form1">
              <input
                className="username "
                type="text"
                align="center"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                className="username"
                type="password"
                align="center"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div style={{display: "flex", justifyContent: "center"}}>
              <button onClick={handleSubmit} className="submit" href="home.html">
                Sign in
              </button>
              </div>
              <p className="registration" align="center">
                <Link to="/register">Registration</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
