import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { context } from "../../context/Data";
import FutureData from "../FutureData/FutureData";

export default function Weather() {
  const { data, setFutureData } = useContext(context);
  const [loading, setLoading] = useState<boolean>(true);
  const [futureView, setFutureView] = useState<boolean>(false);

  const getFutureData = ({ lat, lon }: any) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=3c3cfbb0f46fb29c121bc52aad3cef37`
      )
      .then(({ data }) => {
        setFutureData(data.daily);
        setFutureView(true);
      })
      .catch((err) => console.log({ err }));
  };

  if (typeof data === "string") {
    return <div className="d-flex justify-content-center"></div>;
  } else {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    let day: any = new Date().toLocaleDateString();
    return (
      <>
        {loading ? (
          <div className="d-flex justify-content-center">
            {" "}
            <div className="spinner-grow text-info mt-5" role="status"></div>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <div className="row">
              <div className="col-sm-6">
                {futureView ? (
                  <FutureData />
                ) : (
                  <div className="card bg-dark bg-opacity-50  border-info  border-opacity-50">
                    <div className="card-body" style={{height:"410px"}}>
                      <form className="row g-2">
                        <p className="card-header bg-light col-12 text-dark text-center">
                          Date : {day}
                        </p>
                        <p className="card-text col-6">
                          Status : {data.weather[0].main}
                        </p>
                        <p className="card-text col-6">
                          Temperature : {data.main.temp}
                        </p>
                        <p className="card-text col-6">
                          Feels like : {data.main.feels_like}
                        </p>
                        <p className="card-text col-6">
                          Ground Level : {data.main.grnd_level}
                        </p>
                        <p className="card-text col-6">
                          Humidity : {data.main.humidity}
                        </p>
                        <p className="card-text col-6">
                          Pressure : {data.main.pressure}
                        </p>
                        <p className="card-text col-6">
                          Sea Level : {data.main.sea_level}
                        </p>
                        <p className="card-text col-6">
                          Maximum Temp : {data.main.temp_max}
                        </p>
                        <p className="card-text col-6">
                          Minimum Temp : {data.main.temp_min}
                        </p>
                        <p className="card-text col-6">
                          Short Description : {data.weather[0].description}
                        </p>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              <div className="col-sm-6">
                <div className="card bg-dark bg-opacity-50  border-info  border-opacity-50">
                  <div className="card-body">
                    <h5 className="card-header col-12 text-center">
                      {data.name}
                    </h5>
                    <iframe
                      title="map"
                      src={`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="330"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="container d-flex justify-content-center mt-4">
              {futureView ? (
                <button
                  className="btn btn-info position-fixed"
                  onClick={() => setFutureView(false)}
                >
                  See Current Reports
                </button>
              ) : (
                <button
                  className="btn btn-success position-fixed"
                  onClick={() => getFutureData(data.coord)}
                >
                  See Future Reports
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}
