import React, { useState, useEffect } from "react";
import filterLaunch, { years } from "./selector";
import style from "./style.css";

function Filter({ selectedYear, launchFIlter, landFilter }) {
  // const [launchFilter, setLaunchFilter] = useState([]);
  const [selectedLaunchYear, setSelectedYearFlter] = useState("1");
  const [launchTypeSuccess, setlaunchSuccess] = useState("1");
  const [landSuccess, setlandSuccess] = useState("1");

  const launchYear = years.map((year, index) => (
    <>
      <li key={index}>
        <button
          type="submit"
          className={selectedLaunchYear == year.id ? "select" : "btn"}
          id={year.id}
          onClick={() => {
            selectedYear(year.year);
            setSelectedYearFlter(year.id);
          }}
        >
          {year.year}
        </button>
      </li>
    </>
  ));

  const constLanding = (
    <>
      {" "}
      <div className="landingfiltersection">
        <p className="filterTitle">Successful Landing</p>
        <hr />
      </div>
      <div className="landing-result">
        <button
          className={landSuccess == "true" ? "select" : "btn"}
          id="true"
          onClick={() => {
            landFilter("true");
            setlandSuccess("true");
          }}
        >
          True
        </button>
        <button
          className={landSuccess == "true" ? "select" : "btn"}
          id="false"
          onClick={() => {
            landFilter("false");
            setlandSuccess("true");
          }}
        >
          False
        </button>
      </div>
    </>
  );

  const launchSuccess = (
    <>
      <div className="landingfiltersection">
        <p className="filterTitle">Successful Launch</p>
        <hr />
      </div>
      <div className="launch-result">
        {" "}
        <button
          className={landSuccess == "true" ? "select" : "btn"}
          id="true"
          onClick={() => {
            launchFIlter("true");
            setlaunchSuccess("true");
          }}
        >
          True
        </button>
        <button
          className={landSuccess == "true" ? "select" : "btn"}
          id="false"
          onClick={() => {
            setlaunchSuccess("true");
            launchFIlter("true");
          }}
        >
          False
        </button>
      </div>
    </>
  );

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
          <div className="success-launch">{launchSuccess}</div>
          <div className="success-landing">{constLanding}</div>
        </div>
      </section>
    </>
  );
}

export default Filter;
