import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [inputData, setInputData] = useState<any>({
    username: "",
    password: "",
  });

  const handleInputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleLogin = () => {
    if (!inputData.username || !inputData.password) {
      setCheck(true);
      return;
    } else {
      setCheck(false);
      alert("This feature is comming soon !")
    }
  };

  return (
    <div
      style={{
        marginTop: "10rem",
      }}
    >
      <div className="vstack gap-4 col-md-4 mx-auto">
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
          <button onClick={handleLogin} type="button" className="btn btn-light">
            Login
          </button>
        </div>
        <p className="mx-auto">
          if you don't have an account ?{" "}
          <Link className="text-reset" to="/signup">
            {" "}
            <button type="button" className="btn btn-outline-light">
              signup
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
