import { useContext, useEffect } from "react";
import { context } from "../../context/Data";

export default function FutureData() {
  const { futureData } = useContext(context);
  const daynames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  if (typeof futureData === "string") {
    return <div className="col"></div>;
  } else {
    return (
        <div className="card bg-dark bg-opacity-50  border-info  border-opacity-50">
          <div className="card-body g-2">
          <div className="row">
          {futureData.map((el: any, i: any) => {
            let date = new Date(el.dt * 1000);
            let dayName = daynames[date.getDay()];
            return (
              <div className="col-3 border border-danger border-opacity-25 text-center p-1" key={i}>
                <p>{dayName}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                  alt="weather"
                  width="50%"
                />
                <p>Day  : {el.temp.day}</p>
                <p>Night : {el.temp.night}</p>
              </div>
            );
          })}
          </div>
          </div>
        </div>

    );
  }
}
