import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setemailErr("This field is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      setemailErr("Please enter a valid email format");
    } else {
      setemailErr("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordErr("This field is required");
    } else if (e.target.value.length < 8){
      setPasswordErr("The password may contain at least 8 charachter")
    }
    else {
      setPasswordErr("");
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    


    const users = JSON.parse(localStorage.getItem("userData")) || [];


    const user = users.find((user) => user.email === email);

    if (!user) {
      setLoginError("Icorrect email or password");
      return;
    }


    if (user.password !== password) {
      setLoginError("Incorrect email or password");
      return;
    }


    setLoginError("");
    history.push("/checkout");
  };
  const isLoginDisabled = email === "" || password === "";
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-md-center mt-5">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  className={`form-control ${emailErr ? "border-danger" : ""}`}
                  value={email}
                  onChange={handleEmailChange}
                />
                <p className="text-danger">{emailErr}</p>
              </div>

              <div className="mb-3">
                <label>Password:</label>
                <div className="d-flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${
                      passwordErr ? "border-danger" : ""
                    }`}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                {passwordErr && <p className="text-danger">{passwordErr}</p>}
              </div>
              <div>
              <Link to='/SignUp'>Don't have Account?</Link>

              </div>
              {loginError && <p className="text-danger mt-2">{loginError}</p>}

              <button
                type="button"
                className="btn btn-outline-secondary mt-3"
                onClick={toggleShowPassword}
              >
                {showPassword ? "Hide password" : "Show password"}
              </button>

              
              <button
                className="btn btn-success mt-3"
                type="submit"
                onClick={handleLogin}
                disabled={isLoginDisabled}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
