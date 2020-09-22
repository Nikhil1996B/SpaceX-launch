import React, { useEffect } from "react";
import "./App.css";
import Filter from "./components/filters/index";
import LaunchTile from "./components/launchtiles/index";

function App() {
  const [allLaunch, setAllLaunch] = React.useState([]);
  const [launchYear, setLaunchYear] = React.useState("");
  const [launchSuccess, setLaunchType] = React.useState("");
  const [landSuccess, setLandType] = React.useState("");

  useEffect(() => {
    fetch("https://api.spaceXdata.com/v3/launches?limit=8")
      .then((res) => res.json())
      .then((data) => setAllLaunch(data))
      .catch((e) => console.log(e));
    return () => {};
  }, []);

  const fetchPatches = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllLaunch(data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    let URL = "https://api.spaceXdata.com/v3/launches?limit=8";
    if (launchYear != "") {
      if (launchSuccess != "") {
        if (landSuccess != "") {
          URL = `${URL}&launch_year=${launchYear}&launch_success=${launchSuccess}&landSuccess=${landSuccess}`;
          fetchPatches(URL);
        }
        URL = `${URL}&launch_year=${launchYear}&launch_success=${launchSuccess}`;
        fetchPatches(URL);
      } else {
        URL = `${URL}&launch_year=${launchYear}`;
        fetchPatches(URL);
      }
    }
    return () => {};
  }, [launchYear, launchSuccess, landSuccess]);

  const selectedYear = (year) => {
    console.log("selected launch year", year);
    setLaunchYear(year);
  };

  const launchFIlter = (launch) => {
    setLaunchType(launch);
    console.log(launch);
  };

  const landFilter = (land) => {
    setLandType(land);
    console.log(land);
  };
  return (
    <>
      <div className="spacex-landing-container">
        <Filter
          allLaunch={allLaunch}
          selectedYear={selectedYear}
          launchFIlter={launchFIlter}
          landFilter={landFilter}
        />
        <LaunchTile allLaunch={allLaunch} />
      </div>
    </>
  );
}

export default App;
