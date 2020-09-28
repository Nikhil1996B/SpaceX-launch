import React, { useEffect } from "react";
import style from "./style.css";

function LaunchTile({ allLaunch }) {
  return (
    <>
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
                {launches.mission_id.length > 0 ? (
                  <>
                    <p class="fontweight">Misison Ids:</p>
                    <span class="fontcolor">
                    {launches.mission_id.map((ids) => (
                      <ul>
                        <li key={ids}>{ids}</li>
                      </ul>
                    ))}
                    </span>
                    
                  </>
                ) : null}
                <p>
                  <span class="fontweight">Launch Year: </span> <span class="fontcolor">{launches.launch_year}</span>
                </p>
                <p>
                  <span class="fontweight">Successful Launch: </span>{" "}
                  <span class="fontcolor">{launches.launch_success ? "true" : "false"}</span>
                  
                </p>
                {launches.launch_success ? (
                  <p>
                    <span class="fontweight">Successful Landing: </span>{" "}
                    <span class="fontcolor">{launches.launch_landing ? "true" : "false"}</span>
                    
                  </p>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div class="fontweight">No results found matching this filter</div>
        )}
      </section>
    </>
  );
}

export default LaunchTile;
