import { useContext, useEffect, useState } from "react";
import DataContext from "./DataContext";

function Footer() {
  const { data } = useContext(DataContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data) {
      const index = data.index;
      switch (index) {
        case 1:
          setIndex("Good");
          break;
        case 2:
          setIndex("Fair");
          break;
        case 3:
          setIndex("Moderate");
          break;
        case 4:
          setIndex("Poor");
          break;
        case 5:
          setIndex("Very Poor");
          break;
        default:
          setIndex("")
      }
    }
  }, [data]);

  return (
    <footer>
      <div className="location">
        <p
          style={
            data
              ? { opacity: "1", transition: "all .5s ease" }
              : { opacity: "0" }
          }
        >
          {data ? data.location.name + ", " + data.location.country : ""}
        </p>
      </div>
      <div
        className="index"
        style={
          data
            ? {
                boxShadow: "0px 10px 15px -3px #7c7c8c",
                transition: "all 1s ease 1s",
              }
            : { boxShadow: "" }
        }
      >
        <p
          style={
            data
              ? { opacity: "1", transition: "all .5s ease" }
              : { opacity: "0" }
          }
        >
          {data ? index : ""}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
