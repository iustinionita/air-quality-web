import { createContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState(false);
  function fetchData(location) {
    setDataError(false);
    fetch(`http://192.168.0.26:4000/${location}`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.airQuality !== "no data - check location") {
          // console.log(data);
          setTimeout(() => {
            setData(data);
            setLoading(false);
          }, 1000);
        } else {
            setDataError(true)
            setLoading(false)
        }
      })
      .catch((e) => {
        e ? setDataError(true) : setDataError(false);
        setLoading(false);
      });
  }
  return (
    <DataContext.Provider
      value={{ fetchData, data, setData, loading, setLoading, dataError }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
