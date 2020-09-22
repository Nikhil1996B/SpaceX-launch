import React, { useState, useEffect } from "react";
import filterLaunch, { years } from "./selector";
import style from "./style.css";

function Filter({ selectedYear }) {
  // const [launchFilter, setLaunchFilter] = useState([]);
  const launchYear = years.map((year, index) => (
    <>
      <li key={index}>
        <button
          type="submit"
          className="btn"
          id={year.id}
          onClick={() => selectedYear(year.year)}
        >
          {year.year}
        </button>
      </li>
    </>
  ));

  return (
    <>
      <section className={style.filtercontainer}>
        <div className="filter-box">
          <h4>Filters</h4>
          <div className="launch-year">
            <p className="filterTitle">Launch Year</p>
            <hr />
            <div className="years">
              <ul className="year-list" id="year-list">
                {launchYear}
              </ul>
            </div>
          </div>
          <div className="success-launch">
            <div className="landingfiltersection">
              <p className="filterTitle">Successful Launch</p>
              <hr />
            </div>

            <div className="launch-result">
              <button className="btn" id="launch-success-true">
                True
              </button>
              <button className="btn" id="launch-success-false">
                False
              </button>
            </div>
          </div>
          <div className="success-landing">
            <div className="landingfiltersection">
              <p className="filterTitle">Successful Landing</p>
              <hr />
            </div>
            <div className="landing-result">
              <button className="btn" id="landing-success-true">
                True
              </button>
              <button className="btn" id="lading-success-false">
                False
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filter;
