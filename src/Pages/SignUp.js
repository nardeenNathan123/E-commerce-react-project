import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Signup() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailErr, setemailErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username) => {
    return !/\s/.test(username);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (e.target.value === "") {
      setemailErr("This field is required");
    } else if (!validateEmail(e.target.value)) {
      setemailErr("Please enter a valid email format");
    } else {
      setemailErr("");
    }

  };

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value === "") {
      setNameErr("This field is required");
    } else {
      setNameErr("");
    }

  }; 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

    if (e.target.value === "") {
      setUsernameErr("This field is required");
    } else if (!validateUsername(e.target.value)) {
      setUsernameErr("Username should not contain spaces");
    } else {
      setUsernameErr("");
    }

  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.value === "") {
      setPasswordErr("This field is required");
    } else if (!validatePassword(e.target.value)) {
      setPasswordErr(
        "Password must be at least 8 characters and contain lowercase, uppercase, and special characters"
      );
    } else {
      setPasswordErr("");
    }

  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword === "") {
      setConfirmPasswordErr("This field is required");
    } else if (!validateConfirmPassword(newConfirmPassword)) {
      setConfirmPasswordErr("Passwords do not match");
    } else {
      setConfirmPasswordErr("");
    }

  };

  

  const handleRegister = (e) => {
    e.preventDefault();

    // Check for valid data
    if (
      // email === null &&
      // password === null &&
      // name === null &&
      // confirmPassword ===null&&
      nameErr === "" &&
      emailErr === "" &&
      usernameErr === "" &&
      passwordErr === "" &&
      confirmPasswordErr === ""
    ) {
      // Store data in local storage as an array
      const userData = JSON.parse(localStorage.getItem("userData")) || [];
      userData.push({ email, password });
      localStorage.setItem("userData", JSON.stringify(userData));

      
      history.push("/login");
    }
  };

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label>Name:</label>
              <input
                type="text"
                className={`form-control ${nameErr ? "border-danger" : ""}`}
                value={name}
                onChange={handleNameChange}
              />
              {nameErr && <p className="text-danger">{nameErr}</p>}
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <input
                type="text"
                className={`form-control ${emailErr ? "border-danger" : ""}`}
                value={email}
                onChange={handleEmailChange}
              />
              {emailErr && <p className="text-danger">{emailErr}</p>}
            </div>
            <div className="mb-3">
              <label>Username:</label>
              <input
                type="text"
                className={`form-control ${usernameErr ? "border-danger" : ""}`}
                value={username}
                onChange={handleUsernameChange}
              />
              {usernameErr && <p className="text-danger">{usernameErr}</p>}
            </div>
            <div className="mb-3">
              <label>Password:</label>
              <input
                type="password"
                className={`form-control ${passwordErr ? "border-danger" : ""}`}
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordErr && <p className="text-danger">{passwordErr}</p>}
            </div>
            <div className="mb-3">
              <label>Confirm Password:</label> 
              <input
                type="password"
                className={`form-control ${
                  confirmPasswordErr ? "border-danger" : ""
                }`}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {confirmPasswordErr && (
                <p className="text-danger">{confirmPasswordErr}</p>
              )}
            </div>
            <div>
              <Link to='/Login'>Already have Account?</Link>

              </div>
            <button
              className="btn btn-success mt-3"
              type="submit"
              onClick={handleRegister}
              //disabled={handleRegister}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
