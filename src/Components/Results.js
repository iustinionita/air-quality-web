import { useContext } from "react";
import DataProvider from "./DataContext";
import loadingSvg from "../Media/loading.svg";

function Results() {
  const { data, loading } = useContext(DataProvider);
  return (
    <div className="results">
      <div className="loading">
        <img
          src={loadingSvg}
          alt="loading"
          style={
            loading
              ? { opacity: "1", transition: "all .2s ease" }
              : { opacity: "0", transition: "all .2s ease" }
          }
        />
      </div>
      <div
        className="result-values"
        style={
          data
            ? { opacity: '1', transition: "all .5s ease" }
            : { opacity: '0', transition: "all .2s ease" }
        }
      >
        <p>
          <strong>NO2</strong>
          <span>{data ? data.airQuality.no2 : '0'}</span> μg/m3
        </p>
        <p>
          <strong>PM 10</strong>
          <span>{data ? data.airQuality.pm10 : '0'}</span> μg/m3
        </p>
        <p>
          <strong>O3</strong> <span>{data ? data.airQuality.o3 : '0'}</span> μg/m3
        </p>
        <p>
          <strong>PM 2.5</strong>
          <span>{data ? data.airQuality.pm2_5 : '0'}</span> μg/m3
        </p>
      </div>
    </div>
  );
}

export default Results;
