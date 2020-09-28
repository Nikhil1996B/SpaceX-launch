import React, { useState } from "react";
import filterLaunch, { years, launchLand } from "./selector";
import style from "./style.css";

function Filter({ selectedYear, launchFIlter, landFilter }) {
  const [selectedLaunchYear, setSelectedYearFlter] = useState("1");
  const [launchTypeSuccess, setlaunchSuccess] = useState("false");
  const [landSuccess, setlandSuccess] = useState("false");

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

  const launchSuccess = (
    <>
      <div className="landingfiltersection">
        <p className="filterTitle">Successful Launch</p>
        <hr />
      </div>
      <div className="landing-result">
        <div className="success">
          {launchLand.map((success, index) => (
            <button
              key={index}
              className={launchTypeSuccess == success.id ? "select" : "btn"}
              id="true"
              onClick={() => {
                launchFIlter(success.type);
                setlaunchSuccess(success.id);
              }}
            >
              {success.type}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  const landing = (
    <>
      <div className="landingfiltersection">
        <p className="filterTitle">Successful Landing</p>
        <hr />
      </div>

      <div className="landing-result">
        <div className="success">
          {launchLand.map((success, index) => (
            <button
              key={index}
              className={landSuccess == success.id ? "select" : "btn"}
              id="true"
              onClick={() => {
                landFilter(success.type);
                setlandSuccess(success.id);
              }}
            >
              {success.type}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      <section className={style.filtercontainer}>
        <div className="filter-box">
          <h1>Filters</h1>
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
          <div className="success-landing">{landing}</div>
        </div>
      </section>
    </>
  );
}

export default React.memo(Filter);
