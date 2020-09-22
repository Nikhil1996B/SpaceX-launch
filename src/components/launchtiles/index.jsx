import React, { useEffect } from "react";
import style from "./style.css";

function LaunchTile({ allLaunch }) {
  return (
    <>
      {console.log("from launch tiles", JSON.stringify(allLaunch))}
      <section className="launch-program-container">
        {allLaunch.length > 0 ? (
          allLaunch.map((launches, index) => (
            <div className="launch-program-list-item" key={index}>
              <div className="launch-program-inner">
                <img
                  className="missionpatch"
                  src={launches.links.mission_patch_small}
                  alt="Falcon set"
                  srcSet=""
                />
              </div>
              <div className="flightpatchcontent">
                <p className="flightdescription">
                  {launches.mission_name}#{launches.flight_number}
                </p>
                <p>Misison Ids:</p>
                <p>
                  <span>Launch Year: </span> {launches.launch_year}
                </p>
                <p>
                  <span>Successful Launch: </span>{" "}
                  {launches.launch_success ? "true" : "false"}
                </p>
                {launches.launch_success ? (
                  <p>
                    <span>Successful Landing: </span>{" "}
                    {launches.launch_landing ? "true" : "false"}
                  </p>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No results found matching this filter</div>
        )}
      </section>
    </>
  );
}

export default LaunchTile;
