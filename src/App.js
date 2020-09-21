import React, { useEffect } from "react";
import "./App.css";
import Filter from "./components/filters/index";
import LaunchTile from "./components/launchtiles/index";

function App() {
  const [allLaunch, setAllLaunch] = React.useState([]);

  useEffect(() => {
    fetch("https://api.spaceXdata.com/v3/launches?limit=8")
      .then((res) => res.json())
      .then((data) => setAllLaunch(data))
      .catch((e) => console.log(e));
    return () => {};
  }, []);

  return (
    <>
      <div className="spacex-landing-container">
        <Filter allLaunch={allLaunch}/>
        <LaunchTile />
      </div>
    </>
  );
}

export default App;
