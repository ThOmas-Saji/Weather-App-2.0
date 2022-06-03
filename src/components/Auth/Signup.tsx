import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [loading, setLoading] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [inputData, setInputData] = useState<any>({
    first_name: "",
    last_name: "",
    username: "",
    mobile: "",
    email: "",
    password: "",
    description: "user register",
  });

  const handleInputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSignup = async () => {
    if (
      !inputData.first_name ||
      !inputData.last_name ||
      !inputData.username ||
      !inputData.mobile ||
      !inputData.email ||
      !inputData.password
    ) {
      setCheck(true);
      return;
    } else {
      setCheck(false);
      // axios
      //   .post(`https://masai-api-mocker.herokuapp.com/auth/register`, inputData)
      //   .then((data) => console.log(data))
      //   .catch((e) => console.log(e))
    }
    return;
  };

  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      <div className="vstack gap-4 col-md-4 mx-auto">
        <div className="input-group">
          <span className="input-group-text">Full name</span>
          <input
            onChange={handleInputChanges}
            name="first_name"
            type="text"
            aria-label="First name"
            className={`form-control ${
              check && !inputData.first_name ? "is-invalid" : ""
            }`}
          />
          <input
            onChange={handleInputChanges}
            name="last_name"
            type="text"
            aria-label="Last name"
            className={`form-control ${
              check && !inputData.last_name ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">Please fill both boxes</div>
        </div>
        <div className="input-group">
          <span className="input-group-text bg-light">@</span>
          <input
            onChange={handleInputChanges}
            name="username"
            className={`form-control ${
              check && !inputData.username ? "is-invalid" : ""
            }`}
            type="text"
            placeholder="username"
          />
          <div className="invalid-feedback">Please give username</div>
        </div>
        <div className="input-group">
          <span className="input-group-text bg-light">@</span>
          <input
            onChange={handleInputChanges}
            name="email"
            className={`form-control ${
              check && !inputData.email ? "is-invalid" : ""
            }`}
            type="email"
            placeholder="email"
          />
          <div className="invalid-feedback">Please give email address</div>
        </div>
        <div className="input-group">
          <span className="input-group-text bg-light">+91</span>
          <input
            onChange={handleInputChanges}
            name="mobile"
            className={`form-control ${
              check && !inputData.mobile ? "is-invalid" : ""
            }`}
            type="number"
            placeholder="mobile"
          />
          <div className="invalid-feedback">Please enter mobile number</div>
        </div>
        <div className="input-group">
          <span className="input-group-text bg-light">***</span>
          <input
            onChange={handleInputChanges}
            name="password"
            className={`form-control ${
              check && !inputData.password ? "is-invalid" : ""
            }`}
            type="password"
            placeholder="password"
          />
          <div className="invalid-feedback">Please provide password</div>
        </div>
        <div className="mx-auto">
          {" "}
          <button
            onClick={handleSignup}
            type="button"
            className="btn btn-outline-light"
          >
            Signup
          </button>
        </div>
        <p className="mx-auto">
          if you already have an account ?{" "}
          <Link className="text-reset" to="/login">
            <button type="button" className="btn btn-light">
              login
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
