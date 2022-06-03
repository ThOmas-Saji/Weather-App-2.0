import React, { useState } from "react";
import Weather from "../Weather/Weather";
import { useContext } from "react";
import { context } from "../../context/Data";
import axios from "axios";

export default function Home() {
  const { setData } = useContext(context);
  const [place, setPlace] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPlace(value);
  };
  const handleSubmit = () => {
    setError(false);
    setLoading(true);
    setData("");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=3c3cfbb0f46fb29c121bc52aad3cef37&units=metric`
      )
      .then(({ data }) => {
        setTimeout(() => {
          setLoading(false);
          setData(data);
        }, 1000);
      })
      .catch((e) => {
        setLoading(false);
        setErrorMsg(e.message);
        setError(true);
      });
  };
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div style={{ width: "40%", margin: "auto", marginTop: "1rem" }}>
        <div className="input-group justify-content-center mb-4" role="group">
          <input
            onChange={handleChanges}
            className="form-control"
            type="text"
            name="place"
          />
          {loading ? (
            <button className="btn btn-outline-light" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn btn-outline-light">
              Search
            </button>
          )}
        </div>{" "}
      </div>
      {error ? (
        <div className="container text-center">
          <h2>Not Found !</h2>
          <h3> {errorMsg}</h3>{" "}
        </div>
      ) : (
        <Weather />
      )}
    </div>
  );
}
